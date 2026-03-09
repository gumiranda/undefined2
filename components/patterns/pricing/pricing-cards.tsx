"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { pricingTiers } from "@/lib/data/pricing";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function PricingCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "pricing"} className={className}>
      <SectionHeading
        title="Simple, transparent pricing"
        subtitle="Choose the plan that works for you. No hidden fees, cancel anytime."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <CardContainer key={tier.name} className="w-full">
            <CardBody
              className={cn(
                "group/card relative flex h-full w-full flex-col rounded-(--radius-card) border border-border bg-card p-6 hover:shadow-2xl",
                tier.highlighted && "border-primary shadow-lg"
              )}
            >
              <CardItem translateZ="30" className="w-full">
                <h3 className="text-xl font-bold text-section-heading">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-section-subheading">
                  {tier.description}
                </p>
              </CardItem>
              <CardItem translateZ="40" className="mt-4 w-full">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-section-heading">
                    {tier.price}
                  </span>
                  <span className="text-section-subheading">{tier.period}</span>
                </div>
              </CardItem>
              <CardItem translateZ="20" className="mt-6 w-full flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-section-subheading"
                    >
                      <span className="text-primary">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardItem>
              <CardItem translateZ="30" className="mt-6 w-full">
                <MovingBorderButton
                  borderRadius="0.5rem"
                  className={cn(
                    "w-full font-semibold",
                    tier.highlighted
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-section-heading"
                  )}
                >
                  {tier.cta}
                </MovingBorderButton>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionWrapper>
  );
}
