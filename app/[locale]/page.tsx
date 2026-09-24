import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero/Hero";
import { Heritage } from "@/components/sections/Heritage";
import { Introduction } from "@/components/sections/Introduction";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Geomatics } from "@/components/sections/Geomatics";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CTASection } from "@/components/sections/CTASection";
import { ContactTeaser } from "@/components/sections/ContactTeaser";
import { getSitePhotos, getExpertisePhotos } from "@/lib/photos";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [{ heroPhoto }, expertisePhotos] = await Promise.all([getSitePhotos(), getExpertisePhotos()]);

  return (
    <>
      <Hero photo={heroPhoto} />
      <Heritage />
      <Introduction />
      <ExpertiseGrid photos={expertisePhotos} />
      <FeaturedProjects />
      <Geomatics />
      <TeamPreview />
      <CTASection />
      <ContactTeaser />
    </>
  );
}
