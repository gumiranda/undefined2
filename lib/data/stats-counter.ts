export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability across all regions",
  },
  {
    value: 50,
    suffix: "M+",
    label: "API Requests / Day",
    description: "Processed globally with sub-100ms latency",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Companies",
    description: "From startups to Fortune 500 enterprises",
  },
  {
    value: 150,
    suffix: "+",
    label: "Countries",
    description: "Global infrastructure on every continent",
  },
];
