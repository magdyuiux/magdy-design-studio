import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type PortfolioSectionProps = {
  id?: string;
  title: string;
  intro: string;
  projects: Project[];
  viewAllHref?: string;
};

export default function PortfolioSection({
  id,
  title,
  intro,
  projects,
  viewAllHref,
}: PortfolioSectionProps) {
  return (
    <section id={id} className="section-block">
      <div className="page-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">Work</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy !text-left !mx-0 !max-w-3xl">{intro}</p>
          </div>

          {viewAllHref ? (
            <Link href={viewAllHref} className="button-secondary w-fit">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="project-grid mt-10">
          {projects
            .filter((project) => project.id === "ehsanlab")
            .map((project) => (
              <ProjectCard key={project.id} project={project} size="large" compact />
            ))}
        </div>

        <div className="project-grid mt-6 grid-cols-1 md:grid-cols-2">
          {projects
            .filter((project) => project.id !== "ehsanlab")
            .map((project) => (
              <ProjectCard key={project.id} project={project} size="medium" compact />
            ))}
        </div>
      </div>
    </section>
  );
}
