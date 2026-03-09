import type { PatternVariantMeta } from "@/components/patterns/_shared/types";

import { variants as navigationVariants } from "@/components/patterns/navigation";
import { variants as heroVariants } from "@/components/patterns/hero";
import { variants as featuresVariants } from "@/components/patterns/features";
import { variants as socialProofVariants } from "@/components/patterns/social-proof";
import { variants as pricingVariants } from "@/components/patterns/pricing";
import { variants as productShowcaseVariants } from "@/components/patterns/product-showcase";
import { variants as ctaVariants } from "@/components/patterns/cta";
import { variants as aboutVariants } from "@/components/patterns/about";
import { variants as globalReachVariants } from "@/components/patterns/global-reach";
import { variants as interactiveDemoVariants } from "@/components/patterns/interactive-demo";
import { variants as footerVariants } from "@/components/patterns/footer";

export interface PatternGroup {
  id: string;
  name: string;
  description: string;
  variants: PatternVariantMeta[];
  defaultVariant: string;
}

export const patternGroups: PatternGroup[] = [
  {
    id: "navigation",
    name: "Navigation",
    description: "Top navigation bars and menus.",
    variants: navigationVariants,
    defaultVariant: "floating-nav",
  },
  {
    id: "hero",
    name: "Hero",
    description: "Full-screen hero sections with dramatic effects.",
    variants: heroVariants,
    defaultVariant: "hero-aurora",
  },
  {
    id: "features",
    name: "Features",
    description: "Feature showcases in various layouts.",
    variants: featuresVariants,
    defaultVariant: "features-bento",
  },
  {
    id: "social-proof",
    name: "Social Proof",
    description: "Testimonials, reviews, and trust signals.",
    variants: socialProofVariants,
    defaultVariant: "social-proof-carousel",
  },
  {
    id: "pricing",
    name: "Pricing",
    description: "Pricing tables and comparison layouts.",
    variants: pricingVariants,
    defaultVariant: "pricing-cards",
  },
  {
    id: "product-showcase",
    name: "Product Showcase",
    description: "Product galleries and visual showcases.",
    variants: productShowcaseVariants,
    defaultVariant: "showcase-parallax",
  },
  {
    id: "cta",
    name: "Call to Action",
    description: "Conversion-focused call-to-action sections.",
    variants: ctaVariants,
    defaultVariant: "cta-beams",
  },
  {
    id: "about",
    name: "About",
    description: "Company story and team sections.",
    variants: aboutVariants,
    defaultVariant: "about-timeline",
  },
  {
    id: "global-reach",
    name: "Global Reach",
    description: "Maps and geographic visualizations.",
    variants: globalReachVariants,
    defaultVariant: "reach-map",
  },
  {
    id: "interactive-demo",
    name: "Interactive Demo",
    description: "Interactive product demos and walkthroughs.",
    variants: interactiveDemoVariants,
    defaultVariant: "demo-compare",
  },
  {
    id: "footer",
    name: "Footer",
    description: "Page footers with social links.",
    variants: footerVariants,
    defaultVariant: "footer-beams",
  },
];

export const allVariants: PatternVariantMeta[] = patternGroups.flatMap(
  (g) => g.variants
);

export function getPatternGroup(id: string): PatternGroup | undefined {
  return patternGroups.find((g) => g.id === id);
}

export function getVariant(id: string): PatternVariantMeta | undefined {
  return allVariants.find((v) => v.id === id);
}
