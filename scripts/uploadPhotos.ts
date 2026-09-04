/**
 * Uploads the site's local photo files (public/images/photos, sourced from
 * Wikimedia Commons — see data/photos.ts for licensing) to Sanity's asset
 * library and attaches each one, with its alt text/credit/license/source
 * URL, to the matching document: the relevant `expertise` document's
 * `photo` field, or one of the three hero/about photo fields on
 * `siteSettings`.
 *
 * Usage: npm run upload-photos
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { createClient } from "next-sanity";
import { photos, expertisePhotos, type Photo } from "../data/photos";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in your environment.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

async function uploadPhoto(photo: Photo) {
  const filePath = path.join(process.cwd(), "public", photo.src.replace(/^\//, ""));
  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  return {
    _type: "photo",
    asset: { _type: "reference", _ref: asset._id },
    altFr: photo.alt.fr,
    altEn: photo.alt.en,
    credit: photo.credit,
    license: photo.license,
    sourceUrl: photo.sourceUrl,
  };
}

async function main() {
  console.log("Uploading photo assets to Sanity...");

  for (const [slug, photo] of Object.entries(expertisePhotos)) {
    if (!photo) continue;
    const value = await uploadPhoto(photo);
    await client.patch(`expertise-${slug}`).set({ photo: value }).commit();
    console.log(`✓ expertise-${slug} <- ${photo.src}`);
  }

  const heroPhoto = await uploadPhoto(photos.pontFaidherbe);
  const aboutPhotoPrimary = await uploadPhoto(photos.dakarPlateau);
  const aboutPhotoSecondary = await uploadPhoto(photos.roadConstruction);

  await client.patch("siteSettings").set({ heroPhoto, aboutPhotoPrimary, aboutPhotoSecondary }).commit();
  console.log("✓ siteSettings <- heroPhoto, aboutPhotoPrimary, aboutPhotoSecondary");

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
