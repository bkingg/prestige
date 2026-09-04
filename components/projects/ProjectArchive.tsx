"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X, Search } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { categoryLabels, sectors, years, countries } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

type SortMode = "recent" | "oldest" | "alpha";

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const t = useTranslations("references");
  const locale = useLocale() as "fr" | "en";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [sector, setSector] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [sort, setSort] = useState<SortMode>("recent");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = projects;

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q)
      );
    }
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (sector !== "all") list = list.filter((p) => p.sector === sector);
    if (year !== "all") list = list.filter((p) => String(p.yearEnd) === year || String(p.yearStart) === year);
    if (country !== "all") list = list.filter((p) => p.country.includes(country));

    const sorted = [...list];
    if (sort === "recent") sorted.sort((a, b) => b.yearEnd - a.yearEnd || b.yearStart - a.yearStart);
    if (sort === "oldest") sorted.sort((a, b) => a.yearStart - b.yearStart || a.yearEnd - b.yearEnd);
    if (sort === "alpha") sorted.sort((a, b) => a.title.localeCompare(b.title));

    return sorted;
  }, [projects, query, category, sector, year, country, sort]);

  const hasActiveFilters = category !== "all" || sector !== "all" || year !== "all" || country !== "all" || query !== "";

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setSector("all");
    setYear("all");
    setCountry("all");
  }

  const filterFields = (
    <div className="space-y-8">
      <Field label={t("filterCategory")}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ProjectCategory | "all")}
          className="select-prestige"
        >
          <option value="all">{t("allCategories")}</option>
          {(Object.keys(categoryLabels) as ProjectCategory[]).map((c) => (
            <option key={c} value={c}>
              {categoryLabels[c][locale]}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("filterSector")}>
        <select value={sector} onChange={(e) => setSector(e.target.value)} className="select-prestige">
          <option value="all">{t("allSectors")}</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("filterYear")}>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="select-prestige">
          <option value="all">{t("allYears")}</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("filterCountry")}>
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="select-prestige">
          <option value="all">{t("allCountries")}</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm font-medium text-burgundy transition-colors duration-200 hover:text-burgundy-deep"
        >
          {t("clearFilters")}
        </button>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full border border-charcoal/15 bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-charcoal/40"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-2 border border-charcoal/15 px-4 py-2.5 text-xs font-medium uppercase tracking-wide lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {t("filters")}
          </button>

          <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-charcoal/60">
            {t("sortBy")}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortMode)}
              className="border border-charcoal/15 bg-white px-2 py-2 text-xs text-charcoal"
            >
              <option value="recent">{t("sortRecent")}</option>
              <option value="oldest">{t("sortOldest")}</option>
              <option value="alpha">{t("sortAlpha")}</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mt-4 text-xs uppercase tracking-wide text-charcoal/45">
        {t("resultsCount", { count: filtered.length })}
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">{filterFields}</aside>

        {filtered.length === 0 ? (
          <p className="border border-dashed border-charcoal/20 p-12 text-center text-sm text-charcoal/50">
            {t("noResults")}
          </p>
        ) : (
          <div className="border-t border-charcoal/10">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={Math.min(i, 8) * 0.03} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-charcoal/50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] w-[85%] max-w-sm overflow-y-auto bg-cream p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl text-burgundy-deep">{t("filters")}</h2>
                <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8">{filterFields}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest2 text-charcoal/45">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
