export { default as CaptureInline } from "./capture-inline";
export { default as CaptureModal } from "./capture-modal";
export { default as CaptureWhatsApp } from "./capture-whatsapp";
export { default as CaptureDemo } from "./capture-demo";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "capture-inline",
    pattern: "lead-capture",
    name: "Inline Lead Magnet",
    description:
      "Formulario email-only com oferta de lead magnet (ebook/guia) e preview visual acima do input.",
    tags: ["lead-magnet", "form", "ebook", "beams"],
    uiComponents: ["BackgroundBeams"],
    ssr: true,
  },
  {
    id: "capture-modal",
    pattern: "lead-capture",
    name: "Exit-Intent Modal",
    description:
      "Modal exit-intent com campos de nome, email e WhatsApp para captura de leads.",
    tags: ["modal", "exit-intent", "form", "animated"],
    uiComponents: ["AnimatedModal"],
    ssr: true,
  },
  {
    id: "capture-whatsapp",
    pattern: "lead-capture",
    name: "WhatsApp Consultor",
    description:
      "Secao 'Fale com consultor' com beneficios e botao flutuante fixo que abre wa.me/.",
    tags: ["whatsapp", "sales", "floating-button", "gradient"],
    uiComponents: ["HoverBorderGradient", "Spotlight"],
    ssr: true,
  },
  {
    id: "capture-demo",
    pattern: "lead-capture",
    name: "Demo Request",
    description:
      "Formulario completo (nome, empresa, cargo, email, WhatsApp, tamanho equipe) com placeholder Calendly.",
    tags: ["demo", "form", "enterprise", "gradient"],
    uiComponents: ["BackgroundGradient"],
    ssr: true,
  },
];

export const defaultVariant = "capture-inline";
