const capabilities = [
  {
    title: "Product strategy",
    copy: "Clarifying user problems, UX priorities, and product direction before pixels start multiplying.",
  },
  {
    title: "Conversion UX",
    copy: "Reducing friction in key flows so landing pages, onboarding, and checkout paths perform harder.",
  },
  {
    title: "Design systems",
    copy: "Creating reusable patterns that keep teams shipping faster without losing visual coherence.",
  },
  {
    title: "Frontend delivery",
    copy: "Translating design intent into polished interfaces with clean, maintainable React and Next.js code.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="page-container">
        <div className="max-w-3xl">
          <span className="section-kicker">About</span>
          <h2 className="section-title">Design decisions should move the product forward, not just make it prettier.</h2>
          <p className="section-copy">
            I work across UX, interface design, and frontend implementation with a bias toward product clarity and
            measurable outcomes. The goal is simple: help teams ship experiences that feel intentional, perform well,
            and make the next user action obvious.
          </p>
        </div>

        <div className="capability-grid mt-10">
          {capabilities.map((item) => (
            <article key={item.title} className="surface-card rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Capability</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
