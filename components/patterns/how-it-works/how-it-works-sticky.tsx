"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { steps } from "@/lib/data/how-it-works";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function HowItWorksSticky({ className, id }: SectionProps) {
  const content = steps.map((step) => ({
    title: `${step.number}. ${step.title}`,
    description: step.description,
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-(--radius-card) bg-surface-sunken">
        <span className="text-6xl font-bold text-primary/20">
          {step.number}
        </span>
      </div>
    ),
  }));

  return (
    <SectionWrapper id={id ?? "how-it-works"} className={className}>
      <SectionHeading
        title="How it works"
        subtitle="Get started in four simple steps."
      />
      <StickyScroll content={content} />
    </SectionWrapper>
  );
}
