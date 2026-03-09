"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { comparisonColumns, comparisonFeatures } from "@/lib/data/comparison-table";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";

export default function ComparisonTableGrid({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "comparison"} className={className}>
      <div className="relative">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
        <SectionHeading
          title="See the difference"
          subtitle="Compare our platform with the alternatives."
        />
        <div className="mx-auto max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-section-bg px-4 py-3 text-section-heading">
                  Feature
                </th>
                {comparisonColumns.map((col) => (
                  <th
                    key={col.name}
                    className={cn(
                      "px-4 py-3 text-center text-section-heading",
                      col.highlighted && "bg-primary/10 text-primary"
                    )}
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonFeatures.map((feature) => (
                <tr key={feature.name}>
                  <td className="sticky left-0 bg-section-bg px-4 py-3 text-section-subheading">
                    {feature.name}
                  </td>
                  {comparisonColumns.map((col) => {
                    const val = feature.values[col.name];
                    return (
                      <td
                        key={col.name}
                        className={cn(
                          "px-4 py-3 text-center",
                          col.highlighted && "bg-primary/5"
                        )}
                      >
                        {val === true ? (
                          <span className="text-primary">✓</span>
                        ) : val === false ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-section-subheading">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
