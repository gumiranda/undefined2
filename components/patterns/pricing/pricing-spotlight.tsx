"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { GlareCard } from "@/components/ui/glare-card";
import { pricingTiers } from "@/lib/data/pricing";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function PricingSpotlight({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "pricing"} className={className}>
      <div className="relative">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
        <SectionHeading
          title="Invest in your growth"
          subtitle="Pick the perfect plan and start building today."
        />
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          {pricingTiers.map((tier) => (
            <GlareCard
              key={tier.name}
              className={cn(
                "flex flex-col items-start justify-between p-8",
                tier.highlighted && "ring-2 ring-primary"
              )}
            >
              <div>
                <p className="text-lg font-bold text-white">{tier.name}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-300">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-neutral-300">
                  {tier.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {tier.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="text-sm text-neutral-300">
                      &#10003; {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full rounded-(--radius-button) bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200">
                {tier.cta}
              </button>
            </GlareCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
