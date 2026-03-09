"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { subscriptionPlans, mockPixCode } from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import { Copy, Check, Clock, CheckCircle2 } from "lucide-react";

/* ── Deterministic QR code SVG ──────────────────────────────────────────── */
function generateQrModules(): boolean[][] {
  const size = 25;
  const grid: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  );

  // Finder patterns (3 corners)
  const drawFinder = (row: number, col: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isOuter = r === 0 || r === 6 || c === 0 || c === 6;
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        grid[row + r][col + c] = isOuter || isInner;
      }
    }
  };

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Deterministic pseudo-random data area
  let seed = 42;
  const next = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed;
  };

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inFinder =
        (r < 8 && c < 8) ||
        (r < 8 && c >= size - 8) ||
        (r >= size - 8 && c < 8);
      if (!inFinder) {
        grid[r][c] = next() % 3 !== 0;
      }
    }
  }

  return grid;
}

function QrCode() {
  const modules = generateQrModules();
  const cellSize = 8;
  const size = modules.length * cellSize;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={200}
      height={200}
      className="mx-auto"
      role="img"
      aria-label="PIX QR Code"
    >
      <rect width={size} height={size} fill="white" rx={4} />
      {modules.map((row, r) =>
        row.map(
          (on, c) =>
            on && (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize}
                height={cellSize}
                fill="#111"
              />
            )
        )
      )}
    </svg>
  );
}

export default function CheckoutPix({ className, id }: SectionProps) {
  const plan = subscriptionPlans[2];
  const [seconds, setSeconds] = useState(600);
  const [copied, setCopied] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"waiting" | "confirmed">(
    "waiting"
  );

  useEffect(() => {
    if (paymentStatus === "confirmed" || seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [paymentStatus, seconds]);

  const handleCopy = () => {
    navigator.clipboard.writeText(mockPixCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setPaymentStatus("confirmed");
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <SectionWrapper id={id ?? "checkout-pix"} className={className}>
      <SectionHeading
        title="Pay with PIX"
        subtitle="Scan the QR code or copy the code below to complete your payment."
      />

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* QR Code & copy */}
        <div className="flex flex-col items-center rounded-(--radius-card) border border-border bg-card p-6">
          <AnimatePresence mode="wait">
            {paymentStatus === "waiting" ? (
              <motion.div
                key="waiting"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <QrCode />

                {/* Timer */}
                <div className="mt-4 flex items-center gap-2 text-sm text-section-subheading">
                  <Clock className="h-4 w-4" />
                  <span>
                    Expires in{" "}
                    <span className="font-mono font-semibold text-section-heading">
                      {String(minutes).padStart(2, "0")}:
                      {String(secs).padStart(2, "0")}
                    </span>
                  </span>
                </div>

                {/* Copy field */}
                <div className="mt-4 w-full">
                  <label className="mb-1.5 block text-xs font-medium text-section-subheading">
                    PIX Copia e Cola
                  </label>
                  <div className="flex gap-2">
                    <input
                      readOnly
                      value={mockPixCode}
                      className="flex-1 truncate rounded-(--radius-input) border border-border bg-muted px-3 py-2 text-xs text-section-heading"
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
                        <>
                          <Check className="h-3.5 w-3.5" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Simulate button */}
                <button
                  onClick={handleSimulate}
                  className="mt-4 rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted"
                >
                  Simulate Payment
                </button>
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

        {/* Plan summary */}
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
                  R$ {(plan.monthlyPrice * 5.2).toFixed(2)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                ≈ ${plan.monthlyPrice}.00 USD
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-(--radius-card) bg-muted p-4">
            <h4 className="text-sm font-medium text-section-heading">
              What&apos;s included
            </h4>
            <ul className="mt-2 space-y-1.5">
              {plan.features.slice(0, 5).map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-xs text-section-subheading"
                >
                  <span className="text-primary">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-(--radius-card) border border-border p-3">
            <p className="text-xs text-muted-foreground">
              PIX payments are confirmed instantly. If your payment is not
              detected within 10 minutes, the code will expire and you&apos;ll
              need to generate a new one.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
