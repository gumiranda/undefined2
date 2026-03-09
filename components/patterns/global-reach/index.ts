export { default as ReachMap } from "./reach-map";
export { default as ReachMarquee } from "./reach-marquee";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "reach-map",
    pattern: "global-reach",
    name: "World Map",
    description: "Interactive world map with animated connection dots.",
    tags: ["map", "animated", "global"],
    uiComponents: ["WorldMap"],
    ssr: false,
  },
  {
    id: "reach-marquee",
    pattern: "global-reach",
    name: "Partner Marquee",
    description: "3D marquee showcasing partner logos and images.",
    tags: ["3d", "marquee", "logos"],
    uiComponents: ["ThreeDMarquee"],
    ssr: true,
  },
];

export const defaultVariant = "reach-map";
