"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import {
  subscriptionPlans,
  mockPaymentMethod,
  mockInvoices,
  mockUsageQuotas,
} from "@/lib/data/subscription-flow";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import { CreditCard, ArrowUpRight, Zap } from "lucide-react";

export default function BillingPortal({ className, id }: SectionProps) {
  const currentPlan = subscriptionPlans[2]; // Pro
  const nextPlan = subscriptionPlans[3]; // Enterprise

  return (
    <SectionWrapper id={id ?? "billing-portal"} className={className}>
      <SectionHeading
        title="Billing & Usage"
        subtitle="Manage your plan, payment method, and view your invoices."
      />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Current plan */}
        <WobbleCard containerClassName="bg-card border border-border rounded-(--radius-card)">
          <div className="flex flex-col gap-4 p-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Current plan
              </p>
              <h3 className="mt-1 text-2xl font-bold text-section-heading">
                {currentPlan.name}
              </h3>
              <p className="mt-1 text-sm text-section-subheading">
                ${currentPlan.monthlyPrice}/month &middot; Renews on July 1,
                2024
              </p>
            </div>
            <div className="flex gap-3">
              <button className="rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted">
                Downgrade
              </button>
              <button className="rounded-(--radius-button) bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                Upgrade
              </button>
            </div>
          </div>
        </WobbleCard>

        {/* Payment method */}
        <div className="rounded-(--radius-card) border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-section-heading">
              Payment method
            </h3>
            <button className="text-sm font-medium text-primary hover:underline">
              Change
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-14 items-center justify-center rounded-(--radius-card) bg-muted">
              <CreditCard className="h-5 w-5 text-section-subheading" />
            </div>
            <div>
              <p className="text-sm font-medium text-section-heading">
                {mockPaymentMethod.brand} **** {mockPaymentMethod.last4}
              </p>
              <p className="text-xs text-muted-foreground">
                Expires {mockPaymentMethod.expiresAt}
              </p>
            </div>
          </div>
        </div>

        {/* Usage quotas */}
        <div className="rounded-(--radius-card) border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-section-heading">
            Usage this period
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mockUsageQuotas.map((quota) => {
              const pct = Math.round((quota.used / quota.limit) * 100);
              return (
                <div key={quota.name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-section-heading">
                      {quota.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {quota.used.toLocaleString()} / {quota.limit.toLocaleString()}{" "}
                      {quota.unit}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        pct > 90
                          ? "bg-destructive"
                          : pct > 70
                            ? "bg-yellow-500"
                            : "bg-primary"
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Invoice table */}
        <div className="rounded-(--radius-card) border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-section-heading">
            Invoices
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-2 pr-4">Invoice</th>
                  <th className="pb-2 pr-4">Date</th>
                  <th className="pb-2 pr-4">Plan</th>
                  <th className="pb-2 pr-4">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockInvoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-b border-border/50 last:border-0"
                  >
                    <td className="py-3 pr-4 font-medium text-section-heading">
                      {inv.id}
                    </td>
                    <td className="py-3 pr-4 text-section-subheading">
                      {inv.date}
                    </td>
                    <td className="py-3 pr-4 text-section-subheading">
                      {inv.plan}
                    </td>
                    <td className="py-3 pr-4 text-section-heading">
                      ${inv.amount}
                    </td>
                    <td className="py-3">
                      <span
                        className={cn(
                          "inline-flex rounded-(--radius-badge) px-2 py-0.5 text-xs font-medium",
                          inv.status === "paid" &&
                            "bg-green-500/10 text-green-500",
                          inv.status === "pending" &&
                            "bg-yellow-500/10 text-yellow-500",
                          inv.status === "failed" &&
                            "bg-destructive/10 text-destructive"
                        )}
                      >
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upsell banner */}
        <div className="flex flex-col items-start gap-4 rounded-(--radius-card) border border-primary/30 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h4 className="text-sm font-semibold text-section-heading">
                Need more power?
              </h4>
              <p className="mt-1 text-sm text-section-subheading">
                Upgrade to {nextPlan.name} for unlimited storage, SSO, dedicated
                support, and SLA guarantee.
              </p>
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-1 rounded-(--radius-button) bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Explore {nextPlan.name}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
