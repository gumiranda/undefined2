"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { trustBadges } from "@/lib/data/trust-badges";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function TrustBadgesGlow({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "trust-badges"} className={className} alternate>
      <SectionHeading
        title="Enterprise-grade trust"
        subtitle="Security and compliance certifications you can count on."
      />
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
        {trustBadges.map((badge) => (
          <div
            key={badge.name}
            className="relative rounded-(--radius-card) border border-border bg-card p-6 text-center"
          >
            <GlowingEffect spread={40} glow disabled={false} proximity={64} />
            <span className="text-3xl">{badge.icon}</span>
            <h3 className="mt-3 text-sm font-semibold text-section-heading">
              {badge.name}
            </h3>
            {badge.description && (
              <p className="mt-1 text-xs text-section-subheading">
                {badge.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
