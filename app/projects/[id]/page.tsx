import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProjectById, projectsData } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: String(project.id),
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main className="section-block pt-32">
        <div className="page-container">
          <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-200">{project.category}</span>
            <span>{project.year}</span>
            <span>{project.client}</span>
            <span>{project.duration}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] lg:items-start">
            <div>
              <h1 className="section-title max-w-4xl">{project.title}</h1>
              <p className="section-copy max-w-3xl">{project.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary"
                  >
                    Live preview
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    View code
                    <Github className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div className="project-visual mt-10 p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1.25fr)_220px]">
                  <div className="project-visual-panel rounded-2xl p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Primary outcome</p>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{project.results[0]}</p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                      {project.solution}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {project.results.slice(1, 3).map((result) => (
                      <div key={result} className="project-visual-panel rounded-2xl p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Result</p>
                        <p className="mt-2 text-lg font-medium text-white">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="surface-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Project snapshot</p>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-sm text-zinc-500">Role</dt>
                    <dd className="mt-1 text-zinc-100">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-zinc-500">Client</dt>
                    <dd className="mt-1 text-zinc-100">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-zinc-500">Duration</dt>
                    <dd className="mt-1 text-zinc-100">{project.duration}</dd>
                  </div>
                </dl>
              </div>

              <div className="surface-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Technology and tools</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.nextProject ? (
                <Link
                  href={`/projects/${project.nextProject.id}`}
                  className="surface-card block rounded-3xl p-6 transition hover:border-white/20"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Next case study</p>
                  <p className="mt-3 text-xl font-semibold text-white">{project.nextProject.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">{project.nextProject.category}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-200">
                    Open project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ) : null}
            </aside>
          </div>

          <div className="results-grid mt-12">
            {project.results.map((result) => (
              <div key={result} className="surface-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Measured impact</p>
                <p className="mt-3 text-xl font-semibold text-white">{result}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Challenge</p>
              <p className="mt-4 text-base leading-8 text-zinc-300">{project.challenge}</p>
            </section>

            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Approach</p>
              <p className="mt-4 text-base leading-8 text-zinc-300">{project.solution}</p>
            </section>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Key features</p>
              <ul className="muted-list mt-5">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">What this project proves</p>
              <ul className="muted-list mt-5">
                <li>Clear product framing for users and stakeholders.</li>
                <li>Interface decisions tied to business outcomes, not decoration.</li>
                <li>Frontend execution that keeps the design system coherent.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
