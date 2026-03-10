"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { thankYouOnboardingData } from "@/lib/data/conversion";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function ThankYouOnboarding({ className, id }: SectionProps) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  };

  const progress =
    (completed.size / thankYouOnboardingData.checklist.length) * 100;

  return (
    <SectionWrapper id={id ?? "thank-you-onboarding"} className={className}>
      <div className="mx-auto max-w-2xl text-center">
        {/* Sparkles celebration */}
        <div className="relative h-24">
          <SparklesCore
            id="thankyou-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            particleColor="var(--color-primary)"
            className="h-full w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
            >
              <CheckCircle2 className="h-14 w-14 text-green-500" />
            </motion.div>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-(length:--heading-lg) font-bold text-section-heading md:text-(length:--heading-xl)"
        >
          {thankYouOnboardingData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-sm text-section-subheading md:text-base"
        >
          {thankYouOnboardingData.subtitle}
        </motion.p>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 inline-flex items-center gap-2 rounded-(--radius-button) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          {thankYouOnboardingData.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </motion.button>

        {/* Progress bar */}
        <div className="mx-auto mt-10 max-w-md">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-section-heading">
              Setup do seu workspace
            </span>
            <span className="text-muted-foreground">
              {completed.size}/{thankYouOnboardingData.checklist.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="mx-auto mt-6 max-w-md space-y-3 text-left">
          {thankYouOnboardingData.checklist.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-start gap-3 rounded-(--radius-card) border border-border bg-card p-4 text-left transition-colors hover:bg-muted"
            >
              {completed.has(item.id) ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              ) : (
                <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              )}
              <div>
                <p
                  className={`text-sm font-medium ${
                    completed.has(item.id)
                      ? "text-muted-foreground line-through"
                      : "text-section-heading"
                  }`}
                >
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
