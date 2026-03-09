"use client";

import { GlareCard } from "@/components/ui/glare-card";
import { stats } from "@/lib/data/stats-counter";
import { useCountUp } from "@/lib/hooks/use-count-up";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <GlareCard className="flex flex-col items-center justify-center p-6">
      <div className="text-4xl font-bold text-white">
        <span>{stat.prefix}</span>
        <span ref={ref}>{value}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
      {stat.description && (
        <p className="mt-1 text-xs text-white/60">{stat.description}</p>
      )}
    </GlareCard>
  );
}

export default function StatsCounterCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "stats"} className={className}>
      <SectionHeading
        title="Numbers that speak"
        subtitle="Our platform in numbers."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
