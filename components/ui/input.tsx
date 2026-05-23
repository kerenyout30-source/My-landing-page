import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-base text-white placeholder:text-white/40",
        "transition-all backdrop-blur-sm",
        "hover:border-white/20",
        "focus:outline-none focus:border-[color:var(--color-neon)]/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(0,245,212,0.15)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-400/70 aria-invalid:shadow-[0_0_0_3px_rgba(248,113,113,0.15)]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
