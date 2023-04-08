import AboutSection from "../components/AboutSection";
import BookingSection from "../components/BookingSection";
import ContactSection from "../components/ContactSection";
import LandingSection from "../components/LandingSection";
import WorkSection from "../components/WorkSection";

export default function Home() {
  return <div className="w-full overflow-x-hidden scroll-smooth text-white">
    <LandingSection />
    <AboutSection />
    <WorkSection />
    <BookingSection />
    <ContactSection />
  </div>
}
