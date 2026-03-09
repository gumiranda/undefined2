export { default as TrustBadgesBar } from "./trust-badges-bar";
export { default as TrustBadgesGlow } from "./trust-badges-glow";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "trust-badges-bar",
    pattern: "trust-badges",
    name: "Bar",
    description: "Horizontal flex row of badge icons. Grayscale with color on hover.",
    tags: ["minimal", "trust", "hover"],
    uiComponents: [],
    ssr: true,
  },
  {
    id: "trust-badges-glow",
    pattern: "trust-badges",
    name: "Glow",
    description: "Badge cards in grid with GlowingEffect border, icon, name, and description.",
    tags: ["glow", "cards", "interactive"],
    uiComponents: ["GlowingEffect"],
    ssr: true,
  },
];

export const defaultVariant = "trust-badges-bar";
