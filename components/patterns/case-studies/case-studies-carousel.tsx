"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { caseStudies } from "@/lib/data/case-studies";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function CaseStudiesCarousel({ className, id }: SectionProps) {
  const items = caseStudies.map((cs) => ({
    quote: `${cs.problem} → ${cs.result}`,
    name: cs.company,
    title: `${cs.industry} · ${cs.metric}`,
  }));

  return (
    <SectionWrapper id={id ?? "case-studies"} className={className}>
      <SectionHeading
        title="Customer success stories"
        subtitle="Real results from real companies."
      />
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
        <InfiniteMovingCards items={items} direction="right" speed="slow" />
      </div>
    </SectionWrapper>
  );
}
