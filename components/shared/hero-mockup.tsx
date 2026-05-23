"use client";

import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { GradientBorderCard } from "./gradient-border-card";

const messages = [
  {
    side: "in" as const,
    text: "שלום! איך אפשר לעזור לעסק שלכם היום?",
    delay: 0.2,
  },
  {
    side: "out" as const,
    text: "אני מחפש לקבוע פגישת ייעוץ לגבי AI",
    delay: 0.7,
  },
  {
    side: "in" as const,
    text: "כיף! בדיוק תיאמתי לכם זמן ב-יום ג׳ ב-10:00 — מתאים?",
    typing: true,
    delay: 1.3,
  },
];

export function HeroMockup() {
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
        className="absolute -top-4 -right-4 z-20 flex items-center gap-1.5 rounded-full bg-[color:var(--color-bg)] border border-[color:var(--color-neon)]/40 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-neon)] shadow-[0_0_20px_-2px_rgba(0,245,212,0.4)]"
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

        {/* Messages */}
        <ul className="flex flex-col gap-3 py-5 min-h-[260px]">
          {messages.map((m, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: m.delay,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`flex ${m.side === "out" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                  m.side === "in"
                    ? "bg-white/[0.06] text-white rounded-tr-sm"
                    : "bg-[color:var(--color-neon)]/15 border border-[color:var(--color-neon)]/30 text-white rounded-tl-sm"
                }`}
              >
                {m.text}
                {m.typing && (
                  <span className="inline-flex gap-1 mr-1 align-middle">
                    <Dot delay="0s" />
                    <Dot delay="0.2s" />
                    <Dot delay="0.4s" />
                  </span>
                )}
              </div>
            </motion.li>
          ))}
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

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse-glow"
      style={{ animationDelay: delay, animationDuration: "1.4s" }}
      aria-hidden
    />
  );
}
