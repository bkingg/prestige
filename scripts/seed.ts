/**
 * One-time / repeatable seed script: pushes the document-sourced content in
 * /data (extracted from Prestige's official presentation & references PDFs)
 * into the Sanity dataset, so the Studio starts populated with real content.
 *
 * Usage:
 *   1. Create a Sanity project (https://www.sanity.io/manage) and a dataset.
 *   2. Create an API token with "Editor" access.
 *   3. Set the following in .env.local:
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *        SANITY_API_TOKEN=sk...
 *   4. Run: npm run seed
 */
import "dotenv/config";
import { createClient } from "next-sanity";
import { expertiseAreas } from "../data/expertise";
import { team } from "../data/team";
import { projects } from "../data/projects";
import { company } from "../data/company";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in your environment.\n" +
      "Create a Sanity project first (npx sanity@latest init), then set the vars in .env.local."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function seed() {
  console.log(`Seeding dataset "${dataset}" on project ${projectId}...`);

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    legalName: company.legalName,
    commonName: company.commonName,
    legalForm: company.legalForm,
    shareCapital: company.shareCapital,
    foundedYear: company.foundedYear,
    address: company.address,
    poBox: company.poBox,
    phones: [...company.phones],
    emails: [...company.emails],
    specialties: company.specialties,
    countriesOfOperation: company.countriesOfOperation.map((c) => ({ _type: "localeString", ...c })),
    logistics: company.logistics,
    humanResources: company.humanResources,
  });
  console.log("✓ siteSettings");

  for (const [i, e] of expertiseAreas.entries()) {
    await client.createOrReplace({
      _id: `expertise-${e.slug}`,
      _type: "expertise",
      number: e.number,
      slug: { _type: "slug", current: e.slug },
      title: e.title,
      pitch: e.pitch,
      services: e.services,
      order: i,
    });
  }
  console.log(`✓ ${expertiseAreas.length} expertise areas`);

  for (const [i, m] of team.entries()) {
    await client.createOrReplace({
      _id: `team-${m.slug}`,
      _type: "teamMember",
      name: m.name,
      slug: { _type: "slug", current: m.slug },
      role: m.role,
      experience: m.experience,
      specialties: m.specialties,
      bio: m.bio,
      order: i,
    });
  }
  console.log(`✓ ${team.length} team members`);

  const batchSize = 50;
  for (let i = 0; i < projects.length; i += batchSize) {
    const batch = projects.slice(i, i + batchSize);
    const tx = client.transaction();
    for (const p of batch) {
      tx.createOrReplace({
        _id: `project-${p.id}`,
        _type: "project",
        title: p.title,
        period: p.period,
        yearStart: p.yearStart,
        yearEnd: p.yearEnd,
        client: p.client,
        country: p.country,
        role: p.role,
        category: p.category,
        sector: p.sector,
        group: p.group,
      });
    }
    await tx.commit();
    console.log(`✓ projects ${i + 1}–${Math.min(i + batchSize, projects.length)} / ${projects.length}`);
  }

  console.log("\nDone. Open /studio to review and edit the content.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
