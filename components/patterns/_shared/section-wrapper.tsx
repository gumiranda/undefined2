import { cn } from "@/lib/utils";
import type { SectionProps } from "./types";

interface SectionWrapperProps extends SectionProps {
  children: React.ReactNode;
  alternate?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-(--section-padding-y) px-4",
        alternate ? "bg-section-bg-alt" : "bg-section-bg",
        className
      )}
    >
      <div className="mx-auto max-w-(--content-max-width)">
        {children}
      </div>
    </section>
  );
}
