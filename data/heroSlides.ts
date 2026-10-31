import { photos, type Photo } from "@/data/photos";

type L = { fr: string; en: string };

export interface HeroSlide {
  photo: Photo;
  /** Short label shown on the slide tabs. */
  tab: L;
  eyebrow: L;
  title: L;
  body: L;
  href: string;
  cta: L;
  /** Horizontal focal point for object-position, so faces/landmarks stay in frame. */
  focus?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    photo: photos.heroHandshake,
    tab: { fr: "Conseil", en: "Advisory" },
    eyebrow: { fr: "Cabinet conseil · Dakar · Depuis 2000", en: "Consulting firm · Dakar · Since 2000" },
    title: {
      fr: "Transformer les enjeux complexes en décisions qui créent de l'impact.",
      en: "Turning complex challenges into decisions that create impact.",
    },
    body: {
      fr: "PRESTIGE accompagne les acteurs publics et privés dans leurs projets stratégiques, économiques, environnementaux et territoriaux.",
      en: "PRESTIGE supports public and private stakeholders in their strategic, economic, environmental and territorial projects.",
    },
    href: "/expertises",
    cta: { fr: "Découvrir nos expertises", en: "Discover our expertise" },
    focus: "70% 40%",
  },
  {
    photo: photos.heroRenaissance,
    tab: { fr: "Afrique de l'Ouest", en: "West Africa" },
    eyebrow: { fr: "Ancrage sénégalais · Portée régionale", en: "Senegalese roots · Regional reach" },
    title: {
      fr: "Ancrés à Dakar, présents dans onze pays.",
      en: "Rooted in Dakar, active in eleven countries.",
    },
    body: {
      fr: "Une connaissance intime du terrain, au service des institutions, des bailleurs et des opérateurs privés de la sous-région.",
      en: "Deep knowledge of the ground, serving institutions, donors and private operators across the sub-region.",
    },
    href: "/le-cabinet",
    cta: { fr: "Découvrir le cabinet", en: "About the firm" },
    focus: "55% 40%",
  },
  {
    photo: photos.heroEngineer,
    tab: { fr: "Ingénierie", en: "Engineering" },
    eyebrow: { fr: "Études · Contrôle · Surveillance", en: "Studies · Control · Supervision" },
    title: {
      fr: "La rigueur de l'ingénieur, de l'étude au chantier.",
      en: "Engineering rigour, from study to site.",
    },
    body: {
      fr: "Avant-projets, dossiers d'appel d'offres, contrôle et supervision de travaux en génie civil, eau et assainissement.",
      en: "Preliminary designs, tender documents, control and supervision of civil, water and sanitation works.",
    },
    href: "/expertises/etudes-controle-surveillance-travaux",
    cta: { fr: "Études & travaux", en: "Studies & works" },
    focus: "65% 35%",
  },
  {
    photo: photos.heroSolar,
    tab: { fr: "Environnement", en: "Environment" },
    eyebrow: { fr: "Environnement & développement durable", en: "Environment & sustainable development" },
    title: {
      fr: "Accompagner la transition énergétique et environnementale.",
      en: "Supporting the energy and environmental transition.",
    },
    body: {
      fr: "Études d'impact environnemental et social, plans de gestion, audits de conformité et adaptation au changement climatique.",
      en: "Environmental and social impact studies, management plans, compliance audits and climate adaptation.",
    },
    href: "/expertises/environnement-developpement-durable",
    cta: { fr: "Environnement", en: "Environment" },
  },
  {
    photo: photos.heroOuakam,
    tab: { fr: "Territoires", en: "Territories" },
    eyebrow: { fr: "Urbanisme · Aménagement · Géomatique", en: "Urban planning · Development · Geomatics" },
    title: {
      fr: "Des territoires mieux pensés, mieux aménagés.",
      en: "Better-planned, better-developed territories.",
    },
    body: {
      fr: "Planification urbaine, appui aux collectivités locales et données géospatiales pour éclairer la décision publique.",
      en: "Urban planning, support to local authorities and geospatial data to inform public decision-making.",
    },
    href: "/expertises/urbanisme-amenagement-paysage",
    cta: { fr: "Urbanisme & aménagement", en: "Urban planning" },
    focus: "50% 50%",
  },
];
