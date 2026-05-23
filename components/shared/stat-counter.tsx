"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type StatCounterProps = {
  value: string;
  className?: string;
};

// Extracts the leading number (and ignores currency / + / suffix glyphs) so we
// can animate just the digits. Falls back to plain text for non-numeric values
// like "24/7".
function parseValue(raw: string): { prefix: string; number: number | null; suffix: string } {
  const match = raw.match(/^([^\d-]*)(-?\d+(?:[\.,]\d+)?)(.*)$/);
  if (!match) return { prefix: raw, number: null, suffix: "" };
  const [, prefix, numStr, suffix] = match;
  const cleaned = numStr.replace(/,/g, "");
  const number = Number(cleaned);
  if (Number.isNaN(number)) return { prefix: raw, number: null, suffix: "" };
  return { prefix, number, suffix };
}

export function StatCounter({ value, className }: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { prefix, number, suffix } = React.useMemo(
    () => parseValue(value),
    [value],
  );

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (number === null) return value;
    const hasDecimals = /[.]/.test(String(number));
    const out = hasDecimals ? latest.toFixed(1) : Math.round(latest).toString();
    // Re-insert thousand separators for big numbers
    const formatted = out.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${prefix}${formatted}${suffix}`;
  });

  React.useEffect(() => {
    if (!inView || number === null) return;
    const controls = animate(motionValue, number, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, number, motionValue]);

  if (number === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
