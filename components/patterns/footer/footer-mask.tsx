"use client";

import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import { dockItems } from "@/lib/data/navigation";
import type { SectionProps } from "../_shared/types";

export default function FooterMask({ className, id }: SectionProps) {
  return (
    <section id={id ?? "footer"} className={className}>
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-foreground">
            The best products are built with care and attention to detail.
          </p>
        }
        className="h-[40rem] rounded-(--radius-section) border"
      >
        The best products are built with{" "}
        <span className="text-primary">care and attention to detail</span>.
      </MaskContainer>
      <div className="flex flex-col items-center gap-6 bg-section-bg py-12">
        <FloatingDock items={dockItems} />
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </section>
  );
}
