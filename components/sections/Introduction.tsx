import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Introduction() {
  const t = useTranslations("home");

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-prestige max-w-3xl">
        <Reveal>
          <SectionLabel>{t("introEyebrow")}</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl lg:text-[2.75rem]">
            {t("introTitle")}
          </h2>
          <p className="mt-8 text-base leading-relaxed text-charcoal/70">{t("introBody")}</p>
        </Reveal>
      </div>
    </section>
  );
}
