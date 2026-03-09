import Link from "next/link";
import { patternGroups } from "@/lib/patterns";

export default function PatternsPage() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-section-heading">
        Pattern Library
      </h1>
      <p className="mb-10 text-section-subheading">
        Browse all SaaS patterns with multiple variants per category.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {patternGroups.map((group) => (
          <Link
            key={group.id}
            href={`/patterns/${group.id}`}
            className="group rounded-(--radius-card) border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-section-heading group-hover:text-primary">
              {group.name}
            </h3>
            <p className="mt-1 text-sm text-section-subheading">
              {group.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {group.variants.map((v) => (
                <span
                  key={v.id}
                  className="rounded-(--radius-badge) bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {v.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
