import { projectsData } from "@/data/projects";

export { projectsData };

export function getFeaturedProjects() {
  return projectsData.filter((project) => project.featured).slice(0, 3);
}

export function getProjectCategories() {
  return ["All", ...new Set(projectsData.map((project) => project.category))];
}

export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}
