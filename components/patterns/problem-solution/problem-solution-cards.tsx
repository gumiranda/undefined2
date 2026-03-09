"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { problemSolutionData } from "@/lib/data/problem-solution";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ProblemSolutionCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "problem-solution"} className={className} alternate>
      <SectionHeading
        title={problemSolutionData.heading}
        subtitle={problemSolutionData.subheading}
      />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <WobbleCard containerClassName="bg-red-900/20 border border-red-500/20">
          <h3 className="mb-4 text-lg font-bold text-red-400">
            {problemSolutionData.beforeLabel}
          </h3>
          <ul className="space-y-3">
            {problemSolutionData.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-section-subheading">
                <span className="mt-0.5 text-red-400">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </WobbleCard>
        <WobbleCard containerClassName="bg-green-900/20 border border-green-500/20">
          <h3 className="mb-4 text-lg font-bold text-green-400">
            {problemSolutionData.afterLabel}
          </h3>
          <ul className="space-y-3">
            {problemSolutionData.solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-section-subheading">
                <span className="mt-0.5 text-green-400">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </WobbleCard>
      </div>
    </SectionWrapper>
  );
}
