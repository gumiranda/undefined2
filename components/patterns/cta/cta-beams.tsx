"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import type { SectionProps } from "../_shared/types";

export default function CtaBeams({ className, id }: SectionProps) {
  return (
    <section id={id ?? "cta"} className={className}>
      <BackgroundBeamsWithCollision>
        <div className="relative z-20 flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-section-heading md:text-4xl lg:text-7xl">
            Ready to get started?
          </h2>
          <p className="max-w-lg text-base text-section-subheading md:text-lg">
            Join thousands of teams already building with our platform.
          </p>
          <div className="flex gap-4">
            <button className="rounded-(--radius-button) bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              Start Free Trial
            </button>
            <button className="rounded-(--radius-button) border border-border px-6 py-3 font-semibold text-section-heading transition hover:bg-muted">
              Talk to Sales
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
