"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { bentoItems } from "@/lib/data/features";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function FeaturesBento({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "features"} className={className}>
      <div className="relative">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
        <SectionHeading
          title="Everything you need"
          subtitle="Powerful features organized in a beautiful grid layout. Each card highlights a key capability."
        />
        <BentoGrid className="mx-auto max-w-4xl">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              icon={item.icon}
              header={
                <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-(--radius-card) bg-gradient-to-br from-neutral-900 to-neutral-800" />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </SectionWrapper>
  );
}
