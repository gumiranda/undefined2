export { default as AboutTimeline } from "./about-timeline";
export { default as AboutTracing } from "./about-tracing";
export { default as AboutCards } from "./about-cards";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "about-timeline",
    pattern: "about",
    name: "Timeline",
    description: "Company history displayed as an interactive timeline.",
    tags: ["chronological", "history", "milestones"],
    uiComponents: ["Timeline"],
    ssr: true,
  },
  {
    id: "about-tracing",
    pattern: "about",
    name: "Tracing Beam",
    description: "Long-form story with a scroll-tracing beam indicator.",
    tags: ["narrative", "scroll", "long-form"],
    uiComponents: ["TracingBeam"],
    ssr: true,
  },
  {
    id: "about-cards",
    pattern: "about",
    name: "Focus Cards",
    description: "Gallery of focus cards showcasing team or culture.",
    tags: ["gallery", "visual", "interactive"],
    uiComponents: ["FocusCards"],
    ssr: true,
  },
];

export const defaultVariant = "about-timeline";
