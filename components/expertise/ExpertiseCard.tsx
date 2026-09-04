import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Expertise } from "@/data/expertise";
import { expertisePhotos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";
import { DiamondGrid } from "@/components/ui/Motifs";
import { ChevronRight } from "lucide-react";

export function ExpertiseCard({ item, delay = 0 }: { item: Expertise; delay?: number }) {
  const locale = useLocale() as "fr" | "en";
  const t = useTranslations("home");
  const photo = expertisePhotos[item.slug];

  return (
    <Reveal delay={delay}>
      <Link href={`/expertises/${item.slug}`} className="group block h-full">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-burgundy-deep">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt[locale]}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
            />
          ) : (
            <DiamondGrid className="absolute inset-0 h-full w-full text-cream/15" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-burgundy-deep/0 to-transparent" />
        </div>

        <div className="pt-6">
          <h3 className="font-serif text-2xl leading-snug text-burgundy-deep transition-colors duration-200 group-hover:text-burgundy">
            {item.title[locale]}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/60">
            {item.pitch[locale]}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-burgundy transition-colors duration-200 group-hover:text-burgundy-deep">
            {t("expertiseCta")}
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
