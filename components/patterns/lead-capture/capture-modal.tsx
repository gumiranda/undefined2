"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { leadCaptureModalData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";
import { Gift } from "lucide-react";

export default function CaptureModal({ className, id }: SectionProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper id={id ?? "capture-modal"} className={className}>
      <SectionHeading
        title="Captura por exit-intent"
        subtitle="Modal que aparece quando o usuario tenta sair da pagina. Clique no botao para simular."
      />
      <div className="flex justify-center">
        <Modal>
          <ModalTrigger className="flex items-center gap-2 rounded-(--radius-button) bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            <Gift className="h-4 w-4" />
            Simular exit-intent
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              {!submitted ? (
                <>
                  <h4 className="mb-2 text-center text-lg font-bold text-section-heading md:text-2xl">
                    {leadCaptureModalData.title}
                  </h4>
                  <p className="mb-6 text-center text-sm text-section-subheading">
                    {leadCaptureModalData.subtitle}
                  </p>
                  <div className="space-y-4">
                    {leadCaptureModalData.fields.map((field) => (
                      <div key={field.label}>
                        <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    {leadCaptureModalData.disclaimer}
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-6"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <Gift className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-section-heading">
                    Material enviado!
                  </h4>
                  <p className="mt-2 text-sm text-section-subheading">
                    Verifique seu email e WhatsApp.
                  </p>
                </motion.div>
              )}
            </ModalContent>
            {!submitted && (
              <ModalFooter className="gap-4">
                <button className="w-28 rounded-md border border-border bg-muted px-2 py-1 text-sm text-section-heading">
                  Fechar
                </button>
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  {leadCaptureModalData.buttonText}
                </button>
              </ModalFooter>
            )}
          </ModalBody>
        </Modal>
      </div>
    </SectionWrapper>
  );
}
