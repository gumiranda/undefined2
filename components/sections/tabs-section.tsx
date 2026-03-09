"use client";

import { Tabs } from "@/components/ui/tabs";
import { FocusCards } from "@/components/ui/focus-cards";
import { ImagesSlider } from "@/components/ui/images-slider";
import { focusCardsData, sliderImages } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";

function DummyContent({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
      <p>{label}</p>
      <Image
        src="https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.14%E2%80%AFPM.png"
        alt="feature screenshot"
        width={1000}
        height={1000}
        className="absolute -bottom-10 inset-x-0 h-[60%] w-[90%] mx-auto rounded-xl object-cover object-left-top md:h-[90%]"
      />
    </div>
  );
}

const tabsWithContent = [
  { title: "Product", value: "product", content: <DummyContent label="Product Tab" /> },
  { title: "Services", value: "services", content: <DummyContent label="Services Tab" /> },
  { title: "Resources", value: "resources", content: <DummyContent label="Resources Tab" /> },
  { title: "Pricing", value: "pricing", content: <DummyContent label="Pricing Tab" /> },
];

export default function TabsSection() {
  return (
    <section id="tabs" className="bg-neutral-950">
      {/* Tabs */}
      <div className="relative mx-auto mb-20 flex h-[20rem] max-w-5xl flex-col items-start justify-start px-4 pt-20 [perspective:1000px] md:h-[40rem]">
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl w-full">
          Animated Tabs
        </h2>
        <Tabs tabs={tabsWithContent} />
      </div>

      {/* Focus Cards */}
      <div className="px-4 py-20">
        <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          Focus Cards
        </h3>
        <FocusCards cards={focusCardsData} />
      </div>

      {/* Images Slider */}
      <ImagesSlider className="h-[40rem]" images={sliderImages}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col items-center justify-center"
        >
          <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
            Full-Screen Image Slider
          </motion.p>
          <p className="text-neutral-300">Use arrow keys or wait for autoplay</p>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
