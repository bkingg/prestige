"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/data/heroSlides";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 7000;
const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

/**
 * Full-bleed banner slider. Slides crossfade (opacity only, so an
 * interrupted change never jumps), the active photo settles from a slight
 * zoom, and the photo layer drifts in 3D against the pointer (springed,
 * decorative, fine pointers only) while the headline drifts the other way
 * for depth.
 *
 * Autoplay pauses on hover/focus, when the tab is hidden, and via the
 * explicit pause button; arrows, the numbered tabs, ←/→ keys and a swipe
 * all change slide. Reduced motion keeps the crossfade but drops the zoom
 * and parallax.
 */
export function Hero() {
  const locale = useLocale() as "fr" | "en";
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const count = heroSlides.length;
  const slide = heroSlides[index];
  const running = !paused && !hovering && !hidden;
  // Only the first slide's photo is fetched up front; each later photo is
  // mounted (and so requested) once it's the current or the upcoming slide,
  // after the first one has loaded — instead of five full-width downloads
  // competing with the LCP image on first paint.
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0]));
  const [firstLoaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    if (!firstLoaded) return;
    setMounted((prev) => {
      const nextIdx = (index + 1) % count;
      if (prev.has(index) && prev.has(nextIdx)) return prev;
      return new Set([...prev, index, nextIdx]);
    });
  }, [index, firstLoaded, count]);

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(next, INTERVAL_MS);
    return () => window.clearTimeout(t);
  }, [running, next, index]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pointer parallax (decorative): photo and copy move in opposite directions.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20 });
  const sy = useSpring(py, { stiffness: 60, damping: 20 });
  const photoX = useTransform(sx, (v) => v * -14);
  const photoY = useTransform(sy, (v) => v * -10);
  const rotY = useTransform(sx, (v) => v * 1.6);
  const rotX = useTransform(sy, (v) => v * -1.2);
  const photoTransform = useMotionTemplate`perspective(1400px) translate3d(${photoX}px, ${photoY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.06)`;
  const copyX = useTransform(sx, (v) => v * 8);
  const copyY = useTransform(sy, (v) => v * 6);
  const copyTransform = useMotionTemplate`translate3d(${copyX}px, ${copyY}px, 0)`;

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  // Swipe
  const touchStart = useRef<number | null>(null);
  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") touchStart.current = e.clientX;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (touchStart.current === null) return;
    const dx = e.clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={
        locale === "fr" ? "Présentation de PRESTIGE" : "About PRESTIGE"
      }
      onPointerMove={onPointerMove}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={() => {
        setHovering(false);
        px.set(0);
        py.set(0);
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      onFocus={() => setHovering(true)}
      onBlur={(e) =>
        !e.currentTarget.contains(e.relatedTarget as Node) && setHovering(false)
      }
      className="relative flex h-[100svh] min-h-[720px] w-full items-end overflow-hidden bg-ink-deep text-white"
    >
      <motion.div
        style={{ transform: reduce ? undefined : photoTransform }}
        className="absolute inset-0"
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.photo.src}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            {(mounted.has(i) || i === index) && (
              <Image
                src={s.photo.src}
                alt={s.photo.alt[locale]}
                fill
                priority={i === 0}
                onLoad={i === 0 ? () => setFirstLoaded(true) : undefined}
                quality={70}
                sizes="100vw"
                style={{ objectPosition: s.focus ?? "50% 50%" }}
                className={cn(
                  "object-cover",
                  !reduce && "transition-transform duration-[8000ms] ease-out",
                  !reduce && (i === index ? "scale-100" : "scale-[1.08]"),
                )}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Neutral (not tinted) scrims, only where the copy sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

      <motion.div
        style={{ transform: reduce ? undefined : copyTransform }}
        className="container-prestige relative z-10 w-full pb-28 pt-32 sm:pb-32"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
              exit: {
                opacity: 0,
                transition: { duration: 0.25, ease: "easeOut" },
              },
            }}
            aria-live={running ? "off" : "polite"}
          >
            <motion.p
              variants={fadeUp(reduce)}
              className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/85"
            >
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              {slide.eyebrow[locale]}
            </motion.p>
            <motion.h1
              variants={fadeUp(reduce)}
              className="mt-6 max-w-5xl font-serif text-[clamp(2.5rem,min(6.2vw,7.6vh),5.5rem)] font-light leading-[1.03]"
            >
              {slide.title[locale]}
            </motion.h1>
            <motion.p
              variants={fadeUp(reduce)}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {slide.body[locale]}
            </motion.p>
            <motion.div
              variants={fadeUp(reduce)}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href={slide.href} variant="primary" icon>
                {slide.cta[locale]}
              </Button>
              <Button href="/contact" variant="outline-light">
                {locale === "fr" ? "Parler à un expert" : "Talk to an expert"}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-black/20 backdrop-blur-[2px]">
        <div className="container-prestige flex items-stretch">
          <div
            className="flex flex-1 items-stretch overflow-x-auto"
            role="tablist"
          >
            {heroSlides.map((s, i) => (
              <button
                key={s.photo.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1} / ${count}: ${s.tab[locale]}`}
                onClick={() => go(i)}
                className={cn(
                  "group relative flex min-w-[64px] flex-1 items-center gap-3 py-5 pr-4 text-left transition-colors duration-200",
                  i === index
                    ? "text-white"
                    : "text-white/55 hover:text-white/85",
                )}
              >
                <span
                  className="absolute inset-x-0 top-0 h-px bg-white/20"
                  aria-hidden="true"
                >
                  {i === index && (
                    <span
                      key={`${index}-${running}`}
                      className="block h-full origin-left bg-gold"
                      style={{
                        animation:
                          running && !reduce
                            ? `hero-progress ${INTERVAL_MS}ms linear forwards`
                            : undefined,
                        transform: running && !reduce ? undefined : "scaleX(1)",
                      }}
                    />
                  )}
                </span>
                <span className="font-serif text-lg italic">{ROMAN[i]}</span>
                <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] md:inline">
                  {s.tab[locale]}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 pl-4">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={
                paused ? (locale === "fr" ? "Lecture" : "Play") : "Pause"
              }
              className="flex h-10 w-10 items-center justify-center text-white/75 transition-[color,transform] duration-150 ease-out hover:text-white active:scale-[0.94]"
            >
              {paused ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label={
                locale === "fr" ? "Diapositive précédente" : "Previous slide"
              }
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-[background-color,color,transform] duration-150 ease-out hover:bg-white hover:text-ink active:scale-[0.94]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={
                locale === "fr" ? "Diapositive suivante" : "Next slide"
              }
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-[background-color,color,transform] duration-150 ease-out hover:bg-white hover:text-ink active:scale-[0.94]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function fadeUp(reduce: boolean | null) {
  return {
    hidden: { opacity: 0, transform: reduce ? "none" : "translateY(22px)" },
    show: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.8, ease: EASE_OUT },
    },
  };
}
