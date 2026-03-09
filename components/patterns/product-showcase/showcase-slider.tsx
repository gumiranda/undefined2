"use client";

import { ImagesSlider } from "@/components/ui/images-slider";
import { sliderImages } from "@/lib/data/product-showcase";
import { motion } from "motion/react";
import type { SectionProps } from "../_shared/types";

export default function ShowcaseSlider({ className, id }: SectionProps) {
  return (
    <section id={id ?? "showcase"} className={className}>
      <ImagesSlider className="h-[40rem]" images={sliderImages}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col items-center justify-center"
        >
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            See it in action
          </motion.p>
          <p className="text-neutral-300">Explore our product gallery</p>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
