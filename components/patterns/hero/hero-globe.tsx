"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { worldMapDots } from "@/lib/data/global-reach";
import type { SectionProps } from "../_shared/types";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
});

export default function HeroGlobe({ className, id }: SectionProps) {
  return (
    <section id={id ?? "hero"} className={className}>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-section-bg">
        <div className="absolute inset-0 opacity-40">
          <WorldMap dots={worldMapDots} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center gap-4 px-4"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight text-section-heading md:text-7xl">
            Powering teams
            <br />
            around the globe
          </h1>
          <p className="max-w-xl text-center text-base text-section-subheading md:text-lg">
            Trusted by companies in 50+ countries. Our platform scales with you wherever you go.
          </p>
          <button className="mt-4 rounded-(--radius-button) bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
            Start for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
