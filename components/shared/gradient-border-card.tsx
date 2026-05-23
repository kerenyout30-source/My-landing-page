import * as React from "react";
import { cn } from "@/lib/utils";

type GradientBorderCardProps = {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  glow?: boolean;
  as?: "div" | "article" | "li";
};

export function GradientBorderCard({
  className,
  innerClassName,
  children,
  glow = false,
  as: Tag = "div",
}: GradientBorderCardProps) {
  return (
    <Tag
      className={cn(
        "group relative rounded-2xl p-[1px] transition-all duration-500",
        "bg-[conic-gradient(from_140deg_at_50%_50%,rgba(0,245,212,0.45),rgba(255,255,255,0.05)_25%,rgba(0,194,186,0.35)_55%,rgba(255,255,255,0.05)_75%,rgba(0,245,212,0.45))]",
        glow && "hover:shadow-[0_0_40px_-8px_rgba(0,245,212,0.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl bg-[color:var(--color-surface)]/85 backdrop-blur-xl",
          "border border-white/[0.04]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
