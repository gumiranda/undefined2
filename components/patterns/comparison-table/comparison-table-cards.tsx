"use client";

import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { comparisonColumns, comparisonFeatures } from "@/lib/data/comparison-table";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function ComparisonTableCards({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "comparison"} className={className} alternate>
      <SectionHeading
        title="See the difference"
        subtitle="Compare our platform with the alternatives."
      />
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {comparisonColumns.map((col) => (
          <div key={col.name} className="relative">
            {col.highlighted ? (
              <MovingBorderButton
                as="div"
                borderRadius="var(--radius-card)"
                containerClassName="w-full h-full"
                className="w-full bg-card p-6"
              >
                <CardContent col={col} />
              </MovingBorderButton>
            ) : (
              <div className="h-full rounded-(--radius-card) border border-border bg-card p-6">
                <CardContent col={col} />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function CardContent({ col }: { col: (typeof comparisonColumns)[0] }) {
  return (
    <>
      <h3
        className={cn(
          "mb-6 text-xl font-bold",
          col.highlighted ? "text-primary" : "text-section-heading"
        )}
      >
        {col.name}
      </h3>
      <ul className="space-y-3">
        {comparisonFeatures.map((feature) => {
          const val = feature.values[col.name];
          return (
            <li key={feature.name} className="flex items-center gap-2 text-sm">
              {val === true ? (
                <span className="text-primary">✓</span>
              ) : val === false ? (
                <span className="text-muted-foreground">✕</span>
              ) : (
                <span className="text-muted-foreground">~</span>
              )}
              <span className="text-section-subheading">
                {feature.name}
                {typeof val === "string" && (
                  <span className="ml-1 text-xs text-muted-foreground">
                    ({val})
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
