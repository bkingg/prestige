/**
 * Flat, filled illustration evoking Dakar's coastline — layered rooftops,
 * a dome, a lighthouse-like tower, port cranes and a horizon line — built
 * from solid geometric shapes rather than a stock photo or a literal
 * monument, so it reads as designed editorial artwork, not a wireframe.
 */
export function SkylineIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 480" className={className} aria-hidden="true">
      <rect x="0" y="360" width="720" height="120" className="fill-burgundy-deep" opacity="0.9" />
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${370 + i * 10} Q 180 ${350 + i * 10} 360 ${370 + i * 10} T 720 ${370 + i * 10}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.5 - i * 0.08}
          strokeWidth="1.5"
        />
      ))}

      <rect x="40" y="230" width="46" height="130" className="fill-burgundy" />
      <rect x="96" y="270" width="34" height="90" className="fill-burgundy" opacity="0.85" />
      <rect x="140" y="195" width="30" height="165" className="fill-gold" opacity="0.9" />

      <g>
        <rect x="330" y="150" width="18" height="210" className="fill-burgundy" />
        <path d="M312 150L339 100L366 150Z" className="fill-gold" />
        <rect x="333" y="120" width="12" height="30" className="fill-gold" />
      </g>

      <path
        d="M430 360V255C430 227 452 205 480 205C508 205 530 227 530 255V360Z"
        className="fill-burgundy"
      />
      <circle cx="480" cy="205" r="10" className="fill-gold" />

      <g opacity="0.9">
        <rect x="590" y="330" width="6" height="60" className="fill-charcoal" />
        <path d="M593 330L640 300" stroke="currentColor" className="text-charcoal" strokeWidth="5" />
        <rect x="636" y="296" width="6" height="14" className="fill-gold" />
        <rect x="660" y="345" width="6" height="45" className="fill-charcoal" />
        <path d="M663 345L700 320" stroke="currentColor" className="text-charcoal" strokeWidth="5" />
        <rect x="696" y="316" width="6" height="14" className="fill-gold" />
      </g>

      <circle cx="600" cy="110" r="46" className="fill-gold" opacity="0.14" />
      <circle cx="600" cy="110" r="46" fill="none" stroke="currentColor" strokeOpacity="0.3" />
    </svg>
  );
}

export function HeroMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 700" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          x2="600"
          y1={i * 80}
          y2={i * 80}
          stroke="currentColor"
          strokeOpacity="0.08"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`v-${i}`}
          y1="0"
          y2="700"
          x1={i * 90}
          x2={i * 90}
          stroke="currentColor"
          strokeOpacity="0.08"
        />
      ))}
      <path
        d="M120 60H320C398 60 460 122 460 200C460 278 398 340 320 340H220V620H120V60Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="2"
      />
      <circle cx="500" cy="150" r="90" stroke="currentColor" strokeOpacity="0.14" fill="none" />
      <path d="M0 700L200 500M120 700L320 500M240 700L440 500" stroke="url(#hero-fade)" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * A faint, fixed film-grain layer so flat color fields read as printed
 * paper rather than a flawless digital gradient — a small, cheap way to
 * avoid the glassy, over-smooth look common to AI-generated pages.
 */
export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.035] mix-blend-multiply"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

/**
 * A minimal rule: a short solid line with a single square tick — used as a
 * quiet divider under headings instead of a repeated chevron/arrow pattern.
 */
export function ChevronRule({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 8" className={className} aria-hidden="true">
      <line x1="0" y1="4" x2="64" y2="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="72" y="1" width="6" height="6" fill="currentColor" />
    </svg>
  );
}

export function DiamondGrid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 66 + (row % 2 === 0 ? 0 : 33)}
            y={row * 66}
            width="26"
            height="26"
            transform={`rotate(45 ${col * 66 + 13 + (row % 2 === 0 ? 0 : 33)} ${row * 66 + 13})`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.14"
          />
        ))
      )}
    </svg>
  );
}

export function ContourLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 34} C 150 ${10 + i * 34}, 250 ${70 + i * 34}, 400 ${30 + i * 34} S 600 ${50 + i * 34}, 600 ${40 + i * 34}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.35 - i * 0.02}
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`t-${i}`}
          x1={i * 50}
          x2={i * 50}
          y1="0"
          y2="8"
          stroke="currentColor"
          strokeOpacity="0.3"
        />
      ))}
    </svg>
  );
}

