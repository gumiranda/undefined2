export { default as HeroAurora } from "./hero-aurora";
export { default as HeroLamp } from "./hero-lamp";
export { default as HeroGlobe } from "./hero-globe";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "hero-aurora",
    pattern: "hero",
    name: "Aurora",
    description: "Aurora background with colourful text and flip words.",
    tags: ["dramatic", "animated", "gradient"],
    uiComponents: ["AuroraBackground", "ColourfulText", "FlipWords", "TextGenerateEffect", "MovingBorder"],
    ssr: true,
  },
  {
    id: "hero-lamp",
    pattern: "hero",
    name: "Lamp",
    description: "Dramatic lamp container with reveal animation.",
    tags: ["dramatic", "minimal", "dark"],
    uiComponents: ["LampContainer"],
    ssr: true,
  },
  {
    id: "hero-globe",
    pattern: "hero",
    name: "Globe",
    description: "World map as background with global messaging.",
    tags: ["global", "interactive", "data"],
    uiComponents: ["WorldMap"],
    ssr: false,
  },
];

export const defaultVariant = "hero-aurora";
