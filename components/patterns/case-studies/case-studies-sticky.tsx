"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { caseStudies } from "@/lib/data/case-studies";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function CaseStudiesSticky({ className, id }: SectionProps) {
  const content = caseStudies.map((cs) => ({
    title: cs.company,
    description: `${cs.problem}\n\nSolution: ${cs.solution}\n\nResult: ${cs.result}`,
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-(--radius-card) bg-surface-sunken p-6 text-center">
        <span className="text-3xl font-bold text-primary">{cs.metric}</span>
        <span className="mt-2 text-sm text-section-subheading">
          {cs.industry}
        </span>
        {cs.quote && (
          <p className="mt-4 text-xs italic text-muted-foreground">
            &ldquo;{cs.quote}&rdquo;
          </p>
        )}
      </div>
    ),
  }));

  return (
    <SectionWrapper id={id ?? "case-studies"} className={className} alternate>
      <SectionHeading
        title="Customer success stories"
        subtitle="Scroll through real results from real companies."
      />
      <StickyScroll content={content} />
    </SectionWrapper>
  );
}
