"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, X, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { GradientBorderCard } from "@/components/shared/gradient-border-card";
import { SectionAmbience } from "@/components/shared/floating-background";
import { StatCounter } from "@/components/shared/stat-counter";
import { roiContent } from "@/lib/site-config";

export function RoiSection() {
  return (
    <SectionWrapper
      id="roi"
      ariaLabelledBy="roi-heading"
      containerSize="wide"
      className="relative isolate"
    >
      <SectionAmbience side="right" intensity="mid" />

      <div className="text-center mb-14">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[color:var(--color-ember-2)] mb-4">
          {roiContent.eyebrow}
        </p>
        <div id="roi-heading">
          <AnimatedHeading
            as="h2"
            highlight="תחסכו"
            className="text-white"
          >
            {roiContent.title}
          </AnimatedHeading>
        </div>
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-white/65 text-balance">
          {roiContent.subtitle}
        </p>
      </div>

      {/* Stats grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {roiContent.stats.map((stat, i) => (
          <motion.li
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <GradientBorderCard
              glow
              innerClassName="p-6 h-full flex flex-col bg-[color:var(--color-surface)]/95"
            >
              <div className="flex items-end gap-2 mb-1">
                <StatCounter
                  value={stat.value}
                  className={`font-display text-5xl sm:text-6xl font-extrabold leading-none tracking-tight ${
                    stat.tone === "ember"
                      ? "bg-gradient-to-b from-[color:var(--color-ember-2)] to-[color:var(--color-ember)] bg-clip-text text-transparent"
                      : "bg-gradient-to-b from-white to-[color:var(--color-neon)] bg-clip-text text-transparent"
                  }`}
                />
              </div>
              <p className="text-xs uppercase tracking-widest font-bold text-white/55 mb-3">
                {stat.unit}
              </p>
              <p className="text-base font-semibold text-white mb-1.5">
                {stat.label}
              </p>
              <p className="text-sm text-white/55 leading-relaxed mt-auto">
                {stat.sub}
              </p>
            </GradientBorderCard>
          </motion.li>
        ))}
      </ul>

      {/* Comparison card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10"
      >
        <GradientBorderCard innerClassName="p-6 sm:p-8 bg-[color:var(--color-surface)]/95">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/12 border border-[color:var(--color-ember)]/30 text-[color:var(--color-ember-2)]">
              <TrendingUp className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {roiContent.comparison.title}
            </h3>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full text-start min-w-[480px]">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-white/45 border-b border-white/[0.06]">
                  <th className="text-start font-semibold py-3 px-2 sm:px-4">משימה</th>
                  <th className="text-start font-semibold py-3 px-2 sm:px-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400/70" aria-hidden />
                      היום (ידני)
                    </span>
                  </th>
                  <th className="text-start font-semibold py-3 px-2 sm:px-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-neon)]"
                        style={{ boxShadow: "0 0 6px rgba(0,245,212,0.85)" }}
                        aria-hidden
                      />
                      עם AI
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {roiContent.comparison.rows.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={`border-b border-white/[0.04] last:border-b-0 ${
                      i % 2 === 0 ? "bg-white/[0.015]" : ""
                    }`}
                  >
                    <td className="py-3.5 px-2 sm:px-4 text-sm text-white/85 font-medium">
                      {row.metric}
                    </td>
                    <td className="py-3.5 px-2 sm:px-4 text-sm text-white/55">
                      <span className="inline-flex items-center gap-2">
                        <X className="h-3.5 w-3.5 text-red-400/70" aria-hidden />
                        {row.manual}
                      </span>
                    </td>
                    <td className="py-3.5 px-2 sm:px-4 text-sm text-white">
                      <span className="inline-flex items-center gap-2">
                        <Check
                          className="h-3.5 w-3.5 text-[color:var(--color-neon)]"
                          aria-hidden
                        />
                        {row.ai}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GradientBorderCard>
      </motion.div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link
          href={roiContent.cta.href}
          className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-base sm:text-lg font-semibold bg-gradient-to-br from-[color:var(--color-ember)] to-[color:var(--color-ember-2)] text-[color:var(--color-bg)] shadow-[0_0_32px_-4px_rgba(245,184,46,0.55)] hover:shadow-[0_0_40px_-2px_rgba(245,184,46,0.85)] transition-all cursor-pointer"
        >
          {roiContent.cta.label}
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        </Link>
        <p className="mt-3 text-xs text-white/40">
          חישוב מותאם אישית, ללא עלות
        </p>
      </div>
    </SectionWrapper>
  );
}
