"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { getPatternGroup } from "@/lib/patterns";
import VariantSwitcher from "@/components/patterns/_shared/variant-switcher";
import dynamic from "next/dynamic";

// Lazy-load all pattern components
const componentMap: Record<string, React.ComponentType<{ id?: string }>> = {
  // Navigation
  "floating-nav": dynamic(() => import("@/components/patterns/navigation/floating-nav")),
  // Hero
  "hero-aurora": dynamic(() => import("@/components/patterns/hero/hero-aurora")),
  "hero-lamp": dynamic(() => import("@/components/patterns/hero/hero-lamp")),
  "hero-globe": dynamic(() => import("@/components/patterns/hero/hero-globe"), { ssr: false }),
  // Features
  "features-bento": dynamic(() => import("@/components/patterns/features/features-bento")),
  "features-sticky": dynamic(() => import("@/components/patterns/features/features-sticky")),
  "features-tabs": dynamic(() => import("@/components/patterns/features/features-tabs")),
  // Social Proof
  "social-proof-carousel": dynamic(() => import("@/components/patterns/social-proof/social-proof-carousel")),
  "social-proof-animated": dynamic(() => import("@/components/patterns/social-proof/social-proof-animated")),
  "social-proof-logos": dynamic(() => import("@/components/patterns/social-proof/social-proof-logos")),
  // Pricing
  "pricing-cards": dynamic(() => import("@/components/patterns/pricing/pricing-cards")),
  "pricing-comparison": dynamic(() => import("@/components/patterns/pricing/pricing-comparison")),
  "pricing-spotlight": dynamic(() => import("@/components/patterns/pricing/pricing-spotlight")),
  "pricing-page-br": dynamic(() => import("@/components/patterns/pricing/pricing-page-br")),
  // Product Showcase
  "showcase-parallax": dynamic(() => import("@/components/patterns/product-showcase/showcase-parallax"), { ssr: false }),
  "showcase-scroll": dynamic(() => import("@/components/patterns/product-showcase/showcase-scroll"), { ssr: false }),
  "showcase-slider": dynamic(() => import("@/components/patterns/product-showcase/showcase-slider")),
  // CTA
  "cta-beams": dynamic(() => import("@/components/patterns/cta/cta-beams")),
  "cta-vortex": dynamic(() => import("@/components/patterns/cta/cta-vortex")),
  "cta-wavy": dynamic(() => import("@/components/patterns/cta/cta-wavy")),
  // About
  "about-timeline": dynamic(() => import("@/components/patterns/about/about-timeline")),
  "about-tracing": dynamic(() => import("@/components/patterns/about/about-tracing")),
  "about-cards": dynamic(() => import("@/components/patterns/about/about-cards")),
  // Global Reach
  "reach-map": dynamic(() => import("@/components/patterns/global-reach/reach-map"), { ssr: false }),
  "reach-marquee": dynamic(() => import("@/components/patterns/global-reach/reach-marquee")),
  // Interactive Demo
  "demo-compare": dynamic(() => import("@/components/patterns/interactive-demo/demo-compare")),
  "demo-modal": dynamic(() => import("@/components/patterns/interactive-demo/demo-modal")),
  "demo-loader": dynamic(() => import("@/components/patterns/interactive-demo/demo-loader")),
  // Footer
  "footer-beams": dynamic(() => import("@/components/patterns/footer/footer-beams")),
  "footer-mask": dynamic(() => import("@/components/patterns/footer/footer-mask")),
  // FAQ
  "faq-accordion": dynamic(() => import("@/components/patterns/faq/faq-accordion")),
  "faq-spotlight": dynamic(() => import("@/components/patterns/faq/faq-spotlight")),
  "faq-tracing": dynamic(() => import("@/components/patterns/faq/faq-tracing")),
  // Logo Bar
  "logo-bar-marquee": dynamic(() => import("@/components/patterns/logo-bar/logo-bar-marquee")),
  "logo-bar-grid": dynamic(() => import("@/components/patterns/logo-bar/logo-bar-grid")),
  "logo-bar-ticker": dynamic(() => import("@/components/patterns/logo-bar/logo-bar-ticker")),
  // How It Works
  "how-it-works-timeline": dynamic(() => import("@/components/patterns/how-it-works/how-it-works-timeline")),
  "how-it-works-sticky": dynamic(() => import("@/components/patterns/how-it-works/how-it-works-sticky")),
  "how-it-works-cards": dynamic(() => import("@/components/patterns/how-it-works/how-it-works-cards")),
  // Stats Counter
  "stats-counter-bar": dynamic(() => import("@/components/patterns/stats-counter/stats-counter-bar")),
  "stats-counter-cards": dynamic(() => import("@/components/patterns/stats-counter/stats-counter-cards")),
  "stats-counter-spotlight": dynamic(() => import("@/components/patterns/stats-counter/stats-counter-spotlight")),
  // Integrations
  "integrations-bento": dynamic(() => import("@/components/patterns/integrations/integrations-bento")),
  "integrations-hover": dynamic(() => import("@/components/patterns/integrations/integrations-hover")),
  "integrations-marquee": dynamic(() => import("@/components/patterns/integrations/integrations-marquee")),
  // Code Snippet
  "code-snippet-tabs": dynamic(() => import("@/components/patterns/code-snippet/code-snippet-tabs")),
  "code-snippet-reveal": dynamic(() => import("@/components/patterns/code-snippet/code-snippet-reveal")),
  "code-snippet-typewriter": dynamic(() => import("@/components/patterns/code-snippet/code-snippet-typewriter")),
  // Announcement Bar
  "announcement-bar-gradient": dynamic(() => import("@/components/patterns/announcement-bar/announcement-bar-gradient")),
  "announcement-bar-sparkles": dynamic(() => import("@/components/patterns/announcement-bar/announcement-bar-sparkles")),
  // Case Studies
  "case-studies-cards": dynamic(() => import("@/components/patterns/case-studies/case-studies-cards")),
  "case-studies-sticky": dynamic(() => import("@/components/patterns/case-studies/case-studies-sticky")),
  "case-studies-carousel": dynamic(() => import("@/components/patterns/case-studies/case-studies-carousel")),
  // Comparison Table
  "comparison-table-grid": dynamic(() => import("@/components/patterns/comparison-table/comparison-table-grid")),
  "comparison-table-cards": dynamic(() => import("@/components/patterns/comparison-table/comparison-table-cards")),
  "comparison-table-wobble": dynamic(() => import("@/components/patterns/comparison-table/comparison-table-wobble")),
  // Trust Badges
  "trust-badges-bar": dynamic(() => import("@/components/patterns/trust-badges/trust-badges-bar")),
  "trust-badges-glow": dynamic(() => import("@/components/patterns/trust-badges/trust-badges-glow")),
  // Newsletter
  "newsletter-beams": dynamic(() => import("@/components/patterns/newsletter/newsletter-beams")),
  "newsletter-border": dynamic(() => import("@/components/patterns/newsletter/newsletter-border")),
  "newsletter-boxes": dynamic(() => import("@/components/patterns/newsletter/newsletter-boxes")),
  // Problem & Solution
  "problem-solution-compare": dynamic(() => import("@/components/patterns/problem-solution/problem-solution-compare")),
  "problem-solution-cards": dynamic(() => import("@/components/patterns/problem-solution/problem-solution-cards")),
  "problem-solution-reveal": dynamic(() => import("@/components/patterns/problem-solution/problem-solution-reveal")),
  // Subscription Flow
  "sub-pricing-page": dynamic(() => import("@/components/patterns/subscription-flow/pricing-page")),
  "sub-checkout-card": dynamic(() => import("@/components/patterns/subscription-flow/checkout-card")),
  "sub-checkout-pix": dynamic(() => import("@/components/patterns/subscription-flow/checkout-pix")),
  "sub-checkout-boleto": dynamic(() => import("@/components/patterns/subscription-flow/checkout-boleto")),
  "sub-billing-portal": dynamic(() => import("@/components/patterns/subscription-flow/billing-portal")),
  "sub-trial-onboarding": dynamic(() => import("@/components/patterns/subscription-flow/trial-onboarding")),
  "sub-payment-failed": dynamic(() => import("@/components/patterns/subscription-flow/payment-failed")),
  // Lead Capture
  "capture-inline": dynamic(() => import("@/components/patterns/lead-capture/capture-inline")),
  "capture-modal": dynamic(() => import("@/components/patterns/lead-capture/capture-modal")),
  "capture-whatsapp": dynamic(() => import("@/components/patterns/lead-capture/capture-whatsapp")),
  "capture-demo": dynamic(() => import("@/components/patterns/lead-capture/capture-demo")),
  // Conversion
  "pricing-dual-cta": dynamic(() => import("@/components/patterns/conversion/pricing-dual-cta")),
  "checkout-self-service": dynamic(() => import("@/components/patterns/conversion/checkout-self-service")),
  "thank-you-onboarding": dynamic(() => import("@/components/patterns/conversion/thank-you-onboarding")),
  "thank-you-scheduled": dynamic(() => import("@/components/patterns/conversion/thank-you-scheduled")),
  "waitlist": dynamic(() => import("@/components/patterns/conversion/waitlist")),
  // Nurture
  "roi-calculator": dynamic(() => import("@/components/patterns/nurture/roi-calculator")),
  "results-showcase": dynamic(() => import("@/components/patterns/nurture/results-showcase")),
};

export default function PatternPage() {
  const params = useParams<{ pattern: string }>();
  const group = getPatternGroup(params.pattern);
  const [activeVariant, setActiveVariant] = useState(
    group?.defaultVariant ?? ""
  );

  if (!group) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-section-heading">
          Pattern not found
        </h1>
        <p className="mt-2 text-section-subheading">
          The pattern &quot;{params.pattern}&quot; does not exist.
        </p>
      </div>
    );
  }

  const Component = componentMap[activeVariant];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-section-heading">
          {group.name}
        </h1>
        <p className="mt-1 text-section-subheading">{group.description}</p>
      </div>

      <div className="mb-8">
        <VariantSwitcher
          variants={group.variants}
          activeVariant={activeVariant}
          onSwitch={setActiveVariant}
        />
      </div>

      <div className="overflow-hidden rounded-(--radius-section) border border-border">
        {Component ? <Component /> : <p>Component not found</p>}
      </div>

      <div className="mt-6 rounded-(--radius-card) border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-section-heading">
          Variant Details
        </h3>
        {group.variants
          .filter((v) => v.id === activeVariant)
          .map((v) => (
            <div key={v.id} className="mt-2 text-sm text-section-subheading">
              <p>{v.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {v.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-(--radius-badge) bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                UI Components: {v.uiComponents.join(", ")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
