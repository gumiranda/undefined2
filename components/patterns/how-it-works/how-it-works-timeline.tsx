"use client";

import { Timeline } from "@/components/ui/timeline";
import { steps } from "@/lib/data/how-it-works";
import type { SectionProps } from "../_shared/types";

export default function HowItWorksTimeline({ className, id }: SectionProps) {
  const data = steps.map((step) => ({
    title: `Step ${step.number}`,
    content: (
      <div>
        <h3 className="mb-2 text-lg font-bold text-section-heading md:text-xl">
          {step.title}
        </h3>
        <p className="text-sm text-section-subheading md:text-base">
          {step.description}
        </p>
        <div className="mt-4 h-20 rounded-(--radius-card) bg-surface-sunken md:h-32" />
      </div>
    ),
  }));

  return (
    <section id={id ?? "how-it-works"} className={className}>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
