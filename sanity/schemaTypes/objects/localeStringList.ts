import { defineType, defineField } from "sanity";

export const localeStringList = defineType({
  name: "localeStringList",
  title: "Liste bilingue",
  type: "object",
  fields: [
    defineField({
      name: "fr",
      title: "Français",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
