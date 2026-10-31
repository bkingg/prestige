/**
 * Corporate photography in a Senegalese / West African context — boardrooms,
 * executives, engineers on site, infrastructure and recognisable Dakar
 * landmarks — sourced from Unsplash (free for commercial use, attribution
 * not required). `credit` and `sourceUrl` are still recorded for the file
 * history; <PhotoCredit> only renders a visible line for licenses that
 * require one.
 */
export interface Photo {
  src: string;
  alt: { fr: string; en: string };
  credit: string;
  license: string;
  sourceUrl: string;
}

const UNSPLASH = "Unsplash License";

function unsplash(file: string, id: string, fr: string, en: string): Photo {
  return {
    src: `/images/photos/${file}.jpg`,
    alt: { fr, en },
    credit: "Unsplash",
    license: UNSPLASH,
    sourceUrl: `https://images.unsplash.com/photo-${id}`,
  };
}

export const photos = {
  heroBoardroom: unsplash(
    "hero-boardroom",
    "1573164574572-cb89e39749b4",
    "Réunion de direction autour d'une grande table, dans une salle de conseil lumineuse",
    "Leadership meeting around a long table in a bright boardroom"
  ),
  heroRenaissance: unsplash(
    "hero-renaissance-dakar",
    "1721013244188-5c4f4593ee72",
    "Le Monument de la Renaissance africaine, Dakar",
    "The African Renaissance Monument, Dakar"
  ),
  heroEngineer: unsplash(
    "hero-engineer",
    "1621905251918-48416bd8575a",
    "Ingénieur en casque de chantier lors d'une intervention technique",
    "Engineer in a hard hat carrying out technical work"
  ),
  heroSolar: unsplash(
    "hero-solar",
    "1509391366360-2e959784a276",
    "Centrale solaire sous un ciel dégagé",
    "Solar power plant under a clear sky"
  ),
  heroOuakam: unsplash(
    "hero-ouakam-coast",
    "1611258490565-4a06c019e631",
    "La corniche de Ouakam et la mosquée de la Divinité, Dakar",
    "The Ouakam coastline and the Mosque of the Divinity, Dakar"
  ),
  dakarAerial: unsplash(
    "dakar-aerial-city",
    "1690323223790-4df744a1a033",
    "Vue aérienne de Dakar",
    "Aerial view of Dakar"
  ),
  solarFarmAerial: unsplash(
    "solar-farm-aerial",
    "1497435334941-8c899ee9e8e9",
    "Vue aérienne d'un parc solaire au milieu de la végétation",
    "Aerial view of a solar park surrounded by greenery"
  ),
  cityBoulevard: unsplash(
    "city-boulevard",
    "1766330301270-e4c652b1c538",
    "Grand boulevard urbain et immeubles au coucher du soleil",
    "Wide urban boulevard and buildings at sunset"
  ),
  villageAerial: unsplash(
    "village-aerial",
    "1594166167189-c0405007727b",
    "Vue aérienne d'une commune entourée de verdure",
    "Aerial view of a town surrounded by greenery"
  ),
  constructionCrane: unsplash(
    "construction-crane",
    "1630509493808-a2de856ccefa",
    "Grue et engins sur un chantier de génie civil",
    "Crane and machinery on a civil engineering site"
  ),
  waterTreatment: unsplash(
    "water-treatment",
    "1774789599304-cca1e1ffbb95",
    "Vue aérienne d'une station de traitement des eaux",
    "Aerial view of a water treatment plant"
  ),
  coastMap: unsplash(
    "coast-map",
    "1736117703416-f260ee174bac",
    "Carte topographique d'une côte",
    "Topographic map of a coastline"
  ),
  blueprint: unsplash(
    "blueprint",
    "1542621334-a254cf47733d",
    "Plans techniques et crayon sur une table de travail",
    "Technical drawings and a pencil on a work table"
  ),
  heroHandshake: unsplash(
    "hero-handshake",
    "1758519288905-38b7b00c1023",
    "Poignée de main entre deux dirigeants autour d'une table de travail",
    "Two executives shaking hands across a working table"
  ),
  executivePortrait: unsplash(
    "executive-portrait",
    "1666866834805-8cc91d4774ac",
    "Portrait d'un dirigeant souriant en costume et cravate",
    "Portrait of a smiling executive in suit and tie"
  ),
  managementAnalysis: unsplash(
    "management-analysis",
    "1628348068343-c6a848d2b6dd",
    "Dirigeant en costume analysant des graphiques financiers avec une calculatrice",
    "Executive in a suit analysing financial charts with a calculator"
  ),
  evaluationChart: unsplash(
    "evaluation-chart",
    "1543286386-2e659306cd6c",
    "Courbe de suivi tracée sur papier, stylos et règle sur un bureau en bois",
    "Trend chart drawn on paper, with pens and a ruler on a wooden desk"
  ),
  cabinetBoardroom: unsplash(
    "cabinet-boardroom",
    "1517502884422-41eaead166d4",
    "Salle de réunion lumineuse avec grande table en bois et vue sur la ville",
    "Bright meeting room with a large wooden table and a view over the city"
  ),
  referencesSigning: unsplash(
    "references-signing",
    "1521791055366-0d553872125f",
    "Signature d'un contrat au stylo plume",
    "Signing a contract with a fountain pen"
  ),
  projectWaterTower: unsplash(
    "project-water-tower",
    "1621355254187-22a61da5ec52",
    "Château d'eau en construction sous échafaudages, ciel bleu",
    "Water tower under construction in scaffolding against a blue sky"
  ),
  heritageBaobab: unsplash(
    "heritage-baobab",
    "1711711857661-b3111a5647d6",
    "Baobab centenaire au bord de l'eau, Sénégal",
    "Century-old baobab tree at the water's edge, Senegal"
  ),
} satisfies Record<string, Photo>;

export const expertisePhotos: Partial<Record<string, Photo>> = {
  "environnement-developpement-durable": photos.solarFarmAerial,
  "management-etudes-economiques-sectorielles": photos.managementAnalysis,
  "suivi-evaluation-planification-audit-conseil": photos.evaluationChart,
  "urbanisme-amenagement-paysage": photos.cityBoulevard,
  "decentralisation-collectivites-locales": photos.villageAerial,
  "etudes-controle-surveillance-travaux": photos.constructionCrane,
  "amenagement-drainage-assainissement-adduction-eau": photos.waterTreatment,
  geomatique: photos.coastMap,
};
