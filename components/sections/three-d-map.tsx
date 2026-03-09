"use client";

import dynamic from "next/dynamic";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PinContainer } from "@/components/ui/3d-pin";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { worldMapDots, marqueeImages } from "@/lib/data";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
  ssr: false,
});

export default function ThreeDMap() {
  return (
    <section id="3d-map">
      {/* Background Beams With Collision */}
      <BackgroundBeamsWithCollision>
        <h2 className="relative z-20 text-center text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-7xl">
          3D &amp; Map Elements{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
              Showcase
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>

      {/* World Map */}
      <div className="w-full bg-black px-4 py-20">
        <h3 className="mb-2 text-center text-2xl font-bold text-white md:text-4xl">
          Global Reach
        </h3>
        <p className="mx-auto mb-8 max-w-md text-center text-sm text-neutral-400">
          Animated connection lines showing our worldwide presence.
        </p>
        <div className="mx-auto max-w-7xl">
          <WorldMap dots={worldMapDots} />
        </div>
      </div>

      {/* 3D Pin */}
      <div className="flex w-full items-center justify-center bg-black px-4 py-20">
        <PinContainer title="Visit Site" href="#">
          <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
            <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
              3D Pin Effect
            </h3>
            <div className="!m-0 !p-0 text-base font-normal">
              <span className="text-slate-500">
                A floating 3D pin that reveals on hover with perspective transform.
              </span>
            </div>
            <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>

      {/* 3D Marquee */}
      <div className="bg-black px-4 py-20">
        <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          3D Image Marquee
        </h3>
        <div className="mx-auto max-w-7xl">
          <ThreeDMarquee images={marqueeImages} />
        </div>
      </div>
    </section>
  );
}
