import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const FEATURED_IDS_BY_CATEGORY = [
  "environnement",
  "urbanisme",
  "economie",
  "suivi-evaluation",
  "infrastructure",
  "developpement-local",
] as const;

function pickFeatured() {
  const picked: typeof projects = [];
  for (const cat of FEATURED_IDS_BY_CATEGORY) {
    const match = projects.find((p) => p.category === cat && !picked.includes(p));
    if (match) picked.push(match);
  }
  return picked;
}

export function FeaturedProjects() {
  const t = useTranslations("home");
  const featured = pickFeatured();

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-prestige">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>{t("projectsEyebrow")}</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl lg:text-[2.75rem]">
                {t("projectsTitle")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
                {t("projectsBody")}
              </p>
            </div>
            <Button href="/references" variant="secondary">
              {t("projectsCta")}
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-charcoal/10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
