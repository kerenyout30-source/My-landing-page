import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full min-h-28 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/40",
        "transition-all backdrop-blur-sm resize-y",
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
Textarea.displayName = "Textarea";
