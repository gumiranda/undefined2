"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { steps } from "@/lib/data/how-it-works";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function HowItWorksCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "how-it-works"} className={className} alternate>
      <SectionHeading
        title="How it works"
        subtitle="Get started in four simple steps."
      />
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <BackgroundGradient
            key={step.number}
            className="rounded-(--radius-card) bg-card p-6"
          >
            <span className="text-5xl font-black text-primary/20">
              {String(step.number).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-bold text-section-heading">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-section-subheading">
              {step.description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </SectionWrapper>
  );
}
