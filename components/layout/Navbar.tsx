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
 * White top bar that turns frosted once the page scrolls with a full desktop link row from
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
  // Over the homepage slider the bar is transparent with white type until
  // the page scrolls; everywhere else it's solid white from the start.
  const overHero = pathname === "/" && !scrolled;

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
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
          overHero
            ? "border-white/15 bg-transparent"
            : scrolled
              ? "border-tan/50 bg-white/95 shadow-[0_2px_16px_rgba(23,22,28,0.06)] backdrop-blur-md"
              : "border-tan/40 bg-white"
        )}
      >
        <div className="mx-auto flex h-[84px] w-full max-w-content items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-10 2xl:px-12">
          <Link href="/" aria-label="PRESTIGE Cabinet Conseil, Accueil" className="shrink-0">
            <LogoLockup light={overHero} className="h-11" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center py-1 text-[11.5px] font-medium uppercase tracking-[0.2em] transition-colors duration-200",
                    overHero ? "text-white/80 hover:text-white" : "text-ink/65 hover:text-ink",
                    active && (overHero ? "text-white" : "text-ink")
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.key)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                      className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <LocaleSwitch locale={locale} pathname={pathname} light={overHero} />
            <Link
              href="/contact"
              className={cn(
                "px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97]",
                overHero ? "border border-white/60 text-white hover:bg-white hover:text-ink" : "bg-plum text-white hover:bg-plum-deep"
              )}
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
            <span className={cn("text-[11px] font-medium uppercase tracking-[0.2em]", overHero ? "text-white" : "text-ink/70")}>{t("menu")}</span>
            <HamburgerIcon open={false} light={overHero} />
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
            className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t("menu")}
          >
            <div className="flex h-[84px] items-center justify-between border-b border-charcoal/10 px-4 sm:px-6">
              <Link href="/" aria-label="PRESTIGE Cabinet Conseil, Accueil">
                <LogoMark className="h-10 w-10" />
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
                    initial={{ opacity: 0, transform: "translateX(-12px)" }}
                    animate={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ duration: 0.35, delay: 0.04 + i * 0.04, ease: [0.23, 1, 0.32, 1] }}
                    className="border-b border-charcoal/10"
                  >
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 py-4 font-serif text-3xl text-ink/80 transition-colors hover:text-ink sm:text-4xl",
                        active && "text-ink"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {active && <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />}
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
                  className="bg-plum px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-[background-color,transform] duration-150 ease-out hover:bg-plum-deep active:scale-[0.97]"
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

function HamburgerIcon({ open, light }: { open: boolean; light?: boolean }) {
  return (
    <span className="relative flex h-4 w-6 shrink-0 flex-col justify-between">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-px w-full origin-center", light ? "bg-white" : "bg-ink")}
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
        className={cn("h-px w-full", light ? "bg-white" : "bg-ink")}
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn("h-px w-full origin-center", light ? "bg-white" : "bg-ink")}
      />
    </span>
  );
}

function LocaleSwitch({ locale, pathname, light }: { locale: string; pathname: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide">
      <Link
        href={pathname}
        locale="fr"
        className={locale === "fr" ? (light ? "text-white" : "text-ink") : light ? "text-white/60 hover:text-white" : "text-ink/45 transition-colors hover:text-plum"}
      >
        FR
      </Link>
      <span className={light ? "text-white/40" : "text-ink/25"}>|</span>
      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? (light ? "text-white" : "text-ink") : light ? "text-white/60 hover:text-white" : "text-ink/45 transition-colors hover:text-plum"}
      >
        EN
      </Link>
    </div>
  );
}
