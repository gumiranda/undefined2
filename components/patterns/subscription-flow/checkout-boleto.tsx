"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  subscriptionPlans,
  mockBoletoNumber,
} from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import {
  Copy,
  Check,
  Download,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";

/* ── Deterministic barcode SVG ──────────────────────────────────────────── */
function Barcode() {
  let seed = 123;
  const next = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed;
  };

  const bars: { x: number; width: number }[] = [];
  let x = 0;
  for (let i = 0; i < 60; i++) {
    const width = (next() % 3) + 1;
    const gap = (next() % 2) + 1;
    bars.push({ x, width });
    x += width + gap;
  }

  return (
    <svg
      viewBox={`0 0 ${x} 50`}
      className="mx-auto w-full max-w-sm"
      preserveAspectRatio="none"
      height={60}
      role="img"
      aria-label="Boleto barcode"
    >
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={0}
          width={bar.width}
          height={50}
          fill="currentColor"
          className="text-section-heading"
        />
      ))}
    </svg>
  );
}

type BoletoStatus = "generated" | "waiting" | "confirmed";

export default function CheckoutBoleto({ className, id }: SectionProps) {
  const plan = subscriptionPlans[2];
  const [status, setStatus] = useState<BoletoStatus>("generated");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(mockBoletoNumber).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    if (status === "generated") {
      setStatus("waiting");
      setTimeout(() => setStatus("confirmed"), 2000);
    }
  };

  const totalBrl = (plan.monthlyPrice * 5.2).toFixed(2);

  return (
    <SectionWrapper id={id ?? "checkout-boleto"} className={className}>
      <SectionHeading
        title="Pay with Boleto"
        subtitle="Generate your boleto and pay at any bank or banking app."
      />

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Boleto card */}
        <div className="flex flex-col rounded-(--radius-card) border border-border bg-card p-6">
          <AnimatePresence mode="wait">
            {status !== "confirmed" ? (
              <motion.div
                key="boleto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col"
              >
                {/* Status steps */}
                <div className="mb-6 flex items-center justify-center gap-2 text-xs">
                  {(
                    ["generated", "waiting", "confirmed"] as BoletoStatus[]
                  ).map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
                          status === step || (i === 1 && status === "waiting")
                            ? "bg-primary text-primary-foreground"
                            : i <
                                ["generated", "waiting", "confirmed"].indexOf(
                                  status
                                )
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        )}
                      >
                        {i + 1}
                      </div>
                      <span className="hidden text-section-subheading capitalize sm:inline">
                        {step}
                      </span>
                      {i < 2 && (
                        <div className="h-px w-4 bg-border sm:w-8" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Barcode */}
                <div className="rounded-(--radius-card) bg-white p-4">
                  <Barcode />
                </div>

                {/* Boleto number */}
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium text-section-subheading">
                    Boleto Number
                  </label>
                  <div className="flex gap-2">
                    <input
                      readOnly
                      value={mockBoletoNumber}
                      className="flex-1 truncate rounded-(--radius-input) border border-border bg-muted px-3 py-2 font-mono text-xs text-section-heading"
                    />
                    <button
                      onClick={handleCopy}
                      className={cn(
                        "flex items-center gap-1 rounded-(--radius-button) px-3 py-2 text-xs font-medium transition-colors",
                        copied
                          ? "bg-green-500/10 text-green-500"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      )}
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Due date */}
                <div className="mt-4 flex items-center gap-2 text-sm text-section-subheading">
                  <Clock className="h-4 w-4" />
                  <span>
                    Due date:{" "}
                    <span className="font-medium text-section-heading">
                      3 business days
                    </span>
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                  <button
                    onClick={handleSimulate}
                    className="flex flex-1 items-center justify-center gap-2 rounded-(--radius-button) bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    Simulate Confirmation
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </motion.div>
                <h3 className="mt-4 text-xl font-bold text-section-heading">
                  Payment confirmed!
                </h3>
                <p className="mt-2 text-sm text-section-subheading">
                  Your {plan.name} plan is now active.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order summary */}
        <div className="rounded-(--radius-card) border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-section-heading">
            Order summary
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-section-subheading">{plan.name} Plan</span>
              <span className="font-medium text-section-heading">
                ${plan.monthlyPrice}/mo
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-section-heading">
                  Total
                </span>
                <span className="font-semibold text-section-heading">
                  R$ {totalBrl}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                ≈ ${plan.monthlyPrice}.00 USD
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-(--radius-card) bg-muted p-4">
            <div className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">
                <p className="font-medium text-section-subheading">
                  About boleto payments
                </p>
                <p className="mt-1">
                  Boleto payments take 1-3 business days to be confirmed. Your
                  plan will be activated once we receive the payment. The boleto
                  expires after the due date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
