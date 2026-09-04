import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "23tlr58b",
    dataset: "production",
  },
  studioHost: "prestige-cabinet-conseil",
  // Pin the deployed studio to the exact sanity/@sanity/vision versions in
  // node_modules instead of fetching whatever is newest at runtime — the
  // auto-updates default caused the deployed studio to crash with an
  // unrecoverable error that the local embedded /studio never hit.
  autoUpdates: false,
});
