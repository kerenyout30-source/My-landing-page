import { Mail, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedHeading } from "@/components/shared/animated-heading";
import { GradientBorderCard } from "@/components/shared/gradient-border-card";
import { ContactForm } from "@/components/shared/contact-form";
import { contactContent } from "@/lib/site-config";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      ariaLabelledBy="contact-heading"
      containerSize="default"
      className="pb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[color:var(--color-neon)] mb-4">
            {contactContent.eyebrow}
          </p>
          <div id="contact-heading">
            <AnimatedHeading as="h2" className="text-white">
              {contactContent.title}
            </AnimatedHeading>
          </div>
          <p className="mt-5 text-lg text-white/70 leading-relaxed text-balance">
            {contactContent.subtitle}
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-neon)]/10 border border-[color:var(--color-neon)]/30 text-[color:var(--color-neon)]">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-white/55">מענה תוך יום עסקים</p>
                <p className="text-white">בכתב, באמת.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-neon)]/10 border border-[color:var(--color-neon)]/30 text-[color:var(--color-neon)]">
                <MessageCircle className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-white/55">שיחת ייעוץ ראשונית</p>
                <p className="text-white">ללא עלות והתחייבות.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <GradientBorderCard innerClassName="p-6 sm:p-8">
            <ContactForm />
          </GradientBorderCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
