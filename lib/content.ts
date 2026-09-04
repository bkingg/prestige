import { cache } from "react";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import {
  expertiseListQuery,
  teamListQuery,
  projectListQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { expertiseAreas, type Expertise } from "@/data/expertise";
import { team, type TeamMember } from "@/data/team";
import { projects as staticProjects, type Project } from "@/data/projects";
import { company as staticCompany } from "@/data/company";

/**
 * Content is served from Sanity when a project ID is configured; otherwise it
 * falls back to the static, document-sourced data in /data. This keeps the
 * site fully functional before the CMS is provisioned, and lets editors take
 * over the same content afterwards without any component changes.
 *
 * Freshness comes from each route's `revalidate = 60` export (Next's Data
 * Cache), not from caching here — React's cache() below only dedupes the
 * several calls a single page render makes, it does not persist across
 * requests. The two large param spaces (project and expertise detail pages)
 * skip generateStaticParams and render on demand instead, so `next build`
 * never has to statically generate hundreds of these pages concurrently.
 */

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback;
    return result;
  } catch {
    return fallback;
  }
}

export const getExpertiseAreas = cache((): Promise<Expertise[]> =>
  safeFetch(expertiseListQuery, expertiseAreas)
);

export async function getExpertiseBySlug(slug: string): Promise<Expertise | undefined> {
  const list = await getExpertiseAreas();
  return list.find((e) => e.slug === slug);
}

export const getTeam = cache((): Promise<TeamMember[]> => safeFetch(teamListQuery, team));

export const getProjects = cache((): Promise<Project[]> =>
  safeFetch(projectListQuery, staticProjects)
);

export async function getProjectById(id: string): Promise<Project | undefined> {
  const list = await getProjects();
  return list.find((p) => p.id === id);
}

export const getCompany = cache((): Promise<typeof staticCompany> =>
  safeFetch(siteSettingsQuery, staticCompany)
);
