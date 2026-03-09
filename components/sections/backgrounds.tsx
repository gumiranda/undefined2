"use client";

import { LampContainer } from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { motion } from "motion/react";

export default function Backgrounds() {
  return (
    <section id="backgrounds" className="relative">
      {/* Lamp */}
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Beautiful Backgrounds
        </motion.h2>
      </LampContainer>

      {/* Sparkles + Meteors + Shooting Stars combined */}
      <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="sparkles-bg"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            particleColor="#ffffff"
            className="h-full w-full"
          />
        </div>
        <ShootingStars />
        <div className="relative z-10 px-4 text-center">
          <h3 className="text-3xl font-bold text-white md:text-5xl">
            Sparkles, Meteors &amp; Shooting Stars
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400">
            Combine multiple background effects for a cosmic atmosphere.
          </p>
          <div className="relative mt-8 inline-block overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 p-8">
            <Meteors number={15} />
            <p className="relative z-10 text-white">
              Meteors rain down inside this card
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
