"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollTilt } from "@/components/ui/Tilt";
import { photos } from "@/data/photos";
import { company } from "@/data/company";

/**
 * Split "anchoring" band: an aerial of Dakar bleeding off the left edge and
 * fading into the white page, with the firm's heritage copy and three
 * figures that count up once when they scroll into view.
 */
export function Heritage() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";
  const photo = photos.dakarAerial;

  const stats = [
    { to: company.foundedYear, label: t("heritageStatYear"), plain: true },
    { to: new Date().getFullYear() - company.foundedYear, suffix: "+", label: t("heritageStatExperience") },
    { to: company.countriesOfOperation.length, label: locale === "fr" ? "Pays d'intervention" : "Countries of operation" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-tan/40 bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[640px]">
          <ScrollTilt from={8} className="absolute inset-0">
            <Image
              src={photo.src}
              alt={photo.alt[locale]}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="photo-vivid object-cover"
            />
          </ScrollTilt>
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-white lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white lg:hidden" />
        </div>

        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:py-28 lg:pl-8 lg:pr-16 xl:pr-24">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel>{t("heritageEyebrow")}</SectionLabel>
              <h2 className="mt-7 font-serif text-5xl font-light leading-[1.05] text-ink sm:text-6xl">
                {t("heritageTitle")}
              </h2>
              <p className="mt-8 text-base leading-relaxed text-ink/70">{t("heritageBody")}</p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 border-t border-ink/10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className={i > 0 ? "border-l border-ink/10 pl-5 pt-6" : "pt-6"}>
                    <p className="font-serif text-4xl font-light text-plum sm:text-5xl">
                      <CountUp to={s.to} plain={s.plain} />
                      {s.suffix}
                    </p>
                    <p className="mt-2 text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink/55">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, plain }: { to: number; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const from = plain ? to - 26 : 0;
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    setValue(from);
    const controls = animate(from, to, {
      duration: 1.6,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, from, to]);

  return <span ref={ref}>{value}</span>;
}
