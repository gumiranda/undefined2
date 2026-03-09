export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How does the free trial work?",
    answer:
      "Start your 14-day free trial with full access to all features. No credit card required. At the end of the trial, choose a plan that fits your needs or continue with the free tier.",
    category: "Billing",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect at the start of your next billing cycle.",
    category: "Billing",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use AES-256 encryption at rest, TLS 1.3 in transit, and are SOC 2 Type II certified. Your data is stored in isolated environments with automatic backups.",
    category: "Security",
  },
  {
    question: "Do you offer team pricing?",
    answer:
      "Yes. Our Pro plan includes up to 10 seats, and Enterprise plans offer unlimited seats with volume discounts. Contact our sales team for custom quotes on larger organizations.",
    category: "Billing",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with 50+ tools including Slack, GitHub, Jira, Linear, Notion, and more. Our REST API and webhooks let you build custom integrations with any platform.",
    category: "Product",
  },
  {
    question: "How do I get support?",
    answer:
      "Free tier users get community support. Pro users get priority email support with 4-hour response times. Enterprise customers receive a dedicated account manager and 24/7 phone support.",
    category: "Support",
  },
  {
    question: "Can I self-host the platform?",
    answer:
      "Yes, our Enterprise plan includes an on-premise deployment option. We provide Docker images and Helm charts for Kubernetes, along with full documentation and migration support.",
    category: "Product",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "After cancellation, your data remains accessible in read-only mode for 30 days. You can export everything at any time. After 30 days, data is permanently deleted per our retention policy.",
    category: "Billing",
  },
];
