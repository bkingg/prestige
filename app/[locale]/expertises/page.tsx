import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { expertiseAreas } from "@/data/expertise";
import { getExpertisePhotos } from "@/lib/photos";
import { ExpertiseCard } from "@/components/expertise/ExpertiseCard";
import { PageHeader } from "@/components/ui/PageHeader";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "expertise" });
  return pageMetadata({ locale, path: "/expertises", title: t("title"), description: t("subtitle") });
}

export default async function ExpertisesPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("expertise");
  const photos = await getExpertisePhotos();

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <div className="container-prestige bg-cream pb-24">
        <div className="grid gap-x-12 sm:grid-cols-2">
          {expertiseAreas.map((item, i) => (
            <ExpertiseCard key={item.slug} item={item} photo={photos[item.slug]} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </>
  );
}
