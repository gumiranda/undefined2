"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { whatsAppCaptureData } from "@/lib/data/lead-capture";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";
import { MessageCircle, Check } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CaptureWhatsApp({ className, id }: SectionProps) {
  const whatsappUrl = `https://wa.me/${whatsAppCaptureData.whatsappNumber}?text=${encodeURIComponent(whatsAppCaptureData.prefilledMessage)}`;

  return (
    <SectionWrapper id={id ?? "capture-whatsapp"} className={className}>
      <div className="relative overflow-hidden rounded-(--radius-section)">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="currentColor" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-12">
          <SectionHeading
            title={whatsAppCaptureData.title}
            subtitle={whatsAppCaptureData.subtitle}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Benefits */}
            <div className="space-y-4">
              {whatsAppCaptureData.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                    <Check className="h-3 w-3 text-green-500" />
                  </span>
                  <p className="text-sm text-section-subheading">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="flex flex-col items-center justify-center rounded-(--radius-card) border border-border bg-card p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <WhatsAppIcon className="h-8 w-8 text-green-500" />
              </div>
              <p className="mt-4 text-sm text-section-subheading">
                Atendimento de segunda a sexta, 9h as 18h
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full"
              >
                <HoverBorderGradient
                  containerClassName="w-full"
                  className="flex w-full items-center justify-center gap-2 bg-green-500 font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  {whatsAppCaptureData.buttonText}
                </HoverBorderGradient>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {whatsAppCaptureData.floatingLabel}
      </a>
    </SectionWrapper>
  );
}
