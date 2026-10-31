import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  const t = useTranslations("home");

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-prestige">
        <Reveal className="max-w-5xl">
          <h2 className="font-serif text-4xl font-light leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]">
            {t("introTitle")}
          </h2>
          <div className="mt-10 flex items-start gap-6">
            <span className="mt-3 h-px w-12 shrink-0 bg-gold" aria-hidden="true" />
            <p className="max-w-2xl text-lg leading-relaxed text-ink/65">{t("introBody")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
