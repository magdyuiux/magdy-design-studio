import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/projects";

const selectedProjectIds = [
  "ehsanlab",
  "supportly-analytics-dashboard",
  "solobook-onboarding",
] as const;

const coverImages: Record<(typeof selectedProjectIds)[number], string> = {
  ehsanlab: "/projects/ehsanlab/cover.webp",
  "supportly-analytics-dashboard": "/projects/supportly/cover.jpg",
  "solobook-onboarding": "/projects/solobook/cover.png",
};

export default function SelectedCaseStudies() {
  const projects = selectedProjectIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section id="portfolio" className="section-block">
      <div className="page-container">
        <div className="max-w-3xl">
          <span className="section-kicker">Work</span>
          <h2 className="section-title">Selected Case Studies</h2>
          <p className="section-copy !text-left !mx-0 !max-w-3xl">
            A tighter sample of product work focused on information hierarchy, user flows, and measurable business outcomes.
          </p>
        </div>

        <div className="mt-10 space-y-14 md:space-y-18">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 0;
            const imageOrderClass = isImageLeft ? "md:order-1" : "md:order-2";
            const contentOrderClass = isImageLeft ? "md:order-2" : "md:order-1";

            return (
              <article key={project.id} className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
                <div
                  className={`${imageOrderClass} surface-card overflow-hidden rounded-3xl border border-white/5 md:w-[62%] md:max-h-[420px]`}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/image relative block w-full overflow-hidden"
                    aria-label={`View case study for ${project.title}`}
                  >
                    <Image
                      src={coverImages[project.id as keyof typeof coverImages]}
                      alt={`${project.title} cover`}
                      width={1400}
                      height={900}
                      className="w-full h-auto object-cover object-center transition duration-300 ease-out md:group-hover/image:scale-105"
                      sizes="(max-width: 768px) 100vw, 65vw"
                    />
                    <div className="absolute inset-0 bg-black/20 transition duration-300 ease-out md:bg-black/0 md:group-hover/image:bg-black/30" />
                    <div className="absolute inset-x-0 bottom-0 hidden items-end justify-between p-5 transition duration-300 ease-out md:flex md:opacity-0 md:group-hover/image:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white">
                        View case study
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>

                <div
                  className={`${contentOrderClass} surface-card flex flex-col rounded-3xl border border-white/5 p-6 md:w-[34%] md:px-6 md:py-4`}
                >
                  <div className="flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      {project.category} {"·"} {project.year}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-400">
                      {project.summary}
                    </p>

                    <div className="mt-6 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200">
                      <span className="mr-2 text-zinc-500">Primary outcome</span>
                      <span className="truncate">{project.results[0]}</span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition duration-300 ease-out hover:text-white hover:underline hover:underline-offset-4"
                    >
                      View case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
