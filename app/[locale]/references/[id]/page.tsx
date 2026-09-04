import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects, categoryLabels, getProjectById } from "@/data/projects";
import { getExpertiseBySlug } from "@/data/expertise";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ChevronRule } from "@/components/ui/Motifs";

type Params = { locale: string; id: string };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return pageMetadata({
    locale,
    path: `/references/${id}`,
    title: project.title,
    description: `${project.client} — ${project.country} — ${project.period}`,
  });
}

const EXPERTISE_LINK_BY_CATEGORY: Record<string, string> = {
  environnement: "environnement-developpement-durable",
  urbanisme: "urbanisme-amenagement-paysage",
  "developpement-local": "decentralisation-collectivites-locales",
  economie: "management-etudes-economiques-sectorielles",
  "suivi-evaluation": "suivi-evaluation-planification-audit-conseil",
  infrastructure: "etudes-controle-surveillance-travaux",
  formation: null as unknown as string,
};

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const loc = locale as "fr" | "en";
  const project = getProjectById(id);
  if (!project) notFound();

  const t = await getTranslations("references");
  const expertiseSlug = EXPERTISE_LINK_BY_CATEGORY[project.category];
  const expertise = expertiseSlug ? getExpertiseBySlug(expertiseSlug) : undefined;

  const meta: [string, string][] = [
    [t("period"), project.period],
    [t("client"), project.client],
    [t("country"), project.country],
    [t("role"), project.role],
    [t("sector"), project.sector],
    [t("missionType"), project.group],
  ];

  return (
    <article className="bg-cream pb-24 pt-32 sm:pt-36">
      <div className="container-prestige max-w-3xl">
        <Reveal>
          <Button href="/references" variant="ghost" icon={false} className="mb-8">
            ← {t("back")}
          </Button>
          <p className="label-rule">{categoryLabels[project.category][loc]}</p>
          <h1 className="mt-6 font-serif text-3xl leading-tight text-burgundy-deep sm:text-4xl">
            {project.title}
          </h1>
          <ChevronRule className="mt-6 h-3 w-20 text-gold" />
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid gap-x-8 gap-y-6 border-y border-charcoal/12 py-10 sm:grid-cols-3">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-widest2 text-charcoal/45">{label}</dt>
                <dd className="mt-2 text-sm text-charcoal/80">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {expertise && (
          <Reveal delay={0.15}>
            <p className="mt-10 text-sm text-charcoal/60">
              {loc === "fr" ? "Domaine d'expertise associé : " : "Related area of expertise: "}
              <Button href={`/expertises/${expertise.slug}`} variant="ghost" icon={false}>
                {expertise.title[loc]}
              </Button>
            </p>
          </Reveal>
        )}
      </div>
    </article>
  );
}
