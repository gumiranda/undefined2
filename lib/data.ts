import {
  IconHome,
  IconMessage,
  IconUser,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconExchange,
  IconNewSection,
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
  IconRouteAltLeft,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";

/* ─── Navbar ─── */
export const navItems = [
  { name: "Home", link: "#hero", icon: React.createElement(IconHome, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
  { name: "About", link: "#backgrounds", icon: React.createElement(IconUser, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
  { name: "Components", link: "#cards", icon: React.createElement(IconMessage, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
];

/* ─── Dock Items ─── */
export const dockItems = [
  { title: "GitHub", icon: React.createElement(IconBrandGithub, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "Twitter", icon: React.createElement(IconBrandX, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "LinkedIn", icon: React.createElement(IconBrandLinkedin, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "Instagram", icon: React.createElement(IconBrandInstagram, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "YouTube", icon: React.createElement(IconBrandYoutube, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
];

/* ─── Flip Words ─── */
export const flipWords = ["better", "faster", "modern", "beautiful", "accessible"];

/* ─── Testimonials (Infinite Cards) ─── */
export const testimonials = [
  { quote: "This library has completely transformed how we build UIs. The animations are buttery smooth.", name: "Alex Rivera", title: "CTO at TechFlow" },
  { quote: "I was blown away by the quality of the components. Integration was seamless.", name: "Sarah Chen", title: "Lead Developer at Startup.io" },
  { quote: "The best component library I've used in 10 years of web development.", name: "Michael Park", title: "Senior Engineer at BigCorp" },
  { quote: "Aceternity UI helped us ship our redesign 3 weeks ahead of schedule.", name: "Emily Watson", title: "Product Manager at DesignCo" },
  { quote: "Our conversion rate increased 40% after implementing these components.", name: "David Kim", title: "Founder at Growth Labs" },
  { quote: "The attention to detail in every animation is remarkable.", name: "Lisa Johnson", title: "Design Lead at Creative Studio" },
];

/* ─── Animated Testimonials ─── */
export const animatedTestimonials = [
  { quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.", name: "Sarah Chen", designation: "CTO at TechFlow", src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop" },
  { quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is outstanding.", name: "Michael Rodriguez", designation: "Lead Developer at InnovateTech", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
  { quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.", name: "Emily Watson", designation: "Product Manager at GlobalTech", src: "https://images.unsplash.com/photo-1623582854588-d60f38f0a0f5?q=80&w=400&auto=format&fit=crop" },
];

/* ─── Animated Tooltip People ─── */
export const tooltipPeople = [
  { id: 1, name: "John Doe", designation: "Software Engineer", image: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Jane Smith", designation: "Product Manager", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Bob Wilson", designation: "Data Scientist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
  { id: 4, name: "Alice Brown", designation: "UX Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  { id: 5, name: "Charlie Davis", designation: "DevOps Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
];

/* ─── Parallax Products ─── */
export const products = [
  { title: "Moonbeam", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.14%E2%80%AFPM.png" },
  { title: "Cursor", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.07%E2%80%AFPM.png" },
  { title: "Rogue", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.20%E2%80%AFPM.png" },
  { title: "Editorially", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.27%E2%80%AFPM.png" },
  { title: "Editrix AI", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.33%E2%80%AFPM.png" },
  { title: "Pixel Perfect", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.39%E2%80%AFPM.png" },
  { title: "Algochurn", link: "#", thumbnail: "https://assets.aceternity.com/demos/algochurn.webp" },
  { title: "Aceternity UI", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.14%E2%80%AFPM.png" },
  { title: "Tailwind Master Kit", link: "#", thumbnail: "https://assets.aceternity.com/demos/tailwindmasterkit.webp" },
  { title: "SmartBridge", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.07%E2%80%AFPM.png" },
  { title: "Renderwork Studio", link: "#", thumbnail: "https://assets.aceternity.com/demos/renderwork.webp" },
  { title: "Creme Digital", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.20%E2%80%AFPM.png" },
  { title: "Golden Bells", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.27%E2%80%AFPM.png" },
  { title: "Invoker Labs", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.33%E2%80%AFPM.png" },
  { title: "E Free Invoice", link: "#", thumbnail: "https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.39%E2%80%AFPM.png" },
];

/* ─── Timeline Data ─── */
export const timelineData = [
  {
    title: "2024",
    content: "Launched the next generation of our platform with AI-powered features and a completely redesigned interface. Performance improvements of up to 10x across the board.",
  },
  {
    title: "2023",
    content: "Expanded to 50+ countries, onboarded 10,000 new users, and introduced real-time collaboration features that changed how teams work together.",
  },
  {
    title: "Early 2023",
    content: "Secured Series A funding and built out the core team. Focused on developer experience and shipped 200+ components to the open-source community.",
  },
  {
    title: "2022",
    content: "Started as a small side project. Built the first 10 components and shared them with the community. The response was overwhelming.",
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

/* ─── Tab Content ─── */
export const tabsData = [
  { title: "Product", value: "product" },
  { title: "Services", value: "services" },
  { title: "Resources", value: "resources" },
  { title: "Pricing", value: "pricing" },
];

/* ─── Focus Cards ─── */
export const focusCardsData = [
  { title: "Forest Adventure", src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=600&auto=format&fit=crop" },
  { title: "Valley of Life", src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop" },
  { title: "Mountain Peak", src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=600&auto=format&fit=crop" },
  { title: "Ocean Breeze", src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=600&auto=format&fit=crop" },
  { title: "Desert Sunset", src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=600&auto=format&fit=crop" },
  { title: "Urban Lights", src: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600&auto=format&fit=crop" },
];

/* ─── Images Slider ─── */
export const sliderImages = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=1200&auto=format&fit=crop",
];

/* ─── World Map Dots ─── */
export const worldMapDots = [
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
];

/* ─── 3D Marquee Images ─── */
export const marqueeImages = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_1.png",
  "https://assets.aceternity.com/cloudinary_bkp/hero-highlight.png",
  "https://assets.aceternity.com/cloudinary_bkp/infinite-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Floating_Navbar.png",
  "https://assets.aceternity.com/cloudinary_bkp/parallax-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/tracing-beam.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/cloudinary_bkp/sparkles.png",
  "https://assets.aceternity.com/cloudinary_bkp/multi-step-loader.png",
  "https://assets.aceternity.com/cloudinary_bkp/vortex.png",
  "https://assets.aceternity.com/cloudinary_bkp/wavy-background.png",
  "https://assets.aceternity.com/cloudinary_bkp/globe.png",
  "https://assets.aceternity.com/cloudinary_bkp/lamp.png",
  "https://assets.aceternity.com/cloudinary_bkp/macbook.png",
];

/* ─── Loader States ─── */
export const loadingStates = [
  { text: "Initializing components..." },
  { text: "Loading animations..." },
  { text: "Rendering particles..." },
  { text: "Applying gradients..." },
  { text: "Polishing UI..." },
  { text: "Almost there..." },
  { text: "Ready!" },
];
