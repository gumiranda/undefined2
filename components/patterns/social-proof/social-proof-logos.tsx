"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { marqueeImages } from "@/lib/data/media";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function SocialProofLogos({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "social-proof"} className={className}>
      <SectionHeading
        title="Trusted by industry leaders"
        subtitle="Join the companies already using our platform to ship faster."
      />
      <div className="mx-auto max-w-7xl">
        <ThreeDMarquee images={marqueeImages} />
      </div>
    </SectionWrapper>
  );
}
