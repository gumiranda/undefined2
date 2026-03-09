export { default as IntegrationsBento } from "./integrations-bento";
export { default as IntegrationsHover } from "./integrations-hover";
export { default as IntegrationsMarquee } from "./integrations-marquee";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "integrations-bento",
    pattern: "integrations",
    name: "Bento",
    description: "BentoGrid layout with integration icon, name, description. Featured items span 2 cols.",
    tags: ["bento", "grid", "interactive"],
    uiComponents: ["BentoGrid", "BentoGridItem"],
    ssr: true,
  },
  {
    id: "integrations-hover",
    pattern: "integrations",
    name: "Hover",
    description: "Grid with DirectionAwareHover revealing details on hover.",
    tags: ["hover", "direction", "interactive"],
    uiComponents: ["DirectionAwareHover"],
    ssr: true,
  },
  {
    id: "integrations-marquee",
    pattern: "integrations",
    name: "Marquee",
    description: "ThreeDMarquee wall of integration logos.",
    tags: ["3d", "marquee", "animated"],
    uiComponents: ["ThreeDMarquee"],
    ssr: true,
  },
];

export const defaultVariant = "integrations-bento";
