"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { newsletterContent } from "@/lib/data/newsletter";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function NewsletterBorder({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "newsletter"} className={className}>
      <SectionHeading
        title={newsletterContent.title}
        subtitle={newsletterContent.subtitle}
      />
      <div className="flex justify-center">
        <HoverBorderGradient
          as="div"
          containerClassName="mx-auto"
          className="flex items-center gap-2 bg-card px-2 py-1"
        >
          <input
            type="email"
            placeholder={newsletterContent.placeholder}
            className="w-48 bg-transparent px-3 py-2 text-sm text-section-heading placeholder:text-muted-foreground focus:outline-none sm:w-64"
          />
          <button className="rounded-(--radius-button) bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            {newsletterContent.buttonText}
          </button>
        </HoverBorderGradient>
      </div>
      {newsletterContent.disclaimer && (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {newsletterContent.disclaimer}
        </p>
      )}
    </SectionWrapper>
  );
}
