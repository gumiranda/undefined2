"use client";

import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/lib/data/interactive-demo";
import { useState } from "react";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function DemoLoader({ className, id }: SectionProps) {
  const [loading, setLoading] = useState(false);

  return (
    <SectionWrapper id={id ?? "demo"} className={className}>
      <SectionHeading
        title="Onboarding experience"
        subtitle="A multi-step loader that guides users through setup with clear progress indication."
      />
      <div className="flex justify-center">
        <button
          onClick={() => setLoading(true)}
          className="rounded-(--radius-button) border border-border bg-card px-6 py-3 text-sm font-semibold text-section-heading transition hover:bg-muted"
        >
          Run Onboarding Demo
        </button>
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={1500}
          loop={false}
        />
        {loading && (
          <button
            onClick={() => setLoading(false)}
            className="fixed right-4 top-4 z-[120] text-white"
          >
            &#10005;
          </button>
        )}
      </div>
    </SectionWrapper>
  );
}
