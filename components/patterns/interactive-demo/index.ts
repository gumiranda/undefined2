export { default as DemoCompare } from "./demo-compare";
export { default as DemoModal } from "./demo-modal";
export { default as DemoLoader } from "./demo-loader";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "demo-compare",
    pattern: "interactive-demo",
    name: "Compare Slider",
    description: "Before/after comparison slider for visual demos.",
    tags: ["comparison", "slider", "visual"],
    uiComponents: ["Compare"],
    ssr: true,
  },
  {
    id: "demo-modal",
    pattern: "interactive-demo",
    name: "Modal Walkthrough",
    description: "Animated modal for product walkthroughs.",
    tags: ["modal", "walkthrough", "onboarding"],
    uiComponents: ["AnimatedModal"],
    ssr: true,
  },
  {
    id: "demo-loader",
    pattern: "interactive-demo",
    name: "Multi-Step Loader",
    description: "Multi-step progress loader for onboarding flows.",
    tags: ["progress", "onboarding", "steps"],
    uiComponents: ["MultiStepLoader"],
    ssr: true,
  },
];

export const defaultVariant = "demo-compare";
