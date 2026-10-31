"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Phase = "idle" | "loading" | "done";

/**
 * Thin plum→gold bar at the very top while a client-side navigation is in
 * flight. The App Router has no navigation events, so it starts on a click
 * of an internal link to a different path and completes when the pathname
 * changes. It creeps toward 85% with a long ease-out (feels like progress
 * without lying about completion), then snaps to 100% and fades.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      window.clearTimeout(timer.current);
      setPhase("loading");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    setPhase((p) => (p === "loading" ? "done" : p));
    timer.current = window.setTimeout(() => setPhase("idle"), 450);
    return () => window.clearTimeout(timer.current);
  }, [pathname]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[150] h-[2px]">
      <div
        className="h-full origin-left bg-gradient-to-r from-plum via-plum to-gold"
        style={{
          transform: phase === "idle" ? "scaleX(0)" : phase === "loading" ? "scaleX(0.85)" : "scaleX(1)",
          opacity: phase === "idle" ? 0 : 1,
          transition:
            phase === "loading"
              ? "transform 8s cubic-bezier(0.1, 0.8, 0.2, 1), opacity 150ms ease-out"
              : phase === "done"
                ? "transform 200ms ease-out, opacity 250ms ease-out 200ms"
                : "none",
        }}
      />
    </div>
  );
}
