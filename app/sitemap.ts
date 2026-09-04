import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { expertiseAreas } from "@/data/expertise";
import { projects } from "@/data/projects";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prestige.sn";

const staticPaths = ["", "/le-cabinet", "/expertises", "/references", "/equipe", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
      });
    }
    for (const e of expertiseAreas) {
      entries.push({
        url: `${base}/${locale}/expertises/${e.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
      });
    }
    for (const p of projects) {
      entries.push({
        url: `${base}/${locale}/references/${p.id}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
      });
    }
  }

  return entries;
}
