"use client";

import FloatingNavPattern from "@/components/patterns/navigation/floating-nav";
import PricingPageBR from "@/components/patterns/pricing/pricing-page-br";
import FooterBeams from "@/components/patterns/footer/footer-beams";
import ThemePicker from "@/components/patterns/_shared/theme-picker";

export default function PricingRoute() {
  return (
    <main className="relative bg-section-bg">
      <FloatingNavPattern />
      <PricingPageBR />
      <FooterBeams />
      <ThemePicker />
    </main>
  );
}
