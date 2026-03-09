"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { integrations } from "@/lib/data/integrations";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function IntegrationsHover({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "integrations"} className={className} alternate>
      <SectionHeading
        title="Integrates with your stack"
        subtitle="Hover to explore each integration."
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <DirectionAwareHover
            key={integration.name}
            imageUrl=""
            className="h-64 w-full rounded-(--radius-card) border border-border bg-surface-sunken"
            imageClassName="opacity-0"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{integration.icon}</span>
                <span className="font-semibold">{integration.name}</span>
              </div>
              <p className="text-sm text-white/80">{integration.description}</p>
              <span className="inline-block rounded-(--radius-badge) bg-white/20 px-2 py-0.5 text-xs">
                {integration.category}
              </span>
            </div>
          </DirectionAwareHover>
        ))}
      </div>
    </SectionWrapper>
  );
}
