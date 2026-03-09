"use client";

import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

export default function DemoModal({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "demo"} className={className}>
      <SectionHeading
        title="Try it yourself"
        subtitle="Interactive walkthrough modal with spring animations."
      />
      <div className="flex justify-center">
        <Modal>
          <ModalTrigger className="flex justify-center rounded-(--radius-button) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Launch Demo
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="mb-4 text-center text-lg font-bold text-section-heading md:text-2xl">
                Welcome to the Platform
              </h4>
              <p className="text-center text-sm text-section-subheading">
                This is an interactive walkthrough demonstrating the onboarding
                experience. Spring animations create a delightful feel.
              </p>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="w-28 rounded-md border border-border bg-muted px-2 py-1 text-sm text-section-heading">
                Skip
              </button>
              <button className="w-28 rounded-md bg-primary px-2 py-1 text-sm text-primary-foreground">
                Continue
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    </SectionWrapper>
  );
}
