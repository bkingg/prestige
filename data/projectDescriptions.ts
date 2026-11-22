/**
 * Context paragraphs for each mission, condensed from the "Expérience de
 * PRESTIGE" references document (édition d'octobre 2026). Keyed by project id
 * (see data/projects.ts). Missions without an entry simply show no context
 * section on their detail page.
 */

const PAISD =
  "Dans le cadre de la convention de partenariat entre le Programme d'Appui aux Initiatives de Solidarité pour le Développement (PAISD), le Service de Coopération et d'Action Culturelle de l'Ambassade de France à Dakar et l'Office Français de l'Immigration et de l'Intégration (OFII), Prestige a été retenu comme opérateur d'accompagnement de promoteurs sénégalais porteurs d'un projet économique au Sénégal. L'accompagnement couvre l'étude de faisabilité et le business plan du projet, le renforcement des capacités du promoteur (management, marketing, gestion administrative et financière) et un suivi d'environ 12 mois pour le démarrage et la consolidation de l'activité.";

export const projectDescriptions: Record<string, string> = {
  // ── 1.1 Évaluations environnementales et sociales ──────────────────────────
  // EIES
  "2026-etude-d-impact-environnemental-et-social-eies-pour-la-creati-0":
    "Le projet porte sur l'aménagement et l'exploitation d'un complexe industriel préfabriqué en acier, sur une superficie d'environ 15 hectares dans la Zone Économique Spéciale Intégrée de Diass (ZESID). L'usine aura une capacité de production de 7 millions de mètres carrés de carreaux par an.",
  "2024-eies-de-400-km-de-pistes-rurales-dans-des-collectivites-terr-1":
    "Le projet d'aménagement de pistes rurales dans les régions de Tambacounda, Kédougou, Kolda et Sédhiou vise à désenclaver des zones de production, à améliorer l'accès aux services de base et à stimuler les échanges économiques. Inscrit dans la politique nationale d'infrastructures rurales, il répond au besoin de mobilité de populations majoritairement rurales dont les activités dépendent de la qualité des voies de transport.",
  "2019-mise-en-conformite-de-l-eies-et-du-pges-des-travaux-de-prote-47":
    "Le Projet de Lutte contre l'Érosion Côtière à Saint-Louis (PPCS) vise à protéger en urgence la population et les biens des quartiers de la Langue de Barbarie. Sa première composante prévoit une protection frontale (digue) sur environ 2,15 km de côte, dans la continuité de la protection d'urgence, là où le mur vertical érigé en 1930 s'est en partie effondré sous l'effet de l'érosion et de la submersion marine.",
  "2017-eies-du-projet-de-raccordement-electrique-30-kv-marssassoum--2":
    "Sous-projet du volet distribution du Projet d'Appui au Secteur de l'Électricité (PASE), il consiste à construire une ligne moyenne tension 30 kV de 148 mm² reliant Badioure à Marssassoum, en traversant le fleuve, sur une distance d'environ 17 km.",
  "2017-eies-du-projet-de-raccordement-electrique-30-kv-velingara-ne-3":
    "Sous-projet du volet distribution du Projet d'Appui au Secteur de l'Électricité (PASE), il consiste à construire une ligne de transport d'énergie 30 kV de 72 km en 54,6 mm² entre Vélingara et Nétéboulou.",
  "2017-eies-du-projet-de-raccordement-electrique-30-kv-djende-sakar-4":
    "Sous-projet du volet distribution du PASE, il consiste à construire une ligne de 70 km en 54,6 mm² entre Kolda, Diana Malary, Sakar et Djendé. Il doit alimenter ces localités depuis Kolda, réduire les interruptions de service et électrifier une cinquantaine de villages situés dans une bande de 500 m de part et d'autre de la ligne.",
  "2017-eies-des-travaux-d-urgence-de-protection-cotiere-des-quartie-5":
    "Les travaux d'urgence de protection côtière de la Langue de Barbarie, entre Guet Ndar et Gokhou Mbath, s'inscrivent dans le programme national intégré de lutte contre l'érosion côtière lancé en 2008. L'érosion, recul structurel du rivage, menace le tourisme ainsi que la pérennité des infrastructures et des quartiers exposés, et appelle une gestion intégrée du littoral.",
  "2013-eies-du-projet-de-construction-d-un-complexe-hotelier-sur-la-6":
    "Construction d'un hôtel trois étoiles sur la VDN, sur 9 350 m² et quatre étages au plus : 120 unités d'hébergement extensibles à 180 chambres, espaces de restauration et de bar sur 475 m² en rez-de-chaussée, trois salles de conférence modulables de 76 m², une salle de sport et une piscine.",
  "2013-eies-du-projet-d-extension-de-la-capacite-de-stockage-de-co2-7":
    "Air Liquide Sénégal, actif dans la production et la commercialisation de gaz industriels, médicaux et alimentaires, a souhaité augmenter ses capacités de stockage de CO2 sur son site de Dakar par l'implantation d'un réservoir vertical de 200 tonnes, alimenté par camions-citernes depuis l'unité de Richard Toll, pour l'approvisionnement des marchés national et international.",
  "2013-eies-du-projet-de-deux-centrales-a-barges-au-hfo-de-70-mw-9":
    "Face à des délestages fréquents, l'État a engagé un plan d'urgence et de relance du secteur énergétique, le « Plan Takkal ». APIX a été chargée de certains projets, dont l'acquisition et l'installation de deux centrales de 70 MW alimentées au fioul lourd (HFO) sur des barges amarrées à Bel-Air, au Port Autonome de Dakar.",
  "2013-eies-des-travaux-portuaires-de-foundiougne-10":
    "Financé par le Fonds de coopération et de développement économique (FCDE) de la République de Corée, le projet d'infrastructures et d'équipements maritimes vise à renforcer la desserte maritime entre Dakar, Foundiougne et Ziguinchor, à désenclaver les régions du Sud et à favoriser l'intégration avec la Guinée et la Guinée-Bissau. Il prévoit notamment des terminaux maritimes pour le transport de passagers, de marchandises et de véhicules.",
  "2012-eies-du-projet-d-exploitation-d-une-centrale-d-enrobage-a-nd-11":
    "Eiffage Sénégal a prévu d'exploiter une centrale d'enrobage à Ndafonga, dans la communauté rurale de Mbellacadiao, pour les besoins notamment des travaux pluriannuels d'entretien des routes de la région de Fatick.",
  "2012-eies-du-projet-d-amenagement-de-l-exploitation-agricole-de-t-12":
    "Le projet consiste à aménager une exploitation agricole d'environ 120 hectares sur un terrain de 1 000 hectares concédé à Temeye Agro, au lieu-dit Temeye du périmètre agricole de Mbane.",
  "2011-eies-du-projet-d-exploitation-d-une-centrale-d-enrobage-d-un-13":
    "Installation de trois centrales dans la commune de Diamniadio pour Eiffage Sénégal : une centrale d'enrobage, une centrale à béton (Stetter) et une centrale à grave-ciment (SAE), afin de produire les matériaux de ses chantiers routiers et de ses ouvrages en béton armé.",
  "2009-eies-des-travaux-de-construction-de-94-km-de-pistes-de-produ-17":
    "Le Programme de Développement des Marchés Agricoles du Sénégal (PDMAS), appuyé par la Banque Mondiale, l'ACDI, l'AFD, l'Union Européenne et l'USAID, vise à accroître durablement les revenus ruraux. La région de Tambacounda, riche d'un réseau hydrographique dense, en est un pôle majeur, mais l'accès aux sites de production y reste la principale contrainte, d'où les 94 km de pistes prévus.",
  "2008-eies-et-plan-de-prevention-du-programme-de-forages-et-de-pro-18":
    "Fortesa International Sénégal exploite depuis 2002 un gazoduc de 34 km reliant le puits Gd-2 aux installations de Kabor. Après le forage des puits Sadiaratou-1 et Sadiaratou-3, la société prévoyait de les raccorder au réseau existant, de réaliser de nouveaux forages et de porter à plus d'une dizaine le nombre de puits producteurs.",
  "2008-eies-du-plan-d-investissement-2007-2011-de-la-suneor-19":
    "Après la privatisation de la SONACOS, le groupe Advens exploite cinq unités industrielles (Diourbel, Kaolack, Ziguinchor, Dakar, Louga) produisant huile, savon, vinaigre, eau de Javel et aliments pour bétail. SUNEOR a engagé un programme d'investissement d'environ 16,3 milliards de FCFA sur quatre ans pour moderniser ces installations.",
  "2006-eies-du-projet-de-construction-d-un-terminal-cerealier-au-po-20":
    "Conçu par Advens-Africia, le terminal céréalier du môle 4 du Port Autonome de Dakar permet le déchargement et le chargement en vrac, l'ensachage et le transbordement de riz, céréales, oléagineux et produits similaires vers camions ou wagons, au service du commerce national et sous-régional. La concession porte sur 25 ans, renouvelable.",
  "2004-etude-d-evaluation-des-impacts-environnementaux-de-l-extensi-22":
    "Port en eaux profondes situé au croisement des lignes reliant l'Europe aux Amériques et à l'Afrique du Sud, le Port Autonome de Dakar a engagé son plan de développement par phases. L'étude porte sur la construction d'un troisième poste à quai pour porte-conteneurs, soit l'extension du terminal à conteneurs.",
  "2013-eies-du-projet-d-implantation-d-une-unite-de-purification-de-176":
    "Air Liquide Sénégal, filiale du groupe Air Liquide, a prévu d'implanter à Richard Toll, dans l'enceinte de la CSS, une unité de purification et de stockage de CO2 (2 × 300 tonnes), puis de transporter le gaz par camions-citernes vers Dakar pour approvisionner le marché national et, à terme, sous-régional.",
  "2012-eies-des-travaux-de-protection-cotiere-au-niveau-de-la-corni-177":
    "Face à l'érosion côtière qui menace les habitations de la Corniche Ouest (zone de Fann-Mermoz), l'Association des Riverains de la Baie de Fann-Mermoz, subventionnée par l'État, a entrepris la construction de deux digues de soutènement.",
  "2005-eies-des-pistes-rurales-des-communautes-rurales-de-touba-mos-178":
    "Dans le cadre du Programme National d'Infrastructures Rurales (PNIR), qui vise à désenclaver les zones rurales, quatre communautés rurales de la région de Diourbel ont bénéficié de pistes : Touba Mosquée (30,5 km en 3 tronçons), Baba Garage (24,3 km en 4 tronçons), Ngogom (18,7 km en 4 tronçons) et Keur Ngalgou (25,1 km en 5 tronçons).",

  // PGES
  "2022-etudes-e-s-restreintes-et-pges-des-7-projets-du-programme-sm-27":
    "Le programme Smartgrids de Senelec, financé par l'AFD avec l'Union Européenne, modernise les réseaux pour intégrer les énergies renouvelables. Cette mission couvre le remplacement du tronçon aérien 90 kV entre les postes de Hann et de Patte d'Oie par un câble souterrain armé de 225 kV exploité en 90 kV, sur 1,5 km, avec pose de fibre optique et mise à jour des protections et du contrôle-commande.",
  "2017-pges-du-projet-d-extension-et-de-densification-des-reseaux-d-28":
    "Le projet d'extension et de densification du réseau de Dabo vise un meilleur approvisionnement de la zone en électricité, tout en améliorant la sûreté, la sécurité et la qualité du service.",
  "2017-pges-du-projet-d-extension-et-de-densification-des-reseaux-v-29":
    "Le projet d'extension et de densification du réseau de Vélingara vise un meilleur approvisionnement de la zone en électricité, tout en améliorant la sûreté, la sécurité et la qualité du service.",

  // EESS
  "2019-eess-du-developpement-de-la-ville-de-chami-evaluation-des-im-30":
    "Dans le cadre du projet régional PRISE2 financé par la Fondation MAVA, le PRCM a appuyé le Parc National du Banc d'Arguin (PNBA) pour évaluer les enjeux environnementaux et sociaux du développement de la ville de Chami. L'objectif : orienter les choix de développement de la ville, réduire ses impacts sur la Valeur Universelle Exceptionnelle de ce site du patrimoine mondial et doter les acteurs de documents cadres conformes aux directives de l'UNESCO et de l'UICN.",
  "2016-preparation-de-l-eess-du-plan-d-urbanisme-de-details-de-piki-31":
    "Composante du PROGEP, le Plan d'Urbanisme de Détails de Pikine et Guédiawaye organise la réorganisation interne de ces villes et leur intégration à l'agglomération, dans le respect du Plan Directeur d'Urbanisme de Dakar horizon 2035 et du Plan Directeur de Drainage. Conformément au Code de l'environnement, l'ADM a fait réaliser son évaluation environnementale stratégique.",
  "2011-analyse-environnementale-initiale-du-programme-de-developpem-41":
    "Le PADEN vise à mettre en valeur le potentiel productif des Niayes pour accroître les revenus des petits producteurs tout en protégeant les ressources naturelles, autour de deux composantes : l'appui au développement horticole et agroforestier, et le renforcement des structures d'appui aux producteurs. Compte tenu de la sensibilité de la zone, une nouvelle ÉES a été menée pour la préparation de son plan de mise en œuvre.",

  // AIE
  "2026-analyse-environnementale-initiale-du-projet-de-rehabilitatio-179":
    "Le projet « K-Rice Belt Senegal », issu de la coopération entre la Corée et le Sénégal et mis en œuvre par la Korea Rural Community Corporation avec la SODAGRI, vise à accroître la production de semences certifiées de riz dans le périmètre irrigué de l'Anambé. Les travaux portent sur la réhabilitation de la station de pompage, le curage du canal d'amenée, la réhabilitation des réseaux d'irrigation et de drainage, le nivellement d'environ 100 ha et la construction d'un magasin de semences d'environ 330 m².",
  "2023-analyse-environnementale-initiale-pour-la-construction-d-une-32":
    "Le projet s'inscrit dans la coopération décentralisée entre Méckhé et Saint-Dié-des-Vosges, appuyée par le réseau Gescod et soutenue par le ministère français de l'Europe et des Affaires étrangères. Il vise à améliorer le cadre de vie des habitants par une gestion durable des déchets solides.",
  "2022-analyse-environnementale-initiale-du-projet-de-construction--33":
    "Création d'une unité de production de tubes plastiques pour l'adduction d'eau, l'assainissement et les télécommunications, sur 3 ha d'un terrain de 21 ha dans la Zone Économique Spéciale Intégrée de Diass. Africa Pipe Industries assure en outre, pour le compte de l'APIX, le développement des 18 ha restants au profit d'entreprises non polluantes.",
  "2022-analyse-environnementale-initiale-d-un-heliport-a-toubacouta-34":
    "Dans la continuité de l'AIBD et de la réhabilitation des aéroports régionaux, l'héliport de Toubacouta (département de Foundiougne) vise à valoriser le potentiel naturel et touristique de cette zone, marquée par l'écosystème du delta du Sine Saloum.",
  "2021-analyse-environnementale-initiale-pour-la-construction-d-une-35":
    "Financé par l'AFD (453 290 euros, programme triennal FICOL), le dispositif intégré de gestion des déchets de Nguéniène, dans le département de Mbour, prévoit la construction d'une ISDND. Il s'inscrit dans la coopération décentralisée entre Bennwihr (France) et Nguéniène, appuyée par Gescod.",
  "2017-analyse-environnementale-initiale-du-raccordement-electrique-36":
    "Sous-projet du volet distribution du PASE : construction d'une ligne de 27 km en 54,6 mm² entre Kounkané et Pakour pour reprendre l'alimentation de la centrale, densification du réseau MT/BT de Pakour et création de nouveaux secteurs.",
  "2017-analyse-environnementale-initiale-du-raccordement-electrique-37":
    "Sous-projet du volet distribution du PASE : construction d'une ligne moyenne tension 30 kV en 54,6 mm² reliant Bokonto à Médina Gounass, sur 47 km.",
  "2017-analyse-environnementale-initiale-du-raccordement-electrique-38":
    "Sous-projet du volet distribution du PASE : ligne moyenne tension 33 kV en 54,6 mm² reliant Kolda à Médina Yoro Foulah (55 km), puis Pata (31 km) et Ndorma (41 km).",
  "2015-etudes-environnementales-preliminaires-des-projets-d-amelior-39":
    "À la demande du gouvernement, la JICA a appuyé la révision du Plan Directeur d'Urbanisme de Dakar à l'horizon 2035, sur la région de Dakar et 820 km² autour de l'aéroport Blaise Diagne. Des projets prioritaires ont été retenus, dont l'amélioration des carrefours de la VDN et de Front de Terre et de l'accès à la gare routière des Baux Maraîchers. Prestige en a réalisé l'évaluation environnementale initiale et un plan d'action de réinstallation sommaire.",
  "2013-analyse-environnementale-initiale-d-une-unite-de-valorisatio-40":
    "Confrontée aux délestages, la SOGAS alimentait ses huit chambres froides par un groupe électrogène coûteux. L'unité de valorisation des déchets d'abattoir vise à produire de l'énergie (876 MWh/an) et plus de 1 000 m³ de biogaz par jour, réduire de 48 % la consommation venant de Senelec, valoriser le digestat comme fertilisant et réduire la pollution de la baie de Hann.",
  "2009-analyse-environnementale-initiale-du-transfert-de-l-atelier--42":
    "Le site de 7,5 ha abrite un atelier d'entretien et de réparation des véhicules et engins de chantier, avec menuiserie métallique et stockage de 100 m³ de gasoil, ainsi qu'un dépôt de matériel de chantier avec menuiserie bois, bureaux et installations pour le personnel.",

  // Audit E&S
  "2026-audit-d-achevement-de-la-mise-en-uvre-du-plan-d-action-de-re-180":
    "Classée en catégorie 1 selon le Système de Sauvegardes Intégré de la BAD, l'autoroute Dakar–Tivaouane–Saint-Louis a donné lieu à une EIES, un PGES, un PAR, un CGES et un PEPP. L'audit vérifie, sur le lot 1.2 financé par la BAD dans le département de Kébémer, la conformité des procédures, les niveaux d'indemnisation et l'accompagnement des personnes affectées, de l'élaboration à la mise en œuvre du PAR, conformément à la sauvegarde opérationnelle n°5.",
  "2026-audit-environnemental-de-la-mise-en-uvre-du-pges-et-de-l-eie-43":
    "Lancé en 2019 par le CETUD, le BRT de Dakar est une ligne de 18,3 km desservant 23 stations, reliant la préfecture de Guédiawaye à la gare routière de Petersen à travers 14 communes. L'audit évalue la prise en compte des dimensions environnementales et sociales de la Composante A, des instruments cadres (CGES, CPR, EIES, PAR, PEPP) jusqu'aux plans opérationnels, au regard des exigences de la Banque Mondiale et de la réglementation nationale.",
  "2024-audit-annuel-des-performances-e-s-du-projet-de-valorisation--44":
    "Premier projet opérationnel du Programme National de Développement de l'Irrigation Locale, le PROVALE-CV mobilise eaux de surface et souterraines pour accroître durablement production agricole, emplois et revenus ruraux dans huit régions. Mis en œuvre de 2020 à 2024, il est financé par la BAD, l'AGTF, l'OPEP, le FIDA et l'État pour environ 80 milliards de FCFA.",
  "2023-audit-annuel-des-performances-e-s-du-provale-cv-exercices-cu-45":
    "Le PROVALE-CV est classé en catégorie 2 au titre des sauvegardes de la BAD et de la réglementation nationale, compte tenu de la dispersion et de la faible envergure de ses infrastructures. Sa mise en œuvre s'appuie sur une EESS, un PCGES et un plan de gestion des pestes et pesticides.",
  "2021-mise-en-conformite-icpe-des-postes-de-hann-patte-d-oie-malic-46":
    "Senelec a engagé la mise en conformité environnementale et sécuritaire de ses centrales et postes électriques afin d'obtenir les autorisations d'exploiter prévues par la loi n°2023-15 du 2 août 2023 portant Code de l'environnement. La mission 4 couvre les postes de Tobène, Thiona et Malicounda, dans la région de Thiès.",
  "2017-etude-de-la-conformite-environnementale-des-activites-de-tra-48":
    "La transformation du riz paddy et le traitement des semences comportent des opérations susceptibles de polluer. L'étude a diagnostiqué onze unités, classées ICPE (rubrique A 211, meuneries et travail des grains), pour évaluer leurs nuisances et proposer des actions correctives, conformément à la réglementation nationale et à la Reg. 216 de l'USAID.",
  "2016-audit-environnemental-et-social-des-ouvrages-de-retention-de-49":
    "Dans le cadre de son programme de retenues d'eau de ruissellement (lutte contre la dégradation des terres et les inondations, recharge des nappes), l'APRHN a aménagé trois ouvrages au pied des collines d'Allou Kagne, à Thiès. L'audit répond à l'article L48 du Code de l'environnement.",
  "2015-audit-environnemental-et-social-des-troncons-malick-sy-patte-50":
    "L'audit a mesuré la conformité réglementaire des tronçons entre Malick Sy et la Patte d'Oie et de l'autoroute à péage jusqu'à Diamniadio, puis a donné lieu à un plan de gestion environnementale et sociale pour bonifier les impacts positifs et réduire les impacts négatifs.",
  "2011-audit-environnemental-du-programme-de-forages-de-production--51":
    "L'audit vérifie la conformité des installations de forage, de production et de transport de gaz à la législation nationale, évalue leur performance environnementale et propose des mesures correctives.",

  // SGES / PEPP
  "2020-realisation-d-un-systeme-de-gestion-environnementale-et-soci-53":
    "Avec la Banque Mondiale, l'État a lancé un projet de développement du gaz en aval, d'intégration des énergies renouvelables et de renforcement institutionnel. Sa composante 1.2 prévoit un réseau gazier pour alimenter ménages, centrales et industries. Relevant du secteur privé, elle doit respecter les Normes de Performance de la SFI, d'où la mise en place d'un SGES.",
  "2022-elaboration-du-plan-d-engagement-des-parties-prenantes-pepp--54":
    "Le nouvel hôpital de niveau 1 de Tivaouane, d'une capacité de 300 lits, réunit de nombreuses spécialités médicales et chirurgicales et des équipements de dernière génération (scanner, IRM, angiographie, mammographie). Le PEPP, fondé sur la NES n°10 de la Banque Mondiale, organise la consultation des personnes affectées et des parties prenantes tout au long du projet.",

  // ── 1.2 Planification, aménagement du territoire et cartographies ──────────
  "2022-elaboration-de-la-premiere-phase-du-plan-d-actions-pluriannu-55":
    "Le plan d'actions pluriannuel (PAP 2024–2028) rend opérationnel le PNADT : il recense les investissements publics et privés programmés, évalue les ressources nécessaires et oriente les investissements vers la vision du PNADT à l'horizon 2027. Cinq thématiques ont été retenues : agriculture (au sens large), santé, énergies, transports et télécommunications.",
  "2022-elaboration-du-schema-directeur-d-amenagement-et-de-developp-56":
    "Face aux menaces qui pèsent sur les zones humides du Delta du Saloum, l'ANAT et Wetlands International élaborent un outil de planification spatiale dédié, dans le cadre du projet PRISE et du PNADT. Prestige a réalisé la phase de bilan-diagnostic.",
  "2014-elaboration-et-vulgarisation-d-un-plan-d-urbanisme-de-detail-57":
    "Pikine et Guédiawaye subissent des inondations récurrentes (16 % et 7 % de leur superficie sinistrées), aggravées par une urbanisation spontanée en zones non constructibles. Le PROGEP, conduit par l'ADM, combine ouvrages de drainage et mesures d'accompagnement institutionnel et social pour réduire durablement ces risques ; le PUD en constitue l'outil de planification.",
  "2013-gestion-des-sites-sensibles-amenagement-des-lacs-insalubres--58":
    "Les bassins de rétention de Bagdad, Nietty Mbar, Leona, Messéré et de la zone de captage constituent le premier niveau d'exutoire des eaux pluviales de la banlieue dakaroise. La mission visait à mieux connaître ces bassins et zones humides pour en assurer la viabilité, à travers un projet modèle de valorisation et d'aménagement des lacs.",
  "2013-cartographie-des-sites-sensibles-de-bagdad-nietty-mbar-leona-59":
    "Édition cartographique des zones sensibles autour des lacs de Bagdad, Nietty Mbar, Leona et Messéré (Djiddah Thiaroye Kao) et de la zone de captage (Grand Yoff), en appui à leur aménagement.",
  "2010-etude-pour-la-viabilisation-et-l-amenagement-de-terres-dans--61":
    "L'étude visait une meilleure connaissance des Niayes et zones humides pour en assurer la viabilité, à travers un projet modèle de viabilisation et d'aménagement de terres, avec un ancrage urbain fort et une place affirmée à l'innovation.",
  "2010-fourniture-de-cartes-et-documents-pour-la-viabilisation-des--62":
    "Actualisation des travaux cartographiques et numérisation des plans des sites du Technopôle, des Maristes et de la Patte-d'Oie dans leur contexte régional.",
  "2008-actualisation-des-audits-urbain-organisationnel-et-financier-63":
    "Actualisation des données urbaines, organisationnelles et financières et préparation des contrats de ville des communes de Diamniadio, Sébikotane, Pout, Bambey, Gossas, Koungheul, Kaffrine et Kédougou.",
  "2007-actualisation-des-audits-urbain-organisationnel-et-financier-64":
    "Actualisation des données urbaines, organisationnelles et financières et préparation des contrats de ville des communes de Bignona, Marsassoum, Sédhiou et Nioro du Rip.",
  "2004-elaboration-du-plan-directeur-d-amenagement-et-de-sauvegarde-66":
    "Le Ministère de l'Urbanisme a confié à la Direction du Paysage et des Espaces Verts Urbains le pilotage du Plan Directeur d'Aménagement et de Sauvegarde des Niayes et Zones Vertes de Dakar, document qui concerne l'ensemble des populations de la région et de ses institutions.",
  "2004-etude-du-schema-d-amenagement-des-villages-sinistres-du-nord-67":
    "À la suite de pluies diluviennes, Prestige a élaboré les schémas d'aménagement de quatre villages sinistrés appelés à servir de modèles : Boynadji (Matam), Taredji (Podor), Gaya (Dagana) et Sagata Djolof (Linguère). Les schémas proposent des orientations, programmes et projets opérationnels concertés.",
  "2003-elaboration-du-plan-directeur-d-urbanisme-de-la-ville-de-ran-68":
    "En qualité de maître d'ouvrage délégué pour la commune de Ranérou, le Ministère de l'Urbanisme a fait élaborer, en concertation avec la collectivité, son plan directeur d'urbanisme sur financement du budget national d'investissement.",
  "2003-revision-du-plan-directeur-d-urbanisme-de-la-ville-de-ziguin-181":
    "Ziguinchor souffre de l'enclavement de la Casamance : traversée aléatoire de la Gambie, long détour par Tambacounda, liaison maritime interrompue après le naufrage du « Joola » en 2002 et liaison aérienne peu accessible. La révision du PDU vise une planification stratégique de l'espace urbain, en cohérence avec le développement de la région.",

  // ── 1.3 Accompagnement du développement local ─────────────────────────────
  "2004-appui-a-l-elaboration-des-plans-locaux-de-developpement-plan-70":
    "Le lot 1 a concerné les communautés rurales de Bani Israël (Bakel), Kahène et Ndoga Babacar (Tambacounda) et Némataba (Vélingara). En facilitateur du processus de planification, Prestige a appuyé la mise en place de l'instance locale de concertation, l'élaboration et la validation du PLD et du PAI, la rédaction des demandes de financement, et formé les acteurs locaux aux méthodes participatives (MARP, approche genre, planification par objectifs).",

  // ── 1.4 Management et études économiques & sectorielles ───────────────────
  "2026-realisation-du-plan-strategique-de-senelec-2027-2031-76":
    "Le plan « Dolli Senelec » 2021–2025 arrivant à son terme, Senelec élabore son plan stratégique 2027–2031, aligné sur la Vision 2050, la Lettre de Politique de Développement du Secteur de l'Énergie 2025–2029 (accès universel à l'électricité) et les Objectifs de Développement Durable, à partir des leçons tirées du plan actuel.",
  "2026-evaluation-des-mecanismes-de-paiement-des-factures-d-electri-77":
    "Les Établissements Publics à Autonomie Financière accumulent retards de paiement et arriérés sur leurs factures d'électricité. Avec le Ministère des Finances et du Budget, Senelec fait évaluer l'efficacité, la rapidité et l'équité des mécanismes actuels, identifier les causes profondes des retards et proposer une feuille de route et, si besoin, des réformes réglementaires.",
  "2025-consultation-sur-le-statut-juridique-du-conseil-senegalais-d-78":
    "La consultation propose un statut juridique adapté au COSEC (agence, établissement public, société nationale, ordre professionnel...) au regard de la loi d'orientation du 19 avril 2022, en intégrant ses futures missions sur les corridors terrestres et fluvio-maritimes et la gestion du Bordereau Électronique de Suivi des Cargaisons. Elle argumente aussi la légitimité du COSEC à bénéficier d'une partie du fonds issu des droits de trafic maritime.",
  "2024-suivi-et-audit-du-contrat-de-performance-entre-l-etat-du-sen-79":
    "Le contrat de performance aligne l'action de Senelec sur les objectifs énergétiques nationaux. La mission a couvert la vérification des engagements contractuels et de la sincérité des informations, l'analyse des indicateurs, le calcul de l'Indicateur Global Annuel, la formulation de recommandations et de leur plan de mise en œuvre, ainsi qu'un atelier bilan de la période 2021–2024.",
  "2021-etude-institutionnelle-de-la-societe-de-navigation-sur-le-fl-80":
    "Dans la perspective du projet de navigation sur le fleuve Sénégal, l'étude dote la SOGENAV d'une organisation institutionnelle lui permettant d'exercer ses missions dans le cadre légal de l'OMVS, et définit les régimes spécifiques (douaniers, fiscaux, financement, concurrence) et les modes de gestion des ouvrages adaptés au développement des activités portuaires et fluviales.",
  "2018-audit-technique-des-activites-du-projet-de-renforcement-des--81":
    "Depuis 2006, l'OMVS a reçu de l'AFD un don de 7 millions d'euros pour la gestion intégrée des ressources en eau du bassin du fleuve Sénégal. L'audit technique de fin de projet rend compte de la passation et de la gestion des marchés, du respect des clauses fiduciaires et de la bonne conduite des activités.",
  "2016-relecture-des-textes-de-fonctionnement-du-haut-commissariat--82":
    "Malgré la réforme de 2010, les textes du Haut-Commissariat avaient peu évolué : règlement financier de 1976, législation des marchés en décalage avec les standards internationaux, statut du personnel aux nombreuses lacunes. La relecture vise à adapter ces textes et le manuel de procédures administratives, financières et comptables, en s'inspirant d'organismes de bassin comparables.",
  "2016-elaboration-d-une-strategie-d-operationnalisation-des-contra-83":
    "Prévu dès le Code des collectivités locales de 1996 sans jamais être appliqué, le contrat-plan État-collectivités locales a été retenu par l'Acte III de la décentralisation comme instrument de financement des projets locaux et de mise en œuvre du PNADT. L'étude propose un dispositif pour le rendre opérationnel.",
  "2016-etude-sur-les-exonerations-douanieres-au-sein-de-l-uemoa-84":
    "La mission a porté sur l'inventaire et le classement des exonérations appliquées dans les États membres, l'évaluation des droits et taxes non perçus, la proposition d'une liste limitative d'exonérations autorisées et du projet de texte correspondant, ainsi qu'un dispositif de suivi au niveau communautaire.",
  "2015-etude-sur-l-harmonisation-des-traitements-de-salaires-des-di-85":
    "Étude complémentaire portant sur les traitements des dirigeants du système OMVS : Haut-Commissaire, Haut-Commissaire Adjoint, Secrétaire Général et Directeurs Généraux des sociétés de gestion (SOGED, SOGEM, SOGENAV).",
  "2014-etude-de-l-impact-budgetaire-de-l-harmonisation-des-grilles--87":
    "Après validation par les États de l'étude d'harmonisation des salaires, le Conseil des Ministres de l'OMVS (février 2014) a demandé d'en mesurer l'incidence financière sur les budgets du Haut-Commissariat et des sociétés. L'objectif était de la contenir idéalement sous 5 % de ces budgets.",
  "2014-etude-relative-a-l-harmonisation-des-traitements-de-salaire--88":
    "Devant la disparité des traitements entre le Haut-Commissariat et les sociétés de gestion (SOGED, SOGEM, SOGENAV), le Conseil des Ministres de l'OMVS a demandé en 2010 une étude d'harmonisation au sein du système. Ses conclusions ont été validées par les États puis approuvées dans leur principe par le Conseil des Ministres.",
  "2012-etude-sur-l-evolution-des-conditions-de-passage-portuaire-de-89":
    "Pour un pays sans littoral comme le Burkina Faso, l'acheminement depuis les ports de desserte peut coûter autant que la phase maritime. Malgré les accords de transit (Nations Unies, CEDEAO, UEMOA, accords bilatéraux), les conditions de passage portuaire se sont parfois dégradées ; l'étude analyse leur évolution pour le Conseil Burkinabè des Chargeurs.",
  "2011-reglement-d-execution-determinant-les-modalites-d-applicatio-90":
    "Après des difficultés d'application des règles d'origine héritées de l'ex-CEAO, l'UEMOA a adopté de nouvelles règles par le Protocole Additionnel III/2001. La mission a élaboré le règlement d'exécution précisant les modalités d'application de l'article 8 nouveau du protocole additionnel I/2009.",
  "2010-etude-sur-le-financement-des-travaux-d-equipement-des-collec-91":
    "L'étude dote la Caisse des Dépôts et Consignations d'une feuille de route pour appuyer le financement des équipements prioritaires des collectivités locales : cartographie des collectivités, cadre juridique, besoins en infrastructures, endettement et solvabilité, potentiel économique, secteurs propices aux partenariats public-privé et proposition d'un mécanisme d'intervention.",
  "2007-etude-sur-l-application-du-protocole-additionnel-iii-2001-in-92":
    "Les divergences d'application des règles d'origine héritées de l'ex-CEAO ont conduit l'UEMOA à adopter le Protocole Additionnel III/2001. L'étude fournit aux instances de l'Union une analyse des difficultés d'application de ce protocole.",
  "2007-audit-financier-et-comptable-du-projet-de-soutien-au-develop-93":
    "Audit financier, organisationnel et comptable de 14 mutuelles d'épargne et de crédit financées par le projet de soutien à la microfinance de l'ex-Fonds de Promotion Économique, à Louga, Linguère, Thiès, Kébémer, Fatick, Matam, Tambacounda, Dakar, Bambey, Kolda, Ziguinchor, Pikine et Kaolack.",
  "2007-etude-diagnostic-institutionnel-et-operationnel-des-organisa-94":
    "Faute d'organisation faîtière forte et de cadre de dialogue, les micro et petites entreprises rurales pesaient peu dans le dialogue État-secteur privé. Le diagnostic dresse, par filière, les forces, faiblesses et besoins en renforcement des capacités des organisations professionnelles, et la représentation des femmes et des groupes cibles du PROMER II.",
  "2003-etude-d-harmonisation-des-cadres-legislatif-et-reglementaire-99":
    "État des lieux du cadre législatif et réglementaire des transports maritimes dans les États membres, et proposition d'une réglementation et d'un cadre institutionnel communs favorisant la coopération entre compagnies de navigation et auxiliaires des transports maritimes.",
  "2003-diagnostic-organisationnel-et-plan-de-developpement-de-l-uni-100":
    "Financé par l'ACDI, le Projet d'Appui aux Opérateurs de l'Agroalimentaire accompagne les acteurs du secteur et renforce l'Institut de Technologie Alimentaire. L'Union Régionale Santa Yalla de Ziguinchor, qui produit de l'huile de poisson, a sollicité un appui pour développer ses compétences entrepreneuriales et ses capacités techniques.",

  // ── 1.5 Business plan et études de faisabilité ─────────────────────────────
  "2024-etude-de-faisabilite-pour-la-mise-en-place-d-une-unite-d-ind-102":
    "Pour produire 5 000 logements sociaux par an dans le cadre du programme 100 000 logements, la SN-HLM veut industrialiser sa production et centraliser ses achats de matériaux. L'étude évalue la faisabilité technique, commerciale, financière, juridique et environnementale des deux projets, pour un mode de construction plus rapide, moins coûteux et plus écologique.",
  "2015-reactualisation-de-l-etude-de-faisabilite-du-parc-de-station-103":
    "Le stationnement anarchique des camions, notamment citernes d'hydrocarbures et de gaz, pose à Kidira de sérieux problèmes de sécurité et de fluidité sur le corridor Dakar–Bamako. Le flux de gros porteurs est passé de 14 000 en 2003 à 109 000 par an, soit près de 300 par jour, d'où la réactualisation de l'étude réalisée en 2004.",
  "2014-etude-de-faisabilite-pour-la-creation-d-une-societe-de-trans-104": PAISD,
  "2012-accompagnement-de-cr-nav-pour-l-acquisition-en-location-vent-105":
    "Actualisation de la demande de transport sur le fleuve et élaboration d'un plan d'exploitation commerciale des bateaux « Invotis Meppel » et « Mira Sanro », puis accompagnement de CR-NAV pour le montage de ses offres technique et financière auprès de la SOGENAV.",
  "2012-etude-de-faisabilite-pour-la-creation-d-une-societe-d-assain-106": PAISD,
  "2011-etude-de-faisabilite-pour-un-centre-de-formation-et-de-resid-107": PAISD,
  "2011-etude-de-faisabilite-renforcement-de-capacite-et-suivi-econo-108": PAISD,
  "2011-etude-de-faisabilite-renforcement-de-capacite-et-suivi-econo-109": PAISD,
  "2010-etude-de-faisabilite-pour-une-societe-d-assainissement-progr-110": PAISD,
  "2010-formation-et-suivi-economique-pour-une-societe-de-prestation-111": PAISD,
  "2010-formation-et-suivi-economique-pour-une-societe-de-prestation-112": PAISD,
  "2010-formation-et-suivi-economique-pour-une-societe-de-vente-de-p-113": PAISD,
  "2010-etude-d-organisation-et-de-mise-en-place-de-la-societe-de-ge-114":
    "L'étude identifie les paramètres techniques, humains, financiers et organisationnels permettant d'établir les fonctions, les activités, l'organigramme, les moyens et les principes de fonctionnement de la SOGENAV.",
  "2007-etude-de-faisabilite-pour-une-ecole-privee-d-enseignement-ge-115": PAISD,
  "2007-etude-de-faisabilite-pour-une-ecole-francaise-a-dakar-progra-116": PAISD,
  "2007-etude-de-faisabilite-pour-un-complexe-hotelier-a-bakel-progr-117": PAISD,
  "2007-pre-etude-pour-la-couverture-medicale-des-personnels-de-l-on-118":
    "Après le retrait de nombreuses directions diocésaines de la SNAS en 1990, faute de pouvoir en assumer les cotisations, l'étude élabore le plan d'affaires d'un système de prise en charge des polices d'assurance des personnels de l'Enseignement Catholique, conforme au code CIMA, et en démontre la faisabilité et la rentabilité.",
  "2006-etude-de-faisabilite-de-la-ligne-maritime-dakar-saint-louis--120":
    "À l'appel des chefs d'État du Sénégal, de la Mauritanie et du Maroc, des opérateurs privés des trois pays ont décidé de créer un armement pour une ligne régulière entre Dakar, Saint-Louis, Nouakchott, Nouadhibou, Casablanca et Tanger. L'étude couvre le marché, le nombre et le type de navires, la structure de gestion et le capital, ainsi que la rentabilité financière et économique.",
  "2006-etude-de-faisabilite-pour-un-centre-de-formation-automobile--121": PAISD,
  "2005-etude-de-fondation-de-la-societe-de-navigation-sur-le-fleuve-125":
    "L'OMVS a confié à Prestige l'étude de faisabilité de la SONASE, société de navigation sur le fleuve Sénégal en création, pour éclairer le lancement immédiat d'une navigation légère sur les plans économique, financier, institutionnel, organisationnel et juridique.",
  "2004-etude-de-faisabilite-relative-a-la-creation-d-entrepots-a-th-126":
    "À la demande des chambres de commerce de Thiès, Diourbel et Tambacounda, le COSEC a fait étudier la création d'entrepôts de stockage et de conservation des produits importés, exportés et destinés à la consommation locale, pour contribuer au développement des régions.",

  // ── 1.6 Suivi, évaluation, diagnostic, audit de projets ────────────────────
  "2023-enquete-de-satisfaction-sur-la-prise-en-compte-des-besoins-s-130":
    "L'enquête mesure la satisfaction des femmes enceintes et des adolescents (10–14, 15–19 et 20–24 ans) vis-à-vis de la Campagne Universelle de Distribution de moustiquaires imprégnées de 2022 : besoins spécifiques, accessibilité, distance et horaires des points de distribution, réception effective des moustiquaires.",
  "2013-etude-de-sondage-d-opinion-sur-le-niveau-de-satisfaction-des-131":
    "Dans le cadre de l'amélioration du climat des affaires (Doing Business) et du lancement du système électronique TELEDAK d'instruction des demandes d'autorisation de construire, l'enquête mesure la satisfaction des usagers et fournit une référence pour les évaluations ultérieures.",
  "2005-enquetes-annuelles-de-satisfaction-du-personnel-du-groupe-so-132":
    "Les enquêtes annuelles mesurent de façon objective le degré de satisfaction du personnel du Groupe Sonatel, dans les agences de Dakar et des régions, au-delà des perceptions courantes.",
  "2017-diagnostic-des-systemes-alimentaires-urbains-territorialises-133":
    "Le projet vise la sécurité alimentaire et nutritionnelle et la résilience climatique des systèmes alimentaires de Dakar et de Fimela, par une approche multi-acteurs. Le diagnostic analyse leur fonctionnement et leurs connexions pour identifier les principaux obstacles, au bénéfice des habitants comme des petits producteurs.",
  "2016-diagnostic-des-capacites-de-collecte-d-analyse-et-de-suivi-e-134":
    "Financé par l'Union Européenne et mis en œuvre par la FAO, le Pro-ACT renforce la formulation et le suivi des politiques agricoles au regard de la sécurité alimentaire et de la nutrition. Le diagnostic porte sur les capacités des structures centrales, déconcentrées et locales, et débouche sur un plan de renforcement des capacités.",
  "2013-assistance-technique-pour-la-planification-du-developpement--135":
    "Financé par la Banque Mondiale, le PRISM II renforce les institutions du secteur minier mauritanien et le développement économique des régions minières. La mission définit une stratégie intégrée de développement régional de l'Inchiri, portée par les pouvoirs publics et les sociétés minières, et un plan de dépenses publiques à l'horizon 2020 incluant routes, eau et, le cas échéant, rail et ports.",
  "2008-etude-diagnostique-dans-les-zones-d-implantation-du-millenni-136":
    "Lors de la préparation du programme MCA Sénégal, un groupe de travail de la société civile présidé par le CONGAD a sollicité une étude sur les mesures d'accompagnement des volets routes, hydraulique et énergie. Prestige, retenu sur appel d'offres, a réalisé le diagnostic des zones de Ziguinchor, Kolda, Tambacounda, Matam et Saint-Louis.",
  "2015-elaboration-de-la-situation-de-reference-et-realisation-des--137":
    "Fort des résultats de sa première phase, le Projet Pistes Communautaires a été reconduit dans le cadre du PNDL avec un prêt de 15 millions d'UC de la BAD. La mission établit la situation de référence du projet et prépare les évaluations d'impact à mi-parcours et en fin de phase.",
  "2016-enquete-de-suivi-de-l-evaluation-d-impact-du-projet-de-gesti-138":
    "Après l'enquête de référence réalisée par Prestige en 2015, à la suite de la remise d'équipements aux organisations communautaires de base pour préserver les ouvrages de drainage, les mêmes ménages ont été réenquêtés pour mesurer l'impact du projet.",
  "2016-revision-de-la-strategie-de-developpement-du-systeme-nationa-139":
    "Le système national d'information sanitaire souffrait d'une faible coordination, de données de qualité insuffisante et de ressources limitées. Avec Abt Associates (programme Santé de l'USAID), Prestige a évalué le plan stratégique 2012–2016 et élaboré le nouveau plan quinquennal 2017–2021.",
  "2015-enquete-de-la-situation-de-reference-de-l-evaluation-d-impac-140":
    "La mission fournit la situation de référence de l'évaluation d'impact du PROGEP : planification et conduite d'enquêtes auprès des ménages et des communautés à Pikine et Guédiawaye, gestion des données et rapports.",
  "2012-evaluation-finale-du-projet-de-relance-vivriere-previco-dans-141":
    "Conçu par le GRDR et ses partenaires avec une subvention de l'Union Européenne en réponse à la flambée des prix alimentaires de 2008, le PREVICO concilie urgence et développement. L'évaluation finale apprécie ses résultats sur la productivité agricole et l'accès des ménages vulnérables aux ressources alimentaires dans cinq wilayas.",
  "2011-enquete-rims-sygri-d-evaluation-d-impact-fin-de-projet-du-pr-142":
    "Le PRODAM lutte contre la pauvreté rurale dans la région de Matam. Après une première phase riche en infrastructures, la seconde vise l'autonomie des organisations paysannes. Après l'enquête de référence (2004) et celle de mi-parcours (2007), Prestige a conduit la troisième et dernière enquête d'impact RIMS.",
  "2011-etude-de-reference-zero-dans-les-zones-d-intervention-du-fon-143":
    "En 2009, le taux d'accès à l'assainissement en milieu rural n'était que de 29 %. Le programme du Fonds Mondial pour l'Assainissement mise sur la prise en charge de l'assainissement par les populations elles-mêmes. L'étude dresse l'état des lieux des pratiques d'hygiène, des comportements et des infrastructures d'eau et d'assainissement dans ses zones cibles.",
  "2010-evaluation-finale-du-projet-africain-de-lutte-d-urgence-cont-182":
    "Financé par la Banque Mondiale de 2005 à 2010, le projet réduit la vulnérabilité du pays aux invasions de criquet pèlerin : lutte d'urgence, gestion des pesticides, investissements agricoles d'urgence, lutte préventive et alerte précoce, promotion des biopesticides. L'évaluation finale apprécie sa pertinence, son efficience, son efficacité et sa viabilité, et formule des recommandations.",
  "2010-evaluation-retrospective-du-projet-de-reconstruction-du-quai-144":
    "Projet de 9 M€ (7 M€ de l'AFD, 2 M€ de l'État) : reconstruction du quai sur 350 m, revêtement de 20 000 m² de terre-pleins, réfection des réseaux et étude d'optimisation du fonctionnement du port. L'évaluation se prononce sur la pertinence, l'efficience, l'efficacité, l'impact et la viabilité du projet.",
  "2010-etude-de-base-du-projet-de-promotion-et-diversification-de-l-145":
    "À travers ce projet, Africare entend promouvoir l'agrobusiness, accroître la productivité, diversifier les cultures et renforcer les organisations de producteurs. L'étude établit la situation de référence des indicateurs socio-économiques et identifie les contraintes, opportunités et menaces pour la sécurité alimentaire et les revenus.",
  "2004-audit-technique-du-programme-national-multisectoriel-de-lutt-147":
    "Le Programme National Multisectoriel de Lutte contre le Sida, piloté par le Conseil National présidé par le Premier Ministre, repose sur la déconcentration, la décentralisation et la multisectorialité dans 11 régions. L'audit technique annuel était prévu par l'accord entre le Gouvernement et la Banque Mondiale.",
  "2002-evaluation-et-certification-des-prestations-des-agences-d-ex-148":
    "Le PSAOP, appuyé par la Banque Mondiale, renforce les organisations de producteurs via des cadres locaux de concertation (CLCOP) accompagnés par des agences d'exécution technique. L'ASPRODEB a confié à Prestige le contrôle et la certification de la qualité du travail de ces agences.",

  // ── 1.7 Maîtrise d'œuvre ──────────────────────────────────────────────────
  "2017-assistance-des-etudes-et-suivi-des-travaux-du-parc-des-techn-149":
    "Prestations : études techniques (APS, APD, DAO) et suivi et contrôle des travaux, en sous-traitance d'IDOM.",
  "2006-maitrise-d-uvre-des-etudes-et-du-controle-des-travaux-de-con-150":
    "Prestations : études techniques (APS, APD), suivi et contrôle des travaux de construction du hangar, réception des travaux.",
  "2004-maitrise-d-uvre-des-travaux-de-pistes-rurales-dans-les-commu-152":
    "Prestations : études techniques (APS, APD, DAO), études topographiques et socio-économiques, études d'impact environnemental et direction des travaux.",
  "2003-viabilisation-de-la-zone-d-amenagement-concerte-de-nguenth-n-153":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détails, assistance à la sélection des entreprises, études d'impact environnemental et contrôle des travaux de voirie et réseaux divers, d'électricité et d'adduction d'eau.",
  "2004-conseil-en-maitrise-d-uvre-pour-l-adduction-d-eau-potable-da-151":
    "Prestations : études APS et APD, assistance au maître d'ouvrage pour les dossiers de financement et d'appel à la concurrence, supervision de la sélection des prestataires, suivi et contrôle des travaux, assistance aux comités de construction et formation des comités de construction et de gestion.",
  "2002-mise-en-place-de-zones-d-amenagement-concerte-et-controle-de-158":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détail, assistance à la sélection des entreprises, contrôle des travaux (VRD, électricité, adduction d'eau) et études d'impact environnemental.",
  "2003-mise-en-place-des-zones-d-amenagement-concerte-et-controle-d-154":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détails, assistance à la sélection des entreprises, contrôle des travaux (VRD, électricité, adduction d'eau) et études d'impact environnemental, sur financement de l'État.",
  "2003-etudes-techniques-des-zones-d-amenagement-concerte-de-kolda--155":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détail, assistance à la sélection des entreprises, contrôle des travaux (VRD, électricité, adduction d'eau) et études d'impact environnemental.",
  "2003-etudes-techniques-des-zones-d-amenagement-concerte-lot-2-mbo-156":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détail, assistance à la sélection des entreprises, contrôle des travaux (VRD, électricité, adduction d'eau) et études d'impact environnemental.",
  "2003-etudes-techniques-des-zones-d-amenagement-concerte-lot-3-tiv-157":
    "Prestations : études (APS, APD, DAO), plan d'urbanisme de détail, assistance à la sélection des entreprises, contrôle des travaux (VRD, électricité, adduction d'eau) et études d'impact environnemental.",

  // ── 1.8 Formation et renforcement de capacité ──────────────────────────────
  "2021-renforcement-des-capacites-des-leaders-de-la-federation-des--163":
    "Formation de 23 jours à la Maison de l'Innovation de Bignona pour 26 membres clés de la FEPAB et de sa filiale : diagnostic financier, gestion financière et tenue de dossiers, transparence et politiques financières, gestion des transports, états financiers et business plan. Prestige a conçu les modules, les politiques financières, un modèle d'états financiers et un manuel de gestion financière.",
  "2013-formation-en-gestion-axee-sur-les-resultats-et-accompagnemen-165":
    "Formation des points focaux du ministère à la planification stratégique, à la gestion axée sur les résultats, au cadre logique, au suivi-évaluation et aux directives UEMOA de 2009 sur la nomenclature budgétaire de l'État, suivie d'ateliers pratiques de production du plan de travail annuel et des rapports de performance.",
  "2012-formation-des-points-focaux-en-gestion-axee-sur-les-resultat-167":
    "Séminaires sur la gestion axée sur les résultats, la budgétisation par activité, le cadre logique et le suivi-évaluation, à Dakar et à Saly, puis ateliers de production du plan de travail annuel 2012, du rapport annuel de performance et du rapport de suivi semestriel du ministère.",
  "2015-seminaire-de-formation-en-management-des-ressources-humaines-164":
    "Séminaire « Productivité et conduite des Hommes » visant l'efficacité de chaque participant : relations humaines, expression orale et écrite, étude de problèmes, techniques de communication et de réunion.",
  "2005-elaboration-et-mise-en-uvre-du-plan-de-formation-en-planific-169":
    "Sessions de formation en planification et suivi-évaluation pour les organisations paysannes du Walo, du Diéri et du Ferlo, la radio communautaire Timtimol FM et les personnels du projet et de ses partenaires : conception des modules, formation de 270 participants, évaluation et rapport.",
  "2001-formation-en-approche-genre-et-developpement-et-approches-pa-172":
    "Organisation logistique et scientifique d'un séminaire pour les cadres de la Cellule Nationale de Coordination du PNIR, conception du manuel de formation, animation et rapport.",
};
