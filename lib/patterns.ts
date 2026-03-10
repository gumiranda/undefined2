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
import { variants as faqVariants } from "@/components/patterns/faq";
import { variants as logoBarVariants } from "@/components/patterns/logo-bar";
import { variants as howItWorksVariants } from "@/components/patterns/how-it-works";
import { variants as statsCounterVariants } from "@/components/patterns/stats-counter";
import { variants as integrationsVariants } from "@/components/patterns/integrations";
import { variants as codeSnippetVariants } from "@/components/patterns/code-snippet";
import { variants as announcementBarVariants } from "@/components/patterns/announcement-bar";
import { variants as caseStudiesVariants } from "@/components/patterns/case-studies";
import { variants as comparisonTableVariants } from "@/components/patterns/comparison-table";
import { variants as trustBadgesVariants } from "@/components/patterns/trust-badges";
import { variants as newsletterVariants } from "@/components/patterns/newsletter";
import { variants as problemSolutionVariants } from "@/components/patterns/problem-solution";
import { variants as subscriptionFlowVariants } from "@/components/patterns/subscription-flow";
import { variants as leadCaptureVariants } from "@/components/patterns/lead-capture";
import { variants as conversionVariants } from "@/components/patterns/conversion";
import { variants as nurtureVariants } from "@/components/patterns/nurture";

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
  {
    id: "faq",
    name: "FAQ",
    description: "Frequently asked questions sections.",
    variants: faqVariants,
    defaultVariant: "faq-accordion",
  },
  {
    id: "logo-bar",
    name: "Logo Bar",
    description: "Trusted-by logo showcases and social proof bars.",
    variants: logoBarVariants,
    defaultVariant: "logo-bar-marquee",
  },
  {
    id: "how-it-works",
    name: "How It Works",
    description: "Step-by-step workflow explanations.",
    variants: howItWorksVariants,
    defaultVariant: "how-it-works-timeline",
  },
  {
    id: "stats-counter",
    name: "Stats Counter",
    description: "Animated statistics and metrics displays.",
    variants: statsCounterVariants,
    defaultVariant: "stats-counter-bar",
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "Integration showcases and partner ecosystems.",
    variants: integrationsVariants,
    defaultVariant: "integrations-bento",
  },
  {
    id: "code-snippet",
    name: "Code Snippet",
    description: "Developer-focused code examples and API showcases.",
    variants: codeSnippetVariants,
    defaultVariant: "code-snippet-tabs",
  },
  {
    id: "announcement-bar",
    name: "Announcement Bar",
    description: "Top-of-page announcements and promotional banners.",
    variants: announcementBarVariants,
    defaultVariant: "announcement-bar-gradient",
  },
  {
    id: "case-studies",
    name: "Case Studies",
    description: "Customer success stories and results.",
    variants: caseStudiesVariants,
    defaultVariant: "case-studies-sticky",
  },
  {
    id: "comparison-table",
    name: "Comparison Table",
    description: "Feature comparisons and competitive differentiators.",
    variants: comparisonTableVariants,
    defaultVariant: "comparison-table-grid",
  },
  {
    id: "trust-badges",
    name: "Trust Badges",
    description: "Security certifications and compliance badges.",
    variants: trustBadgesVariants,
    defaultVariant: "trust-badges-bar",
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Email subscription and newsletter signup forms.",
    variants: newsletterVariants,
    defaultVariant: "newsletter-beams",
  },
  {
    id: "problem-solution",
    name: "Problem & Solution",
    description: "Before/after comparisons highlighting platform value.",
    variants: problemSolutionVariants,
    defaultVariant: "problem-solution-cards",
  },
  {
    id: "subscription-flow",
    name: "Subscription Flow",
    description:
      "Complete subscription lifecycle: pricing, checkout, billing, onboarding, and recovery.",
    variants: subscriptionFlowVariants,
    defaultVariant: "sub-pricing-page",
  },
  {
    id: "lead-capture",
    name: "Lead Capture",
    description:
      "Formularios e CTAs de captura de leads para o mercado brasileiro: email, WhatsApp e demos.",
    variants: leadCaptureVariants,
    defaultVariant: "capture-inline",
  },
  {
    id: "conversion",
    name: "Conversion",
    description:
      "Funil de conversao BR: pricing dual-track, checkout PIX/cartao/boleto, thank-you pages e waitlist.",
    variants: conversionVariants,
    defaultVariant: "pricing-dual-cta",
  },
  {
    id: "nurture",
    name: "Nurture",
    description:
      "Nutrição de leads: calculadora de ROI interativa e showcase de resultados com metricas.",
    variants: nurtureVariants,
    defaultVariant: "roi-calculator",
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
