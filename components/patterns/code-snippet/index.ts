export { default as CodeSnippetTabs } from "./code-snippet-tabs";
export { default as CodeSnippetReveal } from "./code-snippet-reveal";
export { default as CodeSnippetTypewriter } from "./code-snippet-typewriter";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "code-snippet-tabs",
    pattern: "code-snippet",
    name: "Tabs",
    description: "Tabs switching between language code blocks with shiki syntax highlighting.",
    tags: ["developer", "code", "tabs"],
    uiComponents: ["Tabs", "CodeBlock"],
    ssr: true,
  },
  {
    id: "code-snippet-reveal",
    pattern: "code-snippet",
    name: "Reveal",
    description: "TextRevealCard swipe between raw API and SDK implementations.",
    tags: ["interactive", "reveal", "comparison"],
    uiComponents: ["TextRevealCard"],
    ssr: true,
  },
  {
    id: "code-snippet-typewriter",
    pattern: "code-snippet",
    name: "Typewriter",
    description: "TypewriterEffect-style character animation in terminal container.",
    tags: ["animated", "typewriter", "terminal"],
    uiComponents: ["TypewriterEffect"],
    ssr: true,
  },
];

export const defaultVariant = "code-snippet-tabs";
