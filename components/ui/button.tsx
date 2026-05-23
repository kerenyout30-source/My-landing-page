import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-neon)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--color-neon)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-neon-2)] shadow-[0_0_24px_-4px_rgba(0,245,212,0.55)] hover:shadow-[0_0_32px_-2px_rgba(0,245,212,0.75)]",
        ghost:
          "bg-white/5 text-white border border-white/15 hover:bg-white/10 backdrop-blur",
        outline:
          "bg-transparent text-[color:var(--color-neon)] border border-[color:var(--color-neon)]/60 hover:border-[color:var(--color-neon)] hover:bg-[color:var(--color-neon)]/10",
      },
      size: {
        sm: "h-9 px-4 rounded-lg text-sm",
        md: "h-11 px-6 rounded-xl text-base",
        lg: "h-14 px-8 rounded-2xl text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
