export { default as CaseStudiesCards } from "./case-studies-cards";
export { default as CaseStudiesSticky } from "./case-studies-sticky";
export { default as CaseStudiesCarousel } from "./case-studies-carousel";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "case-studies-cards",
    pattern: "case-studies",
    name: "Cards",
    description: "FocusCards with company logo, problem summary, and key result metric.",
    tags: ["cards", "focus", "interactive"],
    uiComponents: ["FocusCards"],
    ssr: true,
  },
  {
    id: "case-studies-sticky",
    pattern: "case-studies",
    name: "Sticky",
    description: "StickyScrollReveal: sticky company panel with scrolling problem/solution/result.",
    tags: ["sticky", "scroll", "detailed"],
    uiComponents: ["StickyScrollReveal"],
    ssr: true,
  },
  {
    id: "case-studies-carousel",
    pattern: "case-studies",
    name: "Carousel",
    description: "InfiniteMovingCards horizontal strip of case study cards.",
    tags: ["carousel", "animated", "compact"],
    uiComponents: ["InfiniteMovingCards"],
    ssr: true,
  },
];

export const defaultVariant = "case-studies-sticky";
