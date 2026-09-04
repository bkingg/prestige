export const company = {
  legalName: "PRESTIGE SAU",
  commonName: "Prestige Cabinet Conseil",
  legalForm: {
    fr: "Société Anonyme Unipersonnelle",
    en: "Single-member limited company",
  },
  shareCapital: {
    fr: "10 000 000 FCFA",
    en: "10,000,000 FCFA",
  },
  foundedYear: 2000,
  address: {
    fr: "Lot 11, Liberté VI Extension – Dakar, Sénégal",
    en: "Lot 11, Liberty VI Extension – Dakar, Senegal",
  },
  poBox: "BP 47 – Dakar – Sénégal",
  phones: ["+221 33 827 94 96", "+221 77 858 28 36", "+221 77 637 16 07"],
  emails: ["prestige@orange.sn", "dioufali@orange.sn"],
  specialties: {
    fr: ["Conseil", "Études", "Formation", "Surveillance", "Contrôle technique"],
    en: ["Consulting", "Studies", "Training", "Monitoring", "Technical control"],
  },
  countriesOfOperation: [
    { fr: "Sénégal", en: "Senegal" },
    { fr: "Mauritanie", en: "Mauritania" },
    { fr: "Mali", en: "Mali" },
    { fr: "Niger", en: "Niger" },
    { fr: "Guinée", en: "Guinea" },
    { fr: "Guinée-Bissau", en: "Guinea-Bissau" },
    { fr: "Gambie", en: "Gambia" },
    { fr: "Burkina Faso", en: "Burkina Faso" },
    { fr: "Togo", en: "Togo" },
    { fr: "Bénin", en: "Benin" },
    { fr: "Maroc", en: "Morocco" },
  ],
  logistics: {
    fr: "PRESTIGE SAU opère à partir de locaux entièrement équipés, dotés d'espaces de travail opérationnels, de salles de réunion de grande capacité, d'infrastructures informatiques et de télécommunications intégrées, de ressources de formation internes et de solutions de transport dédiées.",
    en: "PRESTIGE SAU operates from fully equipped premises, featuring operational workspaces, large-capacity meeting rooms, integrated IT and telecommunications infrastructure, in-house training resources and dedicated transport solutions.",
  },
  humanResources: {
    fr: "PRESTIGE SAU s'appuie sur une équipe de soutien de base et un réseau de spécialistes et de consultants permanents dont l'expertise reconnue garantit des prestations de haut niveau. Les services sont fournis dans les délais impartis grâce à une planification rigoureuse, avec une attention particulière portée à l'optimisation des flux de travail pour une gestion fluide des opérations clients.",
    en: "PRESTIGE SAU relies on a core support team and a network of permanent specialists and consultants whose recognized expertise guarantees high-level service delivery. Services are provided on time thanks to rigorous planning, with particular attention paid to optimizing workflows for smooth client operations management.",
  },
} as const;
