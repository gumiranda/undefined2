"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { announcement } from "@/lib/data/announcement-bar";
import type { SectionProps } from "../_shared/types";

export default function AnnouncementBarSparkles({ className, id }: SectionProps) {
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
          <div className="relative flex items-center justify-center gap-3 overflow-hidden bg-surface-sunken px-4 py-2.5 text-sm text-section-heading">
            <div className="pointer-events-none absolute inset-0">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={80}
                particleColor="var(--primary)"
                className="h-full w-full"
              />
            </div>
            <div className="relative z-10 flex items-center gap-3">
              {announcement.badge && (
                <span className="rounded-(--radius-badge) bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                  {announcement.badge}
                </span>
              )}
              <span>{announcement.text}</span>
              {announcement.link && (
                <a
                  href={announcement.link.href}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  {announcement.link.label}
                </a>
              )}
            </div>
            <button
              onClick={() => setVisible(false)}
              className="relative z-10 ml-2 text-section-subheading hover:text-section-heading"
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
