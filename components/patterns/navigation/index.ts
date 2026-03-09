export { default as FloatingNavPattern } from "./floating-nav";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "floating-nav",
    pattern: "navigation",
    name: "Floating Nav",
    description: "A floating navigation bar that follows scroll.",
    tags: ["minimal", "sticky"],
    uiComponents: ["FloatingNav"],
    ssr: true,
  },
];

export const defaultVariant = "floating-nav";
