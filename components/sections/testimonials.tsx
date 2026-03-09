"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { testimonials, animatedTestimonials, tooltipPeople } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
          Social Proof
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-400">
          Testimonials, tooltips, and infinite scrolling cards for social proof.
        </p>

        {/* Animated Tooltip */}
        <div className="mb-16 flex w-full justify-center">
          <div className="flex flex-row">
            <AnimatedTooltip items={tooltipPeople} />
          </div>
        </div>

        {/* Infinite Moving Cards */}
        <div className="relative mb-20 flex flex-col items-center justify-center overflow-hidden rounded-md bg-black antialiased">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Animated Testimonials */}
        <div className="mx-auto max-w-4xl">
          <AnimatedTestimonials testimonials={animatedTestimonials} autoplay />
        </div>
      </div>
    </section>
  );
}
