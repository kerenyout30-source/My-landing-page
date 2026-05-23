"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/lib/site-config";

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      ariaLabelledBy="services-heading"
      containerSize="wide"
    >
      <div className="text-center mb-14">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--color-neon)] mb-4">
          השירותים שלי
        </p>
        <div id="services-heading">
          <AnimatedHeading as="h2" className="text-white">
            פתרונות AI שעובדים בשבילכם
          </AnimatedHeading>
        </div>
        <p className="mt-5 mx-auto max-w-2xl text-lg text-white/65 text-balance">
          מבחר שירותים שמותאמים לכל שלב — מהרצת פיילוט קטן עד מערכת AI שלמה
          שמשתלבת בכל העסק.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <li key={service.title} className="h-full">
            <ServiceCard service={service} index={i} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
