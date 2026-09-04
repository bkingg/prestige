import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Fiche signalétique — Prestige SAU",
  type: "document",
  fields: [
    defineField({ name: "legalName", title: "Dénomination légale", type: "string" }),
    defineField({ name: "commonName", title: "Nom usuel", type: "string" }),
    defineField({ name: "legalForm", title: "Forme juridique", type: "localeString" }),
    defineField({ name: "shareCapital", title: "Capital social", type: "string" }),
    defineField({ name: "foundedYear", title: "Année de création", type: "number" }),
    defineField({ name: "address", title: "Adresse", type: "localeString" }),
    defineField({ name: "poBox", title: "Boîte postale", type: "string" }),
    defineField({
      name: "phones",
      title: "Téléphones",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "emails",
      title: "Emails",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "specialties", title: "Spécialités", type: "localeStringList" }),
    defineField({
      name: "countriesOfOperation",
      title: "Pays d'opération",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({ name: "logistics", title: "Soutien logistique", type: "localeText" }),
    defineField({ name: "humanResources", title: "Ressources humaines et opérationnelles", type: "localeText" }),
  ],
  preview: {
    prepare: () => ({ title: "Fiche signalétique — Prestige SAU" }),
  },
});
