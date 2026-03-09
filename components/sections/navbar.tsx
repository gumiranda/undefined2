"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
