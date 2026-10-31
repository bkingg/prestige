import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { expertiseAreas } from "@/data/expertise";
import { photos as staticPhotos } from "@/data/photos";
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
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        photo={staticPhotos.blueprint}
      />
      <section className="border-t border-tan/40 bg-white py-16 sm:py-20">
        <div className="container-prestige grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {expertiseAreas.map((item, i) => (
            <ExpertiseCard
              key={item.slug}
              item={item}
              photo={photos[item.slug]}
              delay={(i % 3) * 0.06}
              featured={i === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
