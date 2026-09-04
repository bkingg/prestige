import Image from "next/image";
import { useLocale } from "next-intl";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/**
 * Full-bleed photo panel with a restrained burgundy duotone wash (so real
 * photography still reads as part of the brand system rather than a stray
 * stock insert) and a small, license-compliant credit line.
 */
export function PhotoPanel({
  photo,
  className,
  priority,
  wash = true,
}: {
  photo: Photo;
  className?: string;
  priority?: boolean;
  wash?: boolean;
}) {
  const locale = useLocale() as "fr" | "en";

  return (
    <div className={cn("relative overflow-hidden bg-burgundy-deep", className)}>
      <Image
        src={photo.src}
        alt={photo.alt[locale]}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      {wash && (
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/70 via-burgundy-deep/10 to-transparent mix-blend-multiply" />
      )}
      <PhotoCredit photo={photo} />
    </div>
  );
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <a
      href={photo.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-2 right-2.5 text-[10px] text-cream/60 transition-colors hover:text-cream"
    >
      © {photo.credit} · {photo.license}
    </a>
  );
}
