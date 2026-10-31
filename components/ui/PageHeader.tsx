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
import { Tilt } from "@/components/ui/Tilt";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * The shared "page intro" band. With a photo, the text carries the weight
 * (7 of 12 columns, large light title) and the photo sits beside it as a
 * smaller landscape card in a 3D tilt, vertically centred on the copy, so
 * neither side overpowers the other. Pages with no photo fall back to a
 * text-only band with a faint topographic motif.
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
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "8%"]);
  const motifY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);

  const backLink = backHref && (
    <Link
      href={backHref}
      className={cn(
        "mb-8 inline-flex items-center gap-1 text-[15px] font-medium transition-colors duration-200",
        "text-plum hover:text-ink"
      )}
    >
      ← {backLabel}
    </Link>
  );

  if (!photo) {
    return (
      <section ref={sectionRef} className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-36">
        <motion.div
          style={{ y: motifY }}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-16 h-[380px] opacity-70"
        >
          <ContourLines className="h-full w-full text-tan/60" />
        </motion.div>

        <div className="container-prestige relative max-w-3xl">
          <Reveal>
            <div className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[3px] bg-gradient-to-b from-plum via-gold/70 to-transparent"
              />
              {backLink}
              <SectionLabel>{eyebrow}</SectionLabel>
              <h1 className="heading-rule mt-6 max-w-xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-prestige grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          {backLink}
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mt-7 font-serif text-[2.75rem] font-light leading-[1.04] text-ink sm:text-6xl lg:text-[4.5rem]">
            {title}
          </h1>
          <span aria-hidden="true" className="mt-8 block h-px w-14 bg-gold" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{subtitle}</p>
          {rule && <ChevronRule className="mt-6 h-3 w-20 text-gold" />}
        </Reveal>

        <motion.div
          initial={{ opacity: 0, transform: reduce ? "none" : "perspective(1200px) rotateY(-12deg) translateX(20px)" }}
          animate={{ opacity: 1, transform: "perspective(1200px) rotateY(0deg) translateX(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5"
        >
          <Tilt max={6} className="rounded-[20px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-butter shadow-float ring-1 ring-ink/10">
              <motion.div style={{ y: photoY }} className="absolute inset-x-0 -top-[6%] h-[112%]">
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </motion.div>
              <PhotoCredit photo={photo} />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
