import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Expertise } from "@/data/expertise";
import { expertisePhotos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";
import { DiamondGrid } from "@/components/ui/Motifs";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const bgGradient = {
  white: "from-white via-white/85 to-white/30",
  cream: "from-cream via-cream/85 to-cream/30",
};

export function ExpertiseCard({
  item,
  delay = 0,
  bg = "cream",
}: {
  item: Expertise;
  delay?: number;
  bg?: "white" | "cream";
}) {
  const locale = useLocale() as "fr" | "en";
  const t = useTranslations("home");
  const photo = expertisePhotos[item.slug];

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/expertises/${item.slug}`}
        className="group relative flex h-full min-h-[172px] flex-col overflow-hidden border-t border-charcoal/15 py-8 transition-colors duration-300 hover:border-gold"
      >
        {/* A visible but secondary hint of photography — never the focal point */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {photo ? (
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-[0.32] transition-opacity duration-500 group-hover:opacity-[0.42]"
            />
          ) : (
            <DiamondGrid className="absolute inset-y-0 right-0 h-full w-1/2 text-burgundy/[0.06]" />
          )}
          <div className={cn("absolute inset-0 bg-gradient-to-r", bgGradient[bg])} />
        </div>

        <div className="relative flex flex-1 flex-col">
          <div>
            <h3 className="max-w-sm font-serif text-2xl leading-snug text-burgundy-deep sm:text-[1.7rem]">
              {item.title[locale]}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/60">
              {item.pitch[locale]}
            </p>
          </div>
          <span className="mt-auto inline-flex w-fit items-center gap-1 pt-4 text-[15px] font-medium text-burgundy transition-colors duration-200 group-hover:text-burgundy-deep">
            {t("expertiseCta")}
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
