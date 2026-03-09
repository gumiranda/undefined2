"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import type { SectionProps } from "../_shared/types";

export default function CtaWavy({ className, id }: SectionProps) {
  return (
    <section id={id ?? "cta"} className={className}>
      <WavyBackground className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 pb-40">
        <h2 className="text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Transform your workflow
        </h2>
        <p className="mt-2 text-center text-base text-white/80 md:text-lg">
          Join the platform that teams love. Start for free, scale when ready.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="flex items-center space-x-2 bg-black px-8 py-3 text-white"
        >
          <span className="font-semibold">Get Started Free</span>
        </HoverBorderGradient>
      </WavyBackground>
    </section>
  );
}
