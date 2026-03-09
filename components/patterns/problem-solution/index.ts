export { default as ProblemSolutionCompare } from "./problem-solution-compare";
export { default as ProblemSolutionCards } from "./problem-solution-cards";
export { default as ProblemSolutionReveal } from "./problem-solution-reveal";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "problem-solution-compare",
    pattern: "problem-solution",
    name: "Compare",
    description: "Compare slider showing before vs after states with text context.",
    tags: ["compare", "slider", "interactive"],
    uiComponents: ["Compare"],
    ssr: true,
  },
  {
    id: "problem-solution-cards",
    pattern: "problem-solution",
    name: "Cards",
    description: "Two WobbleCards: pain points with X icons vs solutions with check icons.",
    tags: ["cards", "wobble", "contrast"],
    uiComponents: ["WobbleCard"],
    ssr: true,
  },
  {
    id: "problem-solution-reveal",
    pattern: "problem-solution",
    name: "Reveal",
    description: "TextRevealCard swiping from problem to solution text.",
    tags: ["reveal", "interactive", "text"],
    uiComponents: ["TextRevealCard"],
    ssr: true,
  },
];

export const defaultVariant = "problem-solution-cards";
