"use client";

import { Compare } from "@/components/ui/compare";
import { problemSolutionData } from "@/lib/data/problem-solution";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ProblemSolutionCompare({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "problem-solution"} className={className}>
      <SectionHeading
        title={problemSolutionData.heading}
        subtitle={problemSolutionData.subheading}
      />
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-destructive">
              {problemSolutionData.beforeLabel}
            </h3>
            <ul className="space-y-3">
              {problemSolutionData.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-section-subheading">
                  <span className="mt-0.5 text-destructive">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">
              {problemSolutionData.afterLabel}
            </h3>
            <ul className="space-y-3">
              {problemSolutionData.solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-section-subheading">
                  <span className="mt-0.5 text-primary">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Compare
            firstImage="https://placehold.co/1200x800/1a1a2e/ef4444?text=Before"
            secondImage="https://placehold.co/1200x800/1a1a2e/22c55e?text=After"
            className="h-[300px] w-full max-w-2xl rounded-(--radius-card) md:h-[400px]"
            slideMode="hover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
