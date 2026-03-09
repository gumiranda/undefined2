export { default as HowItWorksTimeline } from "./how-it-works-timeline";
export { default as HowItWorksSticky } from "./how-it-works-sticky";
export { default as HowItWorksCards } from "./how-it-works-cards";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "how-it-works-timeline",
    pattern: "how-it-works",
    name: "Timeline",
    description: "Vertical Timeline component with numbered nodes, title, and description per step.",
    tags: ["timeline", "vertical", "sequential"],
    uiComponents: ["Timeline"],
    ssr: true,
  },
  {
    id: "how-it-works-sticky",
    pattern: "how-it-works",
    name: "Sticky",
    description: "Left sticky step indicators with right scrolling content via StickyScrollReveal.",
    tags: ["sticky", "scroll", "interactive"],
    uiComponents: ["StickyScrollReveal"],
    ssr: true,
  },
  {
    id: "how-it-works-cards",
    pattern: "how-it-works",
    name: "Cards",
    description: "Horizontal card row with BackgroundGradient and large accent numbers.",
    tags: ["cards", "gradient", "numbered"],
    uiComponents: ["BackgroundGradient"],
    ssr: true,
  },
];

export const defaultVariant = "how-it-works-timeline";
