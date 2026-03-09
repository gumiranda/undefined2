export { default as ComparisonTableGrid } from "./comparison-table-grid";
export { default as ComparisonTableCards } from "./comparison-table-cards";
export { default as ComparisonTableWobble } from "./comparison-table-wobble";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "comparison-table-grid",
    pattern: "comparison-table",
    name: "Grid",
    description: "HTML table with sticky header, check/cross cells, and highlighted column.",
    tags: ["table", "grid", "spotlight"],
    uiComponents: ["Spotlight"],
    ssr: true,
  },
  {
    id: "comparison-table-cards",
    pattern: "comparison-table",
    name: "Cards",
    description: "Card per option with MovingBorder on recommended. Feature lists within.",
    tags: ["cards", "moving-border", "comparison"],
    uiComponents: ["MovingBorder"],
    ssr: true,
  },
  {
    id: "comparison-table-wobble",
    pattern: "comparison-table",
    name: "Wobble",
    description: "Two WobbleCards: Without Us vs With Us listing pain/benefit items.",
    tags: ["wobble", "contrast", "interactive"],
    uiComponents: ["WobbleCard"],
    ssr: true,
  },
];

export const defaultVariant = "comparison-table-grid";
