export { default as RoiCalculator } from "./roi-calculator";
export { default as ResultsShowcase } from "./results-showcase";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "roi-calculator",
    pattern: "nurture",
    name: "ROI Calculator",
    description:
      "Calculadora interativa com sliders: inputs de colaboradores, horas e custo geram economia mensal. CTA adaptivo por valor.",
    tags: ["calculator", "interactive", "roi", "sliders"],
    uiComponents: ["BackgroundLines", "GlowingEffect"],
    ssr: true,
  },
  {
    id: "results-showcase",
    pattern: "nurture",
    name: "Results Showcase",
    description:
      "Social proof com numeros grandes e metricas quantificadas de empresas brasileiras.",
    tags: ["social-proof", "metrics", "numbers", "wobble"],
    uiComponents: ["WobbleCard"],
    ssr: true,
  },
];

export const defaultVariant = "roi-calculator";
