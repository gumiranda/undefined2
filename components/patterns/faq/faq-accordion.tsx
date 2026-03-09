"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqItems } from "@/lib/data/faq";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function FaqAccordion({ className, id }: SectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id={id ?? "faq"} className={className}>
      <SectionHeading
        title="Frequently asked questions"
        subtitle="Everything you need to know about the platform."
      />
      <div className="mx-auto max-w-3xl divide-y divide-border">
        {faqItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-base font-medium text-section-heading md:text-lg">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 shrink-0 text-xl text-section-subheading"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-section-subheading md:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
