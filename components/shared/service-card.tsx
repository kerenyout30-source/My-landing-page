"use client";

import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import type { Service } from "@/lib/site-config";
import { GradientBorderCard } from "./gradient-border-card";

type ServiceCardProps = {
  service: Service;
  index: number;
  featured?: boolean;
  className?: string;
};

export function ServiceCard({
  service,
  index,
  featured = false,
  className = "",
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`h-full ${className}`}
    >
      <GradientBorderCard
        glow
        innerClassName={`relative overflow-hidden h-full flex flex-col group-hover:bg-[color:var(--color-surface)]/95 transition-colors ${
          featured ? "p-8 sm:p-10" : "p-6 sm:p-7"
        }`}
      >
        {/* Feature-mode glow accent */}
        {featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(0,245,212,0.22) 0%, transparent 70%)",
            }}
          />
        )}

        <div className="relative flex items-start justify-between">
          <div
            className={`inline-flex items-center justify-center rounded-xl bg-[color:var(--color-neon)]/10 border border-[color:var(--color-neon)]/30 text-[color:var(--color-neon)] transition-all group-hover:scale-110 group-hover:bg-[color:var(--color-neon)]/15 ${
              featured ? "h-16 w-16" : "h-12 w-12"
            }`}
          >
            <Icon
              className={featured ? "h-8 w-8" : "h-6 w-6"}
              aria-hidden
            />
          </div>

          {featured && (
            <span className="rounded-full bg-[color:var(--color-neon)]/12 border border-[color:var(--color-neon)]/30 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[color:var(--color-neon)]">
              Featured
            </span>
          )}
        </div>

        <h3
          className={`relative mt-5 font-bold text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`relative mt-2.5 text-white/65 leading-relaxed ${
            featured ? "text-base sm:text-lg max-w-md" : "text-sm"
          }`}
        >
          {service.description}
        </p>

        <ul
          className={`relative mt-auto pt-5 space-y-1.5 ${
            featured ? "flex flex-wrap gap-2 space-y-0" : ""
          }`}
        >
          {service.bullets.map((b) =>
            featured ? (
              <li
                key={b}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
              >
                {b}
              </li>
            ) : (
              <li
                key={b}
                className="flex items-center gap-2 text-xs text-white/55"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-neon)]"
                  aria-hidden
                />
                {b}
              </li>
            ),
          )}
        </ul>

        {/* Arrow hint */}
        <span
          aria-hidden
          className="absolute bottom-5 left-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-[color:var(--color-neon)] group-hover:border-[color:var(--color-neon)]/40 transition-all"
        >
          <ArrowUpLeft className="h-4 w-4" />
        </span>
      </GradientBorderCard>
    </motion.div>
  );
}
