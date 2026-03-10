"use client";

import { motion } from "motion/react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { thankYouScheduledData } from "@/lib/data/conversion";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";
import {
  CalendarCheck2,
  User,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function ThankYouScheduled({ className, id }: SectionProps) {
  const whatsappUrl = `https://wa.me/${thankYouScheduledData.whatsappNumber}?text=${encodeURIComponent(thankYouScheduledData.prefilledMessage)}`;

  return (
    <SectionWrapper id={id ?? "thank-you-scheduled"} className={className}>
      <div className="mx-auto max-w-2xl">
        <BackgroundGradient className="rounded-(--radius-card) bg-card p-1">
          <div className="rounded-(--radius-card) bg-card p-6 md:p-10">
            {/* Header */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              >
                <CalendarCheck2 className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-(length:--heading-lg) font-bold text-section-heading md:text-(length:--heading-xl)"
              >
                {thankYouScheduledData.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-sm text-section-subheading md:text-base"
              >
                {thankYouScheduledData.subtitle}
              </motion.p>
            </div>

            {/* Consultant card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-4 rounded-(--radius-card) border border-border bg-muted p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-section-heading">
                  {thankYouScheduledData.consultantName}
                </p>
                <p className="text-xs text-section-subheading">
                  {thankYouScheduledData.consultantRole}
                </p>
              </div>
              <div className="ml-auto rounded-(--radius-badge) bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {thankYouScheduledData.dateLabel}
              </div>
            </motion.div>

            {/* Next steps */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <h3 className="mb-3 text-sm font-semibold text-section-heading">
                Proximos passos
              </h3>
              <ul className="space-y-2.5">
                {thankYouScheduledData.nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-section-subheading"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-(--radius-button) bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                {thankYouScheduledData.whatsappLabel}
              </a>
            </motion.div>
          </div>
        </BackgroundGradient>
      </div>
    </SectionWrapper>
  );
}
