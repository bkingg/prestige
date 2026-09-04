import { defineType, defineField } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Membre de l'équipe",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Fonction", type: "localeString" }),
    defineField({ name: "experience", title: "Expérience", type: "localeString" }),
    defineField({ name: "specialties", title: "Domaines de compétences", type: "localeStringList" }),
    defineField({ name: "bio", title: "Biographie", type: "localeText" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role.fr" },
  },
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
