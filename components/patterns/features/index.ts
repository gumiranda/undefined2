export { default as FeaturesBento } from "./features-bento";
export { default as FeaturesSticky } from "./features-sticky";
export { default as FeaturesTabs } from "./features-tabs";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "features-bento",
    pattern: "features",
    name: "Bento Grid",
    description: "Features displayed in a bento grid layout with spotlight effect.",
    tags: ["grid", "interactive", "spotlight"],
    uiComponents: ["BentoGrid", "BentoGridItem", "Spotlight"],
    ssr: true,
  },
  {
    id: "features-sticky",
    pattern: "features",
    name: "Sticky Scroll",
    description: "Features revealed through sticky scroll with side content.",
    tags: ["scroll", "narrative", "progressive"],
    uiComponents: ["StickyScroll"],
    ssr: true,
  },
  {
    id: "features-tabs",
    pattern: "features",
    name: "Tabs",
    description: "Features organized in animated tab panels.",
    tags: ["interactive", "organized", "animated"],
    uiComponents: ["Tabs"],
    ssr: true,
  },
];

export const defaultVariant = "features-bento";
