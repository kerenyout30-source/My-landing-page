import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { SectionAmbience } from "@/components/shared/floating-background";
import { aboutContent } from "@/lib/site-config";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      ariaLabelledBy="about-heading"
      containerSize="narrow"
      className="relative isolate"
    >
      <SectionAmbience side="center" intensity="low" />
      <div className="text-center">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--color-neon)] mb-4">
          {aboutContent.eyebrow}
        </p>
        <div id="about-heading">
          <AnimatedHeading as="h2" className="text-white">
            {aboutContent.title}
          </AnimatedHeading>
        </div>
        <div className="mt-8 space-y-5">
          {aboutContent.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-white/70 text-balance"
            >
              {p}
            </p>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {aboutContent.pillars.map((pillar) => (
            <li
              key={pillar}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
