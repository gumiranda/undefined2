export { default as SocialProofCarousel } from "./social-proof-carousel";
export { default as SocialProofAnimated } from "./social-proof-animated";
export { default as SocialProofLogos } from "./social-proof-logos";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "social-proof-carousel",
    pattern: "social-proof",
    name: "Carousel",
    description: "Infinite scrolling testimonial cards.",
    tags: ["scrolling", "cards", "automated"],
    uiComponents: ["InfiniteMovingCards"],
    ssr: true,
  },
  {
    id: "social-proof-animated",
    pattern: "social-proof",
    name: "Animated",
    description: "Animated testimonials with avatar photos.",
    tags: ["avatars", "animated", "detailed"],
    uiComponents: ["AnimatedTestimonials"],
    ssr: true,
  },
  {
    id: "social-proof-logos",
    pattern: "social-proof",
    name: "Logo Wall",
    description: "3D marquee as a logo/partner wall.",
    tags: ["logos", "3d", "marquee"],
    uiComponents: ["ThreeDMarquee"],
    ssr: true,
  },
];

export const defaultVariant = "social-proof-carousel";
