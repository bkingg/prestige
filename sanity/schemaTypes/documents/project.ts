import { defineType, defineField } from "sanity";

const CATEGORIES = [
  { title: "Environnement & Social", value: "environnement" },
  { title: "Urbanisme & Aménagement", value: "urbanisme" },
  { title: "Développement local", value: "developpement-local" },
  { title: "Études économiques", value: "economie" },
  { title: "Suivi-évaluation & Audit", value: "suivi-evaluation" },
  { title: "Maîtrise d'œuvre & BTP", value: "infrastructure" },
  { title: "Formation & Renforcement de capacités", value: "formation" },
];

export const project = defineType({
  name: "project",
  title: "Référence / Projet",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Intitulé de la mission", type: "string", validation: (r) => r.required() }),
    defineField({ name: "period", title: "Période (affichage)", type: "string" }),
    defineField({ name: "yearStart", title: "Année de début", type: "number" }),
    defineField({ name: "yearEnd", title: "Année de fin", type: "number" }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "country", title: "Pays", type: "string" }),
    defineField({ name: "role", title: "Rôle de Prestige", type: "string" }),
    defineField({
      name: "category",
      title: "Catégorie / Domaine d'expertise",
      type: "string",
      options: { list: CATEGORIES },
      validation: (r) => r.required(),
    }),
    defineField({ name: "sector", title: "Secteur", type: "string" }),
    defineField({ name: "group", title: "Type de mission", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "client" },
  },
  orderings: [
    {
      title: "Année (récent → ancien)",
      name: "yearDesc",
      by: [{ field: "yearEnd", direction: "desc" }],
    },
  ],
});
