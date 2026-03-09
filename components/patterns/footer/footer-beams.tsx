"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { dockItems } from "@/lib/data/navigation";
import type { SectionProps } from "../_shared/types";

export default function FooterBeams({ className, id }: SectionProps) {
  return (
    <footer
      id={id ?? "footer"}
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-section-bg py-20 ${className ?? ""}`}
    >
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          Built for builders
        </h2>
        <p className="max-w-lg text-center text-section-subheading">
          A design system that adapts to your brand. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <FloatingDock items={dockItems} />
        <p className="mt-8 text-sm text-muted-foreground">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
