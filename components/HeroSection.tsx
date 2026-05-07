"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const proofPoints = [
  { value: "11+", label: "Projects launched" },
  { value: "5", label: "Client teams served" },
  { value: "3+", label: "Years in product work" },
  { value: "+42%", label: "Best measured lift" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section id="home" className="section-block pt-32 md:pt-40">
      <div className="page-container">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Kicker */}
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="section-kicker"
          >
            <span className="eyebrow-dot" />
            Available for selected freelance and product collaborations
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="section-title mt-6"
          >
            Designing high-conversion digital products
          </motion.h1>

          {/* Copy */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="hero-copy"
          >
            Mohammed Magdy is a UI/UX designer and frontend developer focused
            on sharper user journeys, cleaner interfaces, and product decisions
            that turn complexity into momentum.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="#contact" className="button-primary group">
              Book a discovery call

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link href="#portfolio" className="button-secondary group">
              See case studies

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="stat-grid mx-auto mt-14 max-w-4xl"
          >
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="surface-card stat-card rounded-3xl p-5 text-left"
              >
                <p className="text-3xl font-semibold tracking-tight text-white">
                  {point.value}
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  {point.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}