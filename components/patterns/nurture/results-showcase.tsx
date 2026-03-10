"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { resultsShowcaseData } from "@/lib/data/nurture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ResultsShowcase({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "results-showcase"} className={className}>
      <SectionHeading
        title={resultsShowcaseData.title}
        subtitle={resultsShowcaseData.subtitle}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resultsShowcaseData.results.map((result, index) => (
          <WobbleCard
            key={result.company}
            containerClassName={
              index === 0
                ? "md:col-span-2 bg-primary/5"
                : index === resultsShowcaseData.results.length - 1
                  ? "md:col-span-2 bg-primary/5"
                  : "bg-card"
            }
          >
            <div className="p-2">
              <div className="flex items-center gap-2">
                <span className="rounded-(--radius-badge) bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {result.industry}
                </span>
              </div>
              <p className="mt-3 text-4xl font-bold text-section-heading md:text-5xl">
                {result.value}
              </p>
              <p className="mt-1 text-sm font-medium text-primary">
                {result.metric}
              </p>
              <p className="mt-3 text-sm text-section-subheading">
                {result.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">
                — {result.company}
              </p>
            </div>
          </WobbleCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
