import { useTranslations } from "next-intl";
import { team } from "@/data/team";
import { TeamCard } from "@/components/team/TeamCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function TeamPreview() {
  const t = useTranslations("home");

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-prestige">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>{t("teamEyebrow")}</SectionLabel>
              <h2 className="mt-6 max-w-xl font-serif text-3xl leading-snug text-burgundy-deep sm:text-4xl lg:text-[2.75rem]">
                {t("teamTitle")}
              </h2>
            </div>
            <Button href="/equipe" variant="secondary">
              {t("teamCta")}
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {team.slice(0, 4).map((member, i) => (
            <TeamCard key={member.slug} member={member} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
