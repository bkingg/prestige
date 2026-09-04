import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { expertiseAreas, getExpertiseBySlug } from "@/data/expertise";
import { getRelatedProjects } from "@/lib/relatedProjects";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ChevronRule } from "@/components/ui/Motifs";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PhotoPanel } from "@/components/ui/Photo";
import { getExpertisePhotos } from "@/lib/photos";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return expertiseAreas.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getExpertiseBySlug(slug);
  if (!item) return {};
  const loc = locale as "fr" | "en";
  return pageMetadata({
    locale,
    path: `/expertises/${slug}`,
    title: item.title[loc],
    description: item.pitch[loc],
  });
}

export default async function ExpertiseDetailPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as "fr" | "en";
  const item = getExpertiseBySlug(slug);
  if (!item) notFound();

  const t = await getTranslations("expertise");
  const related = getRelatedProjects(slug);
  const expertisePhotos = await getExpertisePhotos();
  const photo = expertisePhotos[slug];

  const heroText = (
    <Reveal>
      <Button href="/expertises" variant="ghost" icon={false} className="mb-8">
        ← {t("back")}
      </Button>
      <h1 className="font-serif text-4xl leading-tight text-burgundy-deep sm:text-5xl">
        {item.title[loc]}
      </h1>
      <ChevronRule className="mt-6 h-3 w-20 text-gold" />
      <p className="mt-8 text-lg leading-relaxed text-charcoal/70">{item.pitch[loc]}</p>
    </Reveal>
  );

  return (
    <>
      <section className="bg-cream pb-16 pt-32 sm:pt-36">
        {photo ? (
          <div className="container-prestige grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            {heroText}
            <Reveal delay={0.15}>
              <PhotoPanel photo={photo} className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        ) : (
          <div className="container-prestige max-w-3xl">{heroText}</div>
        )}
      </section>

      <section className="border-t border-charcoal/10 bg-white py-20">
        <div className="container-prestige max-w-3xl">
          <Reveal>
            <h2 className="text-xs uppercase tracking-widest2 text-charcoal/45">
              {t("servicesTitle")}
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {item.services[loc].map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-charcoal/10 bg-cream py-20">
          <div className="container-prestige">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h2 className="font-serif text-2xl text-burgundy-deep">
                  {t("relatedProjectsTitle")}
                </h2>
                <Button href="/references" variant="ghost">
                  {t("relatedProjectsCta")}
                </Button>
              </div>
            </Reveal>
            <div className="mt-6 border-t border-charcoal/10">
              {related.map((project, i) => (
                <ProjectCard key={project.id} project={project} delay={i * 0.06} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-charcoal/10 bg-burgundy py-16 text-center text-cream">
        <div className="container-prestige">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl">{t("ctaTitle")}</h2>
            <Button href="/contact" variant="inverse" className="mx-auto mt-8">
              {t("ctaButton")}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
