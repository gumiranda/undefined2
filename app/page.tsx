"use client";

import dynamic from "next/dynamic";
import FloatingNavPattern from "@/components/patterns/navigation/floating-nav";
import HeroAurora from "@/components/patterns/hero/hero-aurora";
import FeaturesBento from "@/components/patterns/features/features-bento";
import SocialProofCarousel from "@/components/patterns/social-proof/social-proof-carousel";
import PricingCards from "@/components/patterns/pricing/pricing-cards";
import CtaBeams from "@/components/patterns/cta/cta-beams";
import AboutTimeline from "@/components/patterns/about/about-timeline";
import DemoCompare from "@/components/patterns/interactive-demo/demo-compare";
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
      <HeroAurora />
      <FeaturesBento />
      <ShowcaseParallax />
      <PricingCards />
      <SocialProofCarousel />
      <AboutTimeline />
      <DemoCompare />
      <ReachMap />
      <CtaBeams />
      <FooterBeams />
      <ThemePicker />
    </main>
  );
}
