"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { subscriptionPlans } from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import { Lock, ShieldCheck, CreditCard } from "lucide-react";

export default function CheckoutCard({ className, id }: SectionProps) {
  const plan = subscriptionPlans[2]; // Pro plan
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  const tax = plan.monthlyPrice * 0.1;
  const total = plan.monthlyPrice + tax;

  return (
    <SectionWrapper id={id ?? "checkout-card"} className={className}>
      <SectionHeading
        title="Complete your purchase"
        subtitle="You're one step away from unlocking the full platform."
      />

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-(--radius-section)">
        <div className="relative z-10 grid grid-cols-1 gap-8 p-2 md:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="col-span-1 space-y-5 rounded-(--radius-card) border border-border bg-card p-6 md:col-span-3"
          >
            <h3 className="text-lg font-semibold text-section-heading">
              Payment details
            </h3>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                Name on card
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

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
                  Expiry date
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

            <MovingBorderButton
              borderRadius="0.5rem"
              className={cn(
                "w-full font-semibold",
                status === "success"
                  ? "border-green-500 bg-green-500 text-white"
                  : "border-primary bg-primary text-primary-foreground"
              )}
              as="button"
            >
              {status === "idle" && `Pay $${total.toFixed(2)}`}
              {status === "loading" && (
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  Processing…
                </motion.span>
              )}
              {status === "success" && "Payment Successful ✓"}
            </MovingBorderButton>
          </form>

          {/* Order summary */}
          <div className="col-span-1 rounded-(--radius-card) border border-border bg-card p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-section-heading">
              Order summary
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-section-subheading">
                  {plan.name} Plan
                </span>
                <span className="text-section-heading font-medium">
                  ${plan.monthlyPrice}/mo
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-section-subheading">Tax (10%)</span>
                <span className="text-section-heading font-medium">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-section-heading">
                    Total
                  </span>
                  <span className="font-semibold text-section-heading">
                    ${total.toFixed(2)}
                  </span>
                </div>
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
          </div>
        </div>

        <BackgroundBeams className="pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}
