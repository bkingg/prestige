"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DiamondGrid } from "@/components/ui/Motifs";
import { photos } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * The site's recurring "ask" band: the Dakar skyline photo (same asset as
 * the homepage hero, so it reads as a deliberate reprise rather than a
 * random stock insert) under a burgundy linear-gradient wash, multiply-
 * blended the same way PhotoPanel washes its photos, plus a slow
 * scroll-linked drift on the image. Shared by the homepage CTA and every
 * expertise page's footer CTA so the "ask" always looks like the same
 * brand moment instead of a flat color fill.
 *
 * Quality is turned down hard (the image is mostly obscured by the
 * gradient, so detail doesn't matter) and the section is never marked
 * `priority` — every placement sits well below the fold, so it should
 * lazy-load like any other below-fold image.
 */
export function CTABand({
  title,
  body,
  buttonLabel,
  buttonHref,
  size = "lg",
}: {
  title: string;
  body?: string;
  buttonLabel: string;
  buttonHref: string;
  size?: "lg" | "sm";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? "0%" : "-8%", reduce ? "0%" : "8%"]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden bg-burgundy-deep text-cream",
        size === "lg" ? "py-24 sm:py-28" : "py-16 sm:py-20"
      )}
    >
      <motion.div style={{ y }} aria-hidden="true" className="absolute inset-x-0 -top-[10%] h-[120%]">
        <Image
          src={photos.heroDakarSkyline.src}
          alt=""
          fill
          sizes="100vw"
          quality={40}
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/95 via-burgundy/85 to-burgundy-deep/95 mix-blend-multiply" />
      <div className="absolute inset-0 bg-burgundy-deep/30" />
      <DiamondGrid className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 text-cream/20" />

      <div className="container-prestige relative text-center">
        <Reveal>
          <h2
            className={cn(
              "mx-auto max-w-2xl font-serif leading-snug",
              size === "lg" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
            )}
          >
            {title}
          </h2>
          {body && <p className="mx-auto mt-6 max-w-md text-base text-cream/75">{body}</p>}
          <Button href={buttonHref} variant="inverse" className={cn("mx-auto", size === "lg" ? "mt-10" : "mt-8")}>
            {buttonLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
