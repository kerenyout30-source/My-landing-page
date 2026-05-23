"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  ariaLabelledBy?: string;
  containerSize?: "default" | "narrow" | "wide";
  motionProps?: HTMLMotionProps<"div">;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function SectionWrapper({
  id,
  className,
  innerClassName,
  ariaLabelledBy,
  containerSize = "default",
  children,
  motionProps,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full px-5 sm:px-8 lg:px-12 py-20 sm:py-28 scroll-mt-24",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn("mx-auto w-full", sizes[containerSize], innerClassName)}
        {...motionProps}
      >
        {children}
      </motion.div>
    </section>
  );
}
