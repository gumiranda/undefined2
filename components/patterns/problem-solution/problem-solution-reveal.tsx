"use client";

import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { problemSolutionData } from "@/lib/data/problem-solution";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ProblemSolutionReveal({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "problem-solution"} className={className}>
      <SectionHeading
        title={problemSolutionData.heading}
        subtitle={problemSolutionData.subheading}
      />
      <div className="flex items-center justify-center">
        <TextRevealCard
          text={problemSolutionData.problems.join(" → ")}
          revealText={problemSolutionData.solutions.join(" → ")}
          className="w-full max-w-3xl"
        >
          <TextRevealCardTitle>Slide to reveal the solution</TextRevealCardTitle>
          <TextRevealCardDescription>
            See how our platform transforms every pain point into a strength.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </SectionWrapper>
  );
}
