export { default as ShowcaseParallax } from "./showcase-parallax";
export { default as ShowcaseScroll } from "./showcase-scroll";
export { default as ShowcaseSlider } from "./showcase-slider";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "showcase-parallax",
    pattern: "product-showcase",
    name: "Parallax",
    description: "Parallax scrolling product gallery.",
    tags: ["parallax", "gallery", "scroll"],
    uiComponents: ["HeroParallax"],
    ssr: false,
  },
  {
    id: "showcase-scroll",
    pattern: "product-showcase",
    name: "Container Scroll",
    description: "Container scroll animation with product screenshot.",
    tags: ["scroll", "3d", "perspective"],
    uiComponents: ["ContainerScroll"],
    ssr: false,
  },
  {
    id: "showcase-slider",
    pattern: "product-showcase",
    name: "Image Slider",
    description: "Fullscreen image slider with autoplay.",
    tags: ["fullscreen", "slider", "autoplay"],
    uiComponents: ["ImagesSlider"],
    ssr: true,
  },
];

export const defaultVariant = "showcase-parallax";
