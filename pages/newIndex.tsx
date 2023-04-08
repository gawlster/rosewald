import AboutSection from "../components/AboutSection";
import LandingSection from "../components/LandingSection";

export default function Home() {
  return <div className="w-full overflow-x-hidden scroll-smooth">
    <LandingSection />
    <AboutSection />
    {/* <WorkSection /> */}
    {/* <ContactSection /> */}
  </div>
}
