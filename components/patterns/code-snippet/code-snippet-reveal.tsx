"use client";

import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function CodeSnippetReveal({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "code-snippet"} className={className}>
      <SectionHeading
        title="Simple, powerful API"
        subtitle="Swipe to reveal how clean our SDK is compared to raw API calls."
      />
      <div className="flex items-center justify-center">
        <TextRevealCard
          text="fetch('/api/deploy', { method: 'POST', headers: {...}, body: JSON.stringify({...}) })"
          revealText="client.deploy({ project: 'my-app', env: 'prod' })"
          className="w-full max-w-3xl"
        >
          <TextRevealCardTitle>Before vs After</TextRevealCardTitle>
          <TextRevealCardDescription>
            Slide to compare raw API calls with our clean SDK interface.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </SectionWrapper>
  );
}
