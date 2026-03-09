"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/data/social-proof";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function SocialProofCarousel({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "social-proof"} className={className}>
      <SectionHeading
        title="Loved by thousands"
        subtitle="See what our customers have to say about their experience."
      />
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </SectionWrapper>
  );
}
