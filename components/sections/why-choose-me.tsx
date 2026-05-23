"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { GradientBorderCard } from "@/components/shared/gradient-border-card";
import { whyPoints } from "@/lib/site-config";

export function WhyChooseMeSection() {
  return (
    <SectionWrapper
      id="why-me"
      ariaLabelledBy="why-heading"
      containerSize="default"
      className="relative"
    >
      <div className="text-center mb-14">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--color-neon)] mb-4">
          למה לבחור בי
        </p>
        <div id="why-heading">
          <AnimatedHeading as="h2" className="text-white">
            לא רק טכנולוגיה — שותפות
          </AnimatedHeading>
        </div>
      </div>

      <GradientBorderCard innerClassName="p-6 sm:p-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-neon)]/10 border border-[color:var(--color-neon)]/30 text-[color:var(--color-neon)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-white/65 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </GradientBorderCard>
    </SectionWrapper>
  );
}
