"use client";

import { LogoMarquee } from "@/components/ui/logo-marquee";
import { logoItems } from "@/lib/data/logo-bar";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function LogoBarMarquee({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "logo-bar"} className={className}>
      <SectionHeading
        title="Trusted by industry leaders"
        subtitle="Join thousands of companies already using our platform."
      />
      <LogoMarquee speed="slow">
        {logoItems.map((logo) => (
          <div
            key={logo.name}
            className="flex h-12 w-32 items-center justify-center grayscale transition-all hover:grayscale-0"
          >
            <span className="text-2xl font-bold text-section-subheading">
              {logo.name}
            </span>
          </div>
        ))}
      </LogoMarquee>
    </SectionWrapper>
  );
}
