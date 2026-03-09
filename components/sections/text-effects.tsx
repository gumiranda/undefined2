"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { motion } from "motion/react";

const typewriterWords = [
  { text: "Build", className: "text-white" },
  { text: "amazing", className: "text-white" },
  { text: "UIs", className: "text-white" },
  { text: "with", className: "text-white" },
  { text: "Aceternity.", className: "text-blue-500 dark:text-blue-500" },
];

export default function TextEffects() {
  return (
    <section id="text-effects">
      {/* Background Lines + Typewriter */}
      <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text py-2 text-center text-3xl font-bold text-transparent md:text-5xl lg:text-7xl">
          Typography Animations
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-400 md:text-lg">
          Engage your audience with dynamic text effects.
        </p>
        <div className="mt-8">
          <TypewriterEffectSmooth words={typewriterWords} />
        </div>
      </BackgroundLines>

      {/* Hero Highlight */}
      <HeroHighlight>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-200 md:text-4xl lg:text-5xl lg:leading-snug"
        >
          With Aceternity UI, nothing is{" "}
          <Highlight className="text-white">impossible to build</Highlight>
        </motion.h3>
      </HeroHighlight>

      {/* Text Reveal Card */}
      <div className="flex items-center justify-center bg-[#0E0E10] px-4 py-20">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry"
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Hover over the card to reveal the hidden text. A fun way to show
            before-and-after states.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </section>
  );
}
