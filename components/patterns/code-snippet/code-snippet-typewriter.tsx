"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

const codeWords = [
  { text: "const", className: "text-blue-400" },
  { text: "app", className: "text-green-400" },
  { text: "=", className: "text-white" },
  { text: "createClient({", className: "text-yellow-400" },
  { text: "apiKey:", className: "text-purple-400" },
  { text: "process.env.KEY", className: "text-orange-400" },
  { text: "})", className: "text-yellow-400" },
];

export default function CodeSnippetTypewriter({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "code-snippet"} className={className} alternate>
      <SectionHeading
        title="Watch it come to life"
        subtitle="Our API is so simple, you can type it from memory."
      />
      <div className="mx-auto flex max-w-3xl items-center justify-center rounded-(--radius-card) border border-border bg-surface-sunken p-8 md:p-12">
        <div className="font-mono">
          <TypewriterEffect words={codeWords} className="text-sm md:text-base" />
        </div>
      </div>
    </SectionWrapper>
  );
}
