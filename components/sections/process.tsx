"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { processSteps } from "@/lib/site-config";

export function ProcessSection() {
  return (
    <SectionWrapper
      id="process"
      ariaLabelledBy="process-heading"
      containerSize="wide"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--color-neon)] mb-4">
          התהליך
        </p>
        <div id="process-heading">
          <AnimatedHeading as="h2" className="text-white">
            שלושה צעדים לפתרון שעובד
          </AnimatedHeading>
        </div>
      </div>

      <div className="relative">
        {/* Connecting line (desktop) */}
        <div
          className="hidden md:block absolute top-7 right-[8.33%] left-[8.33%] h-px bg-gradient-to-l from-transparent via-[color:var(--color-neon)]/40 to-transparent"
          aria-hidden
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center px-2"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div
                  className="absolute inset-0 rounded-full bg-[color:var(--color-neon)]/20 blur-2xl"
                  aria-hidden
                />
                <div className="relative h-14 w-14 rounded-full bg-[color:var(--color-bg)] border-2 border-[color:var(--color-neon)]/40 flex items-center justify-center font-bold text-[color:var(--color-neon)] text-lg shadow-[0_0_20px_-4px_rgba(0,245,212,0.55)]">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/65 leading-relaxed text-balance max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
