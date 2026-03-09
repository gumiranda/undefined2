"use client";

import dynamic from "next/dynamic";
import { worldMapDots } from "@/lib/data/global-reach";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
});

export default function ReachMap({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "global-reach"} className={className}>
      <SectionHeading
        title="Global reach"
        subtitle="Animated connection lines showing our worldwide presence across 50+ countries."
      />
      <div className="mx-auto max-w-7xl">
        <WorldMap dots={worldMapDots} />
      </div>
    </SectionWrapper>
  );
}
