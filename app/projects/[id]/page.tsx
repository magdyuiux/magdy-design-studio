import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProjectById, projectsData } from "@/lib/projects";
import Image from "next/image";
import type { Project } from "@/data/projects";
import type { ReactNode } from "react";

const ehsanLabAssetPath = "/projects/ehsanlab";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

function CaseStudyImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  caption,
  priority,
  className = "",
  imageClassName = "aspect-[16/9] object-cover",
}: CaseStudyImageProps) {
  return (
    <figure
      className={`overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#f6f7fb] shadow-[0_24px_80px_rgba(0,0,0,0.38)] ring-1 ring-black/20 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 1120px, calc(100vw - 2rem)"
        className={`h-full w-full ${imageClassName}`}
      />
      {caption ? (
        <figcaption className="border-t border-black/10 px-5 py-3 text-xs leading-6 text-zinc-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type EhsanTextBlockProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
};

function EhsanTextBlock({ kicker, title, children }: EhsanTextBlockProps) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-zinc-300">
        {children}
      </div>
    </div>
  );
}

function EhsanLabCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section id="ehsanlab-overview-hero" className="pt-2">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
          <div>
            <h1 className="section-title text-left">{project.title}</h1>
            <p className="section-copy mt-5 !mx-0 !max-w-3xl !text-left">
              EhsanLab is a modern QA, DevOps, and security testing platform designed for SaaS and enterprise teams. This case study covers the end-to-end experience, from information architecture and service discovery to conversion-focused marketing pages and a QA dashboard concept.
            </p>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-zinc-100">
              Focus: Information Architecture, Design Systems, Conversion Optimization, and the connection between marketing and product experiences.
            </p>
            {project.liveUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Live preview
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>

          <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Role</p>
                <p className="mt-2 text-sm leading-6 text-zinc-100">{project.role}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Scope</p>
                <p className="mt-2 text-sm leading-6 text-zinc-100">Marketing site, dashboard UX, system components</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CaseStudyImage
          src={`${ehsanLabAssetPath}/ehsanlab-hero-desktop.webp`}
          alt="EhsanLab desktop hero experience"
          width={1800}
          height={1012}
          priority
          className="mt-12"
          imageClassName="aspect-[3754/1712] object-cover"
        />
      </section>

      <section id="ehsanlab-problem-ia" className="mt-28 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <EhsanTextBlock kicker="Problem and IA" title="Turning a generic SaaS shell into a clearer product story.">
          <p>
            The original direction had an overloaded navigation system, unclear information architecture, and a familiar SaaS rhythm that made EhsanLab feel less distinctive than the offer required.
          </p>
          <div>
            <p className="font-semibold text-white">Goals</p>
            <ul className="muted-list mt-3">
              <li>Clarify the navigation and page hierarchy.</li>
              <li>Connect services with industries and proof points.</li>
              <li>Create a stronger Book a Call flow for conversion.</li>
              <li>Link the marketing website to the QA dashboard story.</li>
            </ul>
          </div>
        </EhsanTextBlock>

        <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr] lg:grid-cols-1">
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-header-nav.webp`}
            alt="EhsanLab header and navigation close-up"
            width={1400}
            height={720}
            caption="Header and navigation close-up: fewer decisions, clearer scan path."
            imageClassName="aspect-[300/3] object-cover object-left"
          />
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-footer.webp`}
            alt="EhsanLab footer crop"
            width={1200}
            height={700}
            caption="Footer crop: supporting links and conversion context without visual weight."
            imageClassName="aspect-[1470/606] object-cover"
          />
        </div>
      </section>

      <section id="ehsanlab-design-system" className="mt-28">
        <EhsanTextBlock kicker="Design system" title="Theme tokens and reusable components for marketing and dashboard surfaces.">
          <p>
            I extracted colors, type hierarchy, spacing, radius, and component decisions into Figma styles so the experience could stay coherent across editorial sections, pricing cards, dashboard widgets, inputs, and proof modules.
          </p>
        </EhsanTextBlock>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-colors.webp`}
            alt="EhsanLab color palette"
            width={1200}
            height={760}
            caption="Color tokens for premium contrast, accents, and interface states."
            imageClassName="aspect-[1872/857] object-cover"
          />
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-typography.webp`}
            alt="EhsanLab typography hierarchy"
            width={1200}
            height={760}
            caption="Type hierarchy tuned for editorial scanning and dashboard clarity."
            imageClassName="aspect-[1864/855] object-cover"
          />
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-components.webp`}
            alt="EhsanLab component sheet"
            width={1600}
            height={950}
            caption="Reusable components: buttons, cards, inputs, KPI modules, and dashboard primitives."
            className="lg:col-span-2"
            imageClassName="aspect-[1872/859] object-cover"
          />
        </div>
      </section>

      <section id="ehsanlab-marketing-experience" className="mt-28">
        <EhsanTextBlock kicker="Marketing experience" title="Services, industries, and proof arranged for faster decision-making.">
          <p>
            The services grid makes the offer legible at a glance, while the results strip and industry cards show momentum and vertical expertise without turning the page into a repetitive card wall.
          </p>
        </EhsanTextBlock>

        <CaseStudyImage
          src={`${ehsanLabAssetPath}/ehsanlab-services-grid.webp`}
          alt="EhsanLab services grid"
          width={1800}
          height={1000}
          className="mt-10"
          imageClassName="aspect-[1864/801] object-cover"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
          <div>
            <EhsanTextBlock kicker="Structure" title="Services are grouped around business outcomes"></EhsanTextBlock>
            <p className="mt-4 text-base leading-8 text-zinc-300 font-bold">
             then reinforced by metrics and industry applications. Additional case studies follow the same compact structure instead of appearing here as a full grid.
            </p>
          
          </div>
          <div className="grid gap-5">
            <CaseStudyImage
              src={`${ehsanLabAssetPath}/ehsanlab-proven-results.webp`}
              alt="EhsanLab proven results metrics"
              width={1300}
              height={820}
              caption="Proof strip with concise outcome metrics."
              imageClassName="aspect-[1882/794] object-cover"
            />
            <CaseStudyImage
              src={`${ehsanLabAssetPath}/ehsanlab-industry-cards.webp`}
              alt="EhsanLab industry cards"
              width={1300}
              height={820}
              caption="Industry cards that connect expertise to concrete use cases."
              imageClassName="aspect-[1876/796] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="ehsanlab-featured-case-study" className="mt-28 grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center">
        <EhsanTextBlock kicker="Featured case study" title="One deeper story, not another grid.">
          <p>
            The featured CloudSync-style story gives recruiters and clients one focused narrative: the challenge, the AI-assisted approach, and the metrics that make the work feel grounded.
          </p>
          <p>
            Additional case studies follow the same structure elsewhere, but this page keeps the rhythm curated and editorial.
          </p>
        </EhsanTextBlock>
        <CaseStudyImage
          src={`${ehsanLabAssetPath}/ehsanlab-featured-case-study.webp`}
          alt="EhsanLab featured case study"
          width={1500}
          height={920}
          imageClassName="aspect-[1866/801] object-cover"
        />
      </section>

      <section id="ehsanlab-pricing-conversion" className="mt-28">
        <EhsanTextBlock kicker="Pricing and conversion" title="Engagement models built around clarity and action.">
          <p>
            Pricing cards separate engagement options clearly, while the conversion pattern keeps one primary route forward: Book a Call. Secondary contact and strategy form paths support visitors who need more context before committing.
          </p>
        </EhsanTextBlock>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-pricing-cards.webp`}
            alt="EhsanLab pricing cards"
            width={1400}
            height={900}
            caption="Pricing cards clarify engagement models and reduce comparison friction."
            imageClassName="aspect-[1884/810] object-cover"
          />
          <CaseStudyImage
            src={`${ehsanLabAssetPath}/ehsanlab-book-a-call.webp`}
            alt="EhsanLab Book a Call and contact strategy block"
            width={1400}
            height={900}
            caption="Primary Book a Call route with supporting contact and strategy capture."
            imageClassName="aspect-[1601/802] object-cover"
          />
        </div>
      </section>

      <section id="ehsanlab-dashboard" className="mt-28">
        <EhsanTextBlock kicker="Dashboard experience" title="A QA dashboard that makes marketing proof feel product-backed.">
          <p>
            The dashboard focuses on KPI widgets and a bug board, giving the homepage metrics a product counterpart. It connects release quality, QA status, and delivery confidence into one ecosystem instead of presenting disconnected dashboard views.
          </p>
        </EhsanTextBlock>
        <CaseStudyImage
          src={`${ehsanLabAssetPath}/ehsanlab-dashboard-kpi-bugboard.webp`}
          alt="EhsanLab dashboard KPI widgets and bug board"
          width={1800}
          height={1000}
          className="mt-10"
          imageClassName="aspect-[1513/521] object-cover"
        />
      </section>

      <section id="ehsanlab-reflection" className="mt-28 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.45fr)] lg:items-center">
        <EhsanTextBlock kicker="Reflection" title="From AI output to a system-driven case study.">
          <p>
            The strongest improvement was turning a broad AI/Figma Make output into a clearer product narrative. The final direction systemizes the visual language, simplifies IA, strengthens conversion, and connects the marketing experience with the dashboard ecosystem.
          </p>
        </EhsanTextBlock>
        <div className="surface-card rounded-[1.75rem] p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Outcome</p>
          <p className="mt-4 text-2xl font-semibold leading-9 text-white">
            Premium, UX-focused, conversion-led, and easier to scan.
          </p>
        </div>
      </section>

      <div className="mt-16 hidden">
        {project.nextProject ? (
          <Link
            href={`/projects/${project.nextProject.id}`}
            className="surface-card block rounded-3xl p-6 transition hover:border-white/20"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
              Next case study
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              {project.nextProject.title}
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              {project.nextProject.category}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-200">
              Open project
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ) : null}
      </div>

    </>
  );
}

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

  const isSupportly = project.id === "supportly-analytics-dashboard";
  const isSoloBook = project.id === "solobook-onboarding";
  const isEhsanLab = project.id === "ehsanlab";

  if (isEhsanLab) {
    return (
      <div className="site-shell">
        <Navbar />
        <main className="section-block pt-32">
          <div className="page-container">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>

            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-200">
                {project.category}
              </span>
              <span>{project.year}</span>
              <span>{project.client}</span>
              <span>{project.duration}</span>
            </div>

            <EhsanLabCaseStudy project={project} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main className="section-block pt-32">
        <div className="page-container">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-1 text-zinc-200">
              {project.category}
            </span>
            <span>{project.year}</span>
            <span>{project.client}</span>
            <span>{project.duration}</span>
          </div>

          {isSupportly ? (
            <>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
                <div>
                  <h1 className="section-title text-left">{project.title}</h1>
                  <p className="section-copy mt-3 !mx-0 !max-w-none !text-left">
                    {project.summary}
                  </p>

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
                </div>

                <div>
                  <p className="mb-4 text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Hero preview
                  </p>

                  <div className="overflow-hidden rounded-3xl border border-white/5">
                    <Image
                      src="/projects/supportly/cover.jpg"
                      alt="Supportly case study cover"
                      width={1600}
                      height={1000}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Outcome / impact cards */}
              <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
                {project.results.map((result, index) => (
                  <div
                    key={result}
                    className="project-visual-panel flex h-full flex-col rounded-2xl p-6 md:min-h-[220px]"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                      {index === 0 ? "Primary activation outcome" : "UX result"}
                    </p>
                    <p className="mt-4 text-xl font-semibold text-white">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={`grid gap-8 lg:items-start ${isSoloBook ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]' : 'lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]'}`}>
                <div>
                  <h1 className="section-title text-left">{project.title}</h1>
                  <p className="section-copy mt-3 !mx-0 !max-w-none !text-left">
                    {project.summary}
                  </p>
                  {isSoloBook && (
                    <p className="mt-3 text-sm text-zinc-400">
                      Designed as a focused, 3–5 day sprint to prove activation-first thinking for modern SaaS products.
                    </p>
                  )}

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
                </div>

                {(isSupportly || isSoloBook) && (
                  <div className="mt-8">
                    <p className="mb-4 text-sm uppercase tracking-[0.22em] text-zinc-500">
                      Hero preview
                    </p>

                    <div className="overflow-hidden rounded-3xl border border-white/5">
                      <Image
                        src={isSoloBook ? "/projects/solobook/cover.png" : "/projects/supportly/cover.jpg"}
                        alt={
                          isSoloBook
                            ? "SoloBook onboarding case study cover"
                            : "Supportly case study cover"
                        }
                        width={3168}
                        height={1783}
                        className="h-auto w-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}

              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
                {project.results.map((result, index) => (
                  <div
                    key={result}
                    className="project-visual-panel flex h-full flex-col rounded-2xl p-6 md:min-h-[220px]"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                      {index === 0 ? "Primary activation outcome" : "UX result"}
                    </p>
                    <p
                      className="mt-4 font-semibold text-white text-xl"
                    >
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Supportly screens gallery – only for Supportly */}
          {isSupportly && (
            <div className="mt-12 space-y-8">
              <section className="surface-card rounded-3xl p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Product screens
                </p>
                <p className="mt-3 text-sm text-zinc-400">
                  A focused set of views: Overview, Tickets workspace, Agent
                  analytics, plus IA & design system snapshots.
                </p>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/supportly/overview.jpg"
                      alt="Supportly overview dashboard"
                      width={1440}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Overview – urgent KPIs, SLA trend, and latest tickets.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/supportly/tickets.jpg"
                      alt="Supportly tickets workspace"
                      width={1440}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Tickets – triage workspace with filters and empty state.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/supportly/agents.jpg"
                      alt="Supportly agent analytics"
                      width={1440}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Agent analytics – performance trends and SLA compliance.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/supportly/flow.jpg"
                      alt="Supportly IA and key flows"
                      width={1440}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      IA & key flows – daily support check and agent review.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
                  <Image
                    src="/projects/supportly/system.jpg"
                    alt="Supportly mini design system"
                    width={1440}
                    height={900}
                    className="w-full object-cover"
                  />
                  <p className="p-3 text-xs text-zinc-400">
                    Lightweight design system – color tokens, type scale, and
                    key components reusing 80–90% of the original kit.
                  </p>
                </div>
              </section>
            </div>
          )}

          {isSoloBook && (
            <div className="mt-12 space-y-8">
              <section className="surface-card rounded-3xl p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Product screens
                </p>
                <p className="mt-3 text-sm text-zinc-400">
                  A goal-based activation journey: from choosing a first goal, through minimal setup and first invoice, to a contextual dashboard after success.
                </p>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/outcomes.png"
                      alt="SoloBook modeled outcomes"
                      width={1920}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Modeled outcomes – time to first invoice, completion rate, and reduced drop-off for new users.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/flow.png"
                      alt="SoloBook onboarding and activation flow"
                      width={1920}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Activation flow – a 6-step path from welcome to first invoice and a meaningful dashboard.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/welcome.png"
                      alt="SoloBook goal-based welcome screen"
                      width={1920}
                      height={905}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Welcome – goal-based onboarding that highlights “Send my first invoice” as the recommended first success.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/setup.png"
                      alt="SoloBook minimal business setup"
                      width={1920}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Minimal setup – only essential business details, with calm microcopy to reduce onboarding fatigue.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/first-invoice.png"
                      alt="SoloBook first invoice creation screen"
                      width={1920}
                      height={902}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      First invoice – a simple, real invoice flow that avoids accounting overload while feeling professional.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/preview.png"
                      alt="SoloBook invoice preview and send"
                      width={1920}
                      height={900}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Preview & send – confidence-building preview with a clear primary action and a safe “Edit details” escape.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/successfully-invoice.png"
                      alt="SoloBook first invoice success state"
                      width={1920}
                      height={909}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Success state – confirming the invoice was sent and guiding users to view status or create another invoice.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-white/5">
                    <Image
                      src="/projects/solobook/dashboard.png"
                      alt="SoloBook contextual dashboard after first invoice"
                      width={1920}
                      height={909}
                      className="w-full object-cover"
                    />
                    <figcaption className="p-3 text-xs text-zinc-400">
                      Contextual dashboard – a low-data view centered on the sent invoice, with guided next actions and purposeful empty states.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
                  <Image
                    src="/projects/solobook/comparison.png"
                    alt="SoloBook bad onboarding comparison"
                    width={1920}
                    height={1202}
                    className="w-full object-cover"
                  />
                  <p className="p-3 text-xs text-zinc-400">
                    Bad onboarding comparison – traditional finance onboarding vs SoloBook’s activation-first, goal-based experience.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* Challenge & Approach */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                Challenge
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                {project.challenge}
              </p>
            </section>

            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                Approach
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Features + What this project proves */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                Key features
              </p>
              <ul className="muted-list mt-5">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="surface-card rounded-3xl p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                What this project proves
              </p>
              <ul className="muted-list mt-5">
                <li>Clear product framing for users and stakeholders.</li>
                <li>Interface decisions tied to business outcomes, not decoration.</li>
                <li>Frontend execution that keeps the design system coherent.</li>
              </ul>
            </section>
          </div>

          {!isSupportly && (
            <div className="mt-12 space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <section className="surface-card rounded-3xl p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Project snapshot
                  </p>
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
                </section>

                <section className="surface-card rounded-3xl p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Technology and tools
                  </p>
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
                </section>
              </div>

              {project.nextProject ? (
                <Link
                  href={`/projects/${project.nextProject.id}`}
                  className="surface-card block rounded-3xl p-6 transition hover:border-white/20"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Next case study
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {project.nextProject.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {project.nextProject.category}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-200">
                    Open project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ) : null}
            </div>
          )}

          {isSupportly && (
            <div className="mt-12 space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
              <section className="surface-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Project snapshot
                </p>
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
              </section>

              <section className="surface-card rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Technology and tools
                </p>
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
              </section>
              </div>
              {project.nextProject ? (
                <Link
                  href={`/projects/${project.nextProject.id}`}
                  className="surface-card block rounded-3xl p-6 transition hover:border-white/20"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                    Next case study
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {project.nextProject.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {project.nextProject.category}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-200">
                    Open project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
