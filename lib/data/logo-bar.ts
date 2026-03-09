export interface LogoItem {
  name: string;
  src: string;
  url?: string;
}

export const logoItems: LogoItem[] = [
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Linear", src: "/logos/linear.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Supabase", src: "/logos/supabase.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
];
