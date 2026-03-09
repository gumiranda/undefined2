"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { dockItems } from "@/lib/data";

export default function Footer() {
  return (
    <section id="footer">
      {/* SVG Mask Effect */}
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800">
            The first satisfsatisfaction is when you ship something beautiful.
          </p>
        }
        className="h-[40rem] rounded-md border"
      >
        The first satisfatisfaction is when you{" "}
        <span className="text-red-500">ship something beautiful</span>.
      </MaskContainer>

      {/* Footer with Dock */}
      <footer className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-950 py-20">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
            Aceternity UI Demo
          </h2>
          <p className="max-w-lg text-center text-neutral-400">
            A curated showcase of 40+ components. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <FloatingDock items={dockItems} />
          <p className="mt-8 text-sm text-neutral-600">
            Built with Aceternity UI &amp; Next.js
          </p>
        </div>
      </footer>
    </section>
  );
}
