"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { demoRequestData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function CaptureDemo({ className, id }: SectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id={id ?? "capture-demo"} className={className}>
      <SectionHeading
        title={demoRequestData.title}
        subtitle={demoRequestData.subtitle}
      />

      <div className="mx-auto max-w-4xl">
        <BackgroundGradient className="rounded-(--radius-card) bg-card p-1">
          <div className="rounded-(--radius-card) bg-card p-6 md:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {demoRequestData.fields.map((field) => (
                    <div key={field.label}>
                      <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading focus:border-primary focus:outline-none"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            {field.placeholder}
                          </option>
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

                {/* Calendly placeholder */}
                <div className="mt-6 rounded-(--radius-card) border border-dashed border-border bg-muted p-6 text-center">
                  <Calendar className="mx-auto h-8 w-8 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {demoRequestData.calendlyPlaceholder}
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-(--radius-button) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  {demoRequestData.buttonText}
                </button>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  {demoRequestData.disclaimer}
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </motion.div>
                <h3 className="mt-4 text-xl font-bold text-section-heading">
                  Solicitacao enviada!
                </h3>
                <p className="mt-2 max-w-md text-center text-sm text-section-subheading">
                  Nosso time entrara em contato em ate 24 horas para agendar sua
                  demonstracao.
                </p>
              </motion.div>
            )}
          </div>
        </BackgroundGradient>
      </div>
    </SectionWrapper>
  );
}
