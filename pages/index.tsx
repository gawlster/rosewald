import { useRef } from "react";
import AboutSection from "../components/AboutSection";
import BookingSection from "../components/BookingSection";
import ContactSection from "../components/ContactSection";
import LandingSection from "../components/LandingSection";
import PackagesSection from "../components/PackagesSection";
import WorkSection from "../components/WorkSection";

export default function Home() {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full overflow-x-hidden scroll-smooth text-white">
      <LandingSection contactSectionRef={contactSectionRef} />
      <AboutSection />
      <WorkSection />
      <PackagesSection />
      <BookingSection />
      <ContactSection contactSectionRef={contactSectionRef} />
    </div>
  );
}
