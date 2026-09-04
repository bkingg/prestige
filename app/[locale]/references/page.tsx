import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/data/projects";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "references" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ReferencesPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("references");

  return (
    <section className="bg-cream pb-24 pt-32 sm:pt-36">
      <div className="container-prestige">
        <Reveal>
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight text-burgundy-deep sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14">
          <ProjectArchive projects={projects} />
        </div>
      </div>
    </section>
  );
}
