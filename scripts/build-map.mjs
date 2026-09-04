/**
 * Regenerates data/westAfricaMap.ts from simplified public-domain country
 * boundary data. Run with: node scripts/build-map.mjs
 */
import { writeFileSync } from "fs";

const countries = [
  { code: "SEN", name: { fr: "Sénégal", en: "Senegal" } },
  { code: "MRT", name: { fr: "Mauritanie", en: "Mauritania" } },
  { code: "MLI", name: { fr: "Mali", en: "Mali" } },
  { code: "NER", name: { fr: "Niger", en: "Niger" } },
  { code: "GIN", name: { fr: "Guinée", en: "Guinea" } },
  { code: "GNB", name: { fr: "Guinée-Bissau", en: "Guinea-Bissau" } },
  { code: "GMB", name: { fr: "Gambie", en: "Gambia" } },
  { code: "BFA", name: { fr: "Burkina Faso", en: "Burkina Faso" } },
  { code: "TGO", name: { fr: "Togo", en: "Togo" } },
  { code: "BEN", name: { fr: "Bénin", en: "Benin" } },
  { code: "MAR", name: { fr: "Maroc", en: "Morocco" } },
];

const geo = {};
for (const c of countries) {
  const res = await fetch(`https://raw.githubusercontent.com/johan/world.geo.json/master/countries/${c.code}.geo.json`);
  const raw = await res.json();
  geo[c.code] = raw.features[0].geometry;
}

// bounding box across all countries
let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
function walk(geom, fn) {
  if (geom.type === "Polygon") geom.coordinates.forEach((ring) => ring.forEach(fn));
  else if (geom.type === "MultiPolygon") geom.coordinates.forEach((poly) => poly.forEach((ring) => ring.forEach(fn)));
}
for (const c of countries) {
  walk(geo[c.code], ([lon, lat]) => {
    minLon = Math.min(minLon, lon);
    maxLon = Math.max(maxLon, lon);
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
  });
}

// small padding
const padLon = (maxLon - minLon) * 0.04;
const padLat = (maxLat - minLat) * 0.04;
minLon -= padLon; maxLon += padLon; minLat -= padLat; maxLat += padLat;

const VIEW_W = 640;
const VIEW_H = 640 * (maxLat - minLat) / (maxLon - minLon);

function project([lon, lat]) {
  const x = ((lon - minLon) / (maxLon - minLon)) * VIEW_W;
  const y = ((maxLat - lat) / (maxLat - minLat)) * VIEW_H;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

function ringToPath(ring) {
  return ring.map(project).map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ") + " Z";
}

function geomToPath(geom) {
  if (geom.type === "Polygon") return geom.coordinates.map(ringToPath).join(" ");
  if (geom.type === "MultiPolygon") return geom.coordinates.map((poly) => poly.map(ringToPath).join(" ")).join(" ");
  return "";
}

const out = countries.map((c) => ({
  code: c.code,
  name: c.name,
  path: geomToPath(geo[c.code]),
}));

// Dakar approx coordinates
const dakar = project([-17.4441, 14.6928]);

const ts = `// AUTO-GENERATED from simplified public-domain country boundaries (johan/world.geo.json,
// itself derived from Natural Earth public domain data), projected with a simple
// equirectangular projection. Regenerate via scripts/build-map.mjs if needed.
export const mapViewBox = "0 0 ${VIEW_W} ${Math.round(VIEW_H * 100) / 100}";
export const dakarPoint: [number, number] = [${dakar[0]}, ${dakar[1]}];

export interface CountryShape {
  code: string;
  name: { fr: string; en: string };
  path: string;
}

export const countryShapes: CountryShape[] = ${JSON.stringify(out, null, 2)};
`;

writeFileSync("./data/westAfricaMap.ts", ts);
console.log("wrote data/westAfricaMap.ts");
console.log("viewBox", VIEW_W, VIEW_H, "dakar px", dakar);
