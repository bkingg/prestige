import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronRule } from "@/components/ui/Motifs";
import { CountriesMap } from "@/components/ui/CountriesMap";
import { PhotoPanel } from "@/components/ui/Photo";
import { photos } from "@/data/photos";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata({ locale, path: "/le-cabinet", title: t("title"), description: t("subtitle") });
}

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const loc = locale as "fr" | "en";

  const identity: [string, string][] = [
    [t("denomination"), company.legalName],
    [t("commonName"), company.commonName],
    [t("legalForm"), company.legalForm[loc]],
    [t("shareCapital"), loc === "fr" ? company.shareCapital : company.shareCapitalEn],
    [t("foundedYear"), String(company.foundedYear)],
    [t("address"), company.address[loc]],
  ];

  return (
    <>
      <section className="bg-cream pb-16 pt-32 sm:pt-36">
        <div className="container-prestige grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionLabel>{t("eyebrow")}</SectionLabel>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-burgundy-deep sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">{t("subtitle")}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <PhotoPanel photo={photos.dakarPlateau} className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white py-20">
        <div className="container-prestige grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="font-serif text-2xl text-burgundy-deep">{t("identityTitle")}</h2>
            <ChevronRule className="mt-4 h-3 w-20 text-gold" />
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {identity.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-widest2 text-charcoal/45">{label}</dt>
                  <dd className="mt-2 text-sm text-charcoal/80">{value}</dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-widest2 text-charcoal/45">{t("specialties")}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {company.specialties[loc].map((s) => (
                    <span key={s} className="border border-charcoal/15 px-3 py-1 text-xs text-charcoal/70">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-prestige grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:order-2">
            <PhotoPanel photo={photos.roadConstruction} className="aspect-[4/5] w-full" wash={false} />
          </Reveal>

          <div className="lg:order-1">
            <Reveal>
              <h2 className="font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl">
                {t("timelineTitle")}
              </h2>
            </Reveal>

            <ol className="mt-14 space-y-12 border-l border-charcoal/15 pl-8">
              <Reveal>
                <li className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="font-serif text-2xl text-gold">{company.foundedYear}</p>
                  <h3 className="mt-2 text-lg font-medium text-burgundy-deep">{t("timeline2000Title")}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/70">
                    {t("timeline2000Body")}
                  </p>
                </li>
              </Reveal>
              <Reveal delay={0.1}>
                <li className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-burgundy" />
                  <p className="font-serif text-2xl text-burgundy">{t("timelineTodayTitle")}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/70">
                    {t("timelineTodayBody")}
                  </p>
                </li>
              </Reveal>
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-white py-24">
        <div className="container-prestige max-w-3xl">
          <Reveal>
            <SectionLabel>{t("approachEyebrow")}</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl">
              {t("approachTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">{t("approachBody")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-prestige grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-serif text-xl text-burgundy-deep">{t("operationsTitle")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{company.humanResources[loc]}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-serif text-xl text-burgundy-deep">{t("logisticsTitle")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{company.logistics[loc]}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-burgundy-deep py-24 text-cream">
        <div className="container-prestige grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionLabel light>{t("countriesTitle")}</SectionLabel>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
              {t("countriesBody")}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <CountriesMap dark className="h-auto w-full max-w-md text-cream/80" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
