export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Hardcoded fallback matches `dataset` below: `sanity deploy` bundles this
// file with its own build tool, which doesn't load the Next.js .env file the
// way `next build` does, so the env var resolves to "" there and the
// deployed studio bundle ends up with no projectId at all ("Configuration
// must contain `projectId`"). Not a secret — it's already public in the
// client bundle either way.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "23tlr58b";

export const isSanityConfigured = Boolean(projectId);
