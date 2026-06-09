import AboutSection from "@/components/AboutSection";
import InteractiveQuizClient from "@/components/InteractiveQuizClient";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SelectedCaseStudies from "@/components/SelectedCaseStudies";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <InteractiveQuizClient />
        <AboutSection />
        <SelectedCaseStudies />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
