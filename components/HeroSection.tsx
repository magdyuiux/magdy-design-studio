import Link from "next/link";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  { value: "11+", label: "Projects launched" },
  { value: "5", label: "Client teams served" },
  { value: "3+", label: "Years in product work" },
  { value: "+42%", label: "Best measured lift" },
];

export default function HeroSection() {
  return (
    <section id="home" className="section-block pt-32 md:pt-40">
      <div className="page-container">
        <div className="mx-auto max-w-5xl text-center">
          <span className="section-kicker">
            <span className="eyebrow-dot" />
            Available for selected freelance and product collaborations
          </span>

          <h1 className="section-title mt-6">
            Designing high-conversion digital products
          </h1>

          <p className="hero-copy">
            Mohammed Magdy is a UI/UX designer and frontend developer focused on sharper user journeys, cleaner
            interfaces, and product decisions that turn complexity into momentum.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="button-primary">
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#portfolio" className="button-secondary">
              See case studies
            </Link>
          </div>

          <div className="stat-grid mx-auto mt-14 max-w-4xl">
            {proofPoints.map((point) => (
              <div key={point.label} className="surface-card rounded-3xl p-5 text-left">
                <p className="text-3xl font-semibold tracking-tight text-white">{point.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
