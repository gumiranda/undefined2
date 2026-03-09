"use client";

import { BoxesCore } from "@/components/ui/background-boxes";
import { newsletterContent } from "@/lib/data/newsletter";
import SectionWrapper from "../_shared/section-wrapper";
import type { SectionProps } from "../_shared/types";

export default function NewsletterBoxes({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "newsletter"} className={className} alternate>
      <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-(--radius-section)">
        <div className="pointer-events-none absolute inset-0 z-0">
          <BoxesCore />
        </div>
        <div className="relative z-10 mx-auto max-w-lg px-4 text-center">
          <h2 className="text-(length:--heading-lg) font-bold text-section-heading md:text-(length:--heading-xl)">
            {newsletterContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-section-subheading md:text-base">
            {newsletterContent.subtitle}
          </p>
          <div className="mt-8 flex gap-2">
            <input
              type="email"
              placeholder={newsletterContent.placeholder}
              className="flex-1 rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button className="rounded-(--radius-button) bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              {newsletterContent.buttonText}
            </button>
          </div>
          {newsletterContent.disclaimer && (
            <p className="mt-3 text-xs text-muted-foreground">
              {newsletterContent.disclaimer}
            </p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
