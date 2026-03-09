import {
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
  IconRouteAltLeft,
  IconNewSection,
  IconExchange,
} from "@tabler/icons-react";
import React from "react";

/* ─── Bento Grid Items ─── */
export const bentoItems = [
  {
    title: "The Dawn of Innovation",
    description: "Experience the birth of groundbreaking ideas that shape our future.",
    className: "md:col-span-2",
    icon: React.createElement(IconTerminal2, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Digital Revolution",
    description: "Join the revolution that's transforming the way we live and work.",
    className: "md:col-span-1",
    icon: React.createElement(IconEaseInOut, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: React.createElement(IconCurrencyDollar, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our interconnected world.",
    className: "md:col-span-2",
    icon: React.createElement(IconCloud, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Embark on a never-ending journey of intellectual exploration.",
    className: "md:col-span-2",
    icon: React.createElement(IconRouteAltLeft, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Joy of Creation",
    description: "Find happiness in the process of building and creating something meaningful.",
    className: "md:col-span-1",
    icon: React.createElement(IconNewSection, { className: "h-4 w-4 text-neutral-500" }),
  },
  {
    title: "The Spirit of Adventure",
    description: "Embrace the thrill of exploring new horizons and pushing boundaries.",
    className: "md:col-span-1",
    icon: React.createElement(IconExchange, { className: "h-4 w-4 text-neutral-500" }),
  },
];

/* ─── Sticky Scroll Content ─── */
export const stickyScrollContent = [
  {
    title: "Collaborative Editing",
    description: "Work together in real time with your team. Our platform allows for seamless collaboration on documents, spreadsheets, and presentations.",
  },
  {
    title: "Real-time Changes",
    description: "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version.",
  },
  {
    title: "Version Control",
    description: "Experience the power of version control for your content. Our platform automatically saves every change, creating a comprehensive history you can explore.",
  },
  {
    title: "Running Out of Ideas",
    description: "Never run out of content again. Our AI-powered tools help you generate fresh ideas and create engaging content effortlessly.",
  },
];

/* ─── Tab Content ─── */
export const tabsData = [
  { title: "Product", value: "product" },
  { title: "Services", value: "services" },
  { title: "Resources", value: "resources" },
  { title: "Pricing", value: "pricing" },
];
