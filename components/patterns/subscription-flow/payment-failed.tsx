"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { mockFailedPayment } from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import {
  AlertTriangle,
  CreditCard,
  LifeBuoy,
  Lock,
  ShieldCheck,
} from "lucide-react";

export default function PaymentFailed({ className, id }: SectionProps) {
  const [retryStatus, setRetryStatus] = useState<
    "failed" | "retrying" | "success"
  >("failed");

  const handleRetry = () => {
    setRetryStatus("retrying");
    setTimeout(() => setRetryStatus("success"), 2000);
  };

  const info = mockFailedPayment;

  return (
    <SectionWrapper id={id ?? "payment-failed"} className={className}>
      <SectionHeading
        title="Payment issue"
        subtitle="Your last payment couldn't be processed. Update your payment method to keep your account active."
      />

      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-(--radius-section)">
        <div className="relative z-10 space-y-6 p-2">
          {/* Alert banner */}
          <div className="flex items-start gap-3 rounded-(--radius-card) border border-destructive/30 bg-destructive/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div>
              <h3 className="text-sm font-semibold text-destructive">
                Payment failed
              </h3>
              <p className="mt-1 text-sm text-section-subheading">
                {info.reason}
              </p>
            </div>
          </div>

          {/* Payment details */}
          <div className="rounded-(--radius-card) border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-section-heading">
              Failed payment details
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Amount</p>
                <p className="font-medium text-section-heading">
                  ${info.amount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium text-section-heading">{info.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Invoice</p>
                <p className="font-medium text-section-heading">
                  {info.invoiceId}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Next retry</p>
                <p className="font-medium text-section-heading">
                  {info.nextRetryDate}
                </p>
              </div>
            </div>

            {/* Suspension countdown */}
            <div className="mt-4 rounded-(--radius-card) bg-destructive/5 p-3">
              <p className="text-sm text-destructive">
                <span className="font-semibold">
                  {info.daysUntilSuspension} days
                </span>{" "}
                until your account is suspended. Update your payment method to
                avoid interruption.
              </p>
            </div>
          </div>

          {/* Update payment form */}
          <div className="rounded-(--radius-card) border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-section-heading">
              Update payment method
            </h3>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                  Card number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                    className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 pr-12 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <CreditCard className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={4}
                    className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Security badges */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" /> 256-bit SSL
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> PCI Compliant
                </span>
              </div>

              {/* Retry button */}
              <button
                onClick={handleRetry}
                disabled={retryStatus === "retrying"}
                className={cn(
                  "w-full rounded-(--radius-button) py-2.5 text-sm font-semibold transition-colors",
                  retryStatus === "success"
                    ? "bg-green-500 text-white"
                    : retryStatus === "retrying"
                      ? "bg-primary/70 text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                )}
              >
                {retryStatus === "failed" && "Update & Retry Payment"}
                {retryStatus === "retrying" && (
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    Processing…
                  </motion.span>
                )}
                {retryStatus === "success" && "Payment Successful ✓"}
              </button>
            </div>
          </div>

          {/* Support link */}
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
            >
              <LifeBuoy className="h-4 w-4" />
              Need help? Contact support
            </a>
          </div>
        </div>

        <BackgroundBeams className="pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}
