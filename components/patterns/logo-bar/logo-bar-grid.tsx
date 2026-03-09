"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { logoItems } from "@/lib/data/logo-bar";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function LogoBarGrid({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "logo-bar"} className={className}>
      <SectionHeading
        title="Trusted by industry leaders"
        subtitle="Join thousands of companies already using our platform."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {logoItems.map((logo) => (
          <div
            key={logo.name}
            className="relative flex h-20 items-center justify-center rounded-(--radius-card) border border-border bg-card p-4 grayscale transition-all hover:grayscale-0"
          >
            <GlowingEffect spread={40} glow disabled={false} proximity={64} />
            <span className="text-lg font-semibold text-section-subheading">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
