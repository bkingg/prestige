import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import {
  expertiseListQuery,
  expertiseBySlugQuery,
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
 */

async function safeFetch<T>(query: string, params: Record<string, unknown> | undefined, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query, params ?? {});
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback;
    return result;
  } catch {
    return fallback;
  }
}

export async function getExpertiseAreas(): Promise<Expertise[]> {
  return safeFetch(expertiseListQuery, undefined, expertiseAreas);
}

export async function getExpertiseBySlug(slug: string): Promise<Expertise | undefined> {
  const list = await getExpertiseAreas();
  const fallback = list.find((e) => e.slug === slug);
  return safeFetch(expertiseBySlugQuery, { slug }, fallback);
}

export async function getTeam(): Promise<TeamMember[]> {
  return safeFetch(teamListQuery, undefined, team);
}

export async function getProjects(): Promise<Project[]> {
  return safeFetch(projectListQuery, undefined, staticProjects);
}

export async function getCompany() {
  return safeFetch(siteSettingsQuery, undefined, staticCompany);
}
