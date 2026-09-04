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
 * Each list is fetched at most once per server process (module-level memo,
 * not React's per-request cache() — this needs to survive across the many
 * separate page renders a single build worker performs). Single-item
 * lookups (by slug/id) are derived from that cached list via .find() rather
 * than issuing their own network call, so generating hundreds of static
 * project pages doesn't fire hundreds of concurrent Sanity requests.
 */

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query);
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback;
    return result;
  } catch {
    return fallback;
  }
}

let expertisePromise: Promise<Expertise[]> | null = null;
let teamPromise: Promise<TeamMember[]> | null = null;
let projectsPromise: Promise<Project[]> | null = null;
let companyPromise: Promise<typeof staticCompany> | null = null;

export function getExpertiseAreas(): Promise<Expertise[]> {
  if (!expertisePromise) expertisePromise = safeFetch(expertiseListQuery, expertiseAreas);
  return expertisePromise;
}

export async function getExpertiseBySlug(slug: string): Promise<Expertise | undefined> {
  const list = await getExpertiseAreas();
  return list.find((e) => e.slug === slug);
}

export function getTeam(): Promise<TeamMember[]> {
  if (!teamPromise) teamPromise = safeFetch(teamListQuery, team);
  return teamPromise;
}

export function getProjects(): Promise<Project[]> {
  if (!projectsPromise) projectsPromise = safeFetch(projectListQuery, staticProjects);
  return projectsPromise;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const list = await getProjects();
  return list.find((p) => p.id === id);
}

export function getCompany(): Promise<typeof staticCompany> {
  if (!companyPromise) companyPromise = safeFetch(siteSettingsQuery, staticCompany);
  return companyPromise;
}
