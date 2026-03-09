export { default as FaqAccordion } from "./faq-accordion";
export { default as FaqSpotlight } from "./faq-spotlight";
export { default as FaqTracing } from "./faq-tracing";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "faq-accordion",
    pattern: "faq",
    name: "Accordion",
    description: "Clean accordion with motion expand/collapse and chevron rotation.",
    tags: ["accessible", "minimal", "animated"],
    uiComponents: ["AnimatePresence"],
    ssr: true,
  },
  {
    id: "faq-spotlight",
    pattern: "faq",
    name: "Spotlight",
    description: "FAQ items in card grid with Spotlight effect on active item.",
    tags: ["cards", "interactive", "spotlight"],
    uiComponents: ["Spotlight", "AnimatePresence"],
    ssr: true,
  },
  {
    id: "faq-tracing",
    pattern: "faq",
    name: "Tracing",
    description: "FAQ items along a TracingBeam vertical line, expand inline on click.",
    tags: ["tracing", "vertical", "animated"],
    uiComponents: ["TracingBeam", "AnimatePresence"],
    ssr: true,
  },
];

export const defaultVariant = "faq-accordion";
