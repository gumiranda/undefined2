"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function LogoMarquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: LogoMarqueeProps) {
  const speedMap = { slow: "40s", normal: "25s", fast: "15s" };

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center gap-8 py-4",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `marquee-scroll ${speedMap[speed]} linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
      <style jsx>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
