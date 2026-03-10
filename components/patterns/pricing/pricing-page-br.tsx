"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { MessageCircle } from "lucide-react";
import {
  pricingPagePlans,
  pricingPageFaqs,
  formatBRL,
} from "@/lib/data/pricing-page";
import { whatsAppCaptureData } from "@/lib/data/lead-capture";
import { trustBadges } from "@/lib/data/trust-badges";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function PricingPageBR({ className, id }: SectionProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SectionWrapper id={id ?? "pricing-page-br"} className={className}>
      <SectionHeading
        title="Planos transparentes para o seu negocio"
        subtitle="Sem taxas escondidas, cancele quando quiser."
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pricingPagePlans.map((plan) => {
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

              {/* Price */}
              <div className="mt-4">
                {plan.showPrice ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-section-heading">
                        R$ {formatBRL(price)}
                      </span>
                      <span className="text-section-subheading">/mes</span>
                    </div>
                    {billing === "annual" && plan.monthlyPrice > 0 && (
                      <p className="mt-1 text-xs text-muted-foreground line-through">
                        R$ {formatBRL(plan.monthlyPrice)}/mes
                      </p>
                    )}
                    {/* Installment line */}
                    {billing === "annual" && plan.annualPrice > 0 && (
                      <p className="mt-1 text-xs text-section-subheading">
                        ou 12x de R$ {formatBRL(plan.annualPrice)}
                      </p>
                    )}
                    {/* PIX discount badge */}
                    {plan.ctaType === "self-service" && price > 0 && (
                      <span className="mt-2 inline-block rounded-(--radius-badge) bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
                        5% desconto no PIX
                      </span>
                    )}
                  </>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-section-heading">
                      Sob consulta
                    </span>
                  </div>
                )}
              </div>

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

      {/* Comparison table */}
      <div className="mt-20">
        <h3 className="mb-8 text-center text-(length:--heading-sm) font-bold text-section-heading">
          Compare os planos
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-medium text-section-subheading">
                  Recurso
                </th>
                {pricingPagePlans.map((p) => (
                  <th
                    key={p.id}
                    className={cn(
                      "px-4 py-3 text-center font-semibold",
                      p.highlighted ? "text-primary" : "text-section-heading"
                    )}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(pricingPagePlans[0].featureComparison).map(
                (feature) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-section-subheading">
                      {feature}
                    </td>
                    {pricingPagePlans.map((plan) => {
                      const val = plan.featureComparison[feature];
                      return (
                        <td
                          key={plan.id}
                          className="px-4 py-3 text-center text-section-subheading"
                        >
                          {val === true ? (
                            <span className="text-primary">&#10003;</span>
                          ) : val === false ? (
                            <span className="text-muted-foreground">
                              &mdash;
                            </span>
                          ) : (
                            val
                          )}
                        </td>
                      );
                    })}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust badges */}
      <div className="mt-20">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-2 grayscale transition-all hover:grayscale-0"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium text-section-subheading">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h3 className="mb-8 text-center text-(length:--heading-sm) font-bold text-section-heading">
          Perguntas frequentes
        </h3>
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {pricingPageFaqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openFaq === index}
              >
                <span className="text-base font-medium text-section-heading">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 shrink-0 text-xl text-section-subheading"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-section-subheading">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
