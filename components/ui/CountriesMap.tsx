import { mapViewBox, dakarPoint, countryShapes } from "@/data/westAfricaMap";

/**
 * A real, lightweight outline map of the 11 countries PRESTIGE operates in
 * — actual simplified borders (public-domain boundary data), not an
 * abstract dot-and-line diagram. Senegal is filled solid, the rest are a
 * quiet neutral silhouette group, with a single marker on Dakar. The
 * `dark` prop swaps the palette for use on a burgundy-deep background.
 */
export function CountriesMap({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <svg viewBox={mapViewBox} className={className} aria-hidden="true">
      <g>
        {countryShapes.map((c) => (
          <path
            key={c.code}
            d={c.path}
            className={
              c.code === "SEN"
                ? dark
                  ? "fill-cream stroke-cream"
                  : "fill-burgundy stroke-cream"
                : dark
                  ? "fill-cream/[0.08] stroke-cream/20"
                  : "fill-charcoal/[0.06] stroke-charcoal/15"
            }
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ))}
      </g>
      <circle cx={dakarPoint[0]} cy={dakarPoint[1]} r="5" className="fill-gold" />
      <circle
        cx={dakarPoint[0]}
        cy={dakarPoint[1]}
        r="9"
        fill="none"
        className="stroke-gold"
        strokeWidth="1"
        opacity="0.6"
      />
      <text
        x={dakarPoint[0] + 14}
        y={dakarPoint[1] + 4}
        className="fill-current text-[13px] font-medium uppercase tracking-wide"
      >
        Dakar
      </text>
    </svg>
  );
}
