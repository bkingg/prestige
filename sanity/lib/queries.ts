import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const expertiseListQuery = groq`*[_type == "expertise"] | order(order asc, number asc){
  number, "slug": slug.current, title, pitch, services
}`;

export const expertiseBySlugQuery = groq`*[_type == "expertise" && slug.current == $slug][0]{
  number, "slug": slug.current, title, pitch, services
}`;

export const teamListQuery = groq`*[_type == "teamMember"] | order(order asc){
  "slug": slug.current, name, role, experience, specialties, bio
}`;

export const projectListQuery = groq`*[_type == "project"] | order(yearEnd desc, yearStart desc){
  "id": _id, period, yearStart, yearEnd, title, client, country, role, category, sector, group
}`;
