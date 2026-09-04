export type ProjectCategory =
  | "environnement"
  | "urbanisme"
  | "developpement-local"
  | "economie"
  | "suivi-evaluation"
  | "infrastructure"
  | "formation";

export const categoryLabels: Record<ProjectCategory, { fr: string; en: string }> = {
  environnement: { fr: "Environnement & Social", en: "Environment & Social" },
  urbanisme: { fr: "Urbanisme & Aménagement", en: "Urban Planning & Development" },
  "developpement-local": { fr: "Développement local", en: "Local Development" },
  economie: { fr: "Études économiques", en: "Economic Studies" },
  "suivi-evaluation": { fr: "Suivi-évaluation & Audit", en: "Monitoring, Evaluation & Audit" },
  infrastructure: { fr: "Maîtrise d'œuvre & BTP", en: "Project Supervision & Works" },
  formation: { fr: "Formation & Renforcement de capacités", en: "Training & Capacity Building" },
};

export interface Project {
  id: string;
  period: string;
  yearStart: number;
  yearEnd: number;
  title: string;
  client: string;
  country: string;
  role: string;
  category: ProjectCategory;
  sector: string;
  group: string;
}

// Row shape: [period, yearStart, yearEnd, title, client, country, role, category, sector, group]
type Row = [string, number, number, string, string, string, string, ProjectCategory, string, string];

const rows: Row[] = [
  // 1.1 — Évaluations environnementales et sociales — EIES
  ["2026 – en cours", 2026, 2026, "Étude d'impact environnemental et social (EIES) pour la création d'une nouvelle usine de fabrication de céramique et de porcelaine dans la zone économique spéciale APIX de Diass", "SENECERA SAU", "Sénégal", "Consultant unique", "environnement", "Industrie", "EIES"],
  ["2024", 2024, 2024, "EIES de 400 km de pistes rurales dans des collectivités territoriales de Tambacounda, Kédougou, Kolda et Sédhiou (lot 3) — Financement BAD", "Projet de Désenclavement des Zones de Production (PDZP) / PNDL", "Sénégal", "Consultant unique", "environnement", "Infrastructure", "EIES"],
  ["2017 – 2018", 2017, 2018, "EIES du projet de raccordement électrique 30 kV Marssassoum à partir de Tangori — Financement Banque Mondiale", "Senelec / Projet d'Appui au Secteur de l'Électricité (PASE)", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "EIES"],
  ["2017 – 2018", 2017, 2018, "EIES du projet de raccordement électrique 30 kV Vélingara – Nétéboulou — Financement Banque Mondiale", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "EIES"],
  ["2017 – 2018", 2017, 2018, "EIES du projet de raccordement électrique 30 kV Djéndé – Sakar-Diana Malari – Kolda — Financement Banque Mondiale", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "EIES"],
  ["Mars – Juillet 2017", 2017, 2017, "EIES des travaux d'urgence de protection côtière des quartiers de la Langue de Barbarie à Saint-Louis", "APRHN / Ministère de l'Hydraulique et de l'Assainissement / Eiffage Sénégal", "Sénégal", "Consultant unique", "environnement", "Environnement", "EIES"],
  ["2013 – 2014", 2013, 2014, "EIES du projet de construction d'un complexe hôtelier sur la Voie de Dégagement Nord — Le Park Inn", "Cabinet Simon & Christiansen Afrique", "Sénégal", "Consultant unique", "environnement", "Tourisme & Hôtellerie", "EIES"],
  ["Mars 2013", 2013, 2013, "EIES du projet d'extension de la capacité de stockage de CO2 et N2 à Dakar", "Air Liquide", "Sénégal", "Consultant unique", "environnement", "Industrie", "EIES"],
  ["Janvier – Mars 2013", 2013, 2013, "EIES des travaux portuaires de Foundiougne", "S&D Suarl", "Sénégal", "Consultant unique", "environnement", "Transport & Portuaire", "EIES"],
  ["2013 – 2014", 2013, 2014, "EIES du projet de deux centrales à barges au HFO de 70 MW", "APIX / Cellule Énergie", "Sénégal", "Groupement avec HPR Ankh et HDS Canada", "environnement", "Énergie", "EIES"],
  ["Janvier 2013", 2013, 2013, "EIES des travaux portuaires de Foundiougne", "ANAM / Samsung Corporation", "Sénégal", "Consultant unique", "environnement", "Transport & Portuaire", "EIES"],
  ["2012 – 2013", 2012, 2013, "EIES du projet d'exploitation d'une centrale d'enrobage à Ndafonga, région de Fatick", "Eiffage Sénégal", "Sénégal", "Consultant unique", "environnement", "Infrastructure", "EIES"],
  ["2012", 2012, 2012, "EIES du projet d'aménagement de l'exploitation agricole de Temeye Agro dans la communauté rurale de Mbane, région de Saint-Louis", "Temeye Agro Sarl", "Sénégal", "Consultant unique", "environnement", "Agriculture", "EIES"],
  ["2011 – 2012", 2011, 2012, "EIES du projet d'exploitation d'une centrale d'enrobage, d'une centrale à béton et d'une centrale à grave sur le site Eiffage de Diamniadio", "Eiffage Sénégal", "Sénégal", "Consultant unique", "environnement", "Infrastructure", "EIES"],
  ["Jan – Avril 2011", 2011, 2011, "Évaluations environnementales des microprojets soumis au financement du PNDL — Dakar, Thiès, Diourbel, Fatick", "Programme National de Développement Local (PNDL)", "Sénégal", "HPR Ankh Consultants / Prestige", "environnement", "Développement local", "EIES"],
  ["Jan – Avril 2011", 2011, 2011, "Évaluations environnementales des microprojets soumis au financement du PNDL — Louga, Matam, Saint-Louis", "Programme National de Développement Local (PNDL)", "Sénégal", "HPR Ankh Consultants / Prestige", "environnement", "Développement local", "EIES"],
  ["Jan – Avril 2011", 2011, 2011, "Évaluations environnementales des microprojets soumis au financement du PNDL — Kaolack, Kaffrine, Kédougou, Tambacounda, Kolda, Sédhiou, Ziguinchor", "Programme National de Développement Local (PNDL)", "Sénégal", "HPR Ankh Consultants / Prestige", "environnement", "Développement local", "EIES"],
  ["2009", 2009, 2009, "EIES des travaux de construction de 94 km de pistes de production dans la région de Tambacounda — Financement IDA/ACDI", "PDMAS", "Sénégal", "Consultant unique", "environnement", "Infrastructure", "EIES"],
  ["2008", 2008, 2008, "EIES et plan de prévention du programme de forages et de production de gaz dans le permis de Tamna", "FORTESA International – Sénégal", "Sénégal", "Consultant unique", "environnement", "Mines & Industrie", "EIES"],
  ["2008", 2008, 2008, "EIES du plan d'investissement 2007–2011 de la SUNEOR", "SUNEOR (SONACOS)", "Sénégal", "Consultant unique", "environnement", "Industrie", "EIES"],
  ["2006", 2006, 2006, "EIES du projet de construction d'un terminal céréalier au Port Autonome de Dakar", "Société Africia", "Sénégal", "DDH Environnement Ltée / Prestige", "environnement", "Transport & Portuaire", "EIES"],
  ["2005", 2005, 2005, "EIES et plan de mesures d'urgence pour la fermeture du puits gazier Retba1", "PETROSEN", "Sénégal", "Consultant unique", "environnement", "Mines & Industrie", "EIES"],
  ["2004", 2004, 2004, "Étude d'évaluation des impacts environnementaux de l'extension du terminal à conteneurs au Port Autonome de Dakar", "Port Autonome de Dakar", "Sénégal", "Groupement avec DDH Environnement Ltée (Canada)", "environnement", "Transport & Portuaire", "EIES"],
  ["2004", 2004, 2004, "EIES de la première tranche de la ZAC de la Ville Nouvelle de Diamniadio (2 500 ha)", "Ministère de l'Urbanisme et de l'Aménagement du Territoire", "Sénégal", "Consultant unique", "environnement", "Urbanisme", "EIES"],
  ["2004", 2004, 2004, "Impacts environnementaux du déversement d'hydrocarbures à Gossas : analyses et évaluations suite au déraillement au PK 179+500", "Transrail SA", "Sénégal", "Consultant unique", "environnement", "Transport & Portuaire", "EIES"],
  ["2004", 2004, 2004, "Vérification environnementale des installations aéroportuaires du Sénégal et plan de gestion environnementale des aéroports", "Direction de l'Aviation Civile (actuelle ANACIM) / Programme sectoriel des transports N°2", "Sénégal", "Chef de file, Groupement avec DDH (Canada)", "environnement", "Transport & Portuaire", "EIES"],
  ["2003", 2003, 2003, "Étude sur les impacts sociaux liés à la décharge de Gandoul", "ERECO SA", "Sénégal", "Consultant unique", "environnement", "Environnement", "EIES"],
  // PGES
  ["2022", 2022, 2022, "Études E&S restreintes et PGES des 7 projets du programme Smartgrid — addition de câbles souterrains Hann-Patte d'Oie", "Senelec / AFD", "Sénégal", "Consultant unique", "environnement", "Énergie", "PGES"],
  ["2017 – 2018", 2017, 2018, "PGES du projet d'extension et de densification des réseaux — Dabo — Financement Banque Mondiale", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "PGES"],
  ["2017 – 2018", 2017, 2018, "PGES du projet d'extension et de densification des réseaux — Vélingara — Financement Banque Mondiale", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "PGES"],
  // EESS
  ["2019 – 2020", 2019, 2020, "EESS du développement de la ville de Chami — évaluation des impacts sur la Valeur Universelle Exceptionnelle du Parc National du Banc d'Arguin", "Programme Gestion Intégrée et Résilience Côtière (PRCM)", "Mauritanie", "Consultant unique", "environnement", "Environnement", "EESS"],
  ["2016", 2016, 2016, "Préparation de l'EESS du Plan d'Urbanisme de Détails de Pikine et Guédiawaye à l'horizon 2035", "Agence de Développement Municipal / PROGEP", "Sénégal", "Groupement avec L'Atelier Urbain (Canada)", "environnement", "Urbanisme", "EESS"],
  // AIE
  ["2023", 2023, 2023, "Analyse environnementale initiale pour la construction d'une installation de stockage de déchets non-dangereux (ISDND) à Méckhé", "Commune de Méckhé / GESCOD", "Sénégal", "Consultant unique", "environnement", "Gestion des déchets", "AIE"],
  ["2022", 2022, 2022, "Analyse environnementale initiale du projet de construction d'une usine de fabrication de tuyaux d'assainissement en résine — zone économique spéciale APIX de Diass", "Africa Pipe Industries", "Sénégal", "Consultant unique", "environnement", "Industrie", "AIE"],
  ["2022", 2022, 2022, "Analyse environnementale initiale d'un héliport à Toubacouta, région de Fatick", "Ministère du Tourisme et du Transport Aérien", "Sénégal", "Consultant unique", "environnement", "Transport & Portuaire", "AIE"],
  ["2021", 2021, 2021, "Analyse environnementale initiale pour la construction d'une installation de stockage de déchets non-dangereux (ISDND) à Nguéniène", "Commune de Nguéniène / GESCOD", "Sénégal", "Consultant unique", "environnement", "Gestion des déchets", "AIE"],
  ["2017 – 2018", 2017, 2018, "Analyse environnementale initiale du raccordement électrique 30 kV Pakour – Kounkané – Dabo", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "AIE"],
  ["2017 – 2018", 2017, 2018, "Analyse environnementale initiale du raccordement électrique 30 kV Médina Gounass à partir de Bokonto", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "AIE"],
  ["2017 – 2018", 2017, 2018, "Analyse environnementale initiale du raccordement électrique 30 kV Kolda – Médina Yoro Foulah – Pata – Ndorma", "Senelec / PASE", "Sénégal", "Chef de file, Groupement Prestige / Ingérco Mali", "environnement", "Énergie", "AIE"],
  ["2015 – 2016", 2015, 2016, "Études environnementales préliminaires des projets d'amélioration de la fluidité du transport à Dakar — révision du Plan Directeur d'Urbanisme horizon 2035", "Agence Japonaise de Coopération Internationale (JICA) / Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Consultant unique", "environnement", "Urbanisme", "AIE"],
  ["2013", 2013, 2013, "Analyse environnementale initiale d'une unité de valorisation (biogaz) de déchets d'abattoir", "Société de Gestion des Abattoirs du Sénégal (SOGAS)", "Sénégal", "Consultant unique", "environnement", "Gestion des déchets", "AIE"],
  ["2011", 2011, 2011, "Analyse environnementale initiale du Programme de Développement Économique des Niayes (PADEN)", "PADEN / Direction Régionale du Développement Rural", "Sénégal", "Groupement avec HPR Ankh Consultants", "environnement", "Agriculture", "AIE"],
  ["2009", 2009, 2009, "Analyse environnementale initiale du transfert de l'atelier de l'entreprise Eiffage à Diamniadio", "Eiffage Sénégal", "Sénégal", "Consultant unique", "environnement", "Industrie", "AIE"],
  // Audit E&S
  ["2026 – en cours", 2026, 2026, "Audit environnemental de la mise en œuvre du PGES et de l'EIES", "Conseil Exécutif des Transports urbains de Dakar (CETUD)", "Sénégal", "Consultant unique", "environnement", "Transport & Portuaire", "Audit E&S"],
  ["2024", 2024, 2024, "Audit annuel des performances E&S du Projet de Valorisation des Eaux pour le Développement des Chaînes de Valeur (PROVALE-CV), exercice 2023 — Financement BAD", "Ministère de l'Agriculture, de l'Équipement Rural et de la Souveraineté Alimentaire", "Sénégal", "Consultant unique", "environnement", "Agriculture", "Audit E&S"],
  ["2023", 2023, 2023, "Audit annuel des performances E&S du PROVALE-CV, exercices cumulés 2021–2022 — Financement BAD", "Ministère de l'Agriculture, de l'Équipement Rural et de la Souveraineté Alimentaire", "Sénégal", "Consultant unique", "environnement", "Agriculture", "Audit E&S"],
  ["2021 – en cours", 2021, 2026, "Mise en conformité ICPE des postes de Hann, Patte d'Oie, Malicounda, Tobène et Thiona — Financement budget Senelec", "Senelec", "Sénégal", "Consultant unique", "environnement", "Énergie", "Audit E&S"],
  ["2019", 2019, 2019, "Mise en conformité de l'EIES et du PGES des travaux de protection côtière dans la Langue de Barbarie, Saint-Louis — Financement AFD", "Agence de Développement Municipal", "Sénégal", "Consultant unique", "environnement", "Environnement", "Audit E&S"],
  ["2017", 2017, 2017, "Étude de la conformité environnementale des activités de transformation post-récolte du projet Naatal Mbay — Financement USAID", "Feed the Future — Projet Naatal Mbay / USAID", "Sénégal", "Consultant unique", "environnement", "Agriculture", "Audit E&S"],
  ["2016", 2016, 2016, "Audit environnemental et social des ouvrages de rétention des eaux de ruissellement à Allou Kagne, région de Thiès", "Agence de Promotion du Réseau Hydrographique National (APRHN)", "Sénégal", "Consultant unique", "environnement", "Eau & Assainissement", "Audit E&S"],
  ["2015", 2015, 2015, "Audit environnemental et social des tronçons Malick Sy – Patte d'Oie – Pikine de l'autoroute à péage Dakar-Diamniadio", "APIX / AGEROUTE", "Sénégal", "Cabinet HPR Ankh Consultants, chef de file", "environnement", "Infrastructure", "Audit E&S"],
  ["2011", 2011, 2011, "Audit environnemental du programme de forages, de production et de transport de gaz dans le permis Tamna", "FORTESA International – Sénégal", "Sénégal", "Consultant unique", "environnement", "Mines & Industrie", "Audit E&S"],
  ["2004", 2004, 2004, "Vérification environnementale de la ligne de chemin de fer Dakar-Bamako (1 300 km)", "CELCO / Programme sectoriel des transports N°2", "Sénégal, Mali", "Groupement avec DDH (Canada)", "environnement", "Transport & Portuaire", "Audit E&S"],
  // SGES / PEPP
  ["2020", 2020, 2020, "Réalisation d'un Système de Gestion Environnementale et Sociale (SGES) de la composante gazoduc", "GES-Petrogaz / Ministère du Pétrole et de l'Énergie", "Sénégal", "Consultant unique", "environnement", "Énergie", "SGES"],
  ["2022", 2022, 2022, "Élaboration du Plan d'Engagement des Parties Prenantes (PEPP) du projet de construction du nouvel hôpital de Tivaouane", "Ellipse Projects", "Sénégal", "Consultant unique", "environnement", "Santé", "PEPP"],

  // 1.2 — Planification, Aménagement du territoire et Cartographies
  ["2022 – 2023", 2022, 2023, "Élaboration de la première phase du plan d'actions pluriannuel du Plan National d'Aménagement et de Développement Territorial (PNADT)", "Agence Nationale de l'Aménagement du Territoire (ANAT)", "Sénégal", "Chef de Groupement Prestige / Haussmann", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2022", 2022, 2022, "Élaboration du Schéma Directeur d'Aménagement et de Développement Territorial de la Zone du Delta du Saloum — Phase 1 : bilan-diagnostic", "Agence Nationale de l'Aménagement du Territoire (ANAT)", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2014", 2014, 2014, "Élaboration et vulgarisation d'un plan d'urbanisme de détails dans la zone périurbaine de Dakar (Pikine, Guédiawaye) — PROGEP", "Agence de Développement Municipal", "Sénégal", "Chef de file, Groupement avec L'Atelier Urbain (Canada)", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2013 – 2014", 2013, 2014, "Gestion des sites sensibles : aménagement des lacs insalubres de Bagdad, Nietty Mbar, Leona, Messere et zone de captage de Grand Yoff", "Ministère de l'Urbanisme et de l'Habitat / PASDUNES", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2013", 2013, 2013, "Cartographie des sites sensibles de Bagdad, Nietty Mbar, Leona, Messere et Grand Yoff", "Ministère de l'Urbanisme et de l'Habitat", "Sénégal", "Consultant unique", "urbanisme", "Géomatique", "Cartographie"],
  ["2010 – 2011", 2010, 2011, "Poursuite de l'adressage de la ville de Pikine — PRECOL", "Agence de Développement Municipal", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2010 – 2011", 2010, 2011, "Étude pour la viabilisation et l'aménagement de terres dans les Niayes du Technopole, la Patte-d'Oie et Hann Mariste — PASDUNES", "Ministère de l'Urbanisme, de l'Habitat, de la Construction et de l'Hydraulique", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2010 – 2011", 2010, 2011, "Fourniture de cartes et documents pour la viabilisation des Niayes du Technopole, la Patte-d'Oie et Hann Mariste", "Ministère de l'Urbanisme, de l'Habitat, de la Construction et de l'Hydraulique", "Sénégal", "Consultant unique", "urbanisme", "Géomatique", "Cartographie"],
  ["2008 – 2009", 2008, 2009, "Actualisation des audits urbain, organisationnel et financier et préparation des contrats de 8 villes : Diamniadio, Sébikotane, Pout, Bambey, Gossas, Koungheul, Kaffrine, Kédougou — PRECOL", "Agence de Développement Municipal", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2007 – 2008", 2007, 2008, "Actualisation des audits urbain, organisationnel et financier des villes de Bignona, Marsassoum, Sédhiou et Nioro du Rip", "Agence de Développement Municipal / PRECOL", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2005", 2005, 2005, "Plan d'aménagement des aires marines protégées et des réserves naturelles communautaires", "Direction des Parcs Nationaux — Parc Forestier de Hann", "Sénégal", "Consultant unique", "urbanisme", "Environnement", "Aménagement du territoire"],
  ["2004", 2004, 2004, "Élaboration du Plan Directeur d'Aménagement et de Sauvegarde des Niayes et Zones Vertes de Dakar (PASDUNES)", "Direction du Paysage et des Espaces Verts Urbains / Ministère de l'Urbanisme", "Sénégal", "Groupement DDH Environnement Ltée / Prestige / GEOIDD Arab Tunisian Studies", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2004", 2004, 2004, "Étude du Schéma d'Aménagement des Villages Sinistrés du Nord", "Ministère de l'Urbanisme et de l'Aménagement du Territoire / PNUD", "Sénégal", "Consultant unique", "urbanisme", "Urbanisme", "Aménagement du territoire"],
  ["2003 – 2004", 2003, 2004, "Élaboration du Plan Directeur d'Urbanisme de la ville de Ranérou, horizon 2023", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Chef de file, Groupement Prestige / BET / Bureau d'Architecture et d'Urbanisme", "urbanisme", "Urbanisme", "Aménagement du territoire"],

  // 1.3 — Accompagnement du développement local
  ["2009", 2009, 2009, "Élaboration de Plans Locaux de Développement dans la région de Kolda — lot 3 : Bonkonto, Médina Gounass, Linkéring", "Programme National de Développement Local (PNDL)", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2004", 2004, 2004, "Appui à l'élaboration des Plans Locaux de Développement, Plans Annuels d'Investissement et demandes de financement — Tambacounda, Bakel, Vélingara", "Appui à la Décentralisation et au Développement Local (ADDEL)", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2004", 2004, 2004, "Élaboration du Plan Local de Développement de la Communauté rurale de Yenne", "Conseil Régional de Dakar", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2003 – 2004", 2003, 2004, "Opérateur Partenaire Privé du PNIR pour les communautés rurales de Birkilane, Gainth Pathé et N'dioum Gainth, région de Kaolack", "Programme National d'Infrastructures Rurales (PNIR)", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2002", 2002, 2002, "Élaboration du Plan Local de Développement de la Commune d'Arrondissement des HLM", "Commune d'Arrondissement des HLM", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2002", 2002, 2002, "Élaboration du Plan d'Actions Prioritaires de la Commune d'Arrondissement de Grand Dakar", "Commune d'Arrondissement de Grand Dakar", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],
  ["2000 – 2001", 2000, 2001, "Appui à la gouvernance locale dans la région de Saint-Louis", "SAFEFOD / USAID", "Sénégal", "Consultant unique", "developpement-local", "Développement local", "Développement local"],

  // 1.4 — Management et Études économiques & sectorielles
  ["2026 – en cours", 2026, 2026, "Réalisation du plan stratégique de Senelec 2027–2031", "Senelec", "Sénégal", "Crowe Max Consulting Group, chef de file", "economie", "Énergie", "Études économiques"],
  ["2026", 2026, 2026, "Évaluation des mécanismes de paiement des factures d'électricité des Établissements Publics à autonomie Financière (EPAFs)", "Senelec / PADAES", "Sénégal", "Chef de file, Groupement Prestige / Crowe Max Consulting Group", "economie", "Énergie", "Études économiques"],
  ["2025", 2025, 2025, "Consultation sur le statut juridique du Conseil Sénégalais des Chargeurs (COSEC)", "COSEC", "Sénégal", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2024 – 2026", 2024, 2026, "Suivi et audit du contrat de performance entre l'État du Sénégal et Senelec, exercices 2022 à 2024", "Senelec / PADAES", "Sénégal", "Chef de file, Groupement Prestige / Crowe Max Consulting Group", "economie", "Énergie", "Études économiques"],
  ["2021 – 2022", 2021, 2022, "Étude institutionnelle de la Société de Navigation sur le fleuve Sénégal (SOGENAV) — Financement Banque Mondiale", "SOGENAV / OMVS", "Mauritanie", "Consultant unique", "economie", "Transport & Portuaire", "Études économiques"],
  ["2018", 2018, 2018, "Audit technique des activités du Projet de Renforcement des Capacités — Financement AFD", "Organisation pour la Mise en Valeur du Fleuve Sénégal (OMVS)", "Mali, Mauritanie, Sénégal, Guinée", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2016 – 2017", 2016, 2017, "Relecture des textes de fonctionnement du Haut-Commissariat de l'OMVS", "OMVS", "Mali, Mauritanie, Sénégal, Guinée", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2016", 2016, 2016, "Élaboration d'une stratégie d'opérationnalisation des contrats plans État-Collectivités locales", "Agence de Développement Municipal", "Sénégal", "Consultant unique", "economie", "Développement local", "Études économiques"],
  ["2016", 2016, 2016, "Étude sur les exonérations douanières au sein de l'UEMOA", "Commission de l'UEMOA", "8 pays de l'UEMOA", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2015", 2015, 2015, "Étude sur l'harmonisation des traitements de salaires des dirigeants des structures de l'OMVS", "OMVS", "Mali, Mauritanie, Sénégal, Guinée", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2015", 2015, 2015, "Actualisation de la valeur comptable du hangar de stockage d'attapulgite au Port Autonome de Dakar", "SENMINES", "Sénégal", "Consultant unique", "economie", "Mines & Industrie", "Études économiques"],
  ["2014", 2014, 2014, "Étude de l'impact budgétaire de l'harmonisation des grilles salariales sur les budgets des structures de l'OMVS", "OMVS", "Mali, Mauritanie, Sénégal, Guinée", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2014", 2014, 2014, "Étude relative à l'harmonisation des traitements de salaire dans les différentes structures de l'OMVS", "OMVS", "Mali, Mauritanie, Sénégal, Guinée", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2012 – 2013", 2012, 2013, "Étude sur l'évolution des conditions de passage portuaire des marchandises du Burkina Faso — Programme d'Appui Institutionnel aux Infrastructures et aux Transports (FED)", "Coordination du Programme Sectoriel des Transports, Ministère des Infrastructures", "Burkina Faso", "Consultant unique", "economie", "Transport & Portuaire", "Études économiques"],
  ["2011", 2011, 2011, "Règlement d'exécution déterminant les modalités d'application de l'article 8 du protocole additionnel UEMOA", "Commission de l'UEMOA", "8 pays de l'UEMOA", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2010", 2010, 2010, "Étude sur le financement des travaux d'équipement des collectivités locales : échantillonnage et perspectives de partenariat", "Caisse des Dépôts et Consignations", "Sénégal", "Consultant unique", "economie", "Développement local", "Études économiques"],
  ["2007 – 2008", 2007, 2008, "Étude sur l'application du Protocole Additionnel III/2001 instituant les règles d'origine des produits de l'UEMOA", "Commission de l'UEMOA", "8 pays de l'UEMOA", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2007 – 2008", 2007, 2008, "Audit financier et comptable du projet de soutien au développement des micros et très petites entreprises au Sénégal — Financement BID", "Fonds de Promotion Économique (actuelle BNDE)", "Sénégal", "Consultant unique", "economie", "Études économiques", "Études économiques"],
  ["2007", 2007, 2007, "Étude diagnostic institutionnel et opérationnel des organisations professionnelles — Projet de promotion de l'entreprenariat rural, Phase II", "Ministère du Développement Rural et de l'Agriculture", "Sénégal", "Consultant unique", "economie", "Agriculture", "Études économiques"],
  ["2007", 2007, 2007, "Étude sur les perspectives de peuplement de la plateforme de Diamniadio", "Agence de Mise en œuvre de la Plateforme Millénaire de Diamniadio", "Sénégal", "Consultant unique", "economie", "Urbanisme", "Études économiques"],
  ["2005", 2005, 2005, "Diagnostic institutionnel et organisationnel de l'Union des Associations d'Élus Locaux du Sénégal (UAEL) et de la CAEL", "Cellule d'Appui aux Élus Locaux (CAEL)", "Sénégal", "Consultant unique", "economie", "Développement local", "Études économiques"],
  ["2004", 2004, 2004, "Schéma d'élaboration de l'annuaire des entreprises du BTP — base de données", "Direction de la Construction", "Sénégal", "Consultant unique", "economie", "Infrastructure", "Études économiques"],
  ["2004", 2004, 2004, "Élaboration d'un manuel de procédures pour la Commission Nationale de Qualification des Entreprises, Entrepreneurs et Artisans du BTP", "Direction de la Construction", "Sénégal", "Consultant unique", "economie", "Infrastructure", "Études économiques"],
  ["2003", 2003, 2003, "Étude d'harmonisation des cadres législatif et réglementaire des transports maritimes des États membres de l'UEMOA", "Commission de l'UEMOA", "8 pays de l'UEMOA", "Consultant unique", "economie", "Transport & Portuaire", "Études économiques"],
  ["2003", 2003, 2003, "Diagnostic organisationnel et plan de développement de l'Union Régionale Santa Yalla de Ziguinchor", "Programme d'Appui aux Opérateurs de l'Agroalimentaire / ACDI", "Sénégal", "Consultant unique", "economie", "Agriculture", "Études économiques"],
  ["2001", 2001, 2001, "Mission d'assistance à l'exécution du programme de la Direction de la Marine Marchande", "Cellule de Coordination du 2ème Programme Sectoriel des Transports", "Sénégal", "Consultant unique", "economie", "Transport & Portuaire", "Études économiques"],

  // 1.5 — Business plan et études de faisabilité
  ["2024 – en cours", 2024, 2026, "Étude de faisabilité pour la mise en place d'une unité d'industrialisation et d'une centrale d'achats, en 2 lots", "Société Nationale des HLM (SN-HLM)", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2015", 2015, 2015, "Réactualisation de l'étude de faisabilité du parc de stationnement de gros porteurs à Kidira", "Conseil Sénégalais des Chargeurs (COSEC)", "Sénégal", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2014", 2014, 2014, "Étude de faisabilité pour la création d'une société de transport (COREDIA) — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2012", 2012, 2012, "Accompagnement de CR-NAV pour l'acquisition en location-vente de deux bateaux auprès de la SOGENAV", "Compagnie Régionale de Navigation (CR-NAV)", "Mali, Mauritanie, Sénégal", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2012", 2012, 2012, "Étude de faisabilité pour la création d'une société d'assainissement et de nettoyage à Saint-Louis — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Eau & Assainissement", "Business plan & Faisabilité"],
  ["2011", 2011, 2011, "Étude de faisabilité pour un centre de formation et de résidence artistique à Djifangir — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Formation", "Business plan & Faisabilité"],
  ["2011", 2011, 2011, "Étude de faisabilité, renforcement de capacité et suivi économique pour une école secondaire privée à Kolda — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Formation", "Business plan & Faisabilité"],
  ["2011", 2011, 2011, "Étude de faisabilité, renforcement de capacité et suivi économique pour l'extension d'un campement touristique à Vélingara — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Tourisme & Hôtellerie", "Business plan & Faisabilité"],
  ["2010", 2010, 2010, "Étude de faisabilité pour une société d'assainissement — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Eau & Assainissement", "Business plan & Faisabilité"],
  ["2010", 2010, 2010, "Formation et suivi économique pour une société de prestations en informatique — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2010", 2010, 2010, "Formation et suivi économique pour une société de prestations dans le domaine du web — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2010", 2010, 2010, "Formation et suivi économique pour une société de vente de produits informatiques et de recyclage de cartouches d'encre — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2010", 2010, 2010, "Étude d'organisation et de mise en place de la Société de Gestion et d'Exploitation de la Navigation sur le fleuve Sénégal (SOGENAV)", "SOGENAV / OMVS", "Mauritanie", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2007", 2007, 2007, "Étude de faisabilité pour une école privée d'enseignement général et professionnel à Matam — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Formation", "Business plan & Faisabilité"],
  ["2007", 2007, 2007, "Étude de faisabilité pour une école française à Dakar — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Formation", "Business plan & Faisabilité"],
  ["2007", 2007, 2007, "Étude de faisabilité pour un complexe hôtelier à Bakel — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Tourisme & Hôtellerie", "Business plan & Faisabilité"],
  ["2007", 2007, 2007, "Pré-étude pour la couverture médicale des personnels de l'ONECS", "Office National de l'Enseignement Catholique du Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Santé", "Business plan & Faisabilité"],
  ["2007", 2007, 2007, "Étude sur l'implantation d'unités industrielles sur la plateforme de Diamniadio", "Agence de Mise en œuvre de la Plateforme Millénaire de Diamniadio", "Sénégal", "Consultant unique", "suivi-evaluation", "Industrie", "Business plan & Faisabilité"],
  ["2006 – 2007", 2006, 2007, "Étude de faisabilité de la ligne maritime Dakar / Saint-Louis / Nouakchott / Nouadhibou / Casablanca / Tanger (COMANAV)", "Conseil Sénégalais des Chargeurs (COSEC)", "Sénégal, Mauritanie, Maroc", "Groupement avec Drewry Shipping Consultants Ltd (Angleterre)", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2006", 2006, 2006, "Étude de faisabilité pour un centre de formation automobile à Tambacounda (FORAMECA) — Programme PAISD, Financement OFII", "SCAC / Ambassade de France au Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Formation", "Business plan & Faisabilité"],
  ["2006", 2006, 2006, "Assistance technique pour l'établissement de centres de visites techniques de véhicules dans la région de Dakar", "TUV, pour le compte du CETUD", "Sénégal", "Sous-traitant", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2005", 2005, 2005, "Assistance technique à la mise en place du laboratoire central et des stations de mesure de la qualité de l'air urbain de Dakar", "Norsk Institutt for Luftforskning (Norvège), pour le compte du CETUD", "Sénégal", "Sous-traitant", "suivi-evaluation", "Environnement", "Business plan & Faisabilité"],
  ["2005", 2005, 2005, "Étude de faisabilité de l'extension du périmètre de l'observatoire de la compétitivité de l'économie sénégalaise — Financement AFD", "Centre d'Études Politiques pour le Développement", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2005", 2005, 2005, "Étude de fondation de la Société de Navigation sur le fleuve Sénégal (SONASE)", "Organisation pour la Mise en Valeur du Fleuve Sénégal (OMVS)", "Mali, Mauritanie, Sénégal", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Business plan & Faisabilité"],
  ["2004", 2004, 2004, "Étude de faisabilité relative à la création d'entrepôts à Thiès, Touba et Kidira", "Conseil Sénégalais des Chargeurs (COSEC)", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],
  ["2003", 2003, 2003, "Étude de faisabilité technique et financière pour la réhabilitation des infrastructures du Parc National des Oiseaux du Djoudj", "Direction des Parcs Nationaux", "Sénégal", "Consultant unique", "suivi-evaluation", "Environnement", "Business plan & Faisabilité"],
  ["2003", 2003, 2003, "Mise en place d'un système d'archivage électronique à l'Agence Autonome des Travaux Routiers", "Agence Autonome des Travaux Routiers (AATR)", "Sénégal", "Consultant unique", "suivi-evaluation", "Infrastructure", "Business plan & Faisabilité"],
  ["2001", 2001, 2001, "Étude marketing SESAME au Sénégal et en Gambie", "Catholic Relief Services (CRS)", "Sénégal, Gambie", "Consultant unique", "suivi-evaluation", "Études économiques", "Business plan & Faisabilité"],

  // 1.6 — Suivi, évaluation, diagnostic, audit de projets
  ["2023 – 2024", 2023, 2024, "Enquête de satisfaction sur la prise en compte des besoins spécifiques des bénéficiaires — campagne de distribution de masse de moustiquaires imprégnées", "Plan International Sénégal / PNLP", "Sénégal", "Consultant unique", "suivi-evaluation", "Santé", "Enquêtes de satisfaction"],
  ["2013 – 2014", 2013, 2014, "Étude de sondage d'opinion sur le niveau de satisfaction des usagers du service du permis de construire au Sénégal", "Ministère de l'Urbanisme et de l'Habitat", "Sénégal", "Consultant unique", "suivi-evaluation", "Urbanisme", "Enquêtes de satisfaction"],
  ["2005 – 2007", 2005, 2007, "Enquêtes annuelles de satisfaction du personnel du Groupe Sonatel (fixe, multimédia, mobile)", "Groupe Sonatel", "Sénégal", "Consultant unique", "suivi-evaluation", "Études économiques", "Enquêtes de satisfaction"],
  ["2017 – 2018", 2017, 2018, "Diagnostic des systèmes alimentaires urbains territorialisés des communes de Cambérène et Fimela", "FAO / Ministère de la Gouvernance Territoriale et de l'Administration des Territoires", "Sénégal", "Consultant unique", "suivi-evaluation", "Agriculture", "Diagnostic & Audit"],
  ["2016 – 2017", 2016, 2017, "Diagnostic des capacités de collecte, d'analyse et de suivi-évaluation des données de sécurité alimentaire et de nutrition (PRO-ACT)", "FAO / DAPSA", "Sénégal", "Consultant unique", "suivi-evaluation", "Agriculture", "Diagnostic & Audit"],
  ["2013 – 2014", 2013, 2014, "Assistance technique pour la planification du développement régional de la province de l'Inchiri — Second Projet de Renforcement Institutionnel du Secteur Minier (PRISM II)", "Unité de Coordination du Projet Minier / Ministère du Pétrole, de l'Énergie et des Mines", "Mauritanie", "Groupement avec KHLIL Audit-Conseils", "suivi-evaluation", "Mines & Industrie", "Diagnostic & Audit"],
  ["2008 – 2009", 2008, 2009, "Étude diagnostique dans les zones d'implantation du Millennium Challenge Account — Ziguinchor, Kolda, Tambacounda, Matam, Saint-Louis", "Mission de Formulation et de Gestion du MCA Sénégal", "Sénégal", "Consultant unique", "suivi-evaluation", "Développement local", "Diagnostic & Audit"],
  ["2015 – 2016", 2015, 2016, "Élaboration de la situation de référence et réalisation des études d'impact (mi-parcours et finale) du Projet Pistes Communautaires", "Programme National de Développement Local (PNDL)", "Sénégal", "Consultant unique", "suivi-evaluation", "Infrastructure", "Suivi & Évaluation d'impact"],
  ["2016", 2016, 2016, "Enquête de suivi de l'évaluation d'impact du Projet de Gestion des Eaux Pluviales et d'Adaptation au Changement Climatique (PROGEP)", "Agence de Développement Municipal", "Sénégal", "Consultant unique", "suivi-evaluation", "Eau & Assainissement", "Suivi & Évaluation d'impact"],
  ["2016", 2016, 2016, "Révision de la stratégie de développement du Système National d'Informations Sanitaires (SNIS) au Sénégal", "Abt Associates / USAID", "Sénégal", "Consultant unique", "suivi-evaluation", "Santé", "Suivi & Évaluation d'impact"],
  ["2015", 2015, 2015, "Enquête de la situation de référence de l'évaluation d'impact du PROGEP", "Agence de Développement Municipal / PROGEP", "Sénégal", "Consultant unique", "suivi-evaluation", "Eau & Assainissement", "Suivi & Évaluation d'impact"],
  ["2012", 2012, 2012, "Évaluation finale du projet de relance vivrière (PREVICO) dans les wilayas de Brakna, Gorgol, Guidimakha, Assaba et Hodh Chargui", "Groupe de Recherche et de Réalisations pour le Développement (GRDR)", "Mauritanie", "Groupement avec KHLIL Audit-Conseils", "suivi-evaluation", "Agriculture", "Suivi & Évaluation d'impact"],
  ["2011 – 2012", 2011, 2012, "Enquête RIMS/SYGRI d'évaluation d'impact (fin de projet) du Projet de Développement Agricole de Matam — Phase II — Financement FIDA", "Ministère de l'Agriculture / FIDA", "Sénégal", "Consultant unique", "suivi-evaluation", "Agriculture", "Suivi & Évaluation d'impact"],
  ["2011", 2011, 2011, "Étude de référence zéro dans les zones d'intervention du Fonds Mondial pour l'Assainissement — Matam, Diourbel, Kédougou, Tambacounda", "AGETIP / UGP GSF", "Sénégal", "Consortium Prestige / HPR Ankh Consultants", "suivi-evaluation", "Eau & Assainissement", "Suivi & Évaluation d'impact"],
  ["2010", 2010, 2010, "Évaluation rétrospective du projet de reconstruction du quai du Port de Ziguinchor — Financement AFD", "Agence Française de Développement", "Sénégal", "Consultant unique", "suivi-evaluation", "Transport & Portuaire", "Suivi & Évaluation d'impact"],
  ["2010", 2010, 2010, "Étude de base du projet de promotion et diversification de l'agriculture dans les régions de Kaolack, Kaffrine, Tambacounda et Kédougou", "ONG Africare Sénégal", "Sénégal", "Consortium Prestige / HPR Ankh Consultants", "suivi-evaluation", "Agriculture", "Suivi & Évaluation d'impact"],
  ["2005", 2005, 2005, "Revue du Programme Initiative Transfrontalière du Sénégal (2000–2005)", "ActionAid International The Gambia", "Sénégal", "Consultant unique", "suivi-evaluation", "Développement local", "Diagnostic & Audit"],
  ["2004 – 2005", 2004, 2005, "Audit technique du Programme National Multisectoriel de Lutte contre le VIH/SIDA dans 11 régions du Sénégal", "Conseil National de Lutte contre le Sida", "Sénégal", "Consultant unique", "suivi-evaluation", "Santé", "Diagnostic & Audit"],
  ["2002", 2002, 2002, "Évaluation et certification des prestations des agences d'exécution techniques du PSAOP dans les 11 régions du Sénégal", "PSAOP / Banque Mondiale", "Sénégal", "Consultant unique", "suivi-evaluation", "Agriculture", "Diagnostic & Audit"],

  // 1.7 — Maîtrise d'œuvre
  ["2017 – 2018", 2017, 2018, "Assistance des études et suivi des travaux du Parc des Technologies Numériques, Pôle Urbain de Diamniadio", "IDOM Consulting Engineering Architecture / Ministère des Postes et Télécommunications", "Sénégal", "Sous-traitant IDOM", "infrastructure", "Infrastructure", "Études techniques & Contrôle"],
  ["2006", 2006, 2006, "Maîtrise d'œuvre des études et du contrôle des travaux de construction d'un hangar métallique de 1 500 m² pour le stockage d'attapulgite au Port de Dakar", "SENMINES", "Sénégal", "Consultant unique", "infrastructure", "Infrastructure", "Études techniques & Contrôle"],
  ["2004", 2004, 2004, "Conseil en maîtrise d'œuvre pour l'adduction d'eau potable dans 8 villages, la réfection d'une case-foyer, un mur de clôture d'école et des unités de transformation céréalière", "Communauté rurale de Lambaye", "Sénégal", "Consultant unique", "infrastructure", "Eau & Assainissement", "Études techniques & Contrôle"],
  ["2004", 2004, 2004, "Maîtrise d'œuvre des travaux de pistes rurales dans les communautés rurales de Ngogom, Keur Ngalgou Baba Garage et Touba, région de Diourbel", "Projet de Pistes Communautaires / PNIR", "Sénégal", "Consultant unique", "infrastructure", "Infrastructure", "Études techniques & Contrôle"],
  ["2003 – 2004", 2003, 2004, "Viabilisation de la Zone d'Aménagement Concerté de Nguenth-Nord (1 000 ha) à Thiès, 2ème tranche", "AGETIP", "Sénégal", "Groupement avec BAU + BET", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2003 – 2004", 2003, 2004, "Mise en place des Zones d'Aménagement Concerté et contrôle des travaux de la Ville Nouvelle de Diamniadio (2 500 ha)", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Consultant", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2003 – 2004", 2003, 2004, "Études techniques des Zones d'Aménagement Concerté de Kolda, Mboro, Ourossogui, Tivaouane et Ziguinchor — Lot 1 : Kolda", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Groupement avec BAU + BET", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2003 – 2004", 2003, 2004, "Études techniques des Zones d'Aménagement Concerté — Lot 2 : Mboro", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Groupement avec BAU + BET", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2003 – 2004", 2003, 2004, "Études techniques des Zones d'Aménagement Concerté — Lot 3 : Tivaouane", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Groupement avec BAU + BET", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2002", 2002, 2002, "Mise en place de Zones d'Aménagement Concerté et contrôle des travaux dans le secteur Nord-Nguenth de la ville de Thiès", "Direction de l'Urbanisme et de l'Architecture", "Sénégal", "Groupement avec BAU + BET", "infrastructure", "Urbanisme", "Études techniques & Contrôle"],
  ["2008 – 2009", 2008, 2009, "Marketing social et IEC — assainissement des eaux pluviales dans les villes secondaires, Axe 2 : Mbour et Tivaouane", "Office National de l'Assainissement du Sénégal (ONAS)", "Sénégal", "Consultant unique", "infrastructure", "Eau & Assainissement", "Maîtrise d'œuvre sociale"],
  ["2008 – 2009", 2008, 2009, "Marketing social et IEC — assainissement des eaux pluviales, Axe 3 : Richard-Toll", "Office National de l'Assainissement du Sénégal (ONAS)", "Sénégal", "Consultant unique", "infrastructure", "Eau & Assainissement", "Maîtrise d'œuvre sociale"],
  ["2008 – 2009", 2008, 2009, "Marketing social et IEC — assainissement des eaux pluviales, Axe 1 : Mbacké et Diourbel", "Office National de l'Assainissement du Sénégal (ONAS)", "Sénégal", "Consultant unique", "infrastructure", "Eau & Assainissement", "Maîtrise d'œuvre sociale"],
  ["2004", 2004, 2004, "Accompagnement pour une participation populaire au suivi-évaluation et à la pérennisation des projets du Programme d'Appui au Développement Local Urbain (PADELU)", "Commune des HLM", "Sénégal", "Consultant unique", "infrastructure", "Développement local", "Maîtrise d'œuvre sociale"],

  // 1.8 — Formation et renforcement de capacité
  ["2021", 2021, 2021, "Renforcement des capacités des leaders de la Fédération des Producteurs Agroforestiers de Bignona en gestion financière — projet Juicing Justice for Farmers", "Traidcraft Exchange", "Sénégal", "Consultant unique", "formation", "Agriculture", "Formation"],
  ["2015", 2015, 2015, "Séminaire de formation en management des ressources humaines pour 12 cadres de la Direction de la Marine Marchande", "Direction de la Marine Marchande", "Sénégal", "Consultant unique", "formation", "Transport & Portuaire", "Formation"],
  ["2013", 2013, 2013, "Formation en Gestion Axée sur les Résultats et accompagnement du Cadre de Dépenses Sectoriel à Moyen Terme", "Cellule des Politiques, de la Planification et du Suivi-Évaluation / Ministère de l'Urbanisme", "Sénégal", "Consultant unique", "formation", "Études économiques", "Formation"],
  ["2013", 2013, 2013, "Renforcement de capacité en marketing, commercialisation et accès au financement pour des organisations patronales et PME — programme sénégalo-allemand PACC-PME/PMF", "GIZ / Coopération Allemande", "Sénégal", "Consultant unique", "formation", "Études économiques", "Formation"],
  ["2012", 2012, 2012, "Formation des points focaux en Gestion Axée sur les Résultats et accompagnement du Cadre de Dépenses Sectoriel à Moyen Terme", "Cellule des Politiques, de la Planification et du Suivi-Évaluation / Ministère de l'Habitat", "Sénégal", "Consultant unique", "formation", "Études économiques", "Formation"],
  ["2010", 2010, 2010, "Formation et sensibilisation des populations et acteurs des Niayes du Technopole, de la Patte-d'Oie et de Hann Mariste (PASDUNE)", "Ministère de l'Habitat, de la Construction et de l'Hydraulique", "Sénégal", "Consultant unique", "formation", "Environnement", "Formation"],
  ["2005", 2005, 2005, "Élaboration et mise en œuvre du plan de formation en planification et suivi-évaluation du Projet de Développement Agricole de Matam — Phase II", "Ministère de l'Agriculture et de l'Hydraulique", "Sénégal", "Consultant unique", "formation", "Agriculture", "Formation"],
  ["2002", 2002, 2002, "Séminaire de formation en ingénierie de la maintenance — techniques et méthodes modernes de la maintenance industrielle", "RTS / Jean Lefebvre / SLS Mécanique / Port Autonome de Dakar / ICS", "Sénégal", "Consultant unique", "formation", "Industrie", "Formation"],
  ["2002", 2002, 2002, "Organisation scientifique du séminaire de concertation sur la liaison maritime Dakar-Gorée", "Port Autonome de Dakar", "Sénégal", "Consultant unique", "formation", "Transport & Portuaire", "Formation"],
  ["2001", 2001, 2001, "Formation en approche genre et développement et approches participatives pour les agents du PNIR", "Programme National d'Infrastructures Rurales / Banque Mondiale / FIDA", "Sénégal", "Consultant unique", "formation", "Développement local", "Formation"],
  ["2002", 2002, 2002, "Formation de 15 formateurs en gestion de projet", "Office National de Formation Professionnelle (ONFP)", "Sénégal", "Consultant unique", "formation", "Formation", "Formation"],
  ["2001", 2001, 2001, "Formation en techniques commerciales pour 15 agents du secteur moderne", "Office National de Formation Professionnelle (ONFP)", "Sénégal", "Consultant unique", "formation", "Formation", "Formation"],
  ["2001", 2001, 2001, "Formation en création d'entreprise pour 15 agents du secteur moderne", "Office National de Formation Professionnelle (ONFP)", "Sénégal", "Consultant unique", "formation", "Formation", "Formation"],
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export const projects: Project[] = rows.map((r, i) => ({
  id: `${String(r[1]).padStart(4, "0")}-${slugify(r[3])}-${i}`,
  period: r[0],
  yearStart: r[1],
  yearEnd: r[2],
  title: r[3],
  client: r[4],
  country: r[5],
  role: r[6],
  category: r[7],
  sector: r[8],
  group: r[9],
})).sort((a, b) => b.yearEnd - a.yearEnd || b.yearStart - a.yearStart);

export const sectors = Array.from(new Set(projects.map((p) => p.sector))).sort();
export const clients = Array.from(new Set(projects.map((p) => p.client))).sort();
export const years = Array.from(new Set(projects.map((p) => p.yearEnd))).sort((a, b) => b - a);
export const countries = Array.from(
  new Set(projects.flatMap((p) => p.country.split(",").map((c) => c.trim())))
).sort();

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
