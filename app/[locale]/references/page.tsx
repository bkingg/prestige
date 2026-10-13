import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { photos } from "@/data/photos";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { PageHeader } from "@/components/ui/PageHeader";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "references" });
  return pageMetadata({ locale, path: "/references", title: t("title"), description: t("subtitle") });
}

export default async function ReferencesPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("references");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} photo={photos.placeIndependance} />
      <div className="container-prestige bg-cream pb-24">
        <ProjectArchive projects={projects} />
      </div>
    </>
  );
}
