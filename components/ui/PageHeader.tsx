"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronRule, ContourLines } from "@/components/ui/Motifs";
import { PhotoCredit } from "@/components/ui/Photo";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * The shared "page intro" band. When a photo is given, it's a single
 * full-bleed unit — photo, burgundy scrim and heading all one composition,
 * same visual language as the homepage Hero — rather than a text column
 * next to a separate boxed photo. Pages with no photo (the expertise
 * index) fall back to a cream band with a faint topographic motif instead.
 *
 * Parallax on both the photo and the fallback motif is a scroll-linked
 * CSS `transform` (Framer Motion, GPU-composited, no layout cost), the
 * same mechanism as the Hero — not `background-attachment: fixed`, which
 * iOS Safari doesn't support. `prefers-reduced-motion` disables it, as
 * with every other motion effect in this UI.
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  photo,
  backHref,
  backLabel,
  rule,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  photo?: Photo;
  backHref?: string;
  backLabel?: string;
  rule?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const motifY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);

  const backLink = backHref && (
    <Link
      href={backHref}
      className={cn(
        "mb-8 inline-flex items-center gap-1 text-[15px] font-medium transition-colors duration-200",
        photo ? "text-cream/80 hover:text-cream" : "text-burgundy hover:text-burgundy-deep"
      )}
    >
      ← {backLabel}
    </Link>
  );

  if (!photo) {
    return (
      <section ref={sectionRef} className="relative overflow-hidden bg-cream pb-16 pt-32 sm:pt-36">
        <motion.div
          style={{ y: motifY }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-16 h-[380px] opacity-70"
        >
          <ContourLines className="h-full w-full text-burgundy/[0.08]" />
        </motion.div>

        <div className="container-prestige relative max-w-3xl">
          <Reveal>
            <div className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[3px] bg-gradient-to-b from-gold via-gold/60 to-transparent"
              />
              {backLink}
              <SectionLabel>{eyebrow}</SectionLabel>
              <h1 className="mt-6 max-w-xl font-serif text-5xl leading-tight text-burgundy-deep sm:text-6xl">
                {title}
              </h1>
              {rule && <ChevronRule className="mt-6 h-3 w-20 text-gold" />}
              <p className={cn("max-w-2xl text-lg leading-relaxed text-charcoal/70", rule ? "mt-8" : "mt-6")}>
                {subtitle}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[460px] items-end overflow-hidden bg-burgundy-deep sm:min-h-[520px] lg:min-h-[560px]"
    >
      <motion.div style={{ y: photoY }} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <Image src={photo.src} alt={photo.alt[locale]} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/75 to-burgundy-deep/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-burgundy-deep/30" />

      <div className="container-prestige relative w-full pb-14 pt-28 sm:pb-16">
        <Reveal>
          {backLink}
          <SectionLabel light>{eyebrow}</SectionLabel>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight text-cream sm:text-6xl">{title}</h1>
          {rule && <ChevronRule className="mt-6 h-3 w-20 text-gold-light" />}
          <p className={cn("max-w-xl text-lg leading-relaxed text-cream/80", rule ? "mt-8" : "mt-6")}>
            {subtitle}
          </p>
        </Reveal>
      </div>

      <PhotoCredit photo={photo} />
    </section>
  );
}
