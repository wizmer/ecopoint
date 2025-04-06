import type { Itinerary } from "./itinerary";

export interface Image {
  title: string;
  src: string;
  href: string;
  credit: string;
}

export interface Sections {
  howToGetThere: string;
  whereToStay: string;
  howToReachCrags: string;
  tips: string;
  howToBook: string;
  author: string;
  gallery: {
    images: Image[];
  };
}

export interface Ecopoint {
  title: string;
  slug: string;
  itinerary: Itinerary;
  approaches: Itinerary[];
  summary: string;
  sections: Sections;
  // Optional fields observed in the template but not in the data
  facts?: {
    approach: string[];
    nearestStation: string;
    accommodation: string[];
    climbingTypes: string[];
    difficulty: string;
    rock: string;
    bestMonths: string[];
    topoLink: string;
    rating?: number;     // Added for card display
  };
  displayImage?: {        // Added for card thumbnail
    src: string;
    alt: string;
  };
}