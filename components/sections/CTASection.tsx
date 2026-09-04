import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DiamondGrid } from "@/components/ui/Motifs";

export function CTASection() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden bg-burgundy py-24 text-cream sm:py-28">
      <DiamondGrid className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 text-cream/30" />
      <div className="container-prestige relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug sm:text-4xl lg:text-5xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-cream/75">{t("ctaBody")}</p>
          <Button href="/contact" variant="inverse" className="mx-auto mt-10">
            {t("ctaButton")}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
