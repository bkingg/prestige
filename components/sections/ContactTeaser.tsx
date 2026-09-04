import { useLocale, useTranslations } from "next-intl";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountriesMap } from "@/components/ui/CountriesMap";

export function ContactTeaser() {
  const t = useTranslations("home");
  const tc = useTranslations("contact");
  const locale = useLocale() as "fr" | "en";
  const mapQuery = encodeURIComponent(`${company.address.fr}, ${company.poBox}`);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-prestige grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel>{t("contactEyebrow")}</SectionLabel>
          <h2 className="mt-6 max-w-md font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl">
            {t("contactTitle")}
          </h2>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-charcoal/45">
                {tc("addressTitle")}
              </dt>
              <dd className="mt-2 text-charcoal/75">{company.address[locale]}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-charcoal/45">
                {tc("phoneTitle")}
              </dt>
              <dd className="mt-2 space-y-1 text-charcoal/75">
                {company.phones.slice(0, 2).map((p) => (
                  <p key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-charcoal/75 transition-colors duration-200 hover:text-burgundy"
                    >
                      {p}
                    </a>
                  </p>
                ))}
              </dd>
            </div>
          </dl>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1 text-[15px] font-medium text-burgundy transition-colors duration-200 hover:text-burgundy-deep"
          >
            {tc("mapTitle")}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="flex items-center justify-center">
          <CountriesMap className="h-auto w-full max-w-md text-charcoal/70" />
        </Reveal>
      </div>
    </section>
  );
}
