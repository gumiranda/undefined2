export interface ComparisonFeature {
  name: string;
  values: Record<string, boolean | string>;
}

export interface ComparisonColumn {
  name: string;
  highlighted?: boolean;
}

export const comparisonColumns: ComparisonColumn[] = [
  { name: "Others" },
  { name: "Our Platform", highlighted: true },
];

export const comparisonFeatures: ComparisonFeature[] = [
  { name: "Unlimited projects", values: { Others: false, "Our Platform": true } },
  { name: "Real-time analytics", values: { Others: false, "Our Platform": true } },
  { name: "Custom domains", values: { Others: "Paid add-on", "Our Platform": true } },
  { name: "Team collaboration", values: { Others: "Up to 5", "Our Platform": "Unlimited" } },
  { name: "API access", values: { Others: "Limited", "Our Platform": "Full access" } },
  { name: "Priority support", values: { Others: false, "Our Platform": true } },
  { name: "SSO & SAML", values: { Others: false, "Our Platform": true } },
  { name: "Audit logs", values: { Others: false, "Our Platform": true } },
  { name: "Uptime SLA", values: { Others: "99.9%", "Our Platform": "99.99%" } },
  { name: "On-premise option", values: { Others: false, "Our Platform": true } },
];

export const painPoints = [
  "Manual deployments that take hours",
  "Scattered data across dozens of tools",
  "Slow, unreliable infrastructure",
  "No visibility into performance",
  "Reactive incident management",
];

export const benefits = [
  "One-click deploys in minutes",
  "Unified dashboard for all your data",
  "Auto-scaling with 99.99% uptime",
  "Real-time analytics and monitoring",
  "Proactive alerts before issues arise",
];
