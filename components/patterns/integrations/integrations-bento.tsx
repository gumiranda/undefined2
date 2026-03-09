"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { integrations } from "@/lib/data/integrations";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function IntegrationsBento({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "integrations"} className={className}>
      <SectionHeading
        title="Integrates with your stack"
        subtitle="Connect your favorite tools in minutes. 50+ integrations and growing."
      />
      <BentoGrid className="mx-auto max-w-5xl">
        {integrations.map((integration, i) => (
          <BentoGridItem
            key={integration.name}
            title={integration.name}
            description={integration.description}
            icon={<span className="text-2xl">{integration.icon}</span>}
            header={
              <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-surface-sunken">
                <span className="text-4xl">{integration.icon}</span>
              </div>
            }
            className={cn(
              integration.featured && "md:col-span-2"
            )}
          />
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}
