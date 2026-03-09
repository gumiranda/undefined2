export { default as CtaBeams } from "./cta-beams";
export { default as CtaVortex } from "./cta-vortex";
export { default as CtaWavy } from "./cta-wavy";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "cta-beams",
    pattern: "cta",
    name: "Background Beams",
    description: "CTA with animated background beams collision effect.",
    tags: ["dramatic", "animated", "beams"],
    uiComponents: ["BackgroundBeamsWithCollision"],
    ssr: true,
  },
  {
    id: "cta-vortex",
    pattern: "cta",
    name: "Vortex",
    description: "CTA with swirling vortex background animation.",
    tags: ["dramatic", "animated", "vortex"],
    uiComponents: ["Vortex"],
    ssr: true,
  },
  {
    id: "cta-wavy",
    pattern: "cta",
    name: "Wavy Background",
    description: "CTA with wavy background and gradient border button.",
    tags: ["organic", "animated", "gradient"],
    uiComponents: ["WavyBackground", "HoverBorderGradient"],
    ssr: true,
  },
];

export const defaultVariant = "cta-beams";
