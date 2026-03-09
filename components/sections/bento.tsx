"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { bentoItems } from "@/lib/data";

export default function Bento() {
  return (
    <section id="bento" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
          Bento Grid Layout
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-400">
          Showcase features in a beautiful grid layout with varying column spans.
        </p>
        <BentoGrid className="mx-auto max-w-4xl">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              icon={item.icon}
              header={
                <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
