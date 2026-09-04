import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prestige.sn";
export const SITE_NAME = "PRESTIGE Cabinet Conseil";

/**
 * Builds correct per-page metadata: canonical + hreflang alternates for the
 * page's own path (not the locale root), plus matching OpenGraph/Twitter.
 * `path` is locale-less and starts with "/" (e.g. "/le-cabinet"), or "" for
 * the home page.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const isFr = locale === "fr";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        fr: `/fr${path}`,
        en: `/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      locale: isFr ? "fr_SN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
