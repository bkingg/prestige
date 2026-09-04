"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { categoryLabels, years } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

type SortMode = "recent" | "oldest" | "alpha";

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const t = useTranslations("references");
  const locale = useLocale() as "fr" | "en";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [year, setYear] = useState<string>("all");
  const [sort, setSort] = useState<SortMode>("recent");

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
    if (year !== "all") list = list.filter((p) => String(p.yearEnd) === year || String(p.yearStart) === year);

    const sorted = [...list];
    if (sort === "recent") sorted.sort((a, b) => b.yearEnd - a.yearEnd || b.yearStart - a.yearStart);
    if (sort === "oldest") sorted.sort((a, b) => a.yearStart - b.yearStart || a.yearEnd - b.yearEnd);
    if (sort === "alpha") sorted.sort((a, b) => a.title.localeCompare(b.title));

    return sorted;
  }, [projects, query, category, year, sort]);

  const hasActiveFilters = category !== "all" || year !== "all" || query !== "";

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setYear("all");
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full border border-charcoal/15 bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-charcoal/40"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ProjectCategory | "all")}
            className="select-prestige w-auto"
          >
            <option value="all">{t("allCategories")}</option>
            {(Object.keys(categoryLabels) as ProjectCategory[]).map((c) => (
              <option key={c} value={c}>
                {categoryLabels[c][locale]}
              </option>
            ))}
          </select>

          <select value={year} onChange={(e) => setYear(e.target.value)} className="select-prestige w-auto">
            <option value="all">{t("allYears")}</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className="select-prestige w-auto"
          >
            <option value="recent">{t("sortRecent")}</option>
            <option value="oldest">{t("sortOldest")}</option>
            <option value="alpha">{t("sortAlpha")}</option>
          </select>

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
      </div>

      <p className="mt-4 text-xs uppercase tracking-wide text-charcoal/45">
        {t("resultsCount", { count: filtered.length })}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 border border-dashed border-charcoal/20 p-12 text-center text-sm text-charcoal/50">
          {t("noResults")}
        </p>
      ) : (
        <div className="mt-2 border-t border-charcoal/10">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={Math.min(i, 8) * 0.03} />
          ))}
        </div>
      )}
    </div>
  );
}
