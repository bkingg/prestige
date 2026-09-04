interface LogoMarkProps {
  className?: string;
}

/**
 * Geometric "P" monogram: a burgundy bowl + stem with a small gold
 * ascending bar-chart (growth/performance) woven into the stem, plus a
 * single diamond accent — matching the brand reference mark.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 100 120" className={className} role="img" aria-label="PRESTIGE">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 6H62C79.6731 6 94 20.3269 94 38C94 55.6731 79.6731 70 62 70H46V114H30V6ZM46 22V54H62C70.8366 54 78 46.8366 78 38C78 29.1634 70.8366 22 62 22H46Z"
        className="fill-burgundy"
      />
      <g className="fill-gold">
        <rect x="23" y="94" width="5" height="14" />
        <rect x="30" y="86" width="5" height="22" />
        <rect x="37" y="78" width="5" height="30" />
        <rect x="44" y="70" width="5" height="38" className="fill-gold-light" />
      </g>
      <rect
        x="15.5"
        y="97.5"
        width="7"
        height="7"
        transform="rotate(45 19 101)"
        className="fill-gold-light"
      />
    </svg>
  );
}

export function LogoLockup({ className }: LogoMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-9 w-auto shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-wide text-burgundy">
          PRESTIGE
        </span>
        <span className="text-[9px] uppercase tracking-widest2 text-gold">
          Cabinet Conseil
        </span>
      </div>
    </div>
  );
}
