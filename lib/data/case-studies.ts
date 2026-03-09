export interface CaseStudy {
  company: string;
  logo: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metric: string;
  quote?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: "TechFlow",
    logo: "/logos/vercel.svg",
    industry: "Developer Tools",
    problem: "Manual deployments caused 4-hour release cycles and frequent rollbacks.",
    solution: "Automated CI/CD pipelines with zero-downtime deployments and instant rollback.",
    result: "Reduced deployment time from 4 hours to 8 minutes.",
    metric: "30x faster deploys",
    quote: "We went from dreading release day to shipping multiple times a day.",
  },
  {
    company: "ScaleUp",
    logo: "/logos/stripe.svg",
    industry: "FinTech",
    problem: "Scaling infrastructure couldn't keep up with 10x traffic growth.",
    solution: "Auto-scaling infrastructure with predictive load balancing.",
    result: "Handled 50M daily requests with 99.99% uptime.",
    metric: "99.99% uptime",
    quote: "The platform scaled effortlessly during our biggest product launch.",
  },
  {
    company: "DataPrime",
    logo: "/logos/linear.svg",
    industry: "Analytics",
    problem: "Siloed data across 15 tools made reporting a weekly ordeal.",
    solution: "Unified data pipeline connecting all sources with real-time sync.",
    result: "Cut reporting time from 2 days to 5 minutes.",
    metric: "95% time saved",
    quote: "Real-time insights completely changed how we make decisions.",
  },
  {
    company: "CloudNine",
    logo: "/logos/notion.svg",
    industry: "SaaS",
    problem: "High churn rate due to poor onboarding and slow support response.",
    solution: "Automated onboarding flows with in-app guidance and AI support.",
    result: "Reduced churn by 40% and increased NPS from 32 to 72.",
    metric: "40% less churn",
  },
];
