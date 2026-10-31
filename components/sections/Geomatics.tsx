import { useLocale, useTranslations } from "next-intl";
import { getExpertiseBySlug } from "@/data/expertise";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ScrollTilt } from "@/components/ui/Tilt";

export function Geomatics() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";
  const geomatics = getExpertiseBySlug("geomatique")!;

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-prestige relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel>{t("geomaticsEyebrow")}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-ink sm:text-4xl lg:text-[2.75rem]">
            {t("geomaticsTitle")}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
            {t("geomaticsBody")}
          </p>
          <Button
            href="/expertises/geomatique"
            variant="primary"
            className="mt-10"
          >
            {t("geomaticsCta")}
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <ScrollTilt from={10}>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-2xl border border-tan/60 bg-white p-7 shadow-lift sm:grid-cols-2 sm:p-8">
              {geomatics.services[locale].map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm text-charcoal/80"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold"
                    aria-hidden="true"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </ScrollTilt>
        </Reveal>
      </div>
    </section>
  );
}
