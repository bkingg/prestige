import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { team } from "@/data/team";
import { photos } from "@/data/photos";
import { TeamCard } from "@/components/team/TeamCard";
import { PageHeader } from "@/components/ui/PageHeader";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return pageMetadata({ locale, path: "/equipe", title: t("title"), description: t("subtitle") });
}

export default async function TeamPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} photo={photos.consultantBureau} />
      <div className="container-prestige bg-cream pb-24 pt-16 sm:pt-20 grid gap-6 sm:grid-cols-2">
        {team.map((member, i) => (
          <TeamCard key={member.slug} member={member} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </>
  );
}
