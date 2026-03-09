export interface Step {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Connect your tools",
    description:
      "Link your existing stack in under two minutes. We support 50+ integrations out of the box, from GitHub to Slack to your favorite CI/CD pipeline.",
  },
  {
    number: 2,
    title: "Configure your workflow",
    description:
      "Set up automations, alerts, and dashboards with our visual builder. No code required — but fully extensible via our API if you need it.",
  },
  {
    number: 3,
    title: "Ship with confidence",
    description:
      "Deploy faster with built-in quality gates, real-time monitoring, and instant rollbacks. Your team ships 3x faster with half the incidents.",
  },
  {
    number: 4,
    title: "Measure and iterate",
    description:
      "Track the metrics that matter with actionable insights. See deployment frequency, lead time, and MTTR improve week over week.",
  },
];
