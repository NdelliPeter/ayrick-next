import type { L } from "@/lib/i18n";

export const CATEGORIES = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Public",
  "Mixed-Use",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category | "All", L> = {
  All: { en: "All Projects", fr: "Tous les projets" },
  Residential: { en: "Residential", fr: "Résidentiel" },
  Commercial: { en: "Commercial", fr: "Commercial" },
  Hospitality: { en: "Hospitality", fr: "Hôtellerie" },
  Public: { en: "Public", fr: "Public" },
  "Mixed-Use": { en: "Mixed-Use", fr: "Usage mixte" },
};

export type ClientType = "Private" | "Corporate" | "Government" | "NGO";

export interface Project {
  slug: string;
  name: string;
  category: Category;
  location: string;
  year: string;
  clientType: ClientType;
  scope: L;
  size: string;
  materials: L;
  description: L;
  highlights: L<string[]>;
  /** Hero image placeholder label — one large landscape image. */
  heroLabel: string;
  /** 5–10 supporting gallery image placeholders. */
  gallery: string[];
  featured?: boolean;
}

const g = (name: string, n: number) =>
  Array.from({ length: n }, (_, i) => `${name} — Gallery ${String(i + 1).padStart(2, "0")}`);

export const projects: Project[] = [
  {
    slug: "meridian-tower",
    name: "Meridian Tower",
    category: "Commercial",
    location: "Rotterdam, Netherlands",
    year: "2024",
    clientType: "Corporate",
    scope: {
      en: "Full architectural services, façade engineering coordination, interior standards",
      fr: "Services d'architecture complets, coordination de l'ingénierie de façade, standards intérieurs",
    },
    size: "62,400 m² GFA / 34 storeys",
    materials: {
      en: "Board-formed concrete, anodised aluminium, low-iron glass",
      fr: "Béton brut de décoffrage, aluminium anodisé, verre extra-clair",
    },
    description: {
      en: "A headquarters tower for a maritime logistics group, organised around a stacked series of double-height working floors and a public colonnade at grade. The structural frame is expressed on the exterior, giving the building a legible order that responds to the industrial scale of the port.",
      fr: "Une tour de siège social pour un groupe de logistique maritime, organisée autour d'une série d'étages de travail à double hauteur et d'une colonnade publique au rez-de-chaussée. La structure est exprimée en façade, offrant un ordre lisible qui répond à l'échelle industrielle du port.",
    },
    highlights: {
      en: [
        "Exposed perimeter frame reduces internal columns across every floorplate",
        "Colonnade returns 1,800 m² of ground plane to the public realm",
        "Envelope achieves a 41% reduction in operational energy against baseline",
      ],
      fr: [
        "L'ossature périmétrique apparente réduit les poteaux intérieurs à chaque niveau",
        "La colonnade restitue 1 800 m² d'emprise au sol à l'espace public",
        "L'enveloppe atteint une réduction de 41 % de l'énergie d'exploitation",
      ],
    },
    heroLabel: "Meridian Tower — Hero",
    gallery: g("Meridian Tower", 7),
    featured: true,
  },
  {
    slug: "kasai-civic-library",
    name: "Kasai Civic Library",
    category: "Public",
    location: "Kinshasa, DR Congo",
    year: "2023",
    clientType: "Government",
    scope: {
      en: "Competition-winning design, technical documentation, site supervision",
      fr: "Concours lauréat, documentation technique, supervision de chantier",
    },
    size: "11,900 m² / 3 levels",
    materials: {
      en: "Compressed earth block, laterite aggregate concrete, hardwood louvres",
      fr: "Blocs de terre comprimée, béton d'agrégat latéritique, persiennes en bois dur",
    },
    description: {
      en: "A civic reading room and municipal archive built around a shaded central court. Deep masonry piers and timber louvre screens moderate heat gain, allowing the majority of the building to operate without mechanical cooling for ten months of the year.",
      fr: "Une salle de lecture civique et des archives municipales organisées autour d'une cour centrale ombragée. Les piliers massifs en maçonnerie et les claustras en bois modèrent les apports thermiques, permettant au bâtiment de fonctionner sans climatisation dix mois par an.",
    },
    highlights: {
      en: [
        "Locally pressed earth blocks sourced within 40 km of the site",
        "Passive cross-ventilation strategy validated by CFD modelling",
        "Archive vault isolated in a separate thermal envelope",
      ],
      fr: [
        "Blocs de terre comprimée produits dans un rayon de 40 km",
        "Stratégie de ventilation traversante validée par modélisation CFD",
        "Réserve d'archives isolée dans une enveloppe thermique distincte",
      ],
    },
    heroLabel: "Kasai Civic Library — Hero",
    gallery: g("Kasai Civic Library", 6),
    featured: true,
  },
  {
    slug: "atelier-house-nine",
    name: "Atelier House Nine",
    category: "Residential",
    location: "Lisbon, Portugal",
    year: "2025",
    clientType: "Private",
    scope: {
      en: "Concept through completion, bespoke joinery and landscape design",
      fr: "De l'esquisse à la livraison, menuiserie sur mesure et paysage",
    },
    size: "540 m² / 2 levels + studio",
    materials: {
      en: "Lime-render masonry, travertine, blackened steel",
      fr: "Maçonnerie enduite à la chaux, travertin, acier noirci",
    },
    description: {
      en: "A house and painting studio on a steep hillside plot, split into two volumes connected by an open stair court. Rooms are arranged as a sequence of thresholds, each framing a fixed view of the estuary below.",
      fr: "Une maison et un atelier de peinture sur un terrain en forte pente, scindés en deux volumes reliés par une cour-escalier. Les pièces s'enchaînent comme une suite de seuils, chacun cadrant une vue fixe sur l'estuaire.",
    },
    highlights: {
      en: [
        "Two-volume parti preserves the existing terraced retaining walls",
        "North-lit studio with a 6 m clear-span roof structure",
        "Rainwater harvesting supplies all landscape irrigation",
      ],
      fr: [
        "Le parti en deux volumes préserve les murs de soutènement existants",
        "Atelier en lumière du nord, charpente de 6 m de portée libre",
        "La récupération des eaux de pluie alimente toute l'irrigation",
      ],
    },
    heroLabel: "Atelier House Nine — Hero",
    gallery: g("Atelier House Nine", 6),
    featured: true,
  },
  {
    slug: "north-quay-exchange",
    name: "North Quay Exchange",
    category: "Mixed-Use",
    location: "Hamburg, Germany",
    year: "In Progress",
    clientType: "Corporate",
    scope: {
      en: "Masterplan, lead architect for phases 1–2, public realm design",
      fr: "Plan directeur, architecte mandataire des phases 1–2, espaces publics",
    },
    size: "148,000 m² across 5 blocks",
    materials: {
      en: "Precast concrete, weathering steel, reclaimed brick",
      fr: "Béton préfabriqué, acier patinable, brique de réemploi",
    },
    description: {
      en: "The conversion of a decommissioned freight terminal into a mixed district of workplace, housing and market halls. Existing rail infrastructure is retained as the organising geometry for streets and public squares.",
      fr: "La conversion d'un terminal de fret désaffecté en un quartier mixte de bureaux, logements et halles de marché. L'infrastructure ferroviaire existante est conservée comme géométrie directrice des rues et places.",
    },
    highlights: {
      en: [
        "72% of existing structural concrete retained in situ",
        "Market hall spans 48 m using the original crane rail grid",
        "Phased delivery keeps the quay operational throughout construction",
      ],
      fr: [
        "72 % du béton structurel existant conservé in situ",
        "La halle franchit 48 m en réutilisant la trame de rails de grue",
        "Livraison phasée maintenant le quai en exploitation",
      ],
    },
    heroLabel: "North Quay Exchange — Hero",
    gallery: g("North Quay Exchange", 8),
    featured: true,
  },
  {
    slug: "hotel-sable",
    name: "Hôtel Sablé",
    category: "Hospitality",
    location: "Marrakech, Morocco",
    year: "2022",
    clientType: "Private",
    scope: {
      en: "Architecture, interiors, FF&E specification",
      fr: "Architecture, intérieurs, prescription du mobilier et des équipements",
    },
    size: "9,300 m² / 74 keys",
    materials: {
      en: "Tadelakt, rammed earth, cedar screens, brass",
      fr: "Tadelakt, pisé, claustras en cèdre, laiton",
    },
    description: {
      en: "A 74-key hotel composed as a series of walled gardens. Guest wings are kept low and horizontal so that the roofscape reads as a continuous terrace, with water channels running through each courtyard to temper the air.",
      fr: "Un hôtel de 74 chambres composé comme une succession de jardins clos. Les ailes restent basses et horizontales afin que la toiture se lise comme une terrasse continue, des canaux d'eau traversant chaque patio pour tempérer l'air.",
    },
    highlights: {
      en: [
        "Nine courtyards graded from public arrival to private suites",
        "Rammed earth walls produced from site excavation spoil",
        "Roof terrace circuit links all guest wings without lifts",
      ],
      fr: [
        "Neuf patios gradués de l'arrivée publique aux suites privées",
        "Murs en pisé issus des déblais du site",
        "Un circuit de terrasses relie toutes les ailes sans ascenseur",
      ],
    },
    heroLabel: "Hôtel Sablé — Hero",
    gallery: g("Hôtel Sablé", 7),
  },
  {
    slug: "granite-line-transit-hub",
    name: "Granite Line Transit Hub",
    category: "Public",
    location: "Montréal, Canada",
    year: "2024",
    clientType: "Government",
    scope: {
      en: "Station architecture, wayfinding, integrated public art coordination",
      fr: "Architecture de station, signalétique, coordination des œuvres intégrées",
    },
    size: "18,700 m² / 4 platform levels",
    materials: {
      en: "Granite cladding, galvanised steel, cast glass",
      fr: "Parement de granit, acier galvanisé, verre coulé",
    },
    description: {
      en: "An interchange serving three lines beneath a granite-clad concourse. Daylight is drawn 22 metres down through a single structural void, giving passengers a continuous visual reference from street to platform.",
      fr: "Un pôle d'échange desservant trois lignes sous une salle des billets habillée de granit. La lumière naturelle descend 22 mètres à travers un vide structurel unique, offrant aux voyageurs un repère visuel continu de la rue au quai.",
    },
    highlights: {
      en: [
        "Single 22 m daylight void replaces artificial concourse lighting by day",
        "Winter-resilient detailing tested to −34 °C",
        "Step-free routes to all four platform levels",
      ],
      fr: [
        "Un vide de lumière de 22 m remplace l'éclairage artificiel en journée",
        "Détails résistants à l'hiver testés jusqu'à −34 °C",
        "Accès sans marche aux quatre niveaux de quais",
      ],
    },
    heroLabel: "Granite Line Transit Hub — Hero",
    gallery: g("Granite Line Transit Hub", 6),
  },
  {
    slug: "vellore-works",
    name: "Vellore Works",
    category: "Commercial",
    location: "Chennai, India",
    year: "2023",
    clientType: "Corporate",
    scope: {
      en: "Industrial architecture, campus planning, workforce amenity buildings",
      fr: "Architecture industrielle, plan de campus, bâtiments d'agrément",
    },
    size: "84,000 m² manufacturing campus",
    materials: {
      en: "Fair-faced concrete, profiled metal, perforated brick screens",
      fr: "Béton lisse apparent, bardage métallique profilé, claustras de brique perforée",
    },
    description: {
      en: "A precision-manufacturing campus where production halls, logistics and staff facilities share one disciplined structural grid. Amenity buildings are pushed to the shaded southern edge to form a landscaped worker spine.",
      fr: "Un campus de fabrication de précision où halles de production, logistique et services partagent une trame structurelle unique. Les bâtiments d'agrément sont repoussés vers la limite sud ombragée pour former une dorsale paysagère.",
    },
    highlights: {
      en: [
        "Single 12 m structural grid across all production and support buildings",
        "Rooftop photovoltaic array covers 63% of campus demand",
        "Perforated brick screens cut solar gain on all west elevations",
      ],
      fr: [
        "Trame unique de 12 m sur l'ensemble des bâtiments",
        "Centrale photovoltaïque en toiture couvrant 63 % des besoins",
        "Claustras de brique réduisant les apports solaires à l'ouest",
      ],
    },
    heroLabel: "Vellore Works — Hero",
    gallery: g("Vellore Works", 6),
  },
  {
    slug: "cedar-row-housing",
    name: "Cedar Row Housing",
    category: "Residential",
    location: "Copenhagen, Denmark",
    year: "2022",
    clientType: "NGO",
    scope: {
      en: "Affordable housing design, resident consultation, delivery support",
      fr: "Conception de logements abordables, concertation, appui à la livraison",
    },
    size: "14,200 m² / 128 homes",
    materials: {
      en: "Cross-laminated timber, cedar cladding, terrazzo",
      fr: "Bois lamellé-croisé, bardage en cèdre, terrazzo",
    },
    description: {
      en: "One hundred and twenty-eight cooperative homes in six timber terraces. Shared stairs are widened into daylit social landings, and every home has dual aspect and a full-width external room.",
      fr: "Cent vingt-huit logements coopératifs répartis en six rangées en bois. Les escaliers communs s'élargissent en paliers sociaux éclairés, et chaque logement bénéficie d'une double orientation et d'une pièce extérieure sur toute la largeur.",
    },
    highlights: {
      en: [
        "CLT superstructure erected in 19 weeks",
        "Every home dual-aspect with a 9 m² external room",
        "Resident workshops set the shared ground-floor programme",
      ],
      fr: [
        "Superstructure en CLT montée en 19 semaines",
        "Chaque logement en double orientation avec 9 m² d'extérieur",
        "Les ateliers habitants ont défini le programme du rez-de-chaussée",
      ],
    },
    heroLabel: "Cedar Row Housing — Hero",
    gallery: g("Cedar Row Housing", 6),
  },
  {
    slug: "salt-flats-retreat",
    name: "Salt Flats Retreat",
    category: "Hospitality",
    location: "Uyuni, Bolivia",
    year: "In Progress",
    clientType: "Private",
    scope: {
      en: "Architecture, remote-site logistics strategy, off-grid engineering",
      fr: "Architecture, logistique de site isolé, ingénierie hors réseau",
    },
    size: "3,100 m² / 22 keys",
    materials: {
      en: "Prefabricated steel frame, salt-block infill, insulated timber panels",
      fr: "Ossature acier préfabriquée, remplissage en blocs de sel, panneaux bois isolés",
    },
    description: {
      en: "A twenty-two key retreat on the edge of the salt pan, designed for full off-grid operation. The building is a single low bar lifted clear of the flood plain, with all guest rooms facing the horizon line.",
      fr: "Un refuge de vingt-deux chambres en bordure du salar, conçu pour une exploitation entièrement autonome. Le bâtiment est une barre basse surélevée au-dessus de la plaine inondable, toutes les chambres faisant face à la ligne d'horizon.",
    },
    highlights: {
      en: [
        "Fully off-grid: solar, battery storage and atmospheric water capture",
        "Prefabricated modules trucked 640 km and dry-assembled on site",
        "Elevated deck structure leaves the salt crust undisturbed",
      ],
      fr: [
        "Entièrement autonome : solaire, stockage et captage d'eau atmosphérique",
        "Modules préfabriqués transportés sur 640 km et assemblés à sec",
        "Plateforme surélevée laissant la croûte de sel intacte",
      ],
    },
    heroLabel: "Salt Flats Retreat — Hero",
    gallery: g("Salt Flats Retreat", 5),
  },
  {
    slug: "the-foundry-quarter",
    name: "The Foundry Quarter",
    category: "Mixed-Use",
    location: "Manchester, United Kingdom",
    year: "2021",
    clientType: "Corporate",
    scope: {
      en: "Adaptive reuse, heritage consent strategy, workplace fit-out",
      fr: "Réhabilitation, stratégie patrimoniale, aménagement de bureaux",
    },
    size: "31,500 m² / 4 heritage buildings",
    materials: {
      en: "Reclaimed brick, cast iron, oxidised steel, oak",
      fr: "Brique de réemploi, fonte, acier oxydé, chêne",
    },
    description: {
      en: "Four listed foundry buildings converted into workplace, food halls and maker units. New interventions are deliberately legible — inserted as free-standing steel structures that never touch the historic masonry.",
      fr: "Quatre bâtiments de fonderie classés convertis en bureaux, halles alimentaires et ateliers. Les interventions nouvelles sont volontairement lisibles : des structures d'acier indépendantes ne touchant jamais la maçonnerie historique.",
    },
    highlights: {
      en: [
        "All new structure is reversible and free-standing",
        "Original casting hall retained as a covered public street",
        "Embodied carbon 68% below equivalent new build",
      ],
      fr: [
        "Toute structure nouvelle est réversible et indépendante",
        "La halle de coulée conservée comme rue publique couverte",
        "Carbone incorporé inférieur de 68 % à une construction neuve",
      ],
    },
    heroLabel: "The Foundry Quarter — Hero",
    gallery: g("The Foundry Quarter", 7),
  },
  {
    slug: "escarpment-research-station",
    name: "Escarpment Research Station",
    category: "Public",
    location: "Windhoek, Namibia",
    year: "2025",
    clientType: "NGO",
    scope: {
      en: "Research facility architecture, laboratory planning, staff housing",
      fr: "Architecture de centre de recherche, planification de laboratoires, logements",
    },
    size: "6,800 m² / 2 levels",
    materials: {
      en: "Rammed earth, galvanised steel, shade fabric, polished concrete",
      fr: "Pisé, acier galvanisé, toiles d'ombrage, béton poli",
    },
    description: {
      en: "A field research station for an arid-ecology institute, arranged as laboratory bars under a single detached shade canopy. The canopy carries photovoltaics and collects the short seasonal rains.",
      fr: "Une station de recherche pour un institut d'écologie aride, organisée en barres de laboratoires sous une grande ombrière indépendante. Celle-ci porte les panneaux photovoltaïques et collecte les brèves pluies saisonnières.",
    },
    highlights: {
      en: [
        "Detached canopy lowers roof surface temperature by up to 18 °C",
        "Laboratories and housing share one servicing spine",
        "Designed for 30-year operation with minimal maintenance access",
      ],
      fr: [
        "L'ombrière indépendante abaisse la température de toiture de 18 °C",
        "Laboratoires et logements partagent une dorsale technique",
        "Conçu pour 30 ans d'exploitation avec maintenance minimale",
      ],
    },
    heroLabel: "Escarpment Research Station — Hero",
    gallery: g("Escarpment Research Station", 6),
  },
  {
    slug: "harbour-point-residences",
    name: "Harbour Point Residences",
    category: "Residential",
    location: "Singapore",
    year: "2024",
    clientType: "Corporate",
    scope: {
      en: "Architecture, landscape coordination, amenity interiors",
      fr: "Architecture, coordination paysagère, intérieurs des espaces communs",
    },
    size: "46,000 m² / 214 apartments",
    materials: {
      en: "White concrete, aluminium screens, teak, glazed tile",
      fr: "Béton blanc, écrans en aluminium, teck, carreaux émaillés",
    },
    description: {
      en: "Two residential slabs turned off the orthogonal grid to open every apartment to the harbour breeze. Sky terraces every seven floors carry shared gardens and cut the perceived mass of the buildings.",
      fr: "Deux barres résidentielles pivotées hors de la trame orthogonale pour ouvrir chaque appartement à la brise du port. Des terrasses tous les sept niveaux accueillent des jardins partagés et allègent la masse perçue.",
    },
    highlights: {
      en: [
        "Rotated plan gives 100% of homes natural cross-ventilation",
        "Four sky terraces distribute shared amenity vertically",
        "Operable aluminium screens tune privacy and solar gain",
      ],
      fr: [
        "Le plan pivoté offre une ventilation naturelle à 100 % des logements",
        "Quatre terrasses distribuent les espaces communs verticalement",
        "Écrans en aluminium mobiles ajustant intimité et apports solaires",
      ],
    },
    heroLabel: "Harbour Point Residences — Hero",
    gallery: g("Harbour Point Residences", 6),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
