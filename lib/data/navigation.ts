import {
  IconHome,
  IconMessage,
  IconUser,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";

/* ─── Navbar ─── */
export const navItems = [
  { name: "Home", link: "#hero", icon: React.createElement(IconHome, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
  { name: "About", link: "#about", icon: React.createElement(IconUser, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
  { name: "Features", link: "#features", icon: React.createElement(IconMessage, { className: "h-4 w-4 text-neutral-500 dark:text-white" }) },
];

/* ─── Dock Items ─── */
export const dockItems = [
  { title: "GitHub", icon: React.createElement(IconBrandGithub, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "Twitter", icon: React.createElement(IconBrandX, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "LinkedIn", icon: React.createElement(IconBrandLinkedin, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "Instagram", icon: React.createElement(IconBrandInstagram, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
  { title: "YouTube", icon: React.createElement(IconBrandYoutube, { className: "h-full w-full text-neutral-500 dark:text-neutral-300" }), href: "#" },
];
