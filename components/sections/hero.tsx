"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import ColourfulText from "@/components/ui/colourful-text";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "motion/react";
import { flipWords } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-7xl">
            Build <ColourfulText text="stunning" /> websites
            <br />
            <span className="text-3xl md:text-5xl">
              that are <FlipWords words={flipWords} />
            </span>
          </h1>

          <TextGenerateEffect
            words="A curated showcase of 40+ Aceternity UI components on a single Next.js landing page."
            className="max-w-2xl text-center text-base text-neutral-300 md:text-lg"
          />

          <div className="mt-4 flex gap-4">
            <MovingBorderButton
              borderRadius="1.75rem"
              className="border-neutral-200 bg-white font-semibold text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              Get Started
            </MovingBorderButton>
            <MovingBorderButton
              borderRadius="1.75rem"
              className="border-neutral-200 bg-transparent font-semibold text-white dark:border-slate-800"
            >
              Learn More
            </MovingBorderButton>
          </div>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
