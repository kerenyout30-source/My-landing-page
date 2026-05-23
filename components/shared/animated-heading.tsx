"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedHeadingProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  highlight?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function AnimatedHeading({
  children,
  as: Tag = "h2",
  className,
  highlight,
}: AnimatedHeadingProps) {
  const words = children.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className="inline-block"
    >
      <Tag
        className={cn(
          "font-bold tracking-tight text-balance",
          Tag === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
            : "text-3xl sm:text-4xl lg:text-5xl leading-[1.1]",
          className,
        )}
      >
        {words.map((word, i) => {
          const isHighlight = highlight
            ? word.replace(/[׳״.,]/g, "") === highlight
            : false;
          return (
            <motion.span
              key={i}
              variants={wordVariants}
              className={cn(
                "inline-block",
                isHighlight &&
                  "bg-gradient-to-br from-[color:var(--color-neon)] to-[color:var(--color-neon-2)] bg-clip-text text-transparent",
              )}
            >
              {word}
              {i < words.length - 1 && " "}
            </motion.span>
          );
        })}
      </Tag>
    </motion.div>
  );
}
