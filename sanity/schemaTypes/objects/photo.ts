import { defineType, defineField } from "sanity";

// Mirrors the local `Photo` interface (data/photos.ts) so an editor can swap
// the image while keeping the licensing fields the site's <PhotoCredit>
// requires to display attribution for Wikimedia Commons photography.
export const photo = defineType({
  name: "photo",
  title: "Photo",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "altFr", title: "Texte alternatif (FR)", type: "string" }),
    defineField({ name: "altEn", title: "Alt text (EN)", type: "string" }),
    defineField({ name: "credit", title: "Crédit / auteur", type: "string" }),
    defineField({ name: "license", title: "Licence", type: "string" }),
    defineField({ name: "sourceUrl", title: "URL source", type: "url" }),
  ],
});
