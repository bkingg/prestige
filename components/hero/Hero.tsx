"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/navigation";
import { photos } from "@/data/photos";

export function Hero() {
  const t = useTranslations("home");
  const locale = useLocale() as "fr" | "en";
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const photo = photos.pontFaidherbe;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[94vh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Parallax background */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
        <motion.div
          className="absolute inset-0"
          animate={reduce ? undefined : { scale: [1, 1.09, 1] }}
          transition={reduce ? undefined : { duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Dark linear gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/35" />
      <div className="absolute inset-0 bg-charcoal/20" />

      {/* Centered content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-prestige relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div {...fadeUp(0)}>
          <SectionLabel light className="justify-center">
            {t("heroEyebrow")}
          </SectionLabel>
        </motion.div>

        <motion.h1
          {...fadeUp(0.12)}
          className="mt-8 max-w-3xl font-serif text-[2.4rem] font-medium leading-[1.12] text-cream sm:text-6xl lg:text-[4rem]"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          {...fadeUp(0.28)}
          className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div {...fadeUp(0.42)} className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <Button href="/expertises" variant="primary">
            {t("heroCtaPrimary")}
          </Button>
          <Link
            href="/references"
            className="inline-flex items-center gap-1 text-[15px] font-medium text-cream transition-colors duration-200 hover:text-gold-light"
          >
            {t("heroCtaSecondary")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={reduce ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-cream/50" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <a
        href={photo.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-4 z-10 text-[10px] text-cream/40 transition-colors hover:text-cream/70"
      >
        © {photo.credit} · {photo.license}
      </a>
    </section>
  );
}
