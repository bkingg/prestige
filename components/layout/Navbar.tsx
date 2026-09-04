"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoLockup, LogoMark } from "@/components/ui/Logo";
import { ChevronRule } from "@/components/ui/Motifs";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/le-cabinet", key: "about" },
  { href: "/expertises", key: "expertise" },
  { href: "/references", key: "references" },
  { href: "/equipe", key: "team" },
  { href: "/contact", key: "contact" },
] as const;

/**
 * Solid, always-opaque top bar (never transparent-over-hero, which would
 * lose contrast against dark imagery) with a full desktop link row from
 * `lg` up — matching a Deloitte/KPMG-style corporate nav rather than an
 * icon-only hamburger. The hamburger is reserved for phones and portrait
 * tablets only.
 */
export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) firstLinkRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-cream transition-shadow duration-300",
          scrolled && "shadow-[0_2px_12px_rgba(24,24,24,0.06)]"
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-content items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-12">
          <Link href="/" aria-label="PRESTIGE Cabinet Conseil — Accueil" className="shrink-0">
            <LogoLockup />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 py-1 font-serif text-[16px] text-charcoal/70 transition-colors duration-200 hover:text-burgundy xl:text-[17px]",
                    active && "text-burgundy"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />}
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <LocaleSwitch locale={locale} pathname={pathname} />
            <Link
              href="/contact"
              className="rounded-full bg-burgundy px-4 py-2 text-[13px] font-medium text-cream transition-colors duration-200 hover:bg-burgundy-deep xl:px-5 xl:py-2.5 xl:text-sm"
            >
              {t("cta")}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 lg:hidden"
            aria-label={t("menu")}
          >
            <span className="text-sm font-medium text-charcoal/70">{t("menu")}</span>
            <HamburgerIcon open={false} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-cream lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t("menu")}
          >
            <div className="flex h-[72px] items-center justify-between border-b border-charcoal/10 px-4 sm:px-6">
              <Link href="/" aria-label="PRESTIGE Cabinet Conseil — Accueil">
                <LogoMark className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
                aria-label={t("close")}
              >
                <span className="text-sm font-medium text-charcoal/70">{t("close")}</span>
                <HamburgerIcon open />
              </button>
            </div>

            <nav
              className="container-prestige flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-8"
              aria-label="Navigation mobile"
            >
              {NAV_ITEMS.map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-charcoal/10"
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 py-4 font-serif text-3xl text-charcoal transition-colors hover:text-burgundy sm:text-4xl",
                        active && "text-burgundy"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {active && <span className="h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />}
                      {t(item.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="container-prestige border-t border-charcoal/10 py-6"
            >
              <ChevronRule className="mb-6 h-2.5 w-16 text-gold" />
              <div className="flex flex-wrap items-center justify-between gap-6">
                <LocaleSwitch locale={locale} pathname={pathname} />
                <Link
                  href="/contact"
                  className="rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-burgundy-deep"
                >
                  {t("cta")}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-6 shrink-0 flex-col justify-between">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full origin-center bg-charcoal"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="h-px w-full bg-charcoal"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-full origin-center bg-charcoal"
      />
    </span>
  );
}

function LocaleSwitch({ locale, pathname }: { locale: string; pathname: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide">
      <Link
        href={pathname}
        locale="fr"
        className={locale === "fr" ? "text-burgundy" : "text-charcoal/50 hover:text-burgundy"}
      >
        FR
      </Link>
      <span className="text-charcoal/30">|</span>
      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? "text-burgundy" : "text-charcoal/50 hover:text-burgundy"}
      >
        EN
      </Link>
    </div>
  );
}
