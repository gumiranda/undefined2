export { default as PricingPage } from "./pricing-page";
export { default as CheckoutCard } from "./checkout-card";
export { default as CheckoutPix } from "./checkout-pix";
export { default as CheckoutBoleto } from "./checkout-boleto";
export { default as BillingPortal } from "./billing-portal";
export { default as TrialOnboarding } from "./trial-onboarding";
export { default as PaymentFailed } from "./payment-failed";

import type { PatternVariantMeta } from "../_shared/types";

export const variants: PatternVariantMeta[] = [
  {
    id: "sub-pricing-page",
    pattern: "subscription-flow",
    name: "Pricing Page",
    description:
      "Full pricing page with monthly/annual toggle, comparison table, and FAQ.",
    tags: ["pricing", "toggle", "comparison", "faq"],
    uiComponents: ["GlowingEffect", "MovingBorder"],
    ssr: true,
  },
  {
    id: "sub-checkout-card",
    pattern: "subscription-flow",
    name: "Checkout — Card",
    description:
      "Credit card checkout form with order summary and security badges.",
    tags: ["checkout", "form", "card", "payment"],
    uiComponents: ["BackgroundBeams", "MovingBorder"],
    ssr: true,
  },
  {
    id: "sub-checkout-pix",
    pattern: "subscription-flow",
    name: "Checkout — PIX",
    description:
      "Brazilian PIX payment with QR code, copy-paste field, and countdown timer.",
    tags: ["checkout", "pix", "brazil", "qr-code"],
    uiComponents: [],
    ssr: true,
  },
  {
    id: "sub-checkout-boleto",
    pattern: "subscription-flow",
    name: "Checkout — Boleto",
    description:
      "Brazilian boleto payment with barcode, copy field, and status flow.",
    tags: ["checkout", "boleto", "brazil", "barcode"],
    uiComponents: [],
    ssr: true,
  },
  {
    id: "sub-billing-portal",
    pattern: "subscription-flow",
    name: "Billing Portal",
    description:
      "Account billing dashboard with invoices, usage quotas, and plan management.",
    tags: ["billing", "dashboard", "invoices", "usage"],
    uiComponents: ["WobbleCard"],
    ssr: true,
  },
  {
    id: "sub-trial-onboarding",
    pattern: "subscription-flow",
    name: "Trial Onboarding",
    description:
      "Multi-step onboarding wizard with progress bar and animated transitions.",
    tags: ["onboarding", "wizard", "multi-step", "animated"],
    uiComponents: [],
    ssr: true,
  },
  {
    id: "sub-payment-failed",
    pattern: "subscription-flow",
    name: "Payment Failed",
    description:
      "Dunning screen with failed payment details, retry flow, and card update form.",
    tags: ["dunning", "recovery", "payment", "alert"],
    uiComponents: ["BackgroundBeams"],
    ssr: true,
  },
];

export const defaultVariant = "sub-pricing-page";
