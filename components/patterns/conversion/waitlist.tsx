"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Meteors } from "@/components/ui/meteors";
import { useCountUp } from "@/lib/hooks/use-count-up";
import { waitlistData } from "@/lib/data/conversion";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";
import { Users, Mail, CheckCircle2 } from "lucide-react";

export default function Waitlist({ className, id }: SectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const { ref: counterRef, value: count } = useCountUp(
    waitlistData.initialCount,
    2.5
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id={id ?? "waitlist"} className={className} alternate>
      <div className="relative flex min-h-[30rem] items-center justify-center overflow-hidden rounded-(--radius-section)">
        <div className="relative z-10 mx-auto max-w-lg px-4 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-(--radius-badge) bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Mail className="h-3.5 w-3.5" />
            Pre-lancamento
          </span>

          <h2 className="mt-6 text-(length:--heading-lg) font-bold text-section-heading md:text-(length:--heading-xl)">
            {waitlistData.title}
          </h2>
          <p className="mt-4 text-sm text-section-subheading md:text-base">
            {waitlistData.subtitle}
          </p>

          {/* Social proof counter */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <p className="text-sm text-section-subheading">
              <span
                ref={counterRef}
                className="text-lg font-bold text-section-heading"
              >
                {count.toLocaleString("pt-BR")}
              </span>{" "}
              {waitlistData.socialProofLabel}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-3">
              <input
                type="email"
                placeholder={waitlistData.placeholderEmail}
                required
                className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                type="tel"
                placeholder={waitlistData.placeholderWhatsApp}
                className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-(--radius-button) bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                {waitlistData.buttonText}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-(--radius-card) border border-green-500/20 bg-green-500/10 p-6"
            >
              <CheckCircle2 className="mx-auto h-8 w-8 text-green-500" />
              <p className="mt-2 text-sm font-medium text-green-500">
                Voce esta na lista! Avisaremos assim que estiver disponivel.
              </p>
            </motion.div>
          )}

          <p className="mt-3 text-xs text-muted-foreground">
            {waitlistData.disclaimer}
          </p>
        </div>
        <Meteors number={20} />
      </div>
    </SectionWrapper>
  );
}
