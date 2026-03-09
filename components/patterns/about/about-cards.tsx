"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { focusCardsData } from "@/lib/data/product-showcase";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function AboutCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "about"} className={className}>
      <SectionHeading
        title="Our culture"
        subtitle="A glimpse into the team and values that drive everything we build."
      />
      <FocusCards cards={focusCardsData} />
    </SectionWrapper>
  );
}
