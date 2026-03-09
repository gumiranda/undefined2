"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { painPoints, benefits } from "@/lib/data/comparison-table";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ComparisonTableWobble({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "comparison"} className={className}>
      <SectionHeading
        title="Why switch?"
        subtitle="See what life looks like before and after our platform."
      />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <WobbleCard containerClassName="bg-red-900/10">
          <h3 className="mb-4 text-xl font-bold text-red-400">Without Us</h3>
          <ul className="space-y-3">
            {painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-section-subheading"
              >
                <span className="mt-0.5 text-red-400">✕</span>
                {point}
              </li>
            ))}
          </ul>
        </WobbleCard>
        <WobbleCard containerClassName="bg-green-900/10">
          <h3 className="mb-4 text-xl font-bold text-green-400">With Us</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-section-subheading"
              >
                <span className="mt-0.5 text-green-400">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </WobbleCard>
      </div>
    </SectionWrapper>
  );
}
