"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { GradientBorderCard } from "./gradient-border-card";

type Message = {
  side: "in" | "out";
  text: string;
  typing?: boolean;
  delay: number;
};

const messages: Message[] = [
  {
    side: "in",
    text: "שלום! איך אפשר לעזור לעסק שלכם היום?",
    delay: 0.2,
  },
  {
    side: "out",
    text: "אני מחפש לקבוע פגישת ייעוץ לגבי AI",
    delay: 1.2,
  },
  {
    side: "in",
    typing: true,
    text: "",
    delay: 2.2,
  },
  {
    side: "in",
    text: "כיף! בדיוק תיאמתי לכם זמן ב-יום ג׳ ב-10:00 — מתאים?",
    delay: 3.6,
  },
];

const LOOP_DURATION_MS = 7500;

export function HeroMockup() {
  // Cycle the conversation by incrementing a key, which re-mounts AnimatePresence children.
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setCycle((c) => c + 1);
    }, LOOP_DURATION_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: -3 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ perspective: "1200px" }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Floating decorative chip — top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute -top-4 -right-4 z-20 flex items-center gap-1.5 rounded-full bg-[color:var(--color-bg)] border border-[color:var(--color-ember)]/45 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-ember-2)] shadow-[0_0_20px_-2px_rgba(245,184,46,0.4)]"
      >
        <Sparkles className="h-3 w-3" aria-hidden />
        AI Active
      </motion.div>

      {/* Floating decorative chip — bottom-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="absolute -bottom-3 -left-3 z-20 flex items-center gap-1.5 rounded-xl bg-[color:var(--color-surface)] border border-white/10 px-3 py-2 shadow-2xl"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
          <Check className="h-4 w-4" aria-hidden />
        </span>
        <div className="text-start">
          <p className="text-[10px] text-white/50 leading-none">ליד נשלח</p>
          <p className="text-xs font-semibold text-white leading-tight">
            פגישה תואמה
          </p>
        </div>
      </motion.div>

      <GradientBorderCard
        glow
        innerClassName="p-5 sm:p-6 bg-[color:var(--color-surface)]/95"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-neon)] to-[color:var(--color-neon-2)] text-[color:var(--color-bg)] font-bold">
              ק
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#25D366] border-2 border-[color:var(--color-surface)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">קרן AI Assistant</p>
              <p className="text-xs text-[color:var(--color-neon)]">פעיל עכשיו</p>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Messages — keyed by cycle so AnimatePresence re-runs the sequence */}
        <ul
          className="flex flex-col gap-3 py-5 min-h-[280px]"
          aria-live="polite"
        >
          <AnimatePresence mode="wait" initial={false}>
            <MessageList key={cycle} />
          </AnimatePresence>
        </ul>

        {/* Input bar */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          <div className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white/40">
            כתבו הודעה...
          </div>
          <button
            type="button"
            disabled
            aria-hidden
            tabIndex={-1}
            className="h-9 w-9 rounded-full bg-[color:var(--color-neon)] text-[color:var(--color-bg)] flex items-center justify-center shadow-[0_0_16px_-2px_rgba(0,245,212,0.6)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 -scale-x-100"
            >
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4Z" />
            </svg>
          </button>
        </div>
      </GradientBorderCard>
    </motion.div>
  );
}

// Renders the message sequence with staggered reveals. Lives in its own component so
// AnimatePresence can re-mount it cleanly on each cycle.
function MessageList() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="contents"
    >
      {messages.map((m, i) => (
        <Bubble key={i} message={m} />
      ))}
    </motion.div>
  );
}

function Bubble({ message }: { message: Message }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.45,
        delay: message.delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`flex ${message.side === "out" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
          message.side === "in"
            ? "bg-white/[0.06] text-white rounded-tr-sm"
            : "bg-[color:var(--color-neon)]/15 border border-[color:var(--color-neon)]/30 text-white rounded-tl-sm"
        } ${message.typing ? "min-w-[64px]" : ""}`}
      >
        {message.typing ? <TypingDots /> : message.text}
      </div>
    </motion.li>
  );
}

function TypingDots() {
  return (
    <span
      className="inline-flex items-end gap-1 py-1"
      role="status"
      aria-label="קרן מקלידה..."
    >
      <Dot delay="0s" />
      <Dot delay="0.18s" />
      <Dot delay="0.36s" />
    </span>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-white/85 animate-typing-bounce"
      style={{ animationDelay: delay }}
      aria-hidden
    />
  );
}
