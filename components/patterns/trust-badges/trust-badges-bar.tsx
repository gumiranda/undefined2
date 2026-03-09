"use client";

import { trustBadges } from "@/lib/data/trust-badges";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";

export default function TrustBadgesBar({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "trust-badges"} className={className}>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {trustBadges.map((badge) => (
          <div
            key={badge.name}
            className="flex items-center gap-2 grayscale transition-all hover:grayscale-0"
          >
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-sm font-medium text-section-subheading">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
