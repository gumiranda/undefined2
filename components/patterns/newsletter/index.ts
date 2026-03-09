export { default as NewsletterBeams } from "./newsletter-beams";
export { default as NewsletterBorder } from "./newsletter-border";
export { default as NewsletterBoxes } from "./newsletter-boxes";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "newsletter-beams",
    pattern: "newsletter",
    name: "Beams",
    description: "Email input and button centered on BackgroundBeams section.",
    tags: ["beams", "form", "animated"],
    uiComponents: ["BackgroundBeams"],
    ssr: true,
  },
  {
    id: "newsletter-border",
    pattern: "newsletter",
    name: "Border",
    description: "Compact form wrapped in HoverBorderGradient.",
    tags: ["border", "gradient", "compact"],
    uiComponents: ["HoverBorderGradient"],
    ssr: true,
  },
  {
    id: "newsletter-boxes",
    pattern: "newsletter",
    name: "Boxes",
    description: "Form on BackgroundBoxes grid with visual depth.",
    tags: ["boxes", "grid", "animated"],
    uiComponents: ["BoxesCore"],
    ssr: true,
  },
];

export const defaultVariant = "newsletter-beams";
