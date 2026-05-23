"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { SectionAmbience } from "@/components/shared/floating-background";
import { services } from "@/lib/site-config";

export function ServicesSection() {
  const [featured, ...rest] = services;

  return (
    <SectionWrapper
      id="services"
      ariaLabelledBy="services-heading"
      containerSize="wide"
      className="relative isolate"
    >
      <SectionAmbience side="right" intensity="low" />

      <div className="text-center mb-14">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[color:var(--color-neon)] mb-4">
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

      {/* Bento Grid: featured spans 2 cols x 2 rows on desktop, the rest fill the remaining cells. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:gap-6 lg:auto-rows-fr">
        <ServiceCard
          service={featured}
          index={0}
          featured
          className="lg:col-span-2 lg:row-span-2"
        />
        {rest.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={i + 1}
            className="lg:col-span-1 lg:row-span-1"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
