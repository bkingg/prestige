import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { photos as staticPhotos, expertisePhotos as staticExpertisePhotos, type Photo } from "@/data/photos";

/**
 * Resolves the site's hero/about/expertise photos from Sanity when
 * available, falling back to the local static photos otherwise. Not
 * wrapped in React's cache(): calling both of these from the same page
 * (the homepage uses Hero + ExpertiseGrid together) hit a Next 14.2
 * static-generation race ("Expected a suspended thenable") on Vercel's
 * build machine. Next's Data Cache (the `revalidate` hint below) still
 * dedupes the underlying fetch.
 */

interface SanityPhotoDoc {
  asset?: { _ref: string; _type: "reference" };
  altFr?: string;
  altEn?: string;
  credit?: string;
  license?: string;
  sourceUrl?: string;
}

// Panels render at a max of 50vw (see PhotoPanel/ExpertiseCard `sizes`), so
// 1600 comfortably covers them even at 2x pixel density on common laptop
// viewports. The hero is full-bleed (`sizes="100vw"`) and needs the wider
// cap below, or Next's optimizer ends up upscaling a too-small Sanity-CDN
// source on large/retina displays instead of downsampling a bigger one.
const PANEL_WIDTH = 1600;
const HERO_WIDTH = 2400;

function toPhoto(sp: SanityPhotoDoc | undefined | null, fallback: Photo, width = PANEL_WIDTH): Photo {
  if (!sp?.asset) return fallback;
  return {
    src: urlFor(sp.asset).width(width).quality(80).auto("format").url(),
    alt: { fr: sp.altFr || fallback.alt.fr, en: sp.altEn || fallback.alt.en },
    credit: sp.credit || fallback.credit,
    license: sp.license || fallback.license,
    sourceUrl: sp.sourceUrl || fallback.sourceUrl,
  };
}

const expertisePhotosQuery = `*[_type == "expertise"]{"slug": slug.current, photo}`;
const sitePhotosQuery = `*[_type == "siteSettings"][0]{heroPhoto, aboutPhotoPrimary, aboutPhotoSecondary}`;

// Photo content changes rarely (a Studio edit, not a traffic-driven update),
// so a longer revalidate window cuts origin round-trips to Sanity's CDN
// without making edits feel stale.
const PHOTOS_REVALIDATE_SECONDS = 300;

export async function getExpertisePhotos(): Promise<Partial<Record<string, Photo>>> {
  const result: Partial<Record<string, Photo>> = { ...staticExpertisePhotos };
  if (!isSanityConfigured) return result;
  try {
    const rows = await client.fetch<{ slug: string; photo?: SanityPhotoDoc }[]>(
      expertisePhotosQuery,
      {},
      { next: { revalidate: PHOTOS_REVALIDATE_SECONDS } }
    );
    for (const row of rows) {
      const fallback = staticExpertisePhotos[row.slug];
      if (fallback) result[row.slug] = toPhoto(row.photo, fallback);
    }
  } catch {
    // keep static fallback
  }
  return result;
}

export async function getSitePhotos(): Promise<{
  heroPhoto: Photo;
  aboutPhotoPrimary: Photo;
  aboutPhotoSecondary: Photo;
}> {
  const fallback = {
    heroPhoto: staticPhotos.heroDakarSkyline,
    aboutPhotoPrimary: staticPhotos.dakarPlateau,
    aboutPhotoSecondary: staticPhotos.roadConstruction,
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch<{
      heroPhoto?: SanityPhotoDoc;
      aboutPhotoPrimary?: SanityPhotoDoc;
      aboutPhotoSecondary?: SanityPhotoDoc;
    } | null>(sitePhotosQuery, {}, { next: { revalidate: PHOTOS_REVALIDATE_SECONDS } });
    if (!doc) return fallback;
    return {
      heroPhoto: toPhoto(doc.heroPhoto, fallback.heroPhoto, HERO_WIDTH),
      aboutPhotoPrimary: toPhoto(doc.aboutPhotoPrimary, fallback.aboutPhotoPrimary),
      aboutPhotoSecondary: toPhoto(doc.aboutPhotoSecondary, fallback.aboutPhotoSecondary),
    };
  } catch {
    return fallback;
  }
}
