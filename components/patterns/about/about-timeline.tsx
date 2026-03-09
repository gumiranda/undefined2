"use client";

import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/lib/data/about";
import React from "react";
import type { SectionProps } from "../_shared/types";

export default function AboutTimeline({ className, id }: SectionProps) {
  const data = timelineData.map((item) => ({
    title: item.title,
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-section-subheading md:text-sm">
          {item.content}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 rounded-(--radius-card) bg-surface-sunken md:h-44 lg:h-60" />
          <div className="h-20 rounded-(--radius-card) bg-muted md:h-44 lg:h-60" />
        </div>
      </div>
    ),
  }));

  return (
    <section id={id ?? "about"} className={className}>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
