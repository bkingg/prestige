import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DiamondGrid } from "@/components/ui/Motifs";
import { cn } from "@/lib/utils";

/**
 * The site's recurring "ask" band, on plain white paper like the rest of
 * the site: tan hairlines above and below (the rules of the printed
 * brochure), a faint diamond motif in the corners, ink heading and the
 * primary button. Shared by the homepage CTA and every expertise page's
 * footer CTA so the "ask" always looks like the same brand moment.
 */
export function CTABand({
  title,
  body,
  buttonLabel,
  buttonHref,
  size = "lg",
}: {
  title: string;
  body?: string;
  buttonLabel: string;
  buttonHref: string;
  size?: "lg" | "sm";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-tan/50 bg-white",
        size === "lg" ? "py-24 sm:py-28" : "py-16 sm:py-20"
      )}
    >
      <DiamondGrid className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 text-tan" />
      <DiamondGrid className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 text-tan" />

      <div className="container-prestige relative text-center">
        <Reveal>
          <h2
            className={cn(
              "mx-auto max-w-2xl font-serif leading-snug text-ink",
              size === "lg" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"
            )}
          >
            {title}
          </h2>
          {body && <p className="mx-auto mt-6 max-w-md text-base text-charcoal/70">{body}</p>}
          <Button href={buttonHref} variant="primary" icon className={cn("mx-auto", size === "lg" ? "mt-10" : "mt-8")}>
            {buttonLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
