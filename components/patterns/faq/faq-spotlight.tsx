"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { faqItems } from "@/lib/data/faq";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function FaqSpotlight({ className, id }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper id={id ?? "faq"} className={className} alternate>
      <div className="relative">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
        <SectionHeading
          title="Got questions?"
          subtitle="We've got answers. Click a question to see the details."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-(--radius-card) border border-border p-6 text-left transition-all",
                activeIndex === index
                  ? "border-primary bg-surface-elevated shadow-lg"
                  : "bg-card hover:bg-surface-elevated"
              )}
            >
              <h3 className="text-sm font-semibold text-section-heading md:text-base">
                {item.question}
              </h3>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm text-section-subheading"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
