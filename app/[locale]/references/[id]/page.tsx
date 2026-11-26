import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects, categoryLabels, getProjectById } from "@/data/projects";
import { getExpertiseBySlug } from "@/data/expertise";
import { getClientMarks } from "@/data/clients";
import { photos as staticPhotos } from "@/data/photos";
import { getExpertisePhotos } from "@/lib/photos";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { ClientMarkTile } from "@/components/projects/ClientMarkTile";

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
    description: project.description ?? `${project.client} · ${project.country} · ${project.period}`,
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

/** "EIES …, Financement Banque Mondiale" → headline + funding source. */
function splitFunding(title: string) {
  const m = title.match(/^(.*?)(?:,|\s+[—–-])\s+Financement\s*:?\s*(.+)$/);
  return m ? { headline: m[1], funding: m[2] } : { headline: title, funding: undefined };
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const loc = locale as "fr" | "en";
  const project = getProjectById(id);
  if (!project) notFound();

  const t = await getTranslations("references");
  const expertiseSlug = EXPERTISE_LINK_BY_CATEGORY[project.category];
  const expertise = expertiseSlug ? getExpertiseBySlug(expertiseSlug) : undefined;
  const expertisePhotos = await getExpertisePhotos();
  const photo = (expertiseSlug && expertisePhotos[expertiseSlug]) || staticPhotos.dakarAerial;

  const { headline, funding } = splitFunding(project.title);
  const marks = getClientMarks(project.client);

  const meta: [string, string][] = [
    [t("period"), project.period],
    [t("country"), project.country],
    [t("sector"), project.sector],
    [t("missionType"), project.group],
    ...(funding ? ([[t("funding"), funding]] as [string, string][]) : []),
  ];

  return (
    <article className="bg-white pb-24">
      <PageHeader
        eyebrow={categoryLabels[project.category][loc]}
        title={headline}
        subtitle={`${project.period} · ${project.country}`}
        photo={photo}
        backHref="/references"
        backLabel={t("back")}
        rule
      />

      <div className="container-prestige grid grid-cols-1 gap-12 pt-6 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        {/* Context first on mobile; client card as the right-hand column on desktop. */}
        <div className="order-1 min-w-0">
          {project.description && (
            <Reveal>
              <section className="mb-12">
                <h2 className="text-xs uppercase tracking-widest2 text-ink/50">{t("context")}</h2>
                <p lang="fr" className="mt-5 max-w-2xl font-serif text-xl leading-relaxed text-ink/85 sm:text-[1.4rem]">
                  {project.description}
                </p>
                {loc === "en" && <p className="mt-4 text-xs italic text-ink/50">{t("contextNote")}</p>}
              </section>
            </Reveal>
          )}

          {expertise && (
            <Reveal delay={0.1}>
              <p className="text-sm text-ink/60">
                {loc === "fr" ? "Domaine d'expertise associé : " : "Related area of expertise: "}
                <Button href={`/expertises/${expertise.slug}`} variant="ghost" icon={false}>
                  {expertise.title[loc]}
                </Button>
              </p>
            </Reveal>
          )}
        </div>

        <Reveal className="order-2 min-w-0" delay={0.05}>
          <aside className="rounded-[20px] bg-ink-wash p-6 ring-1 ring-ink/10 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-widest2 text-ink/50">{t("client")}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
              {marks.map((m) => (
                <ClientMarkTile key={m.kind === "logo" ? m.brand.name : m.text} mark={m} />
              ))}
            </div>
            <p className="mt-5 text-sm font-medium leading-relaxed text-ink/85">{project.client}</p>

            <dl className="mt-8 grid gap-5 border-t border-ink/10 pt-6">
              {meta.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-widest2 text-ink/50">{label}</dt>
                  <dd className="mt-1.5 text-sm text-ink/80">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </article>
  );
}
