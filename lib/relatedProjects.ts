import { projects, type Project, type ProjectCategory } from "@/data/projects";

const EXPERTISE_FILTERS: Record<string, (p: Project) => boolean> = {
  "environnement-developpement-durable": (p) => p.category === "environnement",
  "management-etudes-economiques-sectorielles": (p) => p.category === "economie",
  "suivi-evaluation-planification-audit-conseil": (p) => p.category === "suivi-evaluation",
  "urbanisme-amenagement-paysage": (p) => p.category === "urbanisme",
  "decentralisation-collectivites-locales": (p) => p.category === "developpement-local",
  "etudes-controle-surveillance-travaux": (p) => p.category === "infrastructure",
  "amenagement-drainage-assainissement-adduction-eau": (p) =>
    p.category === "infrastructure" && p.sector === "Eau & Assainissement",
  geomatique: (p) => p.sector === "Géomatique",
};

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const filter = EXPERTISE_FILTERS[slug];
  if (!filter) return [];
  return projects.filter(filter).slice(0, limit);
}

export function getCategoryForExpertise(slug: string): ProjectCategory | undefined {
  const sample = projects.find(EXPERTISE_FILTERS[slug] ?? (() => false));
  return sample?.category;
}
