import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronRule } from "@/components/ui/Motifs";

export function Heritage() {
  const t = useTranslations("home");

  const stats = [
    { value: "2000", label: t("heritageStatYear") },
    { value: "25+", label: t("heritageStatExperience") },
    { value: "Dakar", label: t("heritageStatBase") },
  ];

  return (
    <section className="border-y border-charcoal/10 bg-white py-24">
      <div className="container-prestige grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionLabel>{t("heritageEyebrow")}</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-burgundy-deep sm:text-5xl">
            {t("heritageTitle")}
          </h2>
          <ChevronRule className="mt-8 h-3 w-24 text-gold" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
            {t("heritageBody")}
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-6 self-center sm:gap-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="border-t border-gold pt-6">
                <p className="font-serif text-4xl text-burgundy sm:text-5xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-charcoal/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
