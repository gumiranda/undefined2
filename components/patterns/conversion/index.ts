export { default as PricingDualCta } from "./pricing-dual-cta";
export { default as CheckoutSelfService } from "./checkout-self-service";
export { default as ThankYouOnboarding } from "./thank-you-onboarding";
export { default as ThankYouScheduled } from "./thank-you-scheduled";
export { default as Waitlist } from "./waitlist";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "pricing-dual-cta",
    pattern: "conversion",
    name: "Dual CTA Pricing",
    description:
      "Pricing com toggle mensal/anual. Plano barato com 'Comecar agora', plano caro com 'Falar com consultor' (WhatsApp).",
    tags: ["pricing", "toggle", "whatsapp", "dual-track"],
    uiComponents: ["GlowingEffect", "MovingBorder"],
    ssr: true,
  },
  {
    id: "checkout-self-service",
    pattern: "conversion",
    name: "Checkout Self-Service",
    description:
      "Checkout compacto com tabs PIX/Cartao/Boleto, resumo do pedido em R$.",
    tags: ["checkout", "pix", "cartao", "boleto", "brazil"],
    uiComponents: ["BackgroundBeams"],
    ssr: true,
  },
  {
    id: "thank-you-onboarding",
    pattern: "conversion",
    name: "Thank You — Onboarding",
    description:
      "Pos-compra track self-service: 'Acesse seu dashboard' com checklist de setup interativo.",
    tags: ["thank-you", "onboarding", "checklist", "sparkles"],
    uiComponents: ["Sparkles"],
    ssr: true,
  },
  {
    id: "thank-you-scheduled",
    pattern: "conversion",
    name: "Thank You — Agendamento",
    description:
      "Pos-agendamento track enterprise: confirmacao com proximos passos e WhatsApp.",
    tags: ["thank-you", "scheduled", "enterprise", "whatsapp"],
    uiComponents: ["BackgroundGradient"],
    ssr: true,
  },
  {
    id: "waitlist",
    pattern: "conversion",
    name: "Waitlist",
    description:
      "Pre-lancamento com email, WhatsApp e contador social animado com meteoros.",
    tags: ["waitlist", "pre-launch", "counter", "meteors"],
    uiComponents: ["Meteors"],
    ssr: true,
  },
];

export const defaultVariant = "pricing-dual-cta";
