"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/lib/data/product-showcase";
import type { SectionProps } from "../_shared/types";

export default function ShowcaseParallax({ className, id }: SectionProps) {
  return (
    <section id={id ?? "showcase"} className={className}>
      <HeroParallax products={products} />
    </section>
  );
}
