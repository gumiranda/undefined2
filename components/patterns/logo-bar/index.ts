export { default as LogoBarMarquee } from "./logo-bar-marquee";
export { default as LogoBarGrid } from "./logo-bar-grid";
export { default as LogoBarTicker } from "./logo-bar-ticker";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "logo-bar-marquee",
    pattern: "logo-bar",
    name: "Marquee",
    description: "Infinite horizontal scroll of grayscale logos, colorize on hover.",
    tags: ["animated", "marquee", "trust"],
    uiComponents: ["LogoMarquee"],
    ssr: true,
  },
  {
    id: "logo-bar-grid",
    pattern: "logo-bar",
    name: "Grid",
    description: "Responsive grid with GlowingEffect on hover per logo cell.",
    tags: ["grid", "glow", "interactive"],
    uiComponents: ["GlowingEffect"],
    ssr: true,
  },
  {
    id: "logo-bar-ticker",
    pattern: "logo-bar",
    name: "Ticker",
    description: "Two-row marquee in opposite directions with gradient fade overlay.",
    tags: ["animated", "marquee", "dual-row"],
    uiComponents: ["LogoMarquee"],
    ssr: true,
  },
];

export const defaultVariant = "logo-bar-marquee";
