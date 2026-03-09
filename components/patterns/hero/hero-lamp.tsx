"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import type { SectionProps } from "../_shared/types";

export default function HeroLamp({ className, id }: SectionProps) {
  return (
    <section id={id ?? "hero"} className={className}>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Build something
            <br />
            extraordinary
          </h1>
          <p className="max-w-xl text-center text-base text-section-subheading md:text-lg">
            A dramatic reveal for premium products. The lamp effect draws attention to your most important message.
          </p>
        </motion.div>
      </LampContainer>
    </section>
  );
}
