"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { Compare } from "@/components/ui/compare";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { loadingStates } from "@/lib/data";
import { useState } from "react";

export default function Interactive() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="interactive">
      {/* Wavy Background */}
      <WavyBackground className="mx-auto max-w-4xl px-4 pb-40">
        <h2 className="text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Interactive Components
        </h2>
        <p className="inter-var mt-4 text-center text-base text-white md:text-lg">
          Engage users with rich interactive experiences.
        </p>
      </WavyBackground>

      {/* Compare */}
      <div className="bg-neutral-950 px-4 py-20">
        <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          Before & After Compare
        </h3>
        <div className="mx-auto max-w-xl">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-full md:h-[500px]"
            slideMode="hover"
          />
        </div>
      </div>

      {/* Modal + MultiStep Loader + Hover Border Gradient */}
      <div className="flex flex-col items-center gap-8 bg-black px-4 py-20">
        <h3 className="text-center text-2xl font-bold text-white md:text-4xl">
          Modals & Buttons
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Animated Modal */}
          <Modal>
            <ModalTrigger className="flex justify-center rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
              Open Modal
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="mb-4 text-center text-lg font-bold text-neutral-200 md:text-2xl">
                  Beautiful Animated Modal
                </h4>
                <p className="text-center text-sm text-neutral-400">
                  This modal uses spring animations for a delightful opening and closing
                  experience. Click outside or press the X button to close.
                </p>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black">
                  Cancel
                </button>
                <button className="w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white">
                  Confirm
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>

          {/* Hover Border Gradient */}
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="flex items-center space-x-2 bg-black text-white"
          >
            <span>Gradient Border</span>
          </HoverBorderGradient>

          {/* MultiStep Loader trigger */}
          <button
            onClick={() => setLoading(true)}
            className="rounded-md border border-white/20 bg-neutral-900 px-4 py-2 text-sm text-white transition hover:bg-neutral-800"
          >
            Run Loader Demo
          </button>
          <MultiStepLoader
            loadingStates={loadingStates}
            loading={loading}
            duration={1500}
            loop={false}
          />
          {loading && (
            <button
              onClick={() => setLoading(false)}
              className="fixed right-4 top-4 z-[120] text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
