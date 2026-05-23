"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { SectionAmbience } from "@/components/shared/floating-background";
import { processSteps } from "@/lib/site-config";

export function ProcessSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper
      id="process"
      ariaLabelledBy="process-heading"
      containerSize="wide"
      className="relative isolate"
    >
      <SectionAmbience side="left" intensity="low" />

      <div className="text-center mb-16">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[color:var(--color-neon)] mb-4">
          התהליך
        </p>
        <div id="process-heading">
          <AnimatedHeading as="h2" className="text-white">
            שלושה צעדים לפתרון שעובד
          </AnimatedHeading>
        </div>
      </div>

      <div ref={containerRef} className="relative">
        {/* Desktop: horizontal progress line */}
        <div className="hidden md:block absolute top-7 right-[8.33%] left-[8.33%] h-px overflow-hidden">
          <div className="absolute inset-0 bg-white/10" aria-hidden />
          <motion.div
            className="absolute inset-y-0 right-0 bg-gradient-to-l from-[color:var(--color-neon)] via-[color:var(--color-neon)] to-[color:var(--color-neon-2)]"
            style={{
              width: lineProgress,
              boxShadow: "0 0 12px rgba(0,245,212,0.7)",
            }}
            aria-hidden
          />
        </div>

        {/* Mobile: vertical progress line (RTL: right side) */}
        <div className="md:hidden absolute top-0 bottom-0 right-7 w-px overflow-hidden">
          <div className="absolute inset-0 bg-white/10" aria-hidden />
          <motion.div
            className="absolute inset-x-0 top-0 bg-gradient-to-b from-[color:var(--color-neon)] to-[color:var(--color-neon-2)]"
            style={{
              height: lineProgress,
              boxShadow: "0 0 12px rgba(0,245,212,0.7)",
            }}
            aria-hidden
          />
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative md:text-center text-start ps-20 md:ps-0"
            >
              <div className="absolute right-0 top-0 md:static md:inline-flex md:items-center md:justify-center md:mb-6 md:mx-auto">
                <div className="relative inline-flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full bg-[color:var(--color-neon)]/25 blur-2xl animate-pulse-glow"
                    aria-hidden
                  />
                  {/* Rotating gradient ring */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-60"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(0,245,212,0) 0%, rgba(0,245,212,0.85) 40%, rgba(0,245,212,0) 80%)",
                      animation: "spin 6s linear infinite",
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative h-14 w-14 rounded-full bg-[color:var(--color-bg)] border border-[color:var(--color-neon)]/40 flex items-center justify-center font-display font-bold text-[color:var(--color-neon)] text-lg shadow-[0_0_24px_-4px_rgba(0,245,212,0.55)]"
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/65 leading-relaxed text-balance md:max-w-sm md:mx-auto">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
