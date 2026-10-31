"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { expertiseAreas } from "@/data/expertise";
import type { Photo } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tilt } from "@/components/ui/Tilt";
import { cn } from "@/lib/utils";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/**
 * Homepage "domains" section: a staggered two-column wall of photo tiles
 * (each tilting in 3D toward the pointer) beside a large heading and a
 * numbered accordion. The open accordion row and its tile are linked — the
 * matching tile lifts out of the wall while the others recede.
 */
export function ExpertiseGrid({ photos }: { photos: Partial<Record<string, Photo>> }) {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";
  const [open, setOpen] = useState(0);

  const left = expertiseAreas.filter((_, i) => i % 2 === 0);
  const right = expertiseAreas.filter((_, i) => i % 2 === 1);

  const tile = (item: (typeof expertiseAreas)[number]) => {
    const i = expertiseAreas.indexOf(item);
    const photo = photos[item.slug];
    const active = i === open;
    return (
      <Reveal key={item.slug} delay={(i % 2) * 0.08}>
        <Tilt max={6} className="rounded-xl">
          <Link
            href={`/expertises/${item.slug}`}
            onPointerEnter={() => setOpen(i)}
            className={cn(
              "group relative block aspect-[4/5] overflow-hidden rounded-xl bg-ink-wash transition-[opacity,box-shadow] duration-300",
              active ? "opacity-100 shadow-float" : "opacity-80 shadow-lift"
            )}
          >
            {photo && (
              <Image
                src={photo.src}
                alt=""
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="photo-vivid object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute left-4 top-3 font-serif text-lg italic text-white/90">{ROMAN[i]}</span>
            <span className="absolute inset-x-4 bottom-4 font-serif text-xl leading-tight text-white">
              {item.title[locale].split(/[,&]/)[0].trim()}
            </span>
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gold transition-transform duration-300 ease-out",
                active ? "scale-x-100" : "scale-x-0"
              )}
            />
          </Link>
        </Tilt>
      </Reveal>
    );
  };

  return (
    <section className="border-t border-tan/40 bg-white py-24 sm:py-32" id="expertises">
      <div className="container-prestige">
        <Reveal>
          <SectionLabel>{t("expertiseEyebrow")}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-4 sm:space-y-5">{left.map(tile)}</div>
            <div className="mt-16 space-y-4 sm:mt-24 sm:space-y-5">{right.map(tile)}</div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-serif text-5xl font-light leading-[1.05] text-ink sm:text-6xl">
                {t("expertiseTitle")}
              </h2>
            </Reveal>

            <ul className="mt-12 border-t border-ink/10">
              {expertiseAreas.map((item, i) => {
                const active = i === open;
                return (
                  <li key={item.slug} className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => setOpen(active ? -1 : i)}
                      aria-expanded={active}
                      className="group flex w-full items-baseline gap-5 py-5 text-left"
                    >
                      <span className="w-8 shrink-0 font-serif text-base italic text-plum">{ROMAN[i]}</span>
                      <span
                        className={cn(
                          "flex-1 font-serif text-2xl leading-snug transition-colors duration-200 sm:text-[1.7rem]",
                          active ? "text-ink" : "text-ink/70 group-hover:text-ink"
                        )}
                      >
                        {item.title[locale]}
                      </span>
                      <Plus
                        className={cn(
                          "h-4 w-4 shrink-0 self-center text-ink/50 transition-transform duration-200 ease-out",
                          active && "rotate-45 text-plum"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="pb-7 pl-[3.25rem]">
                          <p className="max-w-lg text-sm leading-relaxed text-ink/70">{item.pitch[locale]}</p>
                          <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-[13px] text-ink/65 sm:grid-cols-2">
                            {item.services[locale].slice(0, 6).map((s) => (
                              <li key={s} className="flex gap-2">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                                {s}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/expertises/${item.slug}`}
                            className="group/link mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-plum transition-colors hover:text-ink"
                          >
                            {t("expertiseCta")}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
