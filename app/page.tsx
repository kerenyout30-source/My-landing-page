import { Navbar } from "@/components/shared/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseMeSection } from "@/components/sections/why-choose-me";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseMeSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
