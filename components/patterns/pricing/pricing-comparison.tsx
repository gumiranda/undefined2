"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { pricingTiers } from "@/lib/data/pricing";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function PricingComparison({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "pricing"} className={className}>
      <SectionHeading
        title="Plans that grow with you"
        subtitle="From side projects to enterprise — we've got you covered."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <WobbleCard
            key={tier.name}
            containerClassName={cn(
              "min-h-[400px]",
              i === 1 && "lg:col-span-1 bg-gradient-to-br from-primary/80 to-primary",
              i === 0 && "bg-muted",
              i === 2 && "bg-muted"
            )}
          >
            <div className="max-w-sm">
              <h3 className="text-left text-xl font-bold tracking-tight text-white lg:text-3xl">
                {tier.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">
                  {tier.price}
                </span>
                <span className="text-neutral-200">{tier.period}</span>
              </div>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {tier.description}
              </p>
              <ul className="mt-4 space-y-2">
                {tier.features.slice(0, 5).map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-neutral-200"
                  >
                    &#10003; {feature}
                  </li>
                ))}
              </ul>
            </div>
          </WobbleCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
