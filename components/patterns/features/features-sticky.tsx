"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { stickyScrollContent } from "@/lib/data/features";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function FeaturesSticky({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "features"} className={className}>
      <SectionHeading
        title="How it works"
        subtitle="Scroll through our key features with a sticky reveal that keeps context while you explore."
      />
      <StickyScroll content={stickyScrollContent} />
    </SectionWrapper>
  );
}
