import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Expertise } from "@/data/expertise";
import { expertisePhotos, type Photo } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";
import { DiamondGrid } from "@/components/ui/Motifs";
import { Tilt } from "@/components/ui/Tilt";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A real card: the area's photograph at full color on top, title and pitch
 * below on white, with a butter header strip echoing the table headers of
 * the client's printed brochure. The whole card tilts in 3D toward the
 * pointer (see <Tilt>); the photo gets a slow, slight zoom on hover.
 */
export function ExpertiseCard({
  item,
  photo: photoProp,
  delay = 0,
  featured,
}: {
  item: Expertise;
  photo?: Photo;
  delay?: number;
  featured?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";
  const t = useTranslations("home");
  const photo = photoProp ?? expertisePhotos[item.slug];

  return (
    <Reveal delay={delay} className={cn("h-full", featured && "lg:col-span-2")}>
      <Tilt max={5} scale={1.01} className="h-full rounded-2xl">
        <Link
          href={`/expertises/${item.slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-ink/10 transition-shadow duration-300 hover:shadow-float"
        >
          <div className={cn("relative overflow-hidden bg-butter", featured ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10]")}>
            {photo ? (
              <Image
                src={photo.src}
                alt=""
                fill
                loading="lazy"
                sizes={featured ? "(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <DiamondGrid className="absolute inset-0 h-full w-full text-ink/40" />
            )}
          </div>

          <div className="h-1 bg-gradient-to-r from-plum via-gold to-butter-deep" aria-hidden="true" />

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <h3 className="font-serif text-[1.75rem] leading-[1.15] text-ink">{item.title[locale]}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.pitch[locale]}</p>
            <span className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-plum transition-colors duration-200 group-hover:text-ink">
              {t("expertiseCta")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Tilt>
    </Reveal>
  );
}
