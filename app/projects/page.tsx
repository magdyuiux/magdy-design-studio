import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { getProjectCategories, projectsData } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="section-block pt-32">
        <div className="page-container">
          <span className="section-kicker">All work</span>
          <h1 className="section-title max-w-4xl">Case studies built for product teams that care about clarity and growth.</h1>
          <p className="section-copy">
            Browse work across SaaS, ecommerce, mobile, and design systems. Each project is structured around the
            problem, the product decisions, and the outcome it was designed to improve.
          </p>
        </div>

        <ProjectsExplorer
          categories={getProjectCategories()}
          projects={projectsData}
        />
      </main>
      <Footer />
    </div>
  );
}
