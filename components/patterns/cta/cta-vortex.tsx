"use client";

import { Vortex } from "@/components/ui/vortex";
import type { SectionProps } from "../_shared/types";

export default function CtaVortex({ className, id }: SectionProps) {
  return (
    <section id={id ?? "cta"} className={className}>
      <div className="mx-auto h-[30rem] w-full overflow-hidden rounded-(--radius-section)">
        <Vortex className="flex h-full w-full flex-col items-center justify-center gap-6 px-4">
          <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
            The future is here
          </h2>
          <p className="max-w-lg text-center text-sm text-white/80 md:text-xl">
            Don&apos;t wait — start building the next generation of your product today.
          </p>
          <div className="flex gap-4">
            <button className="rounded-(--radius-button) bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              Get Started Now
            </button>
          </div>
        </Vortex>
      </div>
    </section>
  );
}
