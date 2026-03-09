"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import type { SectionProps } from "../_shared/types";

export default function ShowcaseScroll({ className, id }: SectionProps) {
  return (
    <section id={id ?? "showcase"} className={className}>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-section-heading">
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
            className="mx-auto h-full rounded-(--radius-card) object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
