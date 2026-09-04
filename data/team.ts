export interface TeamMember {
  slug: string;
  name: string;
  role: { fr: string; en: string };
  experience: { fr: string; en: string };
  specialties: { fr: string[]; en: string[] };
  bio: { fr: string; en: string };
}

export const team: TeamMember[] = [
  {
    slug: "ali-diouf",
    name: "Ali Diouf",
    role: { fr: "Administrateur général", en: "General Manager" },
    experience: { fr: "+35 ans d'expérience", en: "+35 years of experience" },
    specialties: {
      fr: ["Management maritime et portuaire", "Stratégie d'entreprise", "Gouvernance", "Marketing"],
      en: ["Maritime and port management", "Corporate strategy", "Governance", "Marketing"],
    },
    bio: {
      fr: "Titulaire d'un Master in Business Administration (MBA) des universités américaines (1994), spécialisé en management et marketing, Ali Diouf dispose également d'un certificat du Programme Intégré de Management de l'École Nationale d'Administration et de Magistrature (ENAM, Dakar), de l'École Nationale d'Administration Publique (ENAP, Québec, 1989) et du Certificat en Gestion et Organisation Portuaires – Produits Dangereux et Statistiques (Université d'Anvers, Belgique, 1989).\n\nIl jouit d'une expérience de plus de trente ans dans le domaine du management, notamment dans le management maritime et portuaire (plus de 20 ans au Port de Dakar où il a occupé tour à tour les fonctions de chef de la Division du matériel, Auditeur interne, Directeur du Port de Pêche et Directeur Commercial et de la Perspective), avant de mettre en place son propre cabinet de conseils. Il a été administrateur de grandes sociétés d'État dont la Société Nationale des Chemins de Fer du Sénégal (SNCF), Trade Point Sénégal, les Entrepôts Sénégalais au Mali, et le Conseil Sénégalais des Chargeurs (COSEC).\n\nEn plus d'avoir géré l'exploitation de la liaison maritime Dakar-Gorée, il fut consultant et chef de mission de l'étude sur « la modernisation de la Liaison Maritime Dakar-Ziguinchor ». Il a par ailleurs assuré les fonctions de maire de la commune des HLM (Dakar) de 2009 à 2014. Il est parfaitement bilingue français/anglais.",
      en: "Holding a Master of Business Administration (MBA) from American universities (1994) specializing in management and marketing, Ali Diouf also holds a certificate from the Integrated Management Program of the National School of Administration and Magistracy (ENAM, Dakar), the National School of Public Administration (ENAP, Quebec, 1989), and a Certificate in Port Management and Organization – Hazardous Products and Statistics (University of Antwerp, Belgium, 1989).\n\nHe has over thirty years of experience in management, particularly in maritime and port management (more than 20 years at the Port of Dakar, where he successively held the positions of Head of the Equipment Division, Internal Auditor, Director of the Fishing Port, and Commercial and Strategic Planning Director), before establishing his own consulting firm. He has served as a director of major state-owned companies, including the National Railway Company of Senegal (SNCF), Trade Point Senegal, the Senegalese Warehouses in Mali, and the Senegalese Shippers' Council (COSEC).\n\nIn addition to managing the operation of the Dakar-Gorée maritime link, he was a consultant and head of mission for the study on the \"modernization of the Dakar-Ziguinchor Maritime Link.\" He also served as mayor of the HLM district (Dakar) from 2009 to 2014. He is fully bilingual in French and English.",
    },
  },
  {
    slug: "mactar-diouf",
    name: "Mactar Diouf",
    role: { fr: "Économiste-Financier, Chargé de projets", en: "Economist-Financial Analyst, Project Manager" },
    experience: { fr: "15 ans d'expérience", en: "15 years of experience" },
    specialties: {
      fr: ["Business plan", "Suivi-évaluation", "Modèles de prévisions financières", "Financement TPE/PME"],
      en: ["Business plan design", "Monitoring and evaluation", "Financial forecasting models", "SME financing"],
    },
    bio: {
      fr: "Titulaire d'un diplôme universitaire en Économie d'entreprise (Université Hassan 1er de Settat, Maroc, 2005), Mactar Diouf a passé une première phase de sa vie professionnelle dans le secteur des services financiers (assurance et banque) avant d'intégrer rapidement le monde du conseil. Fort de ses expériences dans le secteur financier, il a su développer un véritable savoir-faire dans l'assistance en demande de financement TPE/PME et dans la réalisation de plans d'affaires.\n\nSes domaines d'intervention couvrent la conception de business plan, le suivi et l'évaluation, la formation et la réalisation de modèles de prévisions financières.",
      en: "Holding a university degree in Business Economics (Hassan I University of Settat, Morocco, 2005), Mactar Diouf spent the first phase of his professional life in the financial services sector (insurance and banking) before quickly moving into the world of consulting. Drawing on his experience in the financial sector, he has developed considerable expertise in assisting SMEs with their financing applications and in developing business plans.\n\nHis areas of expertise include business plan design, monitoring and evaluation, training and the creation of financial forecasting models.",
    },
  },
  {
    slug: "ndongo-mane-kebe",
    name: "Ndongo Mané Kébé",
    role: {
      fr: "Spécialiste en suivi-évaluation des politiques publiques",
      en: "Specialist in monitoring and evaluation of public policies",
    },
    experience: { fr: "Docteur en Sciences économiques", en: "Doctor of Economics" },
    specialties: {
      fr: [
        "Statistique et modélisation économétrique",
        "Gestion Axée sur les Résultats",
        "Planification stratégique et opérationnelle",
        "Évaluation économique de projets",
      ],
      en: [
        "Statistics and econometric modeling",
        "Results-Based Management",
        "Strategic and operational planning",
        "Economic evaluation of development projects",
      ],
    },
    bio: {
      fr: "Docteur en Sciences économiques, spécialiste en Évaluation économique de projets, Ndongo Mané Kébé est enseignant-chercheur en sciences économiques au Laboratoire de recherches économiques et monétaires de la Faculté des sciences économiques et de gestion de l'Université Cheikh Anta Diop (LAREM/FASEG). Il a été chargé de mission de la Plateforme des OSC de l'eau et de l'assainissement/Sénégal (POSCEAS).\n\nSes domaines d'intervention couvrent la statistique et la modélisation économétrique, la Gestion Axée sur les Résultats, le suivi-évaluation, la planification stratégique et opérationnelle, l'évaluation économique de projets de développement, la conduite du changement, ainsi que les procédures d'appel d'offres et de passation de marchés.",
      en: "Dr. Kébé, a Doctor of Economics specializing in the economic evaluation of projects, is a lecturer and researcher in economics at the Laboratory for Economic and Monetary Research of the Faculty of Economics and Management at Cheikh Anta Diop University (LAREM/FASEG). He previously served as a project manager for the Platform of Water and Sanitation CSOs / Senegal (POSCEAS).\n\nHis areas of expertise include statistics and econometric modeling, Results-Based Management, monitoring and evaluation, strategic and operational planning, economic evaluation of development projects, change management, and tendering and procurement procedures.",
    },
  },
  {
    slug: "babou-faye",
    name: "Babou Faye",
    role: {
      fr: "Spécialiste en ingénierie territoriale, urbanisme et systèmes d'information géographique",
      en: "Specialist in territorial engineering, urban planning and geographic information systems",
    },
    experience: { fr: "Géographe de formation", en: "Geographer by training" },
    specialties: {
      fr: ["Cartographie numérique", "Systèmes d'information géographique", "Topographie", "Traitement d'image", "Data analyse"],
      en: ["Digital mapping", "Geographic information systems", "Topography", "Image processing", "Data analysis"],
    },
    bio: {
      fr: "Géographe de formation, technicien en gouvernance foncière et ingénieur territorial en urbanisme et système d'information géographique, Babou Faye est chargé des projets d'aménagement, d'urbanisme et des opérations cartographiques au sein du cabinet Prestige. Après son parcours académique, il a travaillé avec des institutions publiques et privées (CSE, ANSD, Commune de Nguékhokh) et des bureaux d'études (Défi Afrique) au Sénégal, dans des domaines variés tels que les SIG, le foncier et la gestion urbaine.\n\nSes domaines de compétences sont la planification de projets d'aménagement et d'urbanisme, les cartographies numériques, les systèmes d'information géographique, la topographie, le traitement d'image et la data analyse.",
      en: "A geographer by training, a land governance technician, and a territorial engineer specializing in urban planning and geographic information systems, Babou Faye is in charge of development, urban planning, and mapping projects at the Prestige firm. Following his academic career, he worked with public and private institutions (CSE, ANSD, Nguékhokh Municipality) and consulting firms (Défi Afrique) in Senegal in diverse fields such as GIS, land management, and urban planning.\n\nHis areas of expertise are: planning of development and urban planning projects, digital mapping, geographic information systems, topography, image processing and data analysis.",
    },
  },
  {
    slug: "mohamed-bachir-kane",
    name: "Mohamed Bachir Kane",
    role: {
      fr: "Environnementaliste, spécialiste en gestion des rejets miniers et en gestion des risques",
      en: "Environmentalist specializing in mining waste management and risk management",
    },
    experience: { fr: "Master en Environnement (UCAD)", en: "Master's degree in Environment (UCAD)" },
    specialties: {
      fr: ["Études d'impact", "Gestion des effluents", "Restauration de sites miniers", "PGES", "Gestion des risques industriels"],
      en: ["Impact assessments", "Effluent management", "Mine site restoration", "ESMPs", "Industrial risk management"],
    },
    bio: {
      fr: "Titulaire d'une licence en Biologie, Chimie et Géosciences de la Faculté des sciences et techniques de l'Université Cheikh Anta Diop et d'un master en Environnement et gestion des rejets miniers à l'Institut des Sciences de l'Environnement de l'UCAD, Mohamed Bachir Kane est engagé dans la gestion des rejets miniers, la lutte contre la pollution industrielle et la protection de l'environnement. Il travaille actuellement au cabinet Prestige sur des études environnementales, des audits de conformité et des dossiers techniques. Il a également acquis une solide expérience à la DIREC (Direction de la Réglementation Environnementale et du Contrôle), aux côtés de nombreux bureaux de renom, dans le contrôle et le suivi des appareils sous pression.\n\nSes travaux de recherche portent sur les impacts environnementaux du mercure dans l'orpaillage artisanal à Kédougou. Compétences clés : études d'impact, gestion des effluents, restauration de sites miniers, analyse des sols et eaux, PGES, rédaction technique, monitoring des sites miniers, gestion des risques industriels.",
      en: "Holding a bachelor's degree in Biology, Chemistry, and Geosciences from the Faculty of Science and Technology at Cheikh Anta Diop University and a master's degree in Environment and Mining Waste Management from the Institute of Environmental Sciences at Cheikh Anta Diop University (UCAD), Mohamed Bachir Kane is committed to mining waste management, combating industrial pollution, and environmental protection. He currently works at PRESTIGE on environmental studies, compliance audits, and technical documentation. He also gained extensive experience at DIREC (Directorate of Environmental Regulations and Control), working alongside numerous renowned firms, in the inspection and monitoring of pressure vessels.\n\nHis research focuses on the environmental impacts of mercury in artisanal gold mining in Kédougou. Key skills: impact assessments, effluent management, mine site restoration, soil and water analysis, environmental and social management plans (ESMPs), technical writing, mine site monitoring, industrial risk management.",
    },
  },
];
