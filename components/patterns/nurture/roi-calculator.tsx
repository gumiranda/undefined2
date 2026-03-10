"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { roiCalculatorData } from "@/lib/data/nurture";
import { whatsAppCaptureData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";
import { Calculator, MessageCircle, ArrowRight } from "lucide-react";

export default function RoiCalculator({ className, id }: SectionProps) {
  const defaults = Object.fromEntries(
    roiCalculatorData.inputs.map((input) => [input.id, input.defaultValue])
  );
  const [values, setValues] = useState<Record<string, number>>(defaults);

  const updateValue = (inputId: string, val: number) => {
    setValues((prev) => ({ ...prev, [inputId]: val }));
  };

  // Calculate savings: employees * hours * hourlyRate * 4 weeks * 60% automation
  const savings =
    (values.employees ?? 10) *
    (values.hours ?? 15) *
    (values.hourlyRate ?? 45) *
    4 *
    0.6;

  const isHighValue = savings >= roiCalculatorData.ctaHigh.threshold;

  const whatsappUrl = `https://wa.me/${whatsAppCaptureData.whatsappNumber}?text=${encodeURIComponent(`Ola! Fiz a calculadora e minha economia estimada e de R$ ${savings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}/mes. Gostaria de saber mais.`)}`;

  return (
    <SectionWrapper id={id ?? "roi-calculator"} className={className}>
      <BackgroundLines className="rounded-(--radius-section)">
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
          <SectionHeading
            title={roiCalculatorData.title}
            subtitle={roiCalculatorData.subtitle}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-6">
              {roiCalculatorData.inputs.map((input) => (
                <div key={input.id}>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-section-heading">
                      {input.label}
                    </label>
                    <span className="text-sm font-semibold text-primary">
                      {input.id === "hourlyRate" && "R$ "}
                      {values[input.id]}
                      {input.id !== "hourlyRate" && ` ${input.unit}`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={input.min}
                    max={input.max}
                    step={input.step}
                    value={values[input.id]}
                    onChange={(e) =>
                      updateValue(input.id, Number(e.target.value))
                    }
                    className="w-full accent-primary"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>{input.min}</span>
                    <span>{input.max}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full rounded-(--radius-card) border border-border bg-card p-8 text-center">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  borderWidth={2}
                  disabled={false}
                />
                <Calculator className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 text-sm text-section-subheading">
                  {roiCalculatorData.resultLabel}
                </p>
                <motion.p
                  key={savings}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 text-4xl font-bold text-section-heading md:text-5xl"
                >
                  R${" "}
                  {savings.toLocaleString("pt-BR", {
                    maximumFractionDigits: 0,
                  })}
                </motion.p>
                <p className="text-section-subheading">
                  {roiCalculatorData.resultSuffix}
                </p>

                {/* Adaptive CTA */}
                <div className="mt-6">
                  {isHighValue ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-(--radius-button) bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {roiCalculatorData.ctaHigh.label}
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 rounded-(--radius-button) bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                      {roiCalculatorData.ctaLow.label}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </SectionWrapper>
  );
}
