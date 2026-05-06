"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    question: "What’s your biggest product priority right now?",
    options: [
      "Launch a new SaaS or product MVP",
      "Improve sign-ups or conversions",
      "Redesign a dashboard or key flow",
      "Upgrade overall UX quality",
      "Fix onboarding drop-offs",
      "Not sure yet",
    ],
  },
  {
    question: "Where do you feel the most friction?",
    options: [
      "Marketing / landing page",
      "Onboarding experience",
      "Dashboard complexity",
      "Mobile UX",
      "Design system consistency",
      "User retention",
    ],
  },
  {
    question: "How big is this project?",
    options: [
      "Small (one core flow)",
      "Medium (few flows)",
      "Large (full product)",
      "Scaling product",
      "Redesign system",
      "Not sure yet",
    ],
  },
];

export default function InteractiveQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    setSelected(option);

    setTimeout(() => {
      const updated = [...answers];
      updated[step] = option;
      setAnswers(updated);

      setSelected(null);

      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    }, 200);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
  };

  const getSuggestion = () => {
    const [priority, friction] = answers;

    if (priority?.includes("MVP")) {
      return "Start with defining a focused MVP scope and building clear core flows to validate your product quickly.";
    }

    if (friction?.includes("Landing")) {
      return "Focus on improving your landing page clarity and conversion flow to increase sign-ups.";
    }

    if (friction?.includes("Onboarding")) {
      return "Optimize onboarding to reduce drop-offs and help users reach value faster.";
    }

    if (friction?.includes("Dashboard")) {
      return "Simplify your dashboard structure and reduce cognitive load for better usability.";
    }

    return "Start with a quick UX audit to identify high-impact improvements in conversion and user flow.";
  };

  return (
    <section className="section-block">
      <div className="page-container max-w-3xl text-center">

        {step < steps.length ? (
          <>
            <h3 className="text-2xl font-semibold text-white mb-8">
              {steps[step].question}
            </h3>

            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {steps[step].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`surface-card rounded-2xl px-4 py-4 text-left transition-all duration-200
                  hover:scale-[1.02] hover:border-white/20
                  ${
                    selected === option
                      ? "border-white/40 bg-white/5"
                      : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface-card rounded-3xl p-8 text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Suggested direction
            </h3>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              {getSuggestion()}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="button-primary"
              >
                Continue to contact
              </button>

              <button
                onClick={reset}
                className="text-sm text-zinc-500 hover:text-white transition"
              >
                Restart
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}