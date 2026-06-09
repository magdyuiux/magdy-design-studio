import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

type CardSize = "small" | "medium" | "large";

type ProjectCardProps = {
  project: Project;
  size?: CardSize;
  compact?: boolean;
};

export default function ProjectCard({ project, size = "medium", compact = false }: ProjectCardProps) {
  const rootSizeClass = size === "large" ? "md:col-span-full" : "";
  const visualMinH = size === "large" ? "min-h-[420px]" : "min-h-[90px]";
  const titleSize = size === "large" ? "text-3xl" : "text-2xl";
  const panelGap = compact ? "gap-3" : "gap-4";
  const panelPadding = compact ? "p-3" : "p-4";
  const outcomeText = compact ? "text-base" : "text-lg";
  const scopeText = compact ? "text-sm leading-6" : "text-sm leading-7";
  const panelTopMargin = compact ? "mt-8" : "mt-8";
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group surface-card block rounded-[1.75rem] p-4 transition hover:-translate-y-1 hover:border-white/20 ${rootSizeClass}`}
    >
      <div className={`project-visual ${visualMinH} p-5`}>
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-300">
            {project.category}
          </span>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>

        <div className={`${panelTopMargin} grid ${panelGap}`}>
          <div className={`project-visual-panel rounded-2xl ${panelPadding}`}>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Outcome</p>
            <p className={`mt-2 ${outcomeText} font-semibold text-white`}>{project.results[0]}</p>
          </div>
          <div className={`project-visual-panel rounded-2xl ${panelPadding}`}>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Scope</p>
            <p className={`mt-2 ${scopeText} text-zinc-300`}>{project.role}</p>
          </div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <p className="text-sm text-zinc-500">{project.client}</p>
        <h3 className={`mt-2 ${titleSize} font-semibold tracking-tight text-white`}>{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{project.summary}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
          Read case study
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
