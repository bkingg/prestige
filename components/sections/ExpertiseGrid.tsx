import { useTranslations } from "next-intl";
import { expertiseAreas } from "@/data/expertise";
import { ExpertiseCard } from "@/components/expertise/ExpertiseCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ExpertiseGrid() {
  const t = useTranslations("home");

  return (
    <section className="bg-white py-24 sm:py-32" id="expertises">
      <div className="container-prestige">
        <Reveal>
          <SectionLabel>{t("expertiseEyebrow")}</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl lg:text-[2.75rem]">
            {t("expertiseTitle")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((item, i) => (
            <ExpertiseCard key={item.slug} item={item} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
