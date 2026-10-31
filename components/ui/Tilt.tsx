"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

/** True only for a real mouse/trackpad — touch "hover" would fire on tap. */
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

/**
 * Pointer-driven 3D tilt with a soft specular glare. Purely decorative, so
 * the pointer position is fed through a spring (it lags and settles like a
 * physical card rather than snapping to the cursor) and the whole effect
 * is off for touch and `prefers-reduced-motion`.
 *
 * The transform is composed into a single `transform` string so it stays on
 * the compositor, and children can opt into depth with `translateZ` (see
 * <TiltLayer>) because the card preserves 3D.
 */
export function Tilt({
  children,
  className,
  max = 8,
  glare = true,
  scale = 1.015,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduce;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const sh = useSpring(hover, SPRING);

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const s = useTransform(sh, [0, 1], [1, scale]);
  const transform = useMotionTemplate`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${s})`;

  const gx = useTransform(sx, [0, 1], ["0%", "100%"]);
  const gy = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
    hover.set(0);
  }

  if (!enabled) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => hover.set(1)}
      onPointerLeave={onLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={cn("relative", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{ background: glareBg, opacity: sh }}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-soft-light"
        />
      )}
    </motion.div>
  );
}

/** A child of <Tilt> lifted off the card's surface for parallax depth. */
export function TiltLayer({
  children,
  depth = 40,
  className,
}: {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ transform: `translateZ(${depth}px)` }}>
      {children}
    </div>
  );
}

/**
 * Scroll-linked perspective reveal: the element starts tipped back on its
 * X axis (like a page being laid flat on a desk) and settles face-on as it
 * reaches the middle of the viewport. Scrubbed by scroll, so it's
 * reversible and never "plays" on its own.
 */
export function ScrollTilt({
  children,
  className,
  from = 14,
}: {
  children: React.ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : from, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [reduce ? 1 : 0.4, 1]);
  const transform = useMotionTemplate`perspective(1400px) rotateX(${rotateX}deg) scale(${scale})`;

  return (
    <motion.div
      ref={ref}
      style={{ transform, opacity, transformOrigin: "50% 100%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
