import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const t = useTranslations("references");
  const locale = useLocale() as "fr" | "en";

  return (
    <Reveal delay={delay} y={14}>
      <Link
        href={`/references/${project.id}`}
        className="group grid grid-cols-[64px_1fr_auto] items-start gap-5 border-b border-charcoal/10 py-6 transition-colors duration-300 hover:border-gold sm:grid-cols-[80px_1fr_auto]"
      >
        <span className="font-serif text-sm text-gold sm:text-base">{project.yearEnd}</span>

        <div>
          <p className="text-[11px] uppercase tracking-widest2 text-charcoal/40">
            {categoryLabels[project.category][locale]}
          </p>
          <h3 className="mt-2 max-w-xl font-serif text-lg leading-snug text-burgundy-deep sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-charcoal/55">
            {project.client} — {project.country}
          </p>
        </div>

        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-charcoal/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-burgundy" />
      </Link>
    </Reveal>
  );
}
