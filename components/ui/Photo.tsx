"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * Full-bleed photo panel with a restrained burgundy duotone wash (so real
 * photography still reads as part of the brand system rather than a stray
 * stock insert), a small license-compliant credit line, and a subtle
 * scroll-linked parallax drift.
 *
 * The parallax is a plain CSS `transform: translateY()` driven by Framer
 * Motion's scroll progress — the same mechanism as the homepage Hero, not
 * `background-attachment: fixed` (unreliable on iOS Safari) or a scroll
 * event handler of our own. Transform-only updates composite on the GPU
 * without triggering layout, and `prefers-reduced-motion` disables the
 * motion entirely, same as everywhere else in the UI.
 */
export function PhotoPanel({
  photo,
  className,
  priority,
  wash = true,
  parallax = true,
}: {
  photo: Photo;
  className?: string;
  priority?: boolean;
  wash?: boolean;
  parallax?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [parallax && !reduce ? "-7%" : "0%", parallax && !reduce ? "7%" : "0%"]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden bg-burgundy-deep", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[9%] h-[118%]">
        <Image
          src={photo.src}
          alt={photo.alt[locale]}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      {wash && (
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 via-burgundy-deep/10 to-transparent mix-blend-multiply" />
      )}
      <PhotoCredit photo={photo} />
    </div>
  );
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <a
      href={photo.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-2 right-2.5 z-10 text-[10px] text-cream/60 transition-colors hover:text-cream"
    >
      © {photo.credit} · {photo.license}
    </a>
  );
}
