"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { marqueeImages } from "@/lib/data/media";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function ReachMarquee({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "global-reach"} className={className}>
      <SectionHeading
        title="Our partners"
        subtitle="We work with the best companies around the world."
      />
      <div className="mx-auto max-w-7xl">
        <ThreeDMarquee images={marqueeImages} />
      </div>
    </SectionWrapper>
  );
}
