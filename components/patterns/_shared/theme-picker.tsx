"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const themes = [
  { id: "midnight", label: "Midnight", color: "oklch(0.13 0.04 270)" },
  { id: "terminal", label: "Terminal", color: "oklch(0.08 0.01 150)" },
  { id: "ceramic", label: "Ceramic", color: "oklch(0.97 0.01 80)" },
  { id: "graphite", label: "Graphite", color: "oklch(0.985 0 0)" },
];

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 flex flex-col gap-2 rounded-(--radius-card) border border-border bg-card p-3 shadow-lg">
          <p className="text-xs font-semibold text-section-heading">Theme</p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 rounded-(--radius-button) px-3 py-1.5 text-sm transition",
                theme === t.id
                  ? "bg-primary text-primary-foreground"
                  : "text-section-subheading hover:bg-muted"
              )}
            >
              <span
                className="inline-block h-3 w-3 rounded-full border border-border"
                style={{ background: t.color }}
              />
              {t.label}
            </button>
          ))}
          <button
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
            className={cn(
              "rounded-(--radius-button) px-3 py-1.5 text-sm transition",
              !theme || theme === "system"
                ? "bg-primary text-primary-foreground"
                : "text-section-subheading hover:bg-muted"
            )}
          >
            Default
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-lg transition hover:shadow-xl"
        aria-label="Switch theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-section-heading"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  );
}
