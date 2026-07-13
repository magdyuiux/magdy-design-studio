"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  buildContactSubmissionPayload,
  canSubmitSubmission,
  initialContactFormValues,
  type ContactFormValues,
  type ValidationErrors,
  validateContactForm,
} from "@/lib/contact-form";
import { submitWeb3Forms } from "@/lib/web3forms";

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormValues>(initialContactFormValues);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors<keyof ContactFormValues>>({});
  const botGuardStartedAt = useRef(0);

  useEffect(() => {
    botGuardStartedAt.current = Date.now();
  }, []);

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setResponseMessage("");

    const nextErrors = validateContactForm(form);
    if (Date.now() - botGuardStartedAt.current < 2500) {
      nextErrors.botcheck = "Please wait a moment before submitting again.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setResponseMessage("Please review the highlighted fields and try again.");
      return;
    }

    const throttle = canSubmitSubmission("contact");
    if (!throttle.allowed) {
      setResponseMessage(`Please wait ${Math.ceil(throttle.retryAfterMs / 1000)} seconds before trying again.`);
      return;
    }

    try {
      setIsSubmitting(true);
      setResponseMessage("");

      await submitWeb3Forms(buildContactSubmissionPayload(form));

      setForm(initialContactFormValues);
      setErrors({});
      setResponseMessage("Thanks. Your project brief is in and I will reply soon.");
      botGuardStartedAt.current = Date.now();
    } catch (error) {
      setResponseMessage(error instanceof Error ? error.message : "Something went wrong while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-block">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Let&apos;s design the next growth step.</h2>
            <p className="section-copy !text-left !mx-0 !max-w-3xl">
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
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              value={form.botcheck}
              onChange={(event) => updateField("botcheck", event.target.value)}
              className="hidden"
              aria-hidden="true"
            />

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
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                ) : null}
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
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                ) : null}
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
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "contact-company-error" : undefined}
              />
              {errors.company ? (
                <p id="contact-company-error" className="mt-2 text-xs text-red-400">
                  {errors.company}
                </p>
              ) : null}
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
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message ? (
                <p id="contact-message-error" className="mt-2 text-xs text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary min-w-[220px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending project brief..." : "Send project brief"}
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
