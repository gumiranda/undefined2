"use client";

import { cn } from "@/lib/utils";
import type { PatternVariantMeta } from "./types";

interface VariantSwitcherProps {
  variants: PatternVariantMeta[];
  activeVariant: string;
  onSwitch: (id: string) => void;
}

export default function VariantSwitcher({
  variants,
  activeVariant,
  onSwitch,
}: VariantSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-(--radius-card) border border-border bg-card p-1">
      {variants.map((variant) => (
        <button
          key={variant.id}
          onClick={() => onSwitch(variant.id)}
          className={cn(
            "rounded-(--radius-button) px-4 py-2 text-sm font-medium transition",
            activeVariant === variant.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-section-subheading hover:bg-muted hover:text-section-heading"
          )}
        >
          {variant.name}
        </button>
      ))}
    </div>
  );
}
