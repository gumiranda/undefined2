"use client";

import { Compare } from "@/components/ui/compare";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function DemoCompare({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "demo"} className={className}>
      <SectionHeading
        title="See the difference"
        subtitle="Drag to compare before and after — experience the transformation yourself."
      />
      <div className="mx-auto max-w-xl">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-full md:h-[500px]"
          slideMode="hover"
        />
      </div>
    </SectionWrapper>
  );
}
