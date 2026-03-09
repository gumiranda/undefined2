"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data/navigation";
import type { SectionProps } from "../_shared/types";

export default function FloatingNavPattern({ className }: SectionProps) {
  return <FloatingNav navItems={navItems} className={className} />;
}
