"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { stickyScrollContent } from "@/lib/data";
import Image from "next/image";

export default function Scroll() {
  return (
    <section id="scroll" className="bg-neutral-950">
      {/* Container Scroll */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Scroll Animations
              </span>
            </h2>
          }
        >
          <Image
            src="https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.14%E2%80%AFPM.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Sticky Scroll Reveal */}
      <div className="px-4 py-20">
        <h3 className="mb-12 text-center text-2xl font-bold text-white md:text-4xl">
          Sticky Scroll Reveal
        </h3>
        <StickyScroll content={stickyScrollContent} />
      </div>

      {/* Tracing Beam */}
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          <h3 className="mb-4 text-2xl font-bold md:text-4xl">Tracing Beam</h3>
          <p className="mb-8 text-neutral-400">
            The beam on the left traces your scroll position. Perfect for long-form content like blog posts or documentation.
          </p>
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-10">
              <h4 className="mb-2 text-lg font-semibold text-white">
                Section {i}: Lorem Ipsum
              </h4>
              <p className="text-sm text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
