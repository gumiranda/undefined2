"use client";

import { LogoMarquee } from "@/components/ui/logo-marquee";
import { logoItems } from "@/lib/data/logo-bar";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function LogoBarTicker({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "logo-bar"} className={className} alternate>
      <SectionHeading
        title="Powering the best teams"
        subtitle="From startups to enterprises, teams rely on us every day."
      />
      <div className="space-y-4">
        <LogoMarquee speed="slow" direction="left">
          {logoItems.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 w-28 items-center justify-center"
            >
              <span className="text-lg font-semibold text-section-subheading opacity-60">
                {logo.name}
              </span>
            </div>
          ))}
        </LogoMarquee>
        <LogoMarquee speed="slow" direction="right">
          {logoItems.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 w-28 items-center justify-center"
            >
              <span className="text-lg font-semibold text-section-subheading opacity-60">
                {logo.name}
              </span>
            </div>
          ))}
        </LogoMarquee>
      </div>
    </SectionWrapper>
  );
}
