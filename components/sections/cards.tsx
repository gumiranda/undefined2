"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { GlareCard } from "@/components/ui/glare-card";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Image from "next/image";

export default function Cards() {
  return (
    <section id="cards" className="relative overflow-hidden bg-black/[0.96] py-20">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-5xl">
          Card Components
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-neutral-400">
          Interactive cards with 3D effects, hovering animations, and stunning visual feedback.
        </p>

        {/* Row 1: 3D Card + Evervault */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          {/* 3D Card */}
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[350px]">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                Make things float in 3D
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-300"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem translateZ="100" className="mt-4 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop"
                  height={400}
                  width={600}
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem translateZ={20} as="button" className="rounded-xl px-4 py-2 text-xs font-normal text-white">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black">
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Evervault Card */}
          <div className="flex max-w-sm flex-col items-start border border-white/[0.2] p-4">
            <EvervaultCard text="Aceternity" />
            <p className="mt-4 text-sm font-light text-neutral-400">
              Hover over the card to see the encrypted pattern in action.
            </p>
          </div>
        </div>

        {/* Row 2: Wobble Cards */}
        <div className="mt-16 grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-xs">
              <h3 className="text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                Wobble Card Effect
              </h3>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Mouse-follow tilt creates a playful wobble effect on hover.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
            <h3 className="text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              No effort needed
            </h3>
            <p className="mt-4 max-w-[200px] text-left text-base/6 text-neutral-200">
              Just drop in and go.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h3 className="text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                Full-width variant with rich content
              </h3>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Combine wobble cards with images, icons, and any layout you need.
              </p>
            </div>
          </WobbleCard>
        </div>

        {/* Row 3: Glare Card + Direction Aware */}
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <GlareCard className="flex flex-col items-center justify-center p-8">
            <p className="text-lg font-bold text-white">Glare Card</p>
            <p className="mt-2 text-sm text-neutral-300">
              Holographic foil effect
            </p>
          </GlareCard>

          <DirectionAwareHover imageUrl="https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=600&auto=format&fit=crop">
            <p className="text-xl font-bold">Direction Aware Hover</p>
            <p className="text-sm font-normal">Overlay follows mouse entry direction</p>
          </DirectionAwareHover>
        </div>
      </div>
    </section>
  );
}
