import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Introduction() {
  const t = useTranslations("home");

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-prestige grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <SectionLabel>{t("introEyebrow")}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]">
            {t("introTitle")}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">{t("introBody")}</p>
        </Reveal>
      </div>
    </section>
  );
}
