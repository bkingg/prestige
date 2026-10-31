import type { Config } from "tailwindcss";

// Palette lifted from the client's own printed documents ("Présentation de
// PRESTIGE SAU"): ink headings, the plum wordmark, the amber disc of the
// logo, butter-yellow table headers and tan hairline rules on white paper.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black ink for type (no blue anywhere — the client asked for
        // a white site whose only color comes from the logo's plum and gold).
        ink: {
          DEFAULT: "#17161C",
          deep: "#0E0D12",
          soft: "#3A3842",
          wash: "#F5F3EF",
        },
        plum: {
          DEFAULT: "#8B1E52",
          deep: "#6E1641",
          light: "#B2477C",
          square: "#A65A70",
        },
        gold: {
          DEFAULT: "#E0A23A",
          light: "#F2C05E",
        },
        butter: {
          DEFAULT: "#FFF8E6",
          deep: "#FFF2CC",
        },
        tan: "#C4BC96",
        cream: "#FFFDF8",
        charcoal: "#1A1F2B",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      // Relative line-heights so larger arbitrary sizes at `lg` (e.g.
      // text-[2.75rem]) don't inherit a fixed rem leading and crush lines.
      fontSize: {
        "3xl": ["2rem", { lineHeight: "1.15" }],
        "4xl": ["2.5rem", { lineHeight: "1.1" }],
        "5xl": ["3.25rem", { lineHeight: "1.05" }],
        "6xl": ["4rem", { lineHeight: "1.02" }],
        "7xl": ["5rem", { lineHeight: "1" }],
        "8xl": ["6.5rem", { lineHeight: "0.98" }],
      },
      letterSpacing: {
        widest2: "0.25em",
        caps: "0.18em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(23,22,28,0.05), 0 8px 24px -8px rgba(23,22,28,0.16)",
        float: "0 2px 4px rgba(23,22,28,0.05), 0 24px 48px -16px rgba(23,22,28,0.26)",
      },
    },
  },
  plugins: [],
};

export default config;
