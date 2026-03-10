// ── Interfaces ──────────────────────────────────────────────────────────────

export interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  featureComparison: Record<string, boolean | string>;
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface PlanFaq {
  question: string;
  answer: string;
}

export interface PaymentMethod {
  type: "card" | "pix" | "boleto";
  last4?: string;
  brand?: string;
  expiresAt?: string;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  plan: string;
}

export interface UsageQuota {
  name: string;
  used: number;
  limit: number;
  unit: string;
}

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  fields?: FormField[];
}

export interface FormField {
  label: string;
  type: "text" | "email" | "select" | "toggle";
  placeholder?: string;
  options?: string[];
}

export interface FailedPaymentInfo {
  amount: number;
  date: string;
  reason: string;
  nextRetryDate: string;
  daysUntilSuspension: number;
  invoiceId: string;
}

// ── Subscription Plans ──────────────────────────────────────────────────────

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For individuals exploring the platform.",
    features: [
      "Up to 3 projects",
      "1 GB storage",
      "1,000 API requests/mo",
      "Community support",
    ],
    featureComparison: {
      Projects: "3",
      Storage: "1 GB",
      "API Requests": "1,000/mo",
      "Team Members": "1",
      "Custom Domains": false,
      Analytics: "Basic",
      "Priority Support": false,
      "SSO / SAML": false,
      "Audit Logs": false,
      "SLA Guarantee": false,
    },
    cta: "Get Started",
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For small teams getting started.",
    features: [
      "Up to 10 projects",
      "10 GB storage",
      "10,000 API requests/mo",
      "Email support",
      "Basic analytics",
    ],
    featureComparison: {
      Projects: "10",
      Storage: "10 GB",
      "API Requests": "10,000/mo",
      "Team Members": "5",
      "Custom Domains": false,
      Analytics: "Basic",
      "Priority Support": false,
      "SSO / SAML": false,
      "Audit Logs": false,
      "SLA Guarantee": false,
    },
    cta: "Start Free Trial",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing teams that need more power.",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "100,000 API requests/mo",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "Audit logs",
    ],
    featureComparison: {
      Projects: "Unlimited",
      Storage: "100 GB",
      "API Requests": "100,000/mo",
      "Team Members": "25",
      "Custom Domains": true,
      Analytics: "Advanced",
      "Priority Support": true,
      "SSO / SAML": false,
      "Audit Logs": true,
      "SLA Guarantee": false,
    },
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For organizations that need full control.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Unlimited API requests",
      "Dedicated support",
      "SSO & SAML",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
      "Role-based access",
    ],
    featureComparison: {
      Projects: "Unlimited",
      Storage: "Unlimited",
      "API Requests": "Unlimited",
      "Team Members": "Unlimited",
      "Custom Domains": true,
      Analytics: "Advanced",
      "Priority Support": true,
      "SSO / SAML": true,
      "Audit Logs": true,
      "SLA Guarantee": true,
    },
    cta: "Contact Sales",
  },
];

// ── Plan FAQs ───────────────────────────────────────────────────────────────

export const planFaqs: PlanFaq[] = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. Upgrade or downgrade whenever you want. When upgrading, you pay the prorated difference. When downgrading, the credit is applied to future invoices.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PIX, and boleto bancário for Brazilian customers. Enterprise plans also support wire transfers.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Starter and Pro plans include a 14-day free trial with full access. No credit card required to start.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "You'll be moved to the Free plan automatically. No charges unless you explicitly choose a paid plan. All your data is preserved.",
  },
  {
    question: "Do you offer annual discounts?",
    answer:
      "Yes. Annual billing saves you 20% compared to monthly. You can switch between monthly and annual billing at any time from your billing portal.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact support for a full refund.",
  },
  {
    question: "How does team billing work?",
    answer:
      "Each plan includes a set number of seats. Additional seats can be purchased individually. You're only billed for active seats.",
  },
  {
    question: "Do you offer non-profit or education discounts?",
    answer:
      "Yes. We offer 50% off for verified non-profits and educational institutions. Contact our sales team with your organization details.",
  },
];

// ── Mock Payment Method ─────────────────────────────────────────────────────

export const mockPaymentMethod: PaymentMethod = {
  type: "card",
  last4: "4242",
  brand: "Visa",
  expiresAt: "12/2027",
};

// ── Mock Invoices ───────────────────────────────────────────────────────────

export const mockInvoices: Invoice[] = [
  { id: "INV-2024-006", date: "2024-06-01", amount: 49, status: "paid", plan: "Pro" },
  { id: "INV-2024-005", date: "2024-05-01", amount: 49, status: "paid", plan: "Pro" },
  { id: "INV-2024-004", date: "2024-04-01", amount: 49, status: "paid", plan: "Pro" },
  { id: "INV-2024-003", date: "2024-03-01", amount: 19, status: "paid", plan: "Starter" },
  { id: "INV-2024-002", date: "2024-02-01", amount: 19, status: "paid", plan: "Starter" },
  { id: "INV-2024-001", date: "2024-01-01", amount: 19, status: "failed", plan: "Starter" },
];

// ── Mock Usage Quotas ───────────────────────────────────────────────────────

export const mockUsageQuotas: UsageQuota[] = [
  { name: "Projects", used: 45, limit: 100, unit: "projects" },
  { name: "Storage", used: 62, limit: 100, unit: "GB" },
  { name: "API Calls", used: 73500, limit: 100000, unit: "requests" },
  { name: "Team Members", used: 12, limit: 25, unit: "seats" },
];

// ── Onboarding Steps ────────────────────────────────────────────────────────

export const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    title: "Welcome to the platform",
    description:
      "You're in! Let's set up your workspace in just a few steps so you can start building right away.",
    icon: "Sparkles",
  },
  {
    id: "profile",
    title: "Set up your profile",
    description: "Tell us a bit about yourself so we can personalize your experience.",
    icon: "User",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Jane Doe" },
      { label: "Work Email", type: "email", placeholder: "jane@company.com" },
      {
        label: "Role",
        type: "select",
        options: ["Developer", "Designer", "Product Manager", "Founder", "Other"],
      },
    ],
  },
  {
    id: "workspace",
    title: "Create your workspace",
    description: "Your workspace is where your team collaborates. Give it a name and invite members.",
    icon: "Folder",
    fields: [
      { label: "Workspace Name", type: "text", placeholder: "My Company" },
      {
        label: "Team Size",
        type: "select",
        options: ["Just me", "2-5", "6-20", "21-50", "50+"],
      },
      { label: "Enable notifications", type: "toggle" },
    ],
  },
  {
    id: "integrations",
    title: "Connect your tools",
    description: "Integrate with the tools you already use for a seamless workflow.",
    icon: "Plug",
    fields: [
      { label: "Connect GitHub", type: "toggle" },
      { label: "Connect Slack", type: "toggle" },
      { label: "Connect Linear", type: "toggle" },
    ],
  },
  {
    id: "success",
    title: "You're all set!",
    description:
      "Your workspace is ready. Start exploring the dashboard, create your first project, or dive into the docs.",
    icon: "CheckCircle",
  },
];

// ── Mock Failed Payment ─────────────────────────────────────────────────────

export const mockFailedPayment: FailedPaymentInfo = {
  amount: 49,
  date: "2024-06-15",
  reason: "Card declined — insufficient funds",
  nextRetryDate: "2024-06-18",
  daysUntilSuspension: 7,
  invoiceId: "INV-2024-007",
};

// ── PIX & Boleto Mocks ─────────────────────────────────────────────────────

export const mockPixCode =
  "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986540549.005802BR5925EMPRESA EXEMPLO LTDA6009SAO PAULO62140510PGTO00014963044B7E";

export const mockBoletoNumber =
  "23793.38128 60000.000003 00000.000400 1 84340000004900";
