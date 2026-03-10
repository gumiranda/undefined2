export { default as PricingCards } from "./pricing-cards";
export { default as PricingComparison } from "./pricing-comparison";
export { default as PricingSpotlight } from "./pricing-spotlight";
export { default as PricingPageBR } from "./pricing-page-br";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "pricing-cards",
    pattern: "pricing",
    name: "3D Cards",
    description: "Pricing tiers with 3D card effect and moving borders.",
    tags: ["3d", "interactive", "cards"],
    uiComponents: ["CardContainer", "CardBody", "CardItem", "MovingBorder"],
    ssr: true,
  },
  {
    id: "pricing-comparison",
    pattern: "pricing",
    name: "Wobble Grid",
    description: "Pricing comparison using wobble card grid.",
    tags: ["grid", "wobble", "playful"],
    uiComponents: ["WobbleCard"],
    ssr: true,
  },
  {
    id: "pricing-spotlight",
    pattern: "pricing",
    name: "Spotlight + Glare",
    description: "Premium pricing cards with spotlight and glare effects.",
    tags: ["spotlight", "glare", "premium"],
    uiComponents: ["Spotlight", "GlareCard"],
    ssr: true,
  },
  {
    id: "pricing-page-br",
    pattern: "pricing",
    name: "Full Page BR",
    description:
      "Complete pricing page: BRL, installments, PIX discount, plan comparison, trust badges, and FAQ.",
    tags: ["full-page", "brazil", "brl", "pix", "comparison", "faq"],
    uiComponents: ["GlowingEffect", "MovingBorder"],
    ssr: true,
  },
];

export const defaultVariant = "pricing-cards";
