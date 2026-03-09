"use client";

import { Tabs } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { codeExamples } from "@/lib/data/code-snippet";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function CodeSnippetTabs({ className, id }: SectionProps) {
  const tabs = codeExamples.map((example) => ({
    title: example.label,
    value: example.language,
    content: (
      <div className="relative w-full overflow-hidden rounded-(--radius-card)">
        <CodeBlock
          code={example.code}
          language={example.language}
          filename={example.filename}
        />
      </div>
    ),
  }));

  return (
    <SectionWrapper id={id ?? "code-snippet"} className={className} alternate>
      <SectionHeading
        title="Developer-first API"
        subtitle="Get started in minutes with SDKs for every major language."
      />
      <div className="relative mx-auto h-[28rem] max-w-3xl md:h-[32rem] [perspective:1000px]">
        <Tabs tabs={tabs} contentClassName="mt-6" />
      </div>
    </SectionWrapper>
  );
}
