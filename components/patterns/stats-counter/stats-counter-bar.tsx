"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { stats } from "@/lib/data/stats-counter";
import { useCountUp } from "@/lib/hooks/use-count-up";
import type { SectionProps } from "../_shared/types";

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-section-heading md:text-5xl">
        <span>{stat.prefix}</span>
        <span ref={ref}>{value}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-section-subheading md:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounterBar({ className, id }: SectionProps) {
  return (
    <BackgroundLines className="flex items-center justify-center bg-section-bg-alt px-4">
      <section id={id ?? "stats"} className={className}>
        <div className="relative z-10 mx-auto grid max-w-(--content-max-width) grid-cols-2 gap-8 py-(--section-padding-y) md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
    </BackgroundLines>
  );
}
