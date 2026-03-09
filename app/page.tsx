"use client";

import dynamic from "next/dynamic";
import FloatingNavPattern from "@/components/patterns/navigation/floating-nav";
import AnnouncementBarGradient from "@/components/patterns/announcement-bar/announcement-bar-gradient";
import HeroAurora from "@/components/patterns/hero/hero-aurora";
import LogoBarMarquee from "@/components/patterns/logo-bar/logo-bar-marquee";
import ProblemSolutionCards from "@/components/patterns/problem-solution/problem-solution-cards";
import FeaturesBento from "@/components/patterns/features/features-bento";
import HowItWorksTimeline from "@/components/patterns/how-it-works/how-it-works-timeline";
import CodeSnippetTabs from "@/components/patterns/code-snippet/code-snippet-tabs";
import IntegrationsBento from "@/components/patterns/integrations/integrations-bento";
import StatsCounterBar from "@/components/patterns/stats-counter/stats-counter-bar";
import PricingCards from "@/components/patterns/pricing/pricing-cards";
import ComparisonTableGrid from "@/components/patterns/comparison-table/comparison-table-grid";
import SocialProofCarousel from "@/components/patterns/social-proof/social-proof-carousel";
import CaseStudiesSticky from "@/components/patterns/case-studies/case-studies-sticky";
import TrustBadgesBar from "@/components/patterns/trust-badges/trust-badges-bar";
import FaqAccordion from "@/components/patterns/faq/faq-accordion";
import AboutTimeline from "@/components/patterns/about/about-timeline";
import DemoCompare from "@/components/patterns/interactive-demo/demo-compare";
import NewsletterBeams from "@/components/patterns/newsletter/newsletter-beams";
import CtaBeams from "@/components/patterns/cta/cta-beams";
import FooterBeams from "@/components/patterns/footer/footer-beams";
import ThemePicker from "@/components/patterns/_shared/theme-picker";

const ShowcaseParallax = dynamic(
  () => import("@/components/patterns/product-showcase/showcase-parallax"),
  { ssr: false }
);
const ReachMap = dynamic(
  () => import("@/components/patterns/global-reach/reach-map"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-section-bg">
      <FloatingNavPattern />
      <AnnouncementBarGradient />
      <HeroAurora />
      <LogoBarMarquee />
      <ProblemSolutionCards />
      <FeaturesBento />
      <HowItWorksTimeline />
      <CodeSnippetTabs />
      <IntegrationsBento />
      <ShowcaseParallax />
      <StatsCounterBar />
      <PricingCards />
      <ComparisonTableGrid />
      <SocialProofCarousel />
      <CaseStudiesSticky />
      <TrustBadgesBar />
      <FaqAccordion />
      <AboutTimeline />
      <DemoCompare />
      <ReachMap />
      <NewsletterBeams />
      <CtaBeams />
      <FooterBeams />
      <ThemePicker />
    </main>
  );
}
