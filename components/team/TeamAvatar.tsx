function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-butter-deep to-butter ring-1 ring-tan/60 ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="absolute inset-2.5 rounded-xl border border-tan/70" />
      <span className="font-serif text-3xl text-plum sm:text-4xl">{initials(name)}</span>
    </div>
  );
}
