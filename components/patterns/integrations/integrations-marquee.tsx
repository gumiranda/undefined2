"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

const integrationImages = Array.from({ length: 16 }, (_, i) =>
  `https://placehold.co/970x700/1a1a2e/ffffff?text=Integration+${i + 1}`
);

export default function IntegrationsMarquee({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "integrations"} className={className}>
      <SectionHeading
        title="Integrations wall"
        subtitle="Explore our growing ecosystem of 50+ integrations."
      />
      <ThreeDMarquee images={integrationImages} />
    </SectionWrapper>
  );
}
