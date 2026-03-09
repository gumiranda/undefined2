"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { animatedTestimonials } from "@/lib/data/social-proof";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function SocialProofAnimated({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "social-proof"} className={className}>
      <SectionHeading
        title="What people are saying"
        subtitle="Real stories from real users who transformed their workflow."
      />
      <div className="mx-auto max-w-4xl">
        <AnimatedTestimonials testimonials={animatedTestimonials} autoplay />
      </div>
    </SectionWrapper>
  );
}
