import { defineType, defineField } from "sanity";

export const expertise = defineType({
  name: "expertise",
  title: "Expertise",
  type: "document",
  fields: [
    defineField({ name: "number", title: "Numéro (01–08)", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titleFr" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "titleFr", title: "Titre (interne, FR)", type: "string", hidden: true }),
    defineField({ name: "title", title: "Titre", type: "localeString", validation: (r) => r.required() }),
    defineField({ name: "pitch", title: "Accroche", type: "localeText" }),
    defineField({ name: "services", title: "Étendue des services", type: "localeStringList" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
    defineField({ name: "photo", title: "Photo", type: "photo" }),
  ],
  preview: {
    select: { title: "title.fr", subtitle: "number" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `Expertise ${subtitle}` }),
  },
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
