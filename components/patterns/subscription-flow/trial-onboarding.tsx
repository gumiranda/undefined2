"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { onboardingSteps } from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";
import {
  Sparkles,
  User,
  Folder,
  Plug,
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="h-6 w-6" />,
  User: <User className="h-6 w-6" />,
  Folder: <Folder className="h-6 w-6" />,
  Plug: <Plug className="h-6 w-6" />,
  CheckCircle: <CheckCircle className="h-6 w-6" />,
};

export default function TrialOnboarding({ className, id }: SectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const total = onboardingSteps.length;
  const step = onboardingSteps[currentStep];
  const isLast = currentStep === total - 1;
  const isFirst = currentStep === 0;

  const progress = ((currentStep + 1) / total) * 100;

  return (
    <SectionWrapper id={id ?? "trial-onboarding"} className={className}>
      <SectionHeading
        title="Get started in minutes"
        subtitle="Follow a few simple steps to set up your workspace."
      />

      <div className="mx-auto max-w-2xl rounded-(--radius-card) border border-border bg-card p-6 md:p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Step {currentStep + 1} of {total}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {iconMap[step.icon]}
              </div>
              <h3 className="text-xl font-bold text-section-heading">
                {step.title}
              </h3>
            </div>

            <p className="mb-6 text-sm text-section-subheading">
              {step.description}
            </p>

            {/* Fields */}
            {step.fields && (
              <div className="space-y-4">
                {step.fields.map((field) => (
                  <div key={field.label}>
                    <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                      {field.label}
                    </label>
                    {field.type === "toggle" ? (
                      <button
                        className="relative h-6 w-11 rounded-full bg-muted transition-colors focus:outline-none"
                        aria-label={field.label}
                      >
                        <span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform" />
                      </button>
                    ) : field.type === "select" ? (
                      <select className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading focus:border-primary focus:outline-none">
                        <option value="">Select…</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            {!isFirst && (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted"
              >
                Back
              </button>
            )}
          </div>
          <div className="flex gap-3">
            {!isLast && !isFirst && (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                className="text-sm font-medium text-muted-foreground hover:text-section-heading"
              >
                Skip
              </button>
            )}
            <button
              onClick={() => {
                if (!isLast) setCurrentStep((s) => s + 1);
              }}
              className="rounded-(--radius-button) bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              {isLast ? "Get Started" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
