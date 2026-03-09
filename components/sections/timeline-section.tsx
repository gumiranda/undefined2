"use client";

import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/lib/data";
import React from "react";

export default function TimelineSection() {
  const data = timelineData.map((item) => ({
    title: item.title,
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm">
          {item.content}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 rounded-lg bg-neutral-900 md:h-44 lg:h-60" />
          <div className="h-20 rounded-lg bg-neutral-800 md:h-44 lg:h-60" />
        </div>
      </div>
    ),
  }));

  return (
    <section id="timeline" className="bg-neutral-950">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
