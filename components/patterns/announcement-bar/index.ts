export { default as AnnouncementBarGradient } from "./announcement-bar-gradient";
export { default as AnnouncementBarSparkles } from "./announcement-bar-sparkles";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "announcement-bar-gradient",
    pattern: "announcement-bar",
    name: "Gradient",
    description: "Full-width gradient bar with text, CTA link, and dismiss button.",
    tags: ["gradient", "dismissible", "animated"],
    uiComponents: ["AnimatePresence"],
    ssr: true,
  },
  {
    id: "announcement-bar-sparkles",
    pattern: "announcement-bar",
    name: "Sparkles",
    description: "SparklesCore background particle effect with dismiss animation.",
    tags: ["sparkles", "particles", "dismissible"],
    uiComponents: ["SparklesCore", "AnimatePresence"],
    ssr: true,
  },
];

export const defaultVariant = "announcement-bar-gradient";
