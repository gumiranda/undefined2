export { default as FooterBeams } from "./footer-beams";
export { default as FooterMask } from "./footer-mask";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "footer-beams",
    pattern: "footer",
    name: "Background Beams",
    description: "Footer with animated background beams and floating dock.",
    tags: ["beams", "animated", "dock"],
    uiComponents: ["BackgroundBeams", "FloatingDock"],
    ssr: true,
  },
  {
    id: "footer-mask",
    pattern: "footer",
    name: "SVG Mask",
    description: "Footer with SVG mask reveal effect and dock.",
    tags: ["mask", "reveal", "interactive"],
    uiComponents: ["MaskContainer", "FloatingDock"],
    ssr: true,
  },
];

export const defaultVariant = "footer-beams";
