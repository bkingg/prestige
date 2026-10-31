"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { TeamMember } from "@/data/team";
import { TeamAvatar } from "@/components/team/TeamAvatar";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  const locale = useLocale() as "fr" | "en";
  const t = useTranslations("team");
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <article className="border-t border-charcoal/15 pt-8">
        <div className="flex items-center gap-6 sm:gap-7">
          <TeamAvatar name={member.name} className="w-20 shrink-0 sm:w-24" />
          <div className="min-w-0">
            <h3 className="font-serif text-[1.65rem] leading-tight text-ink">{member.name}</h3>
            <p className="mt-1.5 text-sm text-charcoal/70">{member.role[locale]}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-plum">{member.experience[locale]}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-widest2 text-charcoal/40">
            {t("specialtiesTitle")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
            {member.specialties[locale].join(" · ")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-ink"
        >
          {open ? t("readLess") : t("readMore")}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
        </button>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-500 ease-editorial",
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0">
            {member.bio[locale].split("\n\n").map((para, i) => (
              <p key={i} className="mb-3 text-sm leading-relaxed text-charcoal/70 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
