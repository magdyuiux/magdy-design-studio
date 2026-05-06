import AboutSection from "@/components/AboutSection";
import InteractiveQuizClient from "@/components/InteractiveQuizClient";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <InteractiveQuizClient />
        <AboutSection />
        <PortfolioSection
          id="portfolio"
          title="Selected Case Studies"
          intro="A tighter sample of product work focused on information hierarchy, user flows, and measurable business outcomes."
          projects={getFeaturedProjects()}
          viewAllHref="/projects"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
