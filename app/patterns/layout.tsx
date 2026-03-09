"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { patternGroups } from "@/lib/patterns";
import { cn } from "@/lib/utils";

export default function PatternsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-border bg-card p-6 lg:block">
        <Link href="/patterns" className="mb-8 block">
          <h2 className="font-display text-lg font-bold text-section-heading">
            Patterns
          </h2>
          <p className="text-xs text-section-subheading">Design System</p>
        </Link>
        <nav className="space-y-1">
          {patternGroups.map((group) => {
            const href = `/patterns/${group.id}`;
            const isActive = pathname === href;
            return (
              <Link
                key={group.id}
                href={href}
                className={cn(
                  "block rounded-(--radius-button) px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-section-subheading hover:bg-muted hover:text-section-heading"
                )}
              >
                {group.name}
                <span className="ml-1 text-xs opacity-60">
                  ({group.variants.length})
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 border-t border-border pt-4">
          <Link
            href="/"
            className="block text-sm text-section-subheading transition hover:text-section-heading"
          >
            &larr; Back to Landing
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
