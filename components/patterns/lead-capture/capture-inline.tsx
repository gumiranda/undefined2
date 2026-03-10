"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { leadMagnetData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";
import { FileText, Download } from "lucide-react";

export default function CaptureInline({ className, id }: SectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <SectionWrapper id={id ?? "capture-inline"} className={className} alternate>
      <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-(--radius-section)">
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-(--radius-badge) bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <FileText className="h-3.5 w-3.5" />
            {leadMagnetData.badge}
          </span>

          {/* Lead magnet preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 flex max-w-sm items-center gap-4 rounded-(--radius-card) border border-border bg-card p-4 text-left"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-(--radius-card) bg-primary/10">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-section-heading">
                {leadMagnetData.offer}
              </p>
              <p className="mt-0.5 text-xs text-section-subheading">
                {leadMagnetData.offerDescription}
              </p>
            </div>
          </motion.div>

          <h2 className="mt-6 text-(length:--heading-lg) font-bold text-section-heading md:text-(length:--heading-xl)">
            {leadMagnetData.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-section-subheading md:text-base">
            {leadMagnetData.subtitle}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={leadMagnetData.placeholder}
                required
                className="flex-1 rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-(--radius-button) bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                {leadMagnetData.buttonText}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-(--radius-card) border border-green-500/20 bg-green-500/10 p-4"
            >
              <p className="text-sm font-medium text-green-500">
                Pronto! Verifique seu email para baixar o material.
              </p>
            </motion.div>
          )}

          <p className="mt-3 text-xs text-muted-foreground">
            {leadMagnetData.disclaimer}
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </SectionWrapper>
  );
}
