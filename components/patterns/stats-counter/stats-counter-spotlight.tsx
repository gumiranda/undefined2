"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { stats } from "@/lib/data/stats-counter";
import { useCountUp } from "@/lib/hooks/use-count-up";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="rounded-(--radius-card) border border-border bg-card p-8 text-center">
      <div className="text-4xl font-bold text-section-heading md:text-5xl">
        <span>{stat.prefix}</span>
        <span ref={ref}>{value}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="mt-2 font-medium text-section-subheading">{stat.label}</p>
      {stat.description && (
        <p className="mt-1 text-xs text-muted-foreground">
          {stat.description}
        </p>
      )}
    </div>
  );
}

export default function StatsCounterSpotlight({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "stats"} className={className} alternate>
      <div className="relative">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
        <SectionHeading
          title="Built for scale"
          subtitle="The numbers behind our platform."
        />
        <div className="relative z-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
