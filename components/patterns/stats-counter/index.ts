export { default as StatsCounterBar } from "./stats-counter-bar";
export { default as StatsCounterCards } from "./stats-counter-cards";
export { default as StatsCounterSpotlight } from "./stats-counter-spotlight";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "stats-counter-bar",
    pattern: "stats-counter",
    name: "Bar",
    description: "Full-width row of stats with count-up animation and BackgroundLines texture.",
    tags: ["animated", "count-up", "full-width"],
    uiComponents: ["BackgroundLines", "useCountUp"],
    ssr: true,
  },
  {
    id: "stats-counter-cards",
    pattern: "stats-counter",
    name: "Cards",
    description: "Stats in GlareCard grid with animated number, label, and icon.",
    tags: ["cards", "glare", "animated"],
    uiComponents: ["GlareCard", "useCountUp"],
    ssr: true,
  },
  {
    id: "stats-counter-spotlight",
    pattern: "stats-counter",
    name: "Spotlight",
    description: "Dark section with Spotlight effect, numbers animate on scroll.",
    tags: ["spotlight", "dark", "animated"],
    uiComponents: ["Spotlight", "useCountUp"],
    ssr: true,
  },
];

export const defaultVariant = "stats-counter-bar";
