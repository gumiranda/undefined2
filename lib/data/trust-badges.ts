export interface TrustBadge {
  name: string;
  description?: string;
  category: string;
  icon: string;
}

export const trustBadges: TrustBadge[] = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited security controls and processes.",
    category: "Security",
    icon: "🛡️",
  },
  {
    name: "GDPR Compliant",
    description: "Full compliance with EU data protection regulations.",
    category: "Privacy",
    icon: "🇪🇺",
  },
  {
    name: "ISO 27001",
    description: "Certified information security management system.",
    category: "Security",
    icon: "📋",
  },
  {
    name: "99.99% Uptime",
    description: "Enterprise-grade reliability backed by SLA.",
    category: "Reliability",
    icon: "⚡",
  },
  {
    name: "G2 Leader",
    description: "Top-rated on G2 for 8 consecutive quarters.",
    category: "Recognition",
    icon: "⭐",
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare-grade data protection and BAA available.",
    category: "Privacy",
    icon: "🏥",
  },
];
