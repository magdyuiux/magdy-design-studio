"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type ProjectsExplorerProps = {
  categories: string[];
  projects: Project[];
};

export default function ProjectsExplorer({
  categories,
  projects,
}: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="page-container mt-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                isActive
                  ? "rounded-full border border-transparent bg-white px-4 py-2 text-sm font-medium text-black"
                  : "rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="project-grid mt-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
