"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { announcement } from "@/lib/data/announcement-bar";
import type { SectionProps } from "../_shared/types";

export default function AnnouncementBarGradient({ className, id }: SectionProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id={id ?? "announcement"}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={className}
        >
          <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary/80 to-primary px-4 py-2.5 text-sm text-primary-foreground">
            {announcement.badge && (
              <span className="rounded-(--radius-badge) bg-white/20 px-2 py-0.5 text-xs font-semibold">
                {announcement.badge}
              </span>
            )}
            <span>{announcement.text}</span>
            {announcement.link && (
              <a
                href={announcement.link.href}
                className="font-semibold underline underline-offset-4 hover:opacity-80"
              >
                {announcement.link.label}
              </a>
            )}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Dismiss announcement"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
