import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import LandingSection from "../components/LandingSection";
import WorkSection from "../components/WorkSection";
import PackagesSection from "../components/PackagesSection";
import { useRef } from "react";

export default function Home() {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full overflow-x-hidden scroll-smooth text-white">
      <LandingSection contactSectionRef={contactSectionRef} />
      <AboutSection />
      <WorkSection />
      <PackagesSection />
      <ContactSection contactSectionRef={contactSectionRef} />
  </div>
  )
}
