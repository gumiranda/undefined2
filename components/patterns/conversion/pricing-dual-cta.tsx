"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { dualCtaPlans } from "@/lib/data/conversion";
import { whatsAppCaptureData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import { MessageCircle } from "lucide-react";

export default function PricingDualCta({ className, id }: SectionProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <SectionWrapper id={id ?? "pricing-dual-cta"} className={className}>
      <SectionHeading
        title="Planos que cabem no seu negocio"
        subtitle="Escolha o plano ideal. Sem taxas escondidas, cancele quando quiser."
      />

      {/* Billing toggle */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium",
            billing === "monthly"
              ? "text-section-heading"
              : "text-section-subheading"
          )}
        >
          Mensal
        </span>
        <button
          onClick={() =>
            setBilling(billing === "monthly" ? "annual" : "monthly")
          }
          className={cn(
            "relative h-7 w-12 rounded-full transition-colors",
            billing === "annual" ? "bg-primary" : "bg-muted"
          )}
          aria-label="Alternar periodo de cobranca"
        >
          <motion.div
            className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm"
            animate={{ x: billing === "annual" ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span
          className={cn(
            "text-sm font-medium",
            billing === "annual"
              ? "text-section-heading"
              : "text-section-subheading"
          )}
        >
          Anual
        </span>
        {billing === "annual" && (
          <span className="rounded-(--radius-badge) bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            Economize 20%
          </span>
        )}
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {dualCtaPlans.map((plan) => {
          const price =
            billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
          const whatsappUrl = `https://wa.me/${whatsAppCaptureData.whatsappNumber}?text=${encodeURIComponent(`Ola! Tenho interesse no plano ${plan.name}.`)}`;

          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-(--radius-card) border border-border bg-card p-6",
                plan.highlighted && "border-primary"
              )}
            >
              {plan.highlighted && (
                <GlowingEffect
                  spread={40}
                  glow={true}
                  borderWidth={2}
                  disabled={false}
                />
              )}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-(--radius-badge) bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-section-heading">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-section-subheading">
                {plan.description}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-section-heading">
                  R$ {price}
                </span>
                <span className="text-section-subheading">/mes</span>
              </div>
              {billing === "annual" && (
                <p className="mt-1 text-xs text-muted-foreground line-through">
                  R$ {plan.monthlyPrice}/mes
                </p>
              )}

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-section-subheading"
                  >
                    <span className="text-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {plan.ctaType === "self-service" ? (
                  <MovingBorderButton
                    borderRadius="0.5rem"
                    className={cn(
                      "w-full font-semibold",
                      plan.highlighted
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-section-heading"
                    )}
                  >
                    {plan.cta}
                  </MovingBorderButton>
                ) : (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-(--radius-button) bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {plan.cta}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
