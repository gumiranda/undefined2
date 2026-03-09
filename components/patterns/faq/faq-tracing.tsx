"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { faqItems } from "@/lib/data/faq";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function FaqTracing({ className, id }: SectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id={id ?? "faq"} className={className}>
      <SectionHeading
        title="Frequently asked questions"
        subtitle="Everything you need to know about the platform."
      />
      <TracingBeam className="px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-(--radius-card) border border-border bg-card p-6"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-sm font-semibold text-section-heading md:text-base">
                  {item.question}
                </h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-section-subheading"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm text-section-subheading">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}
