"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { FloatingBackground } from "@/components/shared/floating-background";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { heroContent } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32 min-h-[88vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <FloatingBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-neon)]/30 bg-[color:var(--color-neon)]/[0.06] px-4 py-1.5 text-xs sm:text-sm text-[color:var(--color-neon)] mb-7"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          <span className="tracking-wide">{heroContent.badge}</span>
        </motion.div>

        <AnimatedHeading
          as="h1"
          className="text-white"
        >
          {heroContent.headline}
        </AnimatedHeading>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 mx-auto max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed text-balance"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base sm:text-lg font-semibold bg-[color:var(--color-neon)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-neon-2)] shadow-[0_0_32px_-4px_rgba(0,245,212,0.55)] hover:shadow-[0_0_40px_-2px_rgba(0,245,212,0.75)] transition-all"
          >
            {heroContent.primaryCta}
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center h-14 px-8 rounded-2xl text-base sm:text-lg font-medium bg-white/5 text-white border border-white/15 hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            {heroContent.secondaryCta}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-white/40"
        >
          <span>צ׳אטבוטים</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
          <span>סוכני AI</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
          <span>אוטומציות</span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
          <span>אינטגרציות</span>
        </motion.div>
      </div>
    </section>
  );
}
