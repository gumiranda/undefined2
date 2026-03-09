"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/lib/data";

export default function Parallax() {
  return (
    <section id="parallax">
      <HeroParallax products={products} />
    </section>
  );
}
