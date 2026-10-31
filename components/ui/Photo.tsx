"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollTilt } from "@/components/ui/Tilt";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * Rounded photo panel shown at full color (no tint or wash — the client
 * wants bright, true-to-life photography), with a license-compliant credit
 * line, a 3D scroll reveal that lays the photo flat as it reaches the
 * middle of the viewport, and a subtle scroll-linked parallax drift.
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
  parallax = true,
}: {
  photo: Photo;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [parallax && !reduce ? "-7%" : "0%", parallax && !reduce ? "7%" : "0%"],
  );

  return (
    <ScrollTilt className={className}>
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden rounded-[20px] bg-butter shadow-float ring-1 ring-ink/10"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-x-0 -top-[9%] h-[118%]"
        >
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="photo-vivid object-cover"
          />
        </motion.div>
        <PhotoCredit photo={photo} />
      </div>
    </ScrollTilt>
  );
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  // Unsplash doesn't require visible attribution; CC-licensed photos do.
  if (photo.license === "Unsplash License") return null;
  return (
    <a
      href={photo.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-2 right-2.5 z-10 rounded bg-black/30 px-1.5 py-0.5 text-[10px] text-white/85 backdrop-blur-sm transition-colors hover:text-white"
    >
      © {photo.credit} · {photo.license}
    </a>
  );
}
