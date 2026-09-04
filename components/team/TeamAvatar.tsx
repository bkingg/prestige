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
      className={`relative flex aspect-square items-center justify-center border border-gold/40 bg-burgundy-deep ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="absolute inset-3 border border-gold/25" />
      <span className="font-serif text-3xl text-cream sm:text-4xl">{initials(name)}</span>
    </div>
  );
}
