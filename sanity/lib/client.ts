import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Freshness is controlled by each route's `revalidate` export (Next's Data
  // Cache), not the Sanity CDN's own cache — keep this false so a revalidation
  // always reaches live content instead of a second, independent CDN cache.
  useCdn: false,
  perspective: "published",
});
