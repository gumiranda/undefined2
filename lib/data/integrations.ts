export interface Integration {
  name: string;
  icon: string;
  description: string;
  category: string;
  featured?: boolean;
}

export const integrations: Integration[] = [
  {
    name: "GitHub",
    icon: "🐙",
    description: "Sync repos, PRs, and issues automatically. Trigger deployments on merge.",
    category: "Development",
    featured: true,
  },
  {
    name: "Slack",
    icon: "💬",
    description: "Real-time alerts, approvals, and status updates in your channels.",
    category: "Communication",
    featured: true,
  },
  {
    name: "Jira",
    icon: "📋",
    description: "Two-way sync for issues, sprints, and project tracking.",
    category: "Project Management",
  },
  {
    name: "AWS",
    icon: "☁️",
    description: "Deploy to EC2, ECS, Lambda, and S3 with one click.",
    category: "Infrastructure",
    featured: true,
  },
  {
    name: "Datadog",
    icon: "📊",
    description: "Push metrics, traces, and logs for unified observability.",
    category: "Monitoring",
  },
  {
    name: "Linear",
    icon: "🔷",
    description: "Sync issues and automate workflow transitions.",
    category: "Project Management",
  },
  {
    name: "Vercel",
    icon: "▲",
    description: "Preview deployments and production releases from your dashboard.",
    category: "Infrastructure",
  },
  {
    name: "Notion",
    icon: "📝",
    description: "Embed live dashboards and sync documentation.",
    category: "Documentation",
  },
  {
    name: "PagerDuty",
    icon: "🚨",
    description: "Route incidents and manage on-call schedules.",
    category: "Monitoring",
  },
];
