"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/site-config";
import { GradientBorderCard } from "./gradient-border-card";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
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
      className="h-full"
    >
      <GradientBorderCard
        glow
        innerClassName="p-7 h-full flex flex-col gap-4 group-hover:bg-[color:var(--color-surface)]/95 transition-colors"
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[color:var(--color-neon)]/10 border border-[color:var(--color-neon)]/30 text-[color:var(--color-neon)] transition-all group-hover:scale-110 group-hover:bg-[color:var(--color-neon)]/15">
          <Icon className="h-7 w-7" aria-hidden />
        </div>
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-white/70 leading-relaxed">{service.description}</p>
        <ul className="mt-auto space-y-1.5 pt-3">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm text-white/55"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-neon)]"
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>
      </GradientBorderCard>
    </motion.div>
  );
}
