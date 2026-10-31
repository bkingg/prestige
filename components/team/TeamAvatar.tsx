function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Light monogram for team members without a portrait: a large airy circle
 * on near-white with a single hairline ring and a small gold arc, the
 * initials set light in the display serif so they breathe.
 */
export function TeamAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center rounded-full bg-gradient-to-b from-white to-butter/70 ring-1 ring-tan/50 ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-45">
        <circle cx="50" cy="50" r="49.5" fill="none" stroke="#E0A23A" strokeWidth="1" strokeDasharray="38 400" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-[1.65rem] font-light tracking-[0.08em] text-plum sm:text-[1.9rem]">
        {initials(name)}
      </span>
    </div>
  );
}
