import { useLocale, useTranslations } from "next-intl";
import { getExpertiseBySlug } from "@/data/expertise";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContourLines } from "@/components/ui/Motifs";
import { Button } from "@/components/ui/Button";

export function Geomatics() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";
  const geomatics = getExpertiseBySlug("geomatique")!;

  return (
    <section className="relative overflow-hidden bg-burgundy-deep py-24 text-cream sm:py-32">
      <ContourLines className="pointer-events-none absolute inset-x-0 bottom-0 h-72 w-full text-gold/40" />
      <div className="container-prestige relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel light>{t("geomaticsEyebrow")}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-snug sm:text-4xl lg:text-[2.75rem]">
            {t("geomaticsTitle")}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70">
            {t("geomaticsBody")}
          </p>
          <Button href="/expertises/geomatique" variant="inverse" className="mt-10">
            {t("geomaticsCta")}
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-cream/15 pt-8">
            {geomatics.services[locale].map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm text-cream/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
