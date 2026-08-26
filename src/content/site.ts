import type { L } from "@/lib/i18n";

export const nav: { to: string; label: L }[] = [
  { to: "/", label: { en: "Home", fr: "Accueil" } },
  { to: "/studio", label: { en: "Studio", fr: "Studio" } },
  { to: "/portfolio", label: { en: "Portfolio", fr: "Réalisations" } },
  { to: "/services", label: { en: "Services", fr: "Services" } },
  { to: "/journal", label: { en: "Journal", fr: "Journal" } },
  { to: "/contact", label: { en: "Contact", fr: "Contact" } },
];

export const ui = {
  viewProject: { en: "View project", fr: "Voir le projet" },
  allProjects: { en: "All projects", fr: "Tous les projets" },
  contactUs: { en: "Start a conversation", fr: "Engager la conversation" },
  readMore: { en: "Read", fr: "Lire" },
  backTo: { en: "Back to portfolio", fr: "Retour aux réalisations" },
  filter: { en: "Filter by sector", fr: "Filtrer par secteur" },
  gallery: { en: "Project gallery", fr: "Galerie du projet" },
  highlights: { en: "Design highlights", fr: "Points forts de conception" },
  factsheet: { en: "Project data", fr: "Données du projet" },
  category: { en: "Category", fr: "Catégorie" },
  location: { en: "Location", fr: "Localisation" },
  year: { en: "Year", fr: "Année" },
  clientType: { en: "Client type", fr: "Type de client" },
  scope: { en: "Scope of work", fr: "Mission" },
  size: { en: "Size / area", fr: "Surface" },
  materials: { en: "Key materials", fr: "Matériaux principaux" },
  next: { en: "Next project", fr: "Projet suivant" },
} satisfies Record<string, L>;

export const home = {
  heroEyebrow: { en: "International architecture practice", fr: "Agence d'architecture internationale" },
  heroTitle: {
    en: "Buildings that hold their ground for a century.",
    fr: "Des bâtiments qui tiennent leur terrain pendant un siècle.",
  },
  heroLead: {
    en: "Ayrick Architecture designs civic, commercial and residential work across four continents — delivered with structural rigour, material discipline and long-term stewardship.",
    fr: "Ayrick Architecture conçoit des projets civiques, commerciaux et résidentiels sur quatre continents — avec rigueur structurelle, discipline matérielle et vision à long terme.",
  },
  stats: [
    { value: "38", label: { en: "Years in operation", fr: "Années d'activité" } },
    { value: "410+", label: { en: "Projects delivered", fr: "Projets livrés" } },
    { value: "26", label: { en: "Countries", fr: "Pays" } },
    { value: "6", label: { en: "Studios worldwide", fr: "Studios dans le monde" } },
  ],
  featuredEyebrow: { en: "Selected work", fr: "Travaux sélectionnés" },
  featuredTitle: { en: "Projects in the field", fr: "Projets sur le terrain" },
  servicesEyebrow: { en: "Capability", fr: "Compétences" },
  servicesTitle: { en: "What we are asked to do", fr: "Ce que l'on nous confie" },
  positionEyebrow: { en: "Practice", fr: "Agence" },
  positionTitle: {
    en: "A practice built around delivery, not around style.",
    fr: "Une agence construite sur la livraison, non sur le style.",
  },
  positionBody: {
    en: "We work in permanent teams from first sketch to final inspection. Every project is led by a partner, documented in-house, and monitored on site — the reason 74% of our commissions come from returning clients.",
    fr: "Nous travaillons en équipes permanentes, de la première esquisse à la réception finale. Chaque projet est dirigé par un associé, documenté en interne et suivi sur site — c'est pourquoi 74 % de nos missions proviennent de clients fidèles.",
  },
  ctaTitle: {
    en: "Tell us what you need to build.",
    fr: "Dites-nous ce que vous devez construire.",
  },
  ctaBody: {
    en: "Feasibility, competition, masterplan or delivery — our partners respond to every enquiry within two working days.",
    fr: "Faisabilité, concours, plan directeur ou exécution — nos associés répondent à chaque demande sous deux jours ouvrés.",
  },
};

export const services: {
  number: string;
  title: L;
  body: L;
  deliverables: L<string[]>;
}[] = [
  {
    number: "01",
    title: { en: "Architecture & Design", fr: "Architecture et conception" },
    body: {
      en: "Full architectural service from concept design to construction documentation, led by a named partner throughout.",
      fr: "Service architectural complet, de l'esquisse aux documents d'exécution, dirigé par un associé nommé.",
    },
    deliverables: {
      en: ["Concept and schematic design", "Design development", "Construction documentation"],
      fr: ["Esquisse et avant-projet", "Développement du projet", "Documents d'exécution"],
    },
  },
  {
    number: "02",
    title: { en: "Masterplanning & Urban Design", fr: "Plans directeurs et urbanisme" },
    body: {
      en: "District-scale frameworks that fix street geometry, density and phasing before a single building is designed.",
      fr: "Cadres à l'échelle du quartier fixant géométrie, densité et phasage avant toute conception de bâtiment.",
    },
    deliverables: {
      en: ["Site and capacity studies", "Framework and design codes", "Phasing strategy"],
      fr: ["Études de site et de capacité", "Cadre et codes de conception", "Stratégie de phasage"],
    },
  },
  {
    number: "03",
    title: { en: "Adaptive Reuse & Heritage", fr: "Réhabilitation et patrimoine" },
    body: {
      en: "Structural and programmatic reinvention of existing and listed buildings, with reversible interventions as standard.",
      fr: "Réinvention structurelle et programmatique de bâtiments existants et classés, avec des interventions réversibles.",
    },
    deliverables: {
      en: ["Condition and reuse audit", "Heritage consent strategy", "Retrofit detailing"],
      fr: ["Audit d'état et de réemploi", "Stratégie d'autorisation patrimoniale", "Détails de rénovation"],
    },
  },
  {
    number: "04",
    title: { en: "Interior Architecture", fr: "Architecture d'intérieur" },
    body: {
      en: "Workplace, hospitality and residential interiors developed as part of the building fabric, never applied to it.",
      fr: "Intérieurs de bureaux, d'hôtellerie et de logement développés comme partie du bâti, jamais plaqués.",
    },
    deliverables: {
      en: ["Spatial planning", "Material and joinery packages", "FF&E specification"],
      fr: ["Plans d'aménagement", "Lots matériaux et menuiserie", "Prescription mobilier et équipements"],
    },
  },
  {
    number: "05",
    title: { en: "Sustainability & Performance", fr: "Durabilité et performance" },
    body: {
      en: "Passive-first environmental design, embodied carbon accounting and certification management across all sectors.",
      fr: "Conception environnementale passive, comptabilité carbone et gestion des certifications.",
    },
    deliverables: {
      en: ["Passive design strategy", "Embodied carbon assessment", "Certification management"],
      fr: ["Stratégie de conception passive", "Bilan carbone incorporé", "Gestion des certifications"],
    },
  },
  {
    number: "06",
    title: { en: "Delivery & Site Supervision", fr: "Exécution et supervision de chantier" },
    body: {
      en: "Tender support, contract administration and resident site architects for projects in complex jurisdictions.",
      fr: "Assistance à l'appel d'offres, gestion de contrat et architectes résidents sur les chantiers complexes.",
    },
    deliverables: {
      en: ["Tender documentation", "Contract administration", "Site inspection and handover"],
      fr: ["Dossier d'appel d'offres", "Administration du contrat", "Réception et livraison"],
    },
  },
];

export const studio = {
  heroEyebrow: { en: "The studio", fr: "Le studio" },
  heroTitle: {
    en: "Thirty-eight years of building in difficult places.",
    fr: "Trente-huit ans de construction en terrains difficiles.",
  },
  storyTitle: { en: "Our story", fr: "Notre histoire" },
  story: {
    en: "Ayrick Architecture was founded in 1988 as a two-person office working on port infrastructure. The practice grew by staying close to construction: our teams document their own work, sit in contractor meetings, and walk the site until handover. That structure has carried us from a single studio to six offices and 240 staff without changing how a project is run.\n\nWe do not have a house style. We have a method — read the site, fix the structure, choose few materials, and detail them properly.",
    fr: "Ayrick Architecture a été fondée en 1988 comme un bureau de deux personnes travaillant sur des infrastructures portuaires. L'agence a grandi en restant proche du chantier : nos équipes rédigent leurs propres documents, participent aux réunions d'entreprise et parcourent le site jusqu'à la réception. Cette organisation nous a menés d'un studio unique à six bureaux et 240 collaborateurs sans changer la conduite d'un projet.\n\nNous n'avons pas de style maison. Nous avons une méthode : lire le site, fixer la structure, choisir peu de matériaux et les détailler correctement.",
  },
  missionTitle: { en: "Mission", fr: "Mission" },
  mission: {
    en: "To design durable buildings that serve their occupants and their cities for generations, delivered on the terms we promised.",
    fr: "Concevoir des bâtiments durables qui servent leurs occupants et leurs villes pendant des générations, livrés selon les termes promis.",
  },
  valuesTitle: { en: "Values", fr: "Valeurs" },
  values: [
    {
      title: { en: "Structural honesty", fr: "Honnêteté structurelle" },
      body: {
        en: "What holds the building up should be visible, understood and never disguised.",
        fr: "Ce qui porte le bâtiment doit être visible, compris et jamais dissimulé.",
      },
    },
    {
      title: { en: "Material restraint", fr: "Retenue matérielle" },
      body: {
        en: "Few materials, sourced close to site, detailed to last without replacement.",
        fr: "Peu de matériaux, sourcés près du site, détaillés pour durer sans remplacement.",
      },
    },
    {
      title: { en: "Accountability", fr: "Responsabilité" },
      body: {
        en: "One partner is answerable for each commission from first meeting to final certificate.",
        fr: "Un associé est responsable de chaque mission, du premier rendez-vous au certificat final.",
      },
    },
    {
      title: { en: "Long horizons", fr: "Horizons longs" },
      body: {
        en: "We design for a 100-year service life and plan maintenance from day one.",
        fr: "Nous concevons pour une durée de vie de 100 ans et planifions la maintenance dès le premier jour.",
      },
    },
  ],
  leadershipTitle: { en: "Leadership", fr: "Direction" },
  leadership: [
    { name: "Amara Ndiaye", role: { en: "Founding Partner", fr: "Associée fondatrice" } },
    { name: "Rikard Holm", role: { en: "Managing Partner", fr: "Associé gérant" } },
    { name: "Yuki Tanabe", role: { en: "Partner, Design", fr: "Associée, Conception" } },
    { name: "Claude Mbarga", role: { en: "Partner, Delivery", fr: "Associé, Exécution" } },
    { name: "Sofia Marchetti", role: { en: "Partner, Masterplanning", fr: "Associée, Plans directeurs" } },
    { name: "Daniel Okoye", role: { en: "Director, Sustainability", fr: "Directeur, Durabilité" } },
  ],
  presenceTitle: { en: "International presence", fr: "Présence internationale" },
  presenceBody: {
    en: "Six studios, twenty-six countries, one delivery standard.",
    fr: "Six studios, vingt-six pays, un seul standard de livraison.",
  },
  offices: [
    { city: "Rotterdam", country: { en: "Netherlands", fr: "Pays-Bas" }, role: { en: "Headquarters", fr: "Siège" }, since: "1988" },
    { city: "London", country: { en: "United Kingdom", fr: "Royaume-Uni" }, role: { en: "Europe / heritage", fr: "Europe / patrimoine" }, since: "1996" },
    { city: "Douala", country: { en: "Cameroon", fr: "Cameroun" }, role: { en: "Central Africa", fr: "Afrique centrale" }, since: "2004" },
    { city: "Singapore", country: { en: "Singapore", fr: "Singapour" }, role: { en: "Asia-Pacific", fr: "Asie-Pacifique" }, since: "2009" },
    { city: "Montréal", country: { en: "Canada", fr: "Canada" }, role: { en: "North America", fr: "Amérique du Nord" }, since: "2015" },
    { city: "Marrakech", country: { en: "Morocco", fr: "Maroc" }, role: { en: "North Africa / hospitality", fr: "Afrique du Nord / hôtellerie" }, since: "2019" },
  ],
};

export const journal: {
  slug: string;
  date: string;
  category: L;
  title: L;
  excerpt: L;
  body: L<string[]>;
}[] = [
  {
    slug: "north-quay-phase-one-topped-out",
    date: "2026-07-14",
    category: { en: "Project news", fr: "Actualité de projet" },
    title: {
      en: "North Quay Exchange tops out on phase one",
      fr: "North Quay Exchange achève le gros œuvre de la phase un",
    },
    excerpt: {
      en: "The first two blocks of the Hamburg freight terminal conversion reached full height this month, with 72% of the original structure retained.",
      fr: "Les deux premiers îlots de la conversion du terminal de fret de Hambourg ont atteint leur hauteur définitive ce mois-ci, avec 72 % de la structure d'origine conservée.",
    },
    body: {
      en: [
        "Phase one of North Quay Exchange reached its full structural height this month, eighteen months after enabling works began on the decommissioned freight terminal.",
        "The retained concrete frame required a bay-by-bay survey before any new load could be introduced. Where the original grid was sound, new floors were hung from it directly; where it was not, free-standing steel was inserted without touching the historic fabric.",
        "Phase two begins on site in early 2027, with the market hall following the original crane rail geometry across a 48-metre clear span.",
      ],
      fr: [
        "La phase un de North Quay Exchange a atteint sa hauteur structurelle définitive ce mois-ci, dix-huit mois après le début des travaux préparatoires sur le terminal de fret désaffecté.",
        "L'ossature béton conservée a nécessité un relevé travée par travée avant toute nouvelle charge. Là où la trame d'origine était saine, les nouveaux planchers y ont été suspendus directement ; ailleurs, une structure acier indépendante a été insérée sans toucher au bâti historique.",
        "La phase deux démarre début 2027, la halle de marché reprenant la géométrie des rails de grue sur une portée libre de 48 mètres.",
      ],
    },
  },
  {
    slug: "earth-block-supply-chains",
    date: "2026-05-28",
    category: { en: "Insight", fr: "Analyse" },
    title: {
      en: "What it takes to build an earth-block supply chain",
      fr: "Ce qu'exige une filière de blocs de terre comprimée",
    },
    excerpt: {
      en: "Lessons from Kinshasa: specifying compressed earth block is straightforward. Establishing a supplier who can hold tolerance at volume is not.",
      fr: "Leçons de Kinshasa : prescrire le bloc de terre comprimée est simple. Trouver un fournisseur capable de tenir les tolérances en volume ne l'est pas.",
    },
    body: {
      en: [
        "On the Kasai Civic Library we specified compressed earth block for 9,400 m² of wall. The material was the easy decision; the supply chain took fourteen months to build.",
        "Working with two regional producers, we set a shared testing regime, funded a second press, and trained eleven operators against a written tolerance standard. Rejection rates fell from 22% to under 4% across the first three production runs.",
        "The resulting cost per square metre was 31% below imported blockwork, and the producers retained the capability after our contract closed.",
      ],
      fr: [
        "Pour la Bibliothèque civique du Kasaï, nous avons prescrit le bloc de terre comprimée pour 9 400 m² de murs. Le matériau était la décision facile ; la filière a demandé quatorze mois.",
        "Avec deux producteurs régionaux, nous avons établi un protocole d'essais commun, financé une seconde presse et formé onze opérateurs selon un standard écrit de tolérances. Le taux de rebut est passé de 22 % à moins de 4 %.",
        "Le coût au mètre carré obtenu était inférieur de 31 % à la maçonnerie importée, et les producteurs ont conservé cette capacité après notre contrat.",
      ],
    },
  },
  {
    slug: "ayrick-opens-montreal-studio-expansion",
    date: "2026-03-09",
    category: { en: "Practice", fr: "Agence" },
    title: {
      en: "Montréal studio doubles in size ahead of transit programme",
      fr: "Le studio de Montréal double sa taille avant le programme de transport",
    },
    excerpt: {
      en: "Forty new positions across architecture, technical delivery and site supervision will support three station commissions through 2029.",
      fr: "Quarante nouveaux postes en architecture, exécution technique et supervision de chantier soutiendront trois missions de stations jusqu'en 2029.",
    },
    body: {
      en: [
        "Our Montréal studio has taken an additional floor and will grow from 38 to 78 staff over the next two years.",
        "The expansion follows appointment to three further station commissions, each requiring resident site architects for the full construction period.",
        "Recruitment is focused on technical delivery, winter-condition detailing and accessibility design.",
      ],
      fr: [
        "Notre studio de Montréal a pris un étage supplémentaire et passera de 38 à 78 collaborateurs en deux ans.",
        "Cette croissance suit la désignation sur trois nouvelles missions de stations, chacune nécessitant des architectes résidents pendant toute la durée du chantier.",
        "Le recrutement porte sur l'exécution technique, les détails en conditions hivernales et la conception accessible.",
      ],
    },
  },
  {
    slug: "designing-for-a-hundred-year-service-life",
    date: "2025-11-21",
    category: { en: "Insight", fr: "Analyse" },
    title: {
      en: "Designing for a hundred-year service life",
      fr: "Concevoir pour une durée de vie de cent ans",
    },
    excerpt: {
      en: "Durability is a documentation problem as much as a material one. A note on how we write maintenance into the drawing set.",
      fr: "La durabilité est autant une question de documentation que de matériaux. Note sur l'inscription de la maintenance dans le dossier de plans.",
    },
    body: {
      en: [
        "A hundred-year building is not achieved by specifying heavier materials. It is achieved by making every component replaceable in a known sequence, and writing that sequence down.",
        "On each project we issue a maintenance access drawing alongside the construction set: which layers can be removed, in what order, and with what plant.",
        "Clients report that this single document has more influence on whole-life cost than any material substitution we have proposed.",
      ],
      fr: [
        "Un bâtiment centenaire ne s'obtient pas en prescrivant des matériaux plus lourds. Il s'obtient en rendant chaque composant remplaçable selon une séquence connue, et en écrivant cette séquence.",
        "Sur chaque projet, nous émettons un plan d'accès à la maintenance en parallèle du dossier d'exécution : quelles couches peuvent être retirées, dans quel ordre et avec quels moyens.",
        "Nos clients constatent que ce seul document influence davantage le coût global que toute substitution de matériau proposée.",
      ],
    },
  },
];

export const contact = {
  heroEyebrow: { en: "Contact", fr: "Contact" },
  heroTitle: { en: "Speak to a partner directly.", fr: "Parlez directement à un associé." },
  heroLead: {
    en: "Send a brief, a site address or a question. Enquiries are answered by the partner responsible for the region.",
    fr: "Envoyez un programme, une adresse de site ou une question. Chaque demande est traitée par l'associé responsable de la région.",
  },
  formTitle: { en: "Project enquiry", fr: "Demande de projet" },
  fields: {
    name: { en: "Full name", fr: "Nom complet" },
    email: { en: "Email address", fr: "Adresse e-mail" },
    organisation: { en: "Organisation", fr: "Organisation" },
    location: { en: "Project location", fr: "Localisation du projet" },
    type: { en: "Enquiry type", fr: "Type de demande" },
    message: { en: "Brief", fr: "Programme" },
    submit: { en: "Send enquiry", fr: "Envoyer la demande" },
  },
  enquiryTypes: [
    { en: "New commission", fr: "Nouvelle mission" },
    { en: "Competition invitation", fr: "Invitation à concours" },
    { en: "Press", fr: "Presse" },
    { en: "Careers", fr: "Carrières" },
  ],
  mapLabel: { en: "Map Placeholder — Studio locations", fr: "Carte à intégrer — Localisation des studios" },
  officesTitle: { en: "Offices", fr: "Bureaux" },
  offices: [
    { city: "Rotterdam", lines: ["Wilhelminakade 118", "3072 AP Rotterdam", "+31 10 000 0000"] },
    { city: "London", lines: ["44 Bankside Row", "SE1 9PA London", "+44 20 0000 0000"] },
    { city: "Douala", lines: ["Boulevard de la Liberté 210", "Douala, Cameroon", "+237 6 00 00 00 00"] },
    { city: "Singapore", lines: ["12 Keppel Bay View", "098403 Singapore", "+65 0000 0000"] },
    { city: "Montréal", lines: ["980 Rue Saint-Antoine O", "H3C 1A1 Montréal", "+1 514 000 0000"] },
    { city: "Marrakech", lines: ["Rue Ibn Aicha 31", "40000 Marrakech", "+212 5 00 00 00 00"] },
  ],
};
