/**
 * Real, freely-licensed photographs of actual public places in Senegal
 * (Wikimedia Commons), chosen to match specific page content rather than
 * generic stock imagery. Attribution is required by their CC BY / BY-SA
 * licenses and is surfaced via <PhotoCredit>.
 */
export interface Photo {
  src: string;
  alt: { fr: string; en: string };
  credit: string;
  license: string;
  sourceUrl: string;
}

export const photos = {
  heroPort: {
    src: "/images/photos/hero-port-dakar.jpg",
    alt: {
      fr: "Le port autonome de Dakar et la ville de Dakar",
      en: "The autonomous port of Dakar and the city of Dakar",
    },
    credit: "Babacar Dioum",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Le_port_autonome_de_Dakar_et_la_ville_de_Dakar.jpg",
  },
  lacRose: {
    src: "/images/photos/lac-rose.jpg",
    alt: { fr: "Le Lac Rose (Lac Retba), Sénégal", en: "Lake Retba (the Pink Lake), Senegal" },
    credit: "Issiaga0",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lac_Rose_S%C3%A9n%C3%A9gal_16.jpg",
  },
  aerialDakar: {
    src: "/images/photos/aerial-dakar.jpg",
    alt: { fr: "Vue aérienne de Dakar", en: "Aerial view of Dakar" },
    credit: "Ji-Elle",
    license: "Domaine public",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dakar-Aerial2.jpg",
  },
  vueAerienneDakar: {
    src: "/images/photos/vue-aerienne-dakar.jpg",
    alt: { fr: "Vue aérienne de la trame urbaine de Dakar", en: "Aerial view of Dakar's urban fabric" },
    credit: "CNT Guinée",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rien_de_Dakar.jpg",
  },
  portHarbour: {
    src: "/images/photos/port-harbour-aerial.jpg",
    alt: { fr: "Vue aérienne du port de Dakar", en: "Aerial view of the port of Dakar" },
    credit: "KaBa",
    license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:DakarHarbourAerial.JPG",
  },
  pontFaidherbe: {
    src: "/images/photos/pont-faidherbe.jpg",
    alt: {
      fr: "Le pont Faidherbe reliant Sor à Ndar, Saint-Louis",
      en: "The Faidherbe Bridge connecting Sor to Ndar, Saint-Louis",
    },
    credit: "Issathiome",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pont_Faidherbe_connecting_Sor_to_Ndar_in_Saint_Louis.jpg",
  },
  roadConstruction: {
    src: "/images/photos/road-construction-kedougou.jpg",
    alt: {
      fr: "Travaux de construction de la piste Kédougou–Salémata",
      en: "Road construction works on the Kédougou–Salémata road",
    },
    credit: "James Courtright",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Road_construction_on_Kedougou_-_Salimata_road.jpg",
  },
  dakarPlateau: {
    src: "/images/photos/dakar-plateau.jpg",
    alt: { fr: "Le Plateau, quartier administratif et des affaires de Dakar", en: "Le Plateau, Dakar's administrative and business district" },
    credit: "Ji-Elle",
    license: "Domaine public",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:DakarPlateau.JPG",
  },
  barrageDiama: {
    src: "/images/photos/barrage-diama.jpg",
    alt: {
      fr: "Le barrage de Diama sur le fleuve Sénégal",
      en: "The Diama dam on the Senegal River",
    },
    credit: "Manu25",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barrage_de_Diama.jpg",
  },
  communeThies: {
    src: "/images/photos/commune-thies.jpg",
    alt: {
      fr: "Quartier résidentiel dans une commune de la région de Thiès",
      en: "A residential neighborhood in a commune in the Thiès region",
    },
    credit: "Deyonro23",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Villa_dans_un_village_%C3%A0_thi%C3%A8s.jpg",
  },
  placeIndependance: {
    src: "/images/photos/place-independance-dakar.jpg",
    alt: {
      fr: "Vue aérienne de la Place de l'Indépendance, Dakar",
      en: "Aerial view of Place de l'Indépendance, Dakar",
    },
    credit: "Cabinet Prestige",
    license: "Tous droits réservés",
    sourceUrl: "https://drive.google.com/file/d/13YauLxnenXqI0GYPuNPO0A1zMDFkTy-u/view",
  },
  consultantBureau: {
    src: "/images/photos/consultant-bureau.jpg",
    alt: {
      fr: "Consultant du cabinet dans un bureau moderne",
      en: "A firm consultant in a modern office",
    },
    credit: "Vecteezy",
    license: "Licence Vecteezy",
    sourceUrl: "https://drive.google.com/file/d/1l5I7HPE4f1SaGGkeEw1HLyUmcwB10UhI/view",
  },
  analyseStrategique: {
    src: "/images/photos/analyse-strategique.jpg",
    alt: {
      fr: "Échange autour d'une analyse stratégique et de graphiques",
      en: "Discussion around a strategic analysis and charts",
    },
    credit: "Vecteezy",
    license: "Licence Vecteezy",
    sourceUrl: "https://drive.google.com/file/d/1F0BiqqwaZ-Z5JUp5Ny6uB_5Bu1Rl0j_U/view",
  },
  heroGrowth: {
    src: "/images/photos/hero-growth-abstract.jpg",
    alt: {
      fr: "Illustration abstraite de croissance dans un bureau moderne",
      en: "Abstract growth illustration in a modern office",
    },
    credit: "Illustration générée par IA",
    license: "Usage interne",
    sourceUrl:
      "https://images.openai.com/static-rsc-4/rY_CqQy0ze7qVkrzQcoUlvibosvYwOpshqVAa72r7CHf3WgHkxN_DKeItOXmbNDQUsiIF8GYiXWkj5VvBAt4zDhKz7u3VCo4hIjRyyfq_PjvZJ-Z6D1aDQkS9mqMPEfu28avcq04Afg2Rz9y_VTz3kKDRBvaFvZkrQXV3DoAWRCraZpI8nRrk__VSPzsfrp3?purpose=fullsize",
  },
} satisfies Record<string, Photo>;

export const expertisePhotos: Partial<Record<string, Photo>> = {
  "environnement-developpement-durable": photos.lacRose,
  "urbanisme-amenagement-paysage": photos.vueAerienneDakar,
  "management-etudes-economiques-sectorielles": photos.portHarbour,
  "etudes-controle-surveillance-travaux": photos.heroPort,
  "amenagement-drainage-assainissement-adduction-eau": photos.barrageDiama,
  "decentralisation-collectivites-locales": photos.communeThies,
  geomatique: photos.aerialDakar,
};
