"use client";

import { useState, useTransition } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [responseMessage, setResponseMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResponseMessage("");

    startTransition(async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setResponseMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setResponseMessage(data.message ?? "Thanks. I will be in touch soon.");
      setForm(initialState);
    });
  }

  return (
    <section id="contact" className="section-block">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Let&apos;s design the next growth step.</h2>
            <p className="section-copy">
              Have a product, landing page, onboarding flow, or UX issue to solve? Send a short brief. I usually
              reply within 24 hours.
            </p>

            <div className="mt-8 space-y-4 text-sm text-zinc-400">
              <p>Email: magdyuiux@gmail.com</p>
              <p>Based in Egypt, working remotely with product teams across time zones.</p>
              <p>Best fit: SaaS, startup websites, dashboards, conversion UX, and design system work.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-zinc-400">Name</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="contact-field"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-zinc-400">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="contact-field"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-zinc-400">Company or product</span>
              <input
                type="text"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="contact-field"
                placeholder="Company name"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-zinc-400">Project brief</span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="contact-field"
                placeholder="What are you building, where is the friction, and what outcome do you want to improve?"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isPending}
                className="button-primary min-w-[220px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Sending project brief..." : "Send project brief"}
              </button>
              <p className="text-sm text-zinc-500">No long form needed. A concise overview is enough.</p>
            </div>

            {responseMessage ? (
              <p className="mt-4 text-sm text-zinc-300">{responseMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
