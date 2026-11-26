import Image from "next/image";
import type { ClientMark } from "@/data/clients";
import { cn } from "@/lib/utils";

/** A client logo on a white tile, or a plum monogram badge when there is no logo. */
export function ClientMarkTile({ mark, size = "md" }: { mark: ClientMark; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-11 w-20 sm:h-12 sm:w-24" : "h-14 w-32";
  if (mark.kind === "logo") {
    return (
      <div className={cn("relative shrink-0 rounded-md bg-white p-2 ring-1 ring-ink/10", box)}>
        <div className="relative h-full w-full">
          <Image
            src={mark.brand.logo}
            alt={mark.brand.name}
            fill
            sizes={size === "sm" ? "96px" : "128px"}
            className="object-contain"
          />
        </div>
      </div>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md bg-plum px-2 font-serif tracking-wide text-white",
        size === "sm" ? "h-11 w-20 text-sm sm:h-12 sm:w-24 sm:text-base" : "h-14 min-w-14 px-3 text-lg"
      )}
    >
      {mark.text}
    </span>
  );
}
