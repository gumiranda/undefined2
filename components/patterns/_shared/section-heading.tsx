import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-(--section-gap)",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-(length:--heading-lg) font-bold tracking-tight text-section-heading md:text-(length:--heading-xl)">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-section-subheading md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
