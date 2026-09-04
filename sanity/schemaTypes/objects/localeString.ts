import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Texte bilingue (court)",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" }),
  ],
});
