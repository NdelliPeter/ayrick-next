import type { StaticImageData } from "next/image";

import type { L } from "@/lib/content";

/**
 * NOTE: `fr` fields below are English text duplicated into the French slot as a
 * functional stopgap — no real French translations exist yet for the real
 * project data. Swap field-by-field as real translations become available.
 *
 * NOTE: `scope`, `materials`, `description`, `highlights`, `clientType`, and
 * `size` are category-level generic placeholder copy for the real projects —
 * only slug/name/category/location/year are sourced facts. Needs a real
 * content-review pass with Ayrick before public launch.
 */

export const CATEGORIES = ["Residential", "Public", "Mixed-Use"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category | "All", L> = {
  All: { en: "All Projects", fr: "Tous les projets" },
  Residential: { en: "Residential", fr: "Résidentiel" },
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
  /** Imported hero image asset. */
  heroImage: StaticImageData;
  /** Imported gallery image assets, 4–6 per project. */
  gallery: StaticImageData[];
  featured?: boolean;
}

// Generic, category-level placeholder copy — reused across real entries below
// where project-specific detail isn't available yet. See NOTE at top of file.
const RESIDENTIAL_SCOPE: L = {
  en: "Design development, construction documentation, and site supervision",
  fr: "Design development, construction documentation, and site supervision",
};
const RESIDENTIAL_MATERIALS: L = {
  en: "Reinforced concrete frame, block masonry, aluminium and glass façade systems",
  fr: "Reinforced concrete frame, block masonry, aluminium and glass façade systems",
};
const residentialDescription = (location: string, year?: string): L => {
  const text = year
    ? `A private residential development in ${location}, completed in ${year}.`
    : `A private residential development in ${location}.`;
  return { en: text, fr: text };
};
const RESIDENTIAL_HIGHLIGHTS: L<string[]> = {
  en: [
    "Multi-unit duplex/triplex residential development",
    "Delivered as part of Ayrick's residential portfolio",
  ],
  fr: [
    "Multi-unit duplex/triplex residential development",
    "Delivered as part of Ayrick's residential portfolio",
  ],
};

// Placeholders for newly added projects whose location/year are not yet
// confirmed by Ayrick. Replace field-by-field as the real details come in.
const LOCATION_TBC = "Location TBC";
const YEAR_TBC = "TBC";

// — Project: Tidal Lines-5 bedroom triplex beach villa Accra 2023 —
import beachVillaAccraHero from "@/assets/projects-curated/beach-villa-accra/hero.jpg";
import beachVillaAccraG1 from "@/assets/projects-curated/beach-villa-accra/gallery-01.jpg";
import beachVillaAccraG2 from "@/assets/projects-curated/beach-villa-accra/gallery-02.jpg";
import beachVillaAccraG3 from "@/assets/projects-curated/beach-villa-accra/gallery-03.jpg";
import beachVillaAccraG4 from "@/assets/projects-curated/beach-villa-accra/gallery-04.jpg";
import beachVillaAccraG5 from "@/assets/projects-curated/beach-villa-accra/gallery-05.jpg";

const MIXED_USE_MATERIALS: L = {
  en: "Reinforced concrete frame, curtain glazing, precast concrete cladding elements",
  fr: "Reinforced concrete frame, curtain glazing, precast concrete cladding elements",
};

// — Project: The White Strata-commercial & Residential complex Freetown 2022 —
import commercialComplexFreetownHero from "@/assets/projects-curated/commercial-complex-freetown/hero.jpg";
import commercialComplexFreetownG1 from "@/assets/projects-curated/commercial-complex-freetown/gallery-01.jpg";
import commercialComplexFreetownG2 from "@/assets/projects-curated/commercial-complex-freetown/gallery-02.jpg";
import commercialComplexFreetownG3 from "@/assets/projects-curated/commercial-complex-freetown/gallery-03.jpg";
import commercialComplexFreetownG4 from "@/assets/projects-curated/commercial-complex-freetown/gallery-04.jpg";

const CIVIC_SCOPE: L = {
  en: "Architectural design, technical documentation, and construction oversight for a public facility",
  fr: "Architectural design, technical documentation, and construction oversight for a public facility",
};
const CIVIC_MATERIALS: L = {
  en: "Reinforced concrete frame, block masonry, metal roof sheeting",
  fr: "Reinforced concrete frame, block masonry, metal roof sheeting",
};

// — Project: School —
import schoolFreetownHero from "@/assets/projects-curated/school-freetown/hero.jpg";
import schoolFreetownG1 from "@/assets/projects-curated/school-freetown/gallery-01.jpg";
import schoolFreetownG2 from "@/assets/projects-curated/school-freetown/gallery-02.jpg";
import schoolFreetownG3 from "@/assets/projects-curated/school-freetown/gallery-03.jpg";

// — Project: Threefold family Grounds-family house 3 triplex houses Aburi 2021 —
import familyHouseAburiHero from "@/assets/projects-curated/family-house-aburi/hero.jpg";
import familyHouseAburiG1 from "@/assets/projects-curated/family-house-aburi/gallery-01.jpg";
import familyHouseAburiG2 from "@/assets/projects-curated/family-house-aburi/gallery-02.jpg";
import familyHouseAburiG3 from "@/assets/projects-curated/family-house-aburi/gallery-03.jpg";
import familyHouseAburiG4 from "@/assets/projects-curated/family-house-aburi/gallery-04.jpg";

// — Project: Counter-Mountain Residence-4+2 bedroom triplex villa Aburi road 2021 —
import aburiRoadVillaHero from "@/assets/projects-curated/aburi-road-villa/hero.jpg";
import aburiRoadVillaG1 from "@/assets/projects-curated/aburi-road-villa/gallery-01.jpg";
import aburiRoadVillaG2 from "@/assets/projects-curated/aburi-road-villa/gallery-02.jpg";
import aburiRoadVillaG3 from "@/assets/projects-curated/aburi-road-villa/gallery-03.jpg";

// — Project: 3&2 Bedroom Apartments, 3 Blocks —
import apartments3BlocksHero from "@/assets/projects-curated/apartments-3-blocks-freetown/hero.jpg";
import apartments3BlocksG1 from "@/assets/projects-curated/apartments-3-blocks-freetown/gallery-01.jpg";
import apartments3BlocksG2 from "@/assets/projects-curated/apartments-3-blocks-freetown/gallery-02.jpg";

// — Project: 4 Bedroom Duplex Villa (Iran) —
import duplexVillaIran4bedHero from "@/assets/projects-curated/duplex-villa-iran-4bed/hero.jpg";
import duplexVillaIran4bedG1 from "@/assets/projects-curated/duplex-villa-iran-4bed/gallery-01.jpg";
import duplexVillaIran4bedG2 from "@/assets/projects-curated/duplex-villa-iran-4bed/gallery-02.jpg";

// — Project: 4 Bedroom Duplex Villa, Appolonia —
import duplexVillaAppolonia2024Hero from "@/assets/projects-curated/duplex-villa-appolonia-2024/hero.jpg";
import duplexVillaAppolonia2024G1 from "@/assets/projects-curated/duplex-villa-appolonia-2024/gallery-01.jpg";
import duplexVillaAppolonia2024G2 from "@/assets/projects-curated/duplex-villa-appolonia-2024/gallery-02.jpg";

// — Project: 4 Units, 4&5 Bedroom Duplex Villa, Devtraco —
import duplexVillaDevtracoHero from "@/assets/projects-curated/duplex-villa-devtraco/hero.jpg";
import duplexVillaDevtracoG1 from "@/assets/projects-curated/duplex-villa-devtraco/gallery-01.jpg";
import duplexVillaDevtracoG2 from "@/assets/projects-curated/duplex-villa-devtraco/gallery-02.jpg";
import duplexVillaDevtracoG3 from "@/assets/projects-curated/duplex-villa-devtraco/gallery-03.jpg";

// — Project: 5 Bedroom Duplex Villa (Iran) —
import duplexVillaIran5bedHero from "@/assets/projects-curated/duplex-villa-iran-5bed/hero.jpg";
import duplexVillaIran5bedG1 from "@/assets/projects-curated/duplex-villa-iran-5bed/gallery-01.jpg";

// — Project: National Parasitology Reference Laboratory —
import parasitologyLabHero from "@/assets/projects-curated/parasitology-lab-lakka/hero.jpg";
import parasitologyLabG1 from "@/assets/projects-curated/parasitology-lab-lakka/gallery-01.jpg";
import parasitologyLabG2 from "@/assets/projects-curated/parasitology-lab-lakka/gallery-02.jpg";

// — Project: 3 Bedroom Duplex, 8 Blocks —
import duplex8BlocksTemaHero from "@/assets/projects-curated/duplex-8-blocks-tema/hero.jpg";
import duplex8BlocksTemaG1 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-01.jpg";
import duplex8BlocksTemaG2 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-02.jpg";
import duplex8BlocksTemaG3 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-03.jpg";
import duplex8BlocksTemaG4 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-04.jpg";
import duplex8BlocksTemaG5 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-05.jpg";
import duplex8BlocksTemaG6 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-06.jpg";
import duplex8BlocksTemaG7 from "@/assets/projects-curated/duplex-8-blocks-tema/gallery-07.jpg";

// — Project: 3 Bedroom Duplex Villa (Guam) —
import duplexVillaGuamHero from "@/assets/projects-curated/duplex-villa-guam/hero.jpg";
import duplexVillaGuamG1 from "@/assets/projects-curated/duplex-villa-guam/gallery-01.jpg";
import duplexVillaGuamG2 from "@/assets/projects-curated/duplex-villa-guam/gallery-02.jpg";
import duplexVillaGuamG3 from "@/assets/projects-curated/duplex-villa-guam/gallery-03.jpg";

// — Project: 3 Bedroom House (Aflao) —
import houseAflaoHero from "@/assets/projects-curated/house-aflao/hero.jpg";
import houseAflaoG1 from "@/assets/projects-curated/house-aflao/gallery-01.jpg";
import houseAflaoG2 from "@/assets/projects-curated/house-aflao/gallery-02.jpg";
import houseAflaoG3 from "@/assets/projects-curated/house-aflao/gallery-03.jpg";

// — Project: 4 Bedroom Duplex Villa, Appolonia 1 —
import duplexVillaAppolonia1Hero from "@/assets/projects-curated/duplex-villa-appolonia-1/hero.jpg";
import duplexVillaAppolonia1G1 from "@/assets/projects-curated/duplex-villa-appolonia-1/gallery-01.jpg";
import duplexVillaAppolonia1G2 from "@/assets/projects-curated/duplex-villa-appolonia-1/gallery-02.jpg";

// — Project: 4 Bedroom Duplex Villa (Limbe, Cameroon) —
import duplexVillaLimbeHero from "@/assets/projects-curated/duplex-villa-limbe-cameroon/hero.jpg";
import duplexVillaLimbeG1 from "@/assets/projects-curated/duplex-villa-limbe-cameroon/gallery-01.jpg";
import duplexVillaLimbeG2 from "@/assets/projects-curated/duplex-villa-limbe-cameroon/gallery-02.jpg";
import duplexVillaLimbeG3 from "@/assets/projects-curated/duplex-villa-limbe-cameroon/gallery-03.jpg";

// — Project: 4 Bedroom Duplex Villa, Tema Community 25 —
import duplexVillaTema2021Hero from "@/assets/projects-curated/duplex-villa-tema-2021/hero.jpg";
import duplexVillaTema2021G1 from "@/assets/projects-curated/duplex-villa-tema-2021/gallery-01.jpg";
import duplexVillaTema2021G2 from "@/assets/projects-curated/duplex-villa-tema-2021/gallery-02.jpg";

// — Project: 4 Bedroom Interior —
import interiorAccraHero from "@/assets/projects-curated/interior-accra/hero.jpg";
import interiorAccraG1 from "@/assets/projects-curated/interior-accra/gallery-01.jpg";
import interiorAccraG2 from "@/assets/projects-curated/interior-accra/gallery-02.jpg";

// — Project: The Other Side- 4 bedroom villa Portland main US 2022 —
import villaPortlandUsHero from "@/assets/projects-curated/villa-portland-us/hero.jpg";
import villaPortlandUsG1 from "@/assets/projects-curated/villa-portland-us/gallery-01.jpg";
import villaPortlandUsG2 from "@/assets/projects-curated/villa-portland-us/gallery-02.jpg";
import villaPortlandUsG3 from "@/assets/projects-curated/villa-portland-us/gallery-03.jpg";

// — Project: 4 Bedroom Duplex Villa (Accra 2023) —
import duplexVillaAccra2023Hero from "@/assets/projects-curated/duplex-villa-accra-2023/hero.jpg";
import duplexVillaAccra2023G1 from "@/assets/projects-curated/duplex-villa-accra-2023/gallery-01.jpg";
import duplexVillaAccra2023G2 from "@/assets/projects-curated/duplex-villa-accra-2023/gallery-02.jpg";
import duplexVillaAccra2023G3 from "@/assets/projects-curated/duplex-villa-accra-2023/gallery-03.jpg";

// — Project: 4 Unit, 5 Bedroom Duplex Estate —
import duplexEstateFreetownHero from "@/assets/projects-curated/duplex-estate-freetown/hero.jpg";
import duplexEstateFreetownG1 from "@/assets/projects-curated/duplex-estate-freetown/gallery-01.jpg";
import duplexEstateFreetownG2 from "@/assets/projects-curated/duplex-estate-freetown/gallery-02.jpg";
import duplexEstateFreetownG3 from "@/assets/projects-curated/duplex-estate-freetown/gallery-03.jpg";

// — Project: White Form-6 units 2bedroom villa Freetown 2021 —
import villa6unitsFreetownHero from "@/assets/projects-curated/villa-6units-freetown/hero.jpg";
import villa6unitsFreetownG1 from "@/assets/projects-curated/villa-6units-freetown/gallery-01.jpg";
import villa6unitsFreetownG2 from "@/assets/projects-curated/villa-6units-freetown/gallery-02.jpg";
import villa6unitsFreetownG3 from "@/assets/projects-curated/villa-6units-freetown/gallery-03.jpg";

// — Project: 4 Bedroom Coastal Villa, Laboma Beach —
import coastalVillaLabomaHero from "@/assets/projects-curated/coastal-villa-laboma/hero.jpg";
import coastalVillaLabomaG1 from "@/assets/projects-curated/coastal-villa-laboma/gallery-01.jpg";
import coastalVillaLabomaG2 from "@/assets/projects-curated/coastal-villa-laboma/gallery-02.jpg";
import coastalVillaLabomaG3 from "@/assets/projects-curated/coastal-villa-laboma/gallery-03.jpg";
import coastalVillaLabomaG4 from "@/assets/projects-curated/coastal-villa-laboma/gallery-04.jpg";
import coastalVillaLabomaG5 from "@/assets/projects-curated/coastal-villa-laboma/gallery-05.jpg";

// — Project: Sea Level — Shop & Residence, Laboma Beach —
import seaLevelLabomaHero from "@/assets/projects-curated/sea-level-laboma/hero.jpg";
import seaLevelLabomaG1 from "@/assets/projects-curated/sea-level-laboma/gallery-01.jpg";
import seaLevelLabomaG2 from "@/assets/projects-curated/sea-level-laboma/gallery-02.jpg";
import seaLevelLabomaG3 from "@/assets/projects-curated/sea-level-laboma/gallery-03.jpg";
import seaLevelLabomaG4 from "@/assets/projects-curated/sea-level-laboma/gallery-04.jpg";
import seaLevelLabomaG5 from "@/assets/projects-curated/sea-level-laboma/gallery-05.jpg";

// — Project: Sierra Crest Apartments —
import sierraCrestHero from "@/assets/projects-curated/sierra-crest-apartments/hero.jpg";
import sierraCrestG1 from "@/assets/projects-curated/sierra-crest-apartments/gallery-01.jpg";
import sierraCrestG2 from "@/assets/projects-curated/sierra-crest-apartments/gallery-02.jpg";
import sierraCrestG3 from "@/assets/projects-curated/sierra-crest-apartments/gallery-03.jpg";
import sierraCrestG4 from "@/assets/projects-curated/sierra-crest-apartments/gallery-04.jpg";

// — Project: The Highlands Apartments —
import theHighlandsHero from "@/assets/projects-curated/the-highlands-apartments/hero.jpg";
import theHighlandsG1 from "@/assets/projects-curated/the-highlands-apartments/gallery-01.jpg";
import theHighlandsG2 from "@/assets/projects-curated/the-highlands-apartments/gallery-02.jpg";
import theHighlandsG3 from "@/assets/projects-curated/the-highlands-apartments/gallery-03.jpg";
import theHighlandsG4 from "@/assets/projects-curated/the-highlands-apartments/gallery-04.jpg";
import theHighlandsG5 from "@/assets/projects-curated/the-highlands-apartments/gallery-05.jpg";

// — Project: Iran Embassy Residence —
import iranEmbassyResidenceHero from "@/assets/projects-curated/iran-embassy-residence/hero.jpg";
import iranEmbassyResidenceG1 from "@/assets/projects-curated/iran-embassy-residence/gallery-01.jpg";
import iranEmbassyResidenceG2 from "@/assets/projects-curated/iran-embassy-residence/gallery-02.jpg";

// — Project: Classic and Modern —
import classicAndModernHero from "@/assets/projects-curated/classic-and-modern/hero.jpg";
import classicAndModernG1 from "@/assets/projects-curated/classic-and-modern/gallery-01.jpg";
import classicAndModernG2 from "@/assets/projects-curated/classic-and-modern/gallery-02.jpg";
import classicAndModernG3 from "@/assets/projects-curated/classic-and-modern/gallery-03.jpg";
import classicAndModernG4 from "@/assets/projects-curated/classic-and-modern/gallery-04.jpg";
import classicAndModernG5 from "@/assets/projects-curated/classic-and-modern/gallery-05.jpg";
import classicAndModernG6 from "@/assets/projects-curated/classic-and-modern/gallery-06.jpg";

export const projects: Project[] = [
  {
    slug: "interior-accra",
    name: "Hearth-4bedroom interior Accra 2023",
    category: "Residential",
    location: "Accra, Ghana",
    year: "2023",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: {
      en: "Interior fit-out for a private residence in Accra, Ghana, completed in 2023.",
      fr: "Interior fit-out for a private residence in Accra, Ghana, completed in 2023.",
    },
    highlights: {
      en: [
        "Full interior fit-out and finishes",
        "Delivered as part of Ayrick's residential portfolio",
      ],
      fr: [
        "Full interior fit-out and finishes",
        "Delivered as part of Ayrick's residential portfolio",
      ],
    },
    heroImage: interiorAccraHero,
    gallery: [interiorAccraG1, interiorAccraG2],
    featured: false,
  },
  {
    slug: "villa-portland-us",
    name: "The Other Side- 4 bedroom villa Portland main US 2022",
    category: "Residential",
    location: "Portland, United States",
    year: "2022",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Portland, United States", "2022"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: villaPortlandUsHero,
    gallery: [villaPortlandUsG1, villaPortlandUsG2, villaPortlandUsG3],
    featured: false,
  },
  {
    slug: "duplex-villa-accra-2023",
    name: "The Living Layers-4bedrrom duplex villa Accra 2023",
    category: "Residential",
    location: "Accra, Ghana",
    year: "2023",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Accra, Ghana", "2023"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaAccra2023Hero,
    gallery: [duplexVillaAccra2023G1, duplexVillaAccra2023G2, duplexVillaAccra2023G3],
    featured: false,
  },
  {
    slug: "duplex-estate-freetown",
    name: "Sunlit Neighbourhood-4 unit 5 bedroom duplex estate Freetown 2021",
    category: "Residential",
    location: "Freetown, Sierra Leone",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Freetown, Sierra Leone", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexEstateFreetownHero,
    gallery: [duplexEstateFreetownG1, duplexEstateFreetownG2, duplexEstateFreetownG3],
    featured: false,
  },
  {
    slug: "villa-6units-freetown",
    name: "White Form-6 units 2bedroom villa Freetown 2021",
    category: "Residential",
    location: "Freetown, Sierra Leone",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Freetown, Sierra Leone", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: villa6unitsFreetownHero,
    gallery: [villa6unitsFreetownG1, villa6unitsFreetownG2, villa6unitsFreetownG3],
    featured: false,
  },
  {
    slug: "duplex-8-blocks-tema",
    name: "The Homestate-3 bedroom duplex 8 blocks Tema co.25 2019",
    category: "Residential",
    location: "Tema Community 25, Ghana",
    year: "2019",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Tema Community 25, Ghana", "2019"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplex8BlocksTemaHero,
    gallery: [
      duplex8BlocksTemaG1,
      duplex8BlocksTemaG2,
      duplex8BlocksTemaG3,
      duplex8BlocksTemaG4,
      duplex8BlocksTemaG5,
      duplex8BlocksTemaG6,
      duplex8BlocksTemaG7,
    ],
    featured: false,
  },
  {
    slug: "duplex-villa-guam",
    name: "Pacific Haven- 3 bedroom duplex villa Guam 2023",
    category: "Residential",
    location: "Guam",
    year: "2023",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Guam", "2023"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaGuamHero,
    gallery: [duplexVillaGuamG1, duplexVillaGuamG2, duplexVillaGuamG3],
    featured: false,
  },
  {
    slug: "house-aflao",
    name: "3 Bedroom House",
    category: "Residential",
    location: "Aflao, Ghana",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Aflao, Ghana", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: houseAflaoHero,
    gallery: [houseAflaoG1, houseAflaoG2, houseAflaoG3],
    featured: false,
  },
  {
    slug: "duplex-villa-appolonia-1",
    name: "4 Bedroom Duplex Villa, Appolonia 1",
    category: "Residential",
    location: "Appolonia, Ghana",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Appolonia, Ghana", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaAppolonia1Hero,
    gallery: [duplexVillaAppolonia1G1, duplexVillaAppolonia1G2],
    featured: false,
  },
  {
    slug: "duplex-villa-limbe-cameroon",
    name: "Quiet Volume-4bedroom duplex villa Limbe Cameron 2023",
    category: "Residential",
    location: "Limbe, Cameroon",
    year: "2023",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Limbe, Cameroon", "2023"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaLimbeHero,
    gallery: [duplexVillaLimbeG1, duplexVillaLimbeG2, duplexVillaLimbeG3],
    featured: false,
  },
  {
    slug: "duplex-villa-tema-2021",
    name: "Open Court-4bedroom duplex villa Tema co.25 2021",
    category: "Residential",
    location: "Tema Community 25, Ghana",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Tema Community 25, Ghana", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaTema2021Hero,
    gallery: [duplexVillaTema2021G1, duplexVillaTema2021G2],
    featured: false,
  },
  {
    slug: "apartments-3-blocks-freetown",
    name: "3&2 Bedroom Apartments, 3 Blocks",
    category: "Residential",
    location: "Freetown, Sierra Leone",
    year: "—",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Freetown, Sierra Leone"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: apartments3BlocksHero,
    gallery: [apartments3BlocksG1, apartments3BlocksG2],
    featured: false,
  },
  {
    slug: "duplex-villa-iran-4bed",
    name: "4 Bedroom Duplex Villa",
    category: "Residential",
    location: "Iran",
    year: "—",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Iran"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaIran4bedHero,
    gallery: [duplexVillaIran4bedG1, duplexVillaIran4bedG2],
    featured: false,
  },
  {
    slug: "duplex-villa-appolonia-2024",
    name: "4 Bedroom Duplex Villa, Appolonia",
    category: "Residential",
    location: "Appolonia, Ghana",
    year: "2024",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Appolonia, Ghana", "2024"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaAppolonia2024Hero,
    gallery: [duplexVillaAppolonia2024G1, duplexVillaAppolonia2024G2],
    featured: false,
  },
  {
    slug: "duplex-villa-devtraco",
    name: "Interlock- 4 units 4&5 bedrrom duplex villa Devtraco 2019",
    category: "Residential",
    location: "Devtraco, Ghana",
    year: "2019",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Devtraco, Ghana", "2019"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaDevtracoHero,
    gallery: [duplexVillaDevtracoG1, duplexVillaDevtracoG2, duplexVillaDevtracoG3],
    featured: false,
  },
  {
    slug: "duplex-villa-iran-5bed",
    name: "5 Bedroom Duplex Villa",
    category: "Residential",
    location: "Iran",
    year: "—",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Iran"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: duplexVillaIran5bedHero,
    gallery: [duplexVillaIran5bedG1],
    featured: false,
  },
  {
    slug: "parasitology-lab-lakka",
    name: "National Parasitology Reference Laboratory",
    category: "Public",
    location: "Lakka, Freetown, Sierra Leone",
    year: "2025",
    clientType: "Government",
    scope: CIVIC_SCOPE,
    size: "—",
    materials: CIVIC_MATERIALS,
    description: {
      en: "A national reference laboratory in Lakka, Freetown, delivered in partnership with the Republic of Sierra Leone's Ministry of Health and Sanitation.",
      fr: "A national reference laboratory in Lakka, Freetown, delivered in partnership with the Republic of Sierra Leone's Ministry of Health and Sanitation.",
    },
    highlights: {
      en: [
        "National public health laboratory facility",
        "Delivered as part of Ayrick's public-sector portfolio",
      ],
      fr: [
        "National public health laboratory facility",
        "Delivered as part of Ayrick's public-sector portfolio",
      ],
    },
    heroImage: parasitologyLabHero,
    gallery: [parasitologyLabG1, parasitologyLabG2],
    featured: false,
  },
  {
    slug: "aburi-road-villa",
    name: "Counter-Mountain Residence-4+2 bedroom triplex villa Aburi road 2021",
    category: "Residential",
    location: "Aburi Road, Ghana",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Aburi Road, Ghana", "2021"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: aburiRoadVillaHero,
    gallery: [aburiRoadVillaG1, aburiRoadVillaG2, aburiRoadVillaG3],
    featured: true,
  },
  {
    slug: "family-house-aburi",
    name: "Threefold family Grounds-family house 3 triplex houses Aburi 2021",
    category: "Residential",
    location: "Aburi, Ghana",
    year: "2021",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Aburi, Ghana", "2021"),
    highlights: {
      en: [
        "Three triplex houses on one family compound, each with a distinct architectural treatment",
        "Delivered as part of Ayrick's residential portfolio",
      ],
      fr: [
        "Three triplex houses on one family compound, each with a distinct architectural treatment",
        "Delivered as part of Ayrick's residential portfolio",
      ],
    },
    heroImage: familyHouseAburiHero,
    gallery: [familyHouseAburiG1, familyHouseAburiG2, familyHouseAburiG3, familyHouseAburiG4],
    featured: true,
  },
  {
    slug: "school-freetown",
    name: "School",
    category: "Public",
    location: "Freetown, Sierra Leone",
    year: "2021",
    clientType: "Government",
    scope: CIVIC_SCOPE,
    size: "—",
    materials: CIVIC_MATERIALS,
    description: {
      en: "A public school facility in Freetown, Sierra Leone, completed in 2021.",
      fr: "A public school facility in Freetown, Sierra Leone, completed in 2021.",
    },
    highlights: {
      en: [
        "Civic education facility serving the local community",
        "Delivered as part of Ayrick's public-sector portfolio",
      ],
      fr: [
        "Civic education facility serving the local community",
        "Delivered as part of Ayrick's public-sector portfolio",
      ],
    },
    heroImage: schoolFreetownHero,
    gallery: [schoolFreetownG1, schoolFreetownG2, schoolFreetownG3],
    featured: false,
  },
  {
    slug: "commercial-complex-freetown",
    name: "The White Strata-commercial & Residential complex Freetown 2022",
    category: "Mixed-Use",
    location: "Freetown, Sierra Leone",
    year: "2022",
    clientType: "Corporate",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: MIXED_USE_MATERIALS,
    description: {
      en: "A mixed-use commercial and residential development in Freetown, Sierra Leone, completed in 2022.",
      fr: "A mixed-use commercial and residential development in Freetown, Sierra Leone, completed in 2022.",
    },
    highlights: {
      en: [
        "Combines residential units with ground-floor commercial space",
        "Delivered as part of Ayrick's mixed-use portfolio",
      ],
      fr: [
        "Combines residential units with ground-floor commercial space",
        "Delivered as part of Ayrick's mixed-use portfolio",
      ],
    },
    heroImage: commercialComplexFreetownHero,
    gallery: [
      commercialComplexFreetownG1,
      commercialComplexFreetownG2,
      commercialComplexFreetownG3,
      commercialComplexFreetownG4,
    ],
    featured: true,
  },
  {
    slug: "beach-villa-accra",
    name: "Tidal Lines-5 bedroom triplex beach villa Accra 2023",
    category: "Residential",
    location: "Accra, Ghana",
    year: "2023",
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Accra, Ghana", "2023"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: beachVillaAccraHero,
    gallery: [
      beachVillaAccraG1,
      beachVillaAccraG2,
      beachVillaAccraG3,
      beachVillaAccraG4,
      beachVillaAccraG5,
    ],
    featured: true,
  },
  {
    slug: "coastal-villa-laboma",
    name: "4 Bedroom Coastal Villa",
    category: "Residential",
    location: "Laboma Beach, Accra, Ghana",
    year: YEAR_TBC,
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: residentialDescription("Laboma Beach, Accra, Ghana"),
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: coastalVillaLabomaHero,
    gallery: [
      coastalVillaLabomaG1,
      coastalVillaLabomaG2,
      coastalVillaLabomaG3,
      coastalVillaLabomaG4,
      coastalVillaLabomaG5,
    ],
    featured: false,
  },
  {
    slug: "sea-level-laboma",
    name: "Sea Level — Shop & Residence",
    category: "Mixed-Use",
    location: "Laboma Beach, Accra, Ghana",
    year: YEAR_TBC,
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: MIXED_USE_MATERIALS,
    description: {
      en: "A shop-and-residence building at Laboma Beach, Accra, combining ground-floor commercial space with residential accommodation above.",
      fr: "Un bâtiment commercial et résidentiel à Laboma Beach, Accra, associant des commerces en rez-de-chaussée à des logements à l'étage.",
    },
    highlights: {
      en: [
        "Ground-floor retail with residential apartments above",
        "Delivered as part of Ayrick's mixed-use portfolio",
      ],
      fr: [
        "Commerces en rez-de-chaussée et appartements à l'étage",
        "Livré dans le cadre du portefeuille multi-usage d'Ayrick",
      ],
    },
    heroImage: seaLevelLabomaHero,
    gallery: [
      seaLevelLabomaG1,
      seaLevelLabomaG2,
      seaLevelLabomaG3,
      seaLevelLabomaG4,
      seaLevelLabomaG5,
    ],
    featured: false,
  },
  {
    slug: "sierra-crest-apartments",
    name: "Sierra Crest Apartments",
    category: "Residential",
    location: LOCATION_TBC,
    year: YEAR_TBC,
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: {
      en: "A private residential apartment development delivered as part of Ayrick's residential portfolio.",
      fr: "Un ensemble d'appartements résidentiels privés livré dans le cadre du portefeuille résidentiel d'Ayrick.",
    },
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: sierraCrestHero,
    gallery: [sierraCrestG1, sierraCrestG2, sierraCrestG3, sierraCrestG4],
    featured: false,
  },
  {
    slug: "the-highlands-apartments",
    name: "The Highlands Apartments",
    category: "Residential",
    location: LOCATION_TBC,
    year: YEAR_TBC,
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: RESIDENTIAL_MATERIALS,
    description: {
      en: "A private residential apartment development delivered as part of Ayrick's residential portfolio.",
      fr: "Un ensemble d'appartements résidentiels privés livré dans le cadre du portefeuille résidentiel d'Ayrick.",
    },
    highlights: RESIDENTIAL_HIGHLIGHTS,
    heroImage: theHighlandsHero,
    gallery: [theHighlandsG1, theHighlandsG2, theHighlandsG3, theHighlandsG4, theHighlandsG5],
    featured: false,
  },
  // Category (residential vs institutional) and exact location still to be
  // confirmed — see the Iran Embassy Residence row in ayrick-project-catalog.csv.
  {
    slug: "iran-embassy-residence",
    name: "Iran Embassy Residence",
    category: "Public",
    location: "Iran",
    year: YEAR_TBC,
    clientType: "Government",
    scope: CIVIC_SCOPE,
    size: "—",
    materials: CIVIC_MATERIALS,
    description: {
      en: "A diplomatic residence in Iran, delivered as part of Ayrick's public-sector work.",
      fr: "Une résidence diplomatique en Iran, livrée dans le cadre des projets publics d'Ayrick.",
    },
    highlights: {
      en: [
        "Residence for diplomatic staff",
        "Delivered as part of Ayrick's public-sector portfolio",
      ],
      fr: [
        "Résidence pour le personnel diplomatique",
        "Livré dans le cadre du portefeuille public d'Ayrick",
      ],
    },
    heroImage: iranEmbassyResidenceHero,
    gallery: [iranEmbassyResidenceG1, iranEmbassyResidenceG2],
    featured: false,
  },
  // NOTE: this entry bundles several distinct buildings from Mashhad (two
  // apartment blocks, a theatre complex and a set of interiors) under one
  // project. Split into separate entries if Ayrick wants them catalogued
  // individually; location/year still need confirming.
  {
    slug: "classic-and-modern",
    name: "Classic and Modern",
    category: "Mixed-Use",
    location: "Mashhad, Iran",
    year: YEAR_TBC,
    clientType: "Private",
    scope: RESIDENTIAL_SCOPE,
    size: "—",
    materials: MIXED_USE_MATERIALS,
    description: {
      en: "A selection of Ayrick's work in Mashhad, Iran — classical apartment facades, contemporary residential interiors and a theatre complex.",
      fr: "Une sélection de projets d'Ayrick à Mashhad, en Iran — façades d'appartements classiques, intérieurs résidentiels contemporains et complexe théâtral.",
    },
    highlights: {
      en: [
        "Classical apartment facades alongside contemporary civic architecture",
        "Residential interiors and a theatre complex",
      ],
      fr: [
        "Façades d'appartements classiques et architecture civique contemporaine",
        "Intérieurs résidentiels et complexe théâtral",
      ],
    },
    heroImage: classicAndModernHero,
    gallery: [
      classicAndModernG1,
      classicAndModernG2,
      classicAndModernG3,
      classicAndModernG4,
      classicAndModernG5,
      classicAndModernG6,
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
