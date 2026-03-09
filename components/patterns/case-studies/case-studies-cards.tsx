"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { caseStudies } from "@/lib/data/case-studies";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function CaseStudiesCards({ className, id }: SectionProps) {
  const cards = caseStudies.map((cs) => ({
    title: `${cs.company} — ${cs.metric}`,
    src: `https://placehold.co/800x600/1a1a2e/ffffff?text=${encodeURIComponent(cs.company)}`,
  }));

  return (
    <SectionWrapper id={id ?? "case-studies"} className={className}>
      <SectionHeading
        title="Customer success stories"
        subtitle="See how leading companies achieve results with our platform."
      />
      <FocusCards cards={cards} />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.company}
            className="rounded-(--radius-card) border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-section-heading">
                {cs.company}
              </span>
              <span className="rounded-(--radius-badge) bg-primary/10 px-2 py-0.5 text-xs text-primary">
                {cs.industry}
              </span>
            </div>
            <p className="mt-3 text-sm text-section-subheading">{cs.problem}</p>
            <p className="mt-2 text-sm font-medium text-primary">{cs.metric}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
