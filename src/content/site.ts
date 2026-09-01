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
  allProjects: { en: "View our work", fr: "Voir nos réalisations" },
  contactUs: { en: "Start a Project", fr: "Démarrer un projet" },
  readMore: { en: "Read", fr: "Lire" },
  backTo: { en: "Back to portfolio", fr: "Retour aux réalisations" },
  filter: { en: "Filter by category", fr: "Filtrer par catégorie" },
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
  heroEyebrow: {
    en: "Ayrick Makers Group — Architecture & Construction",
    fr: "Ayrick Makers Group — Architecture et construction",
  },
  heroTitle: {
    en: "Building spaces that matter.",
    fr: "Construire des espaces qui comptent.",
  },
  heroLead: {
    en: "Creating spaces that combine innovation, function, and timeless design.",
    fr: "Créer des espaces qui allient innovation, fonctionnalité et design intemporel.",
  },
  stats: [
    { value: "18+", label: { en: "Years of experience", fr: "Années d'expérience" } },
    { value: "80", label: { en: "Projects completed", fr: "Projets réalisés" } },
    { value: "2023", label: { en: "Established in Ghana", fr: "Fondée au Ghana" } },
    { value: "Accra", label: { en: "Studio location", fr: "Localisation du studio" } },
  ],
  featuredEyebrow: { en: "Selected work", fr: "Travaux sélectionnés" },
  featuredTitle: { en: "Featured projects", fr: "Projets à la une" },
  servicesEyebrow: { en: "Services", fr: "Services" },
  servicesTitle: { en: "From vision to reality", fr: "De la vision à la réalité" },
  positionEyebrow: { en: "The studio", fr: "Le studio" },
  positionTitle: {
    en: "Architecture that is both timeless and purposeful.",
    fr: "Une architecture à la fois intemporelle et utile.",
  },
  positionBody: {
    en: "At Ayrick Makers Group, we create architecture that is both timeless and purposeful. Every project is carefully crafted to combine elegant design, technical excellence, and practical functionality. Our goal is to transform ideas into exceptional spaces that inspire and endure.",
    fr: "Chez Ayrick Makers Group, nous créons une architecture à la fois intemporelle et utile. Chaque projet est façonné avec soin pour allier élégance, excellence technique et fonctionnalité. Notre objectif est de transformer les idées en espaces d'exception qui inspirent et durent.",
  },
  portalEyebrow: { en: "Client portal — coming soon", fr: "Portail client — bientôt disponible" },
  portalTitle: {
    en: "Your design journey starts here.",
    fr: "Votre parcours de conception commence ici.",
  },
  portalBody: {
    en: "Experience a seamless project journey with secure access to every document, milestone, and update — from concept to completion.",
    fr: "Vivez un parcours de projet fluide avec un accès sécurisé à chaque document, étape et mise à jour — du concept à la livraison.",
  },
  ctaTitle: {
    en: "Ready to start your project?",
    fr: "Prêt à démarrer votre projet ?",
  },
  ctaBody: {
    en: "Tell us about your site, your brief and your timeline. We will come back to you with a clear next step.",
    fr: "Parlez-nous de votre terrain, de votre programme et de votre calendrier. Nous reviendrons vers vous avec une étape suivante claire.",
  },
};

export const servicesIntro = {
  title: { en: "From Vision to Reality", fr: "De la vision à la réalité" },
  body: {
    en: "We provide comprehensive architectural and construction services, turning ideas into functional, modern, and sustainable spaces. From concept design to project execution, we focus on quality, precision, and client satisfaction to deliver results that meet both aesthetic and practical needs.",
    fr: "Nous offrons des services complets d'architecture et de construction, transformant les idées en espaces fonctionnels, modernes et durables. De la conception à l'exécution, nous mettons l'accent sur la qualité, la précision et la satisfaction du client.",
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
    title: { en: "Concept Design", fr: "Conception du concept" },
    body: {
      en: "Exploring ideas through sketches, massing studies, and feasibility analysis to shape the project's foundation.",
      fr: "Explorer les idées par l'esquisse, l'étude des volumes et l'analyse de faisabilité pour poser les bases du projet.",
    },
    deliverables: {
      en: [
        "Architectural concept & design direction",
        "Site response analysis",
        "Material & style exploration",
        "Concept visualization samples",
      ],
      fr: [
        "Concept architectural et direction de conception",
        "Analyse de la réponse au site",
        "Exploration des matériaux et du style",
        "Échantillons de visualisation du concept",
      ],
    },
  },
  {
    number: "02",
    title: { en: "Layout & Plans", fr: "Plans et aménagements" },
    body: {
      en: "Floor plans, sections, elevations, landscape and construction details — the technical backbone of every project.",
      fr: "Plans, coupes, façades, paysage et détails d'exécution — la colonne vertébrale technique de chaque projet.",
    },
    deliverables: {
      en: [
        "Site analysis & design diagrams",
        "Architectural concept development",
        "Preliminary 2D layouts and floor plans",
        "Complete architectural documentation",
      ],
      fr: [
        "Analyse du site et diagrammes de conception",
        "Développement du concept architectural",
        "Plans et aménagements 2D préliminaires",
        "Documentation architecturale complète",
      ],
    },
  },
  {
    number: "03",
    title: { en: "3D Visualization & Walkthroughs", fr: "Visualisation 3D et visites virtuelles" },
    body: {
      en: "Photorealistic renders, virtual tours and animations. See it before it's built.",
      fr: "Rendus photoréalistes, visites virtuelles et animations. Voir avant de construire.",
    },
    deliverables: {
      en: ["Exterior renders", "Interior renders", "VR / 360° experiences", "Animations and walkthroughs"],
      fr: ["Rendus extérieurs", "Rendus intérieurs", "Expériences VR / 360°", "Animations et visites"],
    },
  },
  {
    number: "04",
    title: { en: "Project Supervision", fr: "Supervision de chantier" },
    body: {
      en: "Site visits, quality control and timeline management. Ensuring the design is built right.",
      fr: "Visites de chantier, contrôle qualité et gestion des délais. Garantir que le projet est bien construit.",
    },
    deliverables: {
      en: [
        "Site visits & construction progress monitoring",
        "Quality control & workmanship inspection",
        "Design compliance review",
        "Contractor coordination & technical support",
        "Progress reports & site documentation",
      ],
      fr: [
        "Visites de chantier et suivi de l'avancement",
        "Contrôle qualité et inspection de la mise en œuvre",
        "Vérification de la conformité au projet",
        "Coordination des entreprises et appui technique",
        "Rapports d'avancement et documentation de chantier",
      ],
    },
  },
  {
    number: "05",
    title: { en: "Contract Management", fr: "Gestion des contrats" },
    body: {
      en: "Tender documents, contractor selection, budget management and compliance.",
      fr: "Dossiers d'appel d'offres, sélection des entreprises, gestion budgétaire et conformité.",
    },
    deliverables: {
      en: [
        "Contract administration & documentation",
        "Contractor selection & coordination support",
        "Progress and payment monitoring",
        "Change order & variation management",
        "Contract compliance reporting",
      ],
      fr: [
        "Administration et documentation des contrats",
        "Sélection des entreprises et coordination",
        "Suivi de l'avancement et des paiements",
        "Gestion des avenants et variations",
        "Rapports de conformité contractuelle",
      ],
    },
  },
];

export const process: { step: string; title: L; body: L }[] = [
  {
    step: "01",
    title: { en: "Brief & Discovery", fr: "Programme et découverte" },
    body: {
      en: "We begin by understanding the client's needs, lifestyle, and project objectives to establish a clear design direction.",
      fr: "Nous commençons par comprendre les besoins, le mode de vie et les objectifs du client afin d'établir une direction claire.",
    },
  },
  {
    step: "02",
    title: { en: "Concept Design", fr: "Conception du concept" },
    body: {
      en: "Architectural concept development — spatial ideas, massing and material direction take their first form.",
      fr: "Développement du concept architectural — idées spatiales, volumétrie et direction matérielle prennent forme.",
    },
  },
  {
    step: "03",
    title: { en: "Design Development", fr: "Développement du projet" },
    body: {
      en: "Design refinement and development, resolving detail, performance and documentation.",
      fr: "Affinement et développement du projet : détails, performance et documentation.",
    },
  },
  {
    step: "04",
    title: { en: "Construction", fr: "Construction" },
    body: {
      en: "Construction execution and management, with supervision and coordination on site.",
      fr: "Exécution et gestion de la construction, avec supervision et coordination sur site.",
    },
  },
  {
    step: "05",
    title: { en: "Handover", fr: "Livraison" },
    body: {
      en: "Final inspection and project handover, with documentation for long-term use and maintenance.",
      fr: "Inspection finale et remise du projet, avec la documentation d'usage et d'entretien.",
    },
  },
];

export const faqs: { q: L; a: L }[] = [
  {
    q: {
      en: "Why should I hire an architect for my project?",
      fr: "Pourquoi engager un architecte pour mon projet ?",
    },
    a: {
      en: "An architect manages the entire design vision of a project, from the smallest details to the most defining elements of the building. By considering functionality, aesthetics, and the project requirements, an architect helps achieve a complete and well-balanced outcome that responds to the client's needs.",
      fr: "L'architecte porte la vision globale du projet, du plus petit détail aux éléments les plus déterminants du bâtiment. En conciliant fonctionnalité, esthétique et exigences du programme, il permet d'obtenir un résultat complet et équilibré qui répond aux besoins du client.",
    },
  },
  {
    q: {
      en: "How does the architectural design process work?",
      fr: "Comment se déroule le processus de conception ?",
    },
    a: {
      en: "The design process begins with understanding the client's vision, needs, and project requirements. We develop the initial concept, study spatial relationships, and gradually refine the design until it reaches the final architectural drawings and visualizations.",
      fr: "Le processus commence par la compréhension de la vision, des besoins et des exigences du client. Nous développons le concept initial, étudions les relations spatiales et affinons progressivement jusqu'aux plans et visualisations finaux.",
    },
  },
  {
    q: {
      en: "When should I involve an architect in my project?",
      fr: "À quel moment faire appel à un architecte ?",
    },
    a: {
      en: "An architect should ideally be involved from the early stages of a project to ensure proper planning and design direction.",
      fr: "Idéalement dès les premières étapes du projet, afin d'assurer une planification et une direction de conception adéquates.",
    },
  },
  {
    q: { en: "Can you help with permits or approvals?", fr: "Pouvez-vous aider pour les permis et autorisations ?" },
    a: {
      en: "Yes. Permit and approval support can be provided depending on the project location and local regulations. We can coordinate with local professionals and consultants where required.",
      fr: "Oui. Un accompagnement pour les permis et autorisations est possible selon la localisation du projet et la réglementation locale. Nous coordonnons avec des professionnels locaux si nécessaire.",
    },
  },
  {
    q: { en: "How long does a typical project take?", fr: "Combien de temps dure un projet type ?" },
    a: {
      en: "The design timeline depends on several factors, including project size, complexity, number of functions, design requirements, and the speed of client feedback and approvals. Depending on these factors, the process can range from approximately three weeks to several months.",
      fr: "Le calendrier dépend de la taille du projet, de sa complexité, du nombre de fonctions, des exigences de conception et de la rapidité des retours du client. Selon ces facteurs, le processus peut aller d'environ trois semaines à plusieurs mois.",
    },
  },
  {
    q: {
      en: "Do your architectural services include structural design and MEP drawings?",
      fr: "Vos services incluent-ils la structure et les plans techniques (MEP) ?",
    },
    a: {
      en: "Our architectural services cover the complete design process, including design concepts, architectural drawings, project documentation, and 3D visualizations. Structural design and MEP drawings are specialized fields; however, we collaborate with experienced engineers and trusted companies across different countries to provide coordinated and comprehensive project solutions.",
      fr: "Nos services couvrent l'ensemble du processus de conception : concepts, plans architecturaux, documentation et visualisations 3D. La structure et les plans MEP relèvent de spécialités ; nous collaborons avec des ingénieurs expérimentés et des sociétés de confiance dans plusieurs pays pour proposer des solutions coordonnées et complètes.",
    },
  },
];

export const studio = {
  heroEyebrow: { en: "About Ayrick", fr: "À propos d'Ayrick" },
  heroTitle: {
    en: "Improving the quality of life through better architecture.",
    fr: "Améliorer la qualité de vie par une meilleure architecture.",
  },
  storyTitle: { en: "Our story", fr: "Notre histoire" },
  story: {
    en: "Ayrick was officially established in Ghana in 2023, though the experience of working in Africa started years earlier. Its roots go back to earlier architectural practice in Iran, where work in both design and construction first began.\n\nA wide range of projects and diverse client preferences helped shape a clear and practical design process over time. This journey has combined creativity with realism, leading to valuable experience across different aspects of architecture and construction.\n\nThe goal of Ayrick is to improve the quality of life through better architecture and built environments — spaces where people live, work, and spend their leisure time.",
    fr: "Ayrick a été officiellement fondée au Ghana en 2023, même si l'expérience du travail en Afrique a commencé des années plus tôt. Ses racines remontent à une pratique architecturale antérieure en Iran, où le travail de conception et de construction a débuté.\n\nUne grande diversité de projets et d'attentes des clients a permis de façonner, avec le temps, un processus de conception clair et pragmatique. Ce parcours associe créativité et réalisme, et a donné une expérience précieuse dans de nombreux aspects de l'architecture et de la construction.\n\nL'objectif d'Ayrick est d'améliorer la qualité de vie par une meilleure architecture et de meilleurs environnements bâtis — des lieux où l'on vit, travaille et se détend.",
  },
  missionTitle: { en: "Design philosophy", fr: "Philosophie de conception" },
  mission: {
    en: "Our design approach is guided by the goal of fully responding to the needs of each project in a comprehensive and practical way. We aim to create spaces that enhance comfort and everyday living, ensuring smooth and efficient functionality in use.",
    fr: "Notre approche vise à répondre pleinement aux besoins de chaque projet, de manière globale et pragmatique. Nous créons des espaces qui améliorent le confort et le quotidien, avec une fonctionnalité fluide et efficace.",
  },
  missionBody: {
    en: "Alongside performance, we focus on achieving a timeless sense of beauty, calmness, and lasting appeal. Each design is developed without exaggeration or unnecessary complexity, allowing the final result to remain clear, balanced, and enduring over time.",
    fr: "Au-delà de la performance, nous recherchons une beauté intemporelle, un calme et un attrait durable. Chaque projet est développé sans excès ni complexité inutile, pour un résultat clair, équilibré et durable.",
  },
  valuesTitle: { en: "What we do", fr: "Ce que nous faisons" },
  values: [
    {
      title: { en: "Architectural Design", fr: "Conception architecturale" },
      body: {
        en: "Complete design development, from first concept to final architectural drawings.",
        fr: "Développement complet du projet, du premier concept aux plans définitifs.",
      },
    },
    {
      title: { en: "Interior Architecture", fr: "Architecture d'intérieur" },
      body: {
        en: "Interiors designed as part of the building, resolving light, materials and use together.",
        fr: "Des intérieurs conçus comme partie du bâtiment : lumière, matériaux et usage résolus ensemble.",
      },
    },
    {
      title: { en: "3D Visualization", fr: "Visualisation 3D" },
      body: {
        en: "Photorealistic renders, animation and 360° VR produced entirely in-house.",
        fr: "Rendus photoréalistes, animation et VR 360° produits entièrement en interne.",
      },
    },
    {
      title: { en: "Parametric Design", fr: "Conception paramétrique" },
      body: {
        en: "Geometry-driven modelling used where form, repetition and performance need precision.",
        fr: "Modélisation pilotée par la géométrie, là où forme, répétition et performance exigent de la précision.",
      },
    },
    {
      title: { en: "Modern Architecture", fr: "Architecture moderne" },
      body: {
        en: "Clear proportion and restraint, without exaggeration or unnecessary complexity.",
        fr: "Proportion claire et retenue, sans excès ni complexité inutile.",
      },
    },
    {
      title: { en: "Construction Services", fr: "Services de construction" },
      body: {
        en: "Supervision, contract management and coordination through to handover.",
        fr: "Supervision, gestion contractuelle et coordination jusqu'à la livraison.",
      },
    },
    {
      title: { en: "Sustainable Design", fr: "Conception durable" },
      body: {
        en: "Climate-responsive planning, shading and ventilation considered before technology.",
        fr: "Conception bioclimatique : orientation, protection solaire et ventilation avant la technique.",
      },
    },
  ],
  leadershipTitle: { en: "The team", fr: "L'équipe" },
  leadership: [
    {
      name: "Mostafa Ahadi Pour",
      role: { en: "Founder & Head Designer", fr: "Fondateur et concepteur principal" },
      bio: {
        en: "More than 18 years of experience in architecture and construction management, collaborating with multinational companies and diverse clients.",
        fr: "Plus de 18 ans d'expérience en architecture et en gestion de construction, en collaboration avec des entreprises multinationales et des clients variés.",
      },
    },
    {
      name: "Alireza Emtehani",
      role: { en: "3D Artist", fr: "Artiste 3D" },
      bio: {
        en: "Proficient in 3D modeling, rendering software, animation production, video creation, and 360-degree (VR) rendering, with over 16 years of professional experience.",
        fr: "Spécialiste de la modélisation 3D, du rendu, de l'animation, de la vidéo et du rendu 360° (VR), avec plus de 16 ans d'expérience professionnelle.",
      },
    },
    {
      name: "Susan Sajadian",
      role: { en: "Interior Designer & 3D Artist", fr: "Architecte d'intérieur et artiste 3D" },
      bio: {
        en: "Experienced interior designer, skilled in 3D modeling and creating architectural and interior renderings.",
        fr: "Architecte d'intérieur expérimentée, maîtrisant la modélisation 3D et les rendus architecturaux et intérieurs.",
      },
    },
  ],
  credentialsTitle: { en: "Credentials", fr: "Références" },
  credentials: [
    { label: { en: "Years in practice", fr: "Années de pratique" }, value: { en: "Over 18 years", fr: "Plus de 18 ans" } },
    { label: { en: "Projects completed", fr: "Projets réalisés" }, value: { en: "80", fr: "80" } },
    { label: { en: "Established", fr: "Fondation" }, value: { en: "Ghana, 2023", fr: "Ghana, 2023" } },
    { label: { en: "Studio", fr: "Studio" }, value: { en: "Accra, Ghana", fr: "Accra, Ghana" } },
  ],
  certificationsTitle: { en: "Training & certifications", fr: "Formations et certifications" },
  certifications: [
    "AutoCAD (Architectural Drafting Training)",
    "3ds Max (3D Modeling Training)",
    "V-Ray (Rendering Training)",
    "Lumion (Architectural Visualization Training)",
    "Rhino (3D Modeling & Parametric Design Training)",
    "Photoshop (Post-Production & Visualization Training)",
    "VR / 360° Architectural Visualization Training",
    "Parametric Architecture (Design & Modeling Training)",
  ],
  presenceTitle: { en: "Where we work", fr: "Où nous travaillons" },
  presenceBody: {
    en: "Based in Accra, working across Africa and beyond.",
    fr: "Basés à Accra, nous travaillons à travers l'Afrique et au-delà.",
  },
  offices: [
    {
      city: "Accra",
      country: { en: "Ghana", fr: "Ghana" },
      role: { en: "Studio & head office", fr: "Studio et siège" },
      since: "2023",
    },
  ],
};

export const journalMeta = {
  title: { en: "Journal", fr: "Journal" },
  intro: {
    en: "A collection of thoughts, insights, and stories exploring architecture, design approaches, project experiences, and the future of the built environment.",
    fr: "Un recueil de réflexions, d'analyses et de récits sur l'architecture, les approches de conception, l'expérience de projet et l'avenir du cadre bâti.",
  },
  author: {
    en: "By Mostafa Ahadi Pour — Ayrick Makers Group shares insights on architecture, design, and construction, exploring ideas behind creating functional and meaningful spaces.",
    fr: "Par Mostafa Ahadi Pour — Ayrick Makers Group partage des analyses sur l'architecture, le design et la construction, et les idées derrière des espaces fonctionnels et porteurs de sens.",
  },
  categories: ["Design Insights", "Project Stories", "News", "Construction & Development"],
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
    slug: "minimalism-in-villa-design",
    date: "2026-06-18",
    category: { en: "Design Insights", fr: "Analyses de conception" },
    title: {
      en: "Minimalism in Villa Design: When Less Becomes More",
      fr: "Le minimalisme dans la villa : quand le moins devient le plus",
    },
    excerpt: {
      en: "True minimalism is more than a visual language. In a well-designed villa it is a way of thinking, asking a fundamental question: what does the space actually need?",
      fr: "Le vrai minimalisme dépasse le langage visuel. Dans une villa bien conçue, c'est une manière de penser qui pose une question fondamentale : de quoi l'espace a-t-il réellement besoin ?",
    },
    body: {
      en: [
        "Minimalism in residential architecture is often associated with clean lines, neutral colours, large openings, and uncluttered interiors. Yet true minimalism is much more than a visual language. In a well-designed villa, minimalism is a way of thinking — one that asks a fundamental question: what does the space actually need?",
        "The answer is not necessarily to remove everything. Instead, it is to give every architectural element a clear purpose.",
        "Beyond aesthetic minimalism. A minimalist villa should not simply look minimal. Its architecture should be organised around clarity, proportion, functionality, and the quality of everyday life. Walls, openings, circulation routes, built-in storage, materials, and lighting should work together rather than compete for attention. When unnecessary elements are removed, the qualities of the remaining elements become more apparent.",
        "This is why successful minimalist architecture can feel calm without feeling empty. The simplicity comes from careful decisions made during the design process, not from simply reducing decoration.",
        "Function comes first. A villa is ultimately a place to live, not an architectural object to look at. Circulation should be intuitive. Spaces should have clear relationships with one another, while unnecessary corridors and transitional areas should be minimised. A well-planned villa can often achieve a stronger sense of spaciousness without simply increasing its floor area.",
        "The value of empty space. An empty wall, a courtyard, a double-height volume, or a carefully framed view can be as important as a physical architectural element. Space creates visual rhythm, allows light to move through the building, and gives materials room to be experienced. The result is not simply an open house, but a carefully controlled relationship between openness and privacy.",
        "Materiality over decoration. When decorative elements are reduced, the character of the materials themselves becomes more visible. Stone, concrete, timber, metal, and glass become architectural features through their texture, proportion, junctions, and natural ageing. A minimalist building has very little visual noise to hide poor detailing, so minimalism often means more careful design, not less.",
        "Designing for long-term living. Rooms that accommodate different activities, integrated storage, and strong connections between indoor and outdoor spaces make a house more flexible over time. Instead of designing around temporary trends, the architect can focus on proportion, natural light, materials, functionality, and spatial relationships.",
        "The best minimalist villas do not try to impress at first sight. Their quality is discovered gradually: through morning light in a room, the view from a bedroom, the transition from living area to terrace. A successful minimalist villa is simple in appearance because the complexity has been resolved during design. That is when less truly becomes more.",
      ],
      fr: [
        "Le minimalisme en architecture résidentielle est souvent associé aux lignes épurées, aux couleurs neutres, aux grandes ouvertures et aux intérieurs dégagés. Pourtant, le vrai minimalisme dépasse largement le langage visuel : dans une villa bien conçue, c'est une manière de penser qui pose une question fondamentale — de quoi l'espace a-t-il réellement besoin ?",
        "La réponse n'est pas nécessairement de tout retirer, mais de donner à chaque élément architectural une raison d'être claire.",
        "Au-delà du minimalisme esthétique. Une villa minimaliste ne doit pas seulement paraître minimale. Son architecture s'organise autour de la clarté, de la proportion, de la fonctionnalité et de la qualité du quotidien. Murs, ouvertures, circulations, rangements intégrés, matériaux et lumière doivent travailler ensemble plutôt que de rivaliser.",
        "C'est pourquoi une architecture minimaliste réussie peut être calme sans être vide. La simplicité vient de décisions soignées prises pendant la conception, non d'une simple réduction du décor.",
        "La fonction d'abord. Une villa est avant tout un lieu de vie. Les circulations doivent être intuitives, les espaces clairement reliés entre eux, les couloirs inutiles évités. Une villa bien planifiée offre souvent plus d'ampleur sans augmenter la surface.",
        "La valeur du vide. Un mur nu, une cour, un volume double hauteur ou une vue cadrée peuvent compter autant qu'un élément construit. Le vide crée un rythme, laisse circuler la lumière et donne aux matériaux la place d'être perçus. Il ne s'agit pas d'une maison simplement ouverte, mais d'un rapport maîtrisé entre ouverture et intimité.",
        "La matière plutôt que le décor. Quand le décor se réduit, le caractère des matériaux devient plus visible. Pierre, béton, bois, métal et verre deviennent des éléments architecturaux par leur texture, leurs proportions, leurs jonctions et leur vieillissement. Le minimalisme exige donc souvent plus de travail de conception, pas moins.",
        "Concevoir pour la durée. Des pièces polyvalentes, des rangements intégrés et de fortes relations intérieur-extérieur rendent la maison plus flexible dans le temps. Plutôt que de suivre des tendances, l'architecte se concentre sur la proportion, la lumière naturelle, les matériaux et les relations spatiales.",
        "Les meilleures villas minimalistes ne cherchent pas à impressionner au premier regard. Leur qualité se découvre progressivement. Elles paraissent simples parce que la complexité a été résolue pendant la conception : c'est alors que le moins devient vraiment le plus.",
      ],
    },
  },
  {
    slug: "designing-with-the-climate",
    date: "2026-04-02",
    category: { en: "Design Insights", fr: "Analyses de conception" },
    title: {
      en: "Designing with the Climate: How Passive Architecture Reduces Energy Consumption",
      fr: "Concevoir avec le climat : l'architecture passive et la consommation d'énergie",
    },
    excerpt: {
      en: "Energy-efficient architecture does not begin with solar panels or air-conditioning. It begins much earlier — with the way a building responds to its climate.",
      fr: "L'architecture économe en énergie ne commence pas par les panneaux solaires ou la climatisation, mais bien plus tôt : par la façon dont le bâtiment répond à son climat.",
    },
    body: {
      en: [
        "Energy-efficient architecture begins long before solar panels or air-conditioning systems are installed. It starts with the way a building responds to its climate.",
        "The orientation of a villa, the position of its windows, the amount of shading, natural ventilation, and the performance of its walls and roof can significantly influence how much energy the building requires throughout its lifetime.",
        "Designing with the climate. Climate-responsive architecture aims to work with the environment rather than constantly fighting against it. In warm climates, this means reducing unwanted heat gain and encouraging natural cooling before relying on mechanical systems. Building orientation is one of the first decisions to consider: it affects solar exposure, daylight, and natural airflow, while surrounding landscape and vegetation also contribute to thermal comfort.",
        "Shading and natural ventilation. Large areas of unprotected glass can introduce significant heat into a villa. Deep overhangs, recessed windows, pergolas, vertical fins, and vegetation help control direct sunlight before it reaches the building. Cross-ventilation works best when the building layout, window positions, and prevailing winds are considered together.",
        "The building envelope. The roof, walls, windows, and doors play a major role in controlling heat transfer. Proper insulation, appropriate roofing systems, high-performance glazing, and carefully designed openings help maintain stable indoor temperatures and reduce cooling demand. The goal is not simply more windows or more insulation, but the right element for the climate and the site.",
        "Energy efficiency through architecture. Studies of residential buildings in Ghana have demonstrated the potential of passive strategies — natural ventilation, solar shading, daylighting, and improved envelope performance — to significantly reduce energy demand. Energy efficiency does not always require complex technology.",
        "Comfort first. When orientation, shading, ventilation, materials, and technology are considered as one integrated system, a villa can consume less energy while providing a better living experience. The most sustainable energy is often the energy a building never needs to consume.",
      ],
      fr: [
        "L'architecture économe en énergie commence bien avant l'installation de panneaux solaires ou de climatisation. Elle commence par la façon dont le bâtiment répond à son climat.",
        "L'orientation d'une villa, la position de ses fenêtres, l'ampleur des protections solaires, la ventilation naturelle et la performance des murs et de la toiture influencent fortement l'énergie nécessaire tout au long de sa vie.",
        "Concevoir avec le climat. L'architecture bioclimatique cherche à travailler avec l'environnement plutôt qu'à le combattre. En climat chaud, cela signifie réduire les apports de chaleur et favoriser le rafraîchissement naturel avant de recourir aux systèmes mécaniques. L'orientation est l'une des premières décisions : elle détermine l'ensoleillement, la lumière du jour et les flux d'air.",
        "Protection solaire et ventilation naturelle. De grandes surfaces vitrées non protégées apportent beaucoup de chaleur. Débords importants, fenêtres en retrait, pergolas, brise-soleil verticaux et végétation permettent de maîtriser le soleil direct. La ventilation traversante fonctionne au mieux lorsque plan, ouvertures et vents dominants sont pensés ensemble.",
        "L'enveloppe du bâtiment. Toiture, murs, fenêtres et portes contrôlent les transferts thermiques. Isolation adaptée, systèmes de couverture appropriés, vitrages performants et ouvertures bien conçues stabilisent les températures intérieures et réduisent les besoins de rafraîchissement.",
        "L'efficacité par l'architecture. Des études sur les bâtiments résidentiels au Ghana montrent le potentiel des stratégies passives — ventilation naturelle, protection solaire, éclairage naturel, meilleure enveloppe — pour réduire fortement la demande énergétique. L'efficacité n'exige pas toujours une technologie complexe.",
        "Le confort d'abord. Lorsque orientation, protection solaire, ventilation, matériaux et technique forment un système intégré, une villa consomme moins tout en offrant une meilleure qualité de vie. L'énergie la plus durable reste celle que le bâtiment n'a jamais besoin de consommer.",
      ],
    },
  },
];

export const contact = {
  heroEyebrow: { en: "Contact", fr: "Contact" },
  heroTitle: { en: "Bring your vision.", fr: "Apportez votre vision." },
  heroLead: {
    en: "Let's talk about your vision and bring it to life.",
    fr: "Parlons de votre vision et donnons-lui vie.",
  },
  formTitle: { en: "Project enquiry", fr: "Demande de projet" },
  fields: {
    name: { en: "Full name", fr: "Nom complet" },
    email: { en: "Email address", fr: "Adresse e-mail" },
    phone: { en: "Phone", fr: "Téléphone" },
    location: { en: "Project location", fr: "Localisation du projet" },
    type: { en: "Project type", fr: "Type de projet" },
    budget: { en: "Budget range", fr: "Budget estimé" },
    message: { en: "Message / project brief", fr: "Message / description du projet" },
    submit: { en: "Send enquiry", fr: "Envoyer la demande" },
  },
  enquiryTypes: [
    { en: "Residential", fr: "Résidentiel" },
    { en: "Commercial", fr: "Commercial" },
    { en: "Hospitality", fr: "Hôtellerie" },
    { en: "Renovation", fr: "Rénovation" },
    { en: "Other", fr: "Autre" },
  ],
  budgetRanges: [
    { en: "Not sure yet", fr: "Pas encore défini" },
    { en: "Under $50,000", fr: "Moins de 50 000 $" },
    { en: "$50,000 – $150,000", fr: "50 000 – 150 000 $" },
    { en: "$150,000 – $500,000", fr: "150 000 – 500 000 $" },
    { en: "Over $500,000", fr: "Plus de 500 000 $" },
  ],
  thankYou: {
    en: "Thank you — your enquiry has been received. We will get back to you shortly.",
    fr: "Merci — votre demande a bien été reçue. Nous vous répondrons rapidement.",
  },
  mapLabel: {
    en: "Map Placeholder — West Legon, Accra, Ghana",
    fr: "Carte à intégrer — West Legon, Accra, Ghana",
  },
  officesTitle: { en: "Studio", fr: "Studio" },
  offices: [
    {
      city: "Accra",
      lines: ["Westland Police Station", "West Legon, Accra, Ghana", "+233 50 911 8844"],
    },
  ],
  details: {
    addressLabel: { en: "Office address", fr: "Adresse du bureau" },
    address: ["Westland Police Station", "West Legon, Accra, Ghana"],
    phoneLabel: { en: "Office", fr: "Bureau" },
    phone: "+233 50 911 8844",
    whatsappLabel: { en: "Mobile / WhatsApp", fr: "Mobile / WhatsApp" },
    whatsapp: "+233 54 739 0907",
    emailLabel: { en: "General enquiries", fr: "Demandes générales" },
    email: "info@ayrickmakers.com",
    principalEmailLabel: { en: "Principal architect", fr: "Architecte principal" },
    principalEmail: "ayrick.architect@gmail.com",
    hoursLabel: { en: "Office hours", fr: "Horaires" },
    hours: { en: "Mon–Fri, 9:00 – 18:00", fr: "Lun–Ven, 9h00 – 18h00" },
    instagramLabel: { en: "Instagram", fr: "Instagram" },
    instagram: "ayrickmakersgroup",
    instagramUrl: "https://instagram.com/ayrickmakersgroup",
  },
};

export const footer = {
  tagline: { en: "Reimagining living spaces", fr: "Réinventer les espaces de vie" },
  privacy: {
    en: "Your privacy matters to us. We are committed to protecting your personal information and ensuring transparency in how your data is collected and used.",
    fr: "Votre vie privée compte. Nous nous engageons à protéger vos données personnelles et à faire preuve de transparence sur leur collecte et leur utilisation.",
  },
};
