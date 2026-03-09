"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function AboutTracing({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "about"} className={className}>
      <SectionHeading
        title="Our story"
        subtitle="The journey from a side project to a platform trusted by thousands."
        align="left"
      />
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 antialiased">
          {[
            {
              title: "The Beginning",
              content:
                "We started with a simple idea: make building beautiful interfaces accessible to every developer. What began as 10 open-source components quickly grew into something much bigger.",
            },
            {
              title: "Finding Product-Market Fit",
              content:
                "After months of listening to our community, we identified the pain points that mattered most. Teams needed more than components — they needed a complete design system that could adapt to their brand.",
            },
            {
              title: "Scaling Up",
              content:
                "Today, we serve thousands of teams across 50+ countries. Our platform powers everything from early-stage startups to Fortune 500 enterprise applications.",
            },
          ].map((section, i) => (
            <div key={i} className="mb-10">
              <h4 className="mb-2 text-lg font-semibold text-section-heading">
                {section.title}
              </h4>
              <p className="text-sm text-section-subheading">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}
