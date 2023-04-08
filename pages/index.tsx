import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import LandingSection from "../components/LandingSection";
import WorkSection from "../components/WorkSection";
import PackagesSection from "../components/PackagesSection";

export default function Home() {
  return <div className="w-full overflow-x-hidden scroll-smooth text-white">
    <LandingSection />
    <AboutSection />
    <WorkSection />
    <PackagesSection />
    <ContactSection />
  </div>
}
