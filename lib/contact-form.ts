export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
  botcheck: string;
};

export type ValidationErrors<T extends string> = Partial<Record<T, string>>;

const submissionCooldowns = new Map<string, number>();

export const initialContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  botcheck: "",
};

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateContactForm(values: ContactFormValues) {
  const errors: ValidationErrors<keyof ContactFormValues> = {};

  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  if (values.botcheck.trim()) errors.botcheck = "Spam check failed.";

  return errors;
}

export function canSubmitSubmission(key: string, cooldownMs = 4500) {
  const now = Date.now();
  const lastSubmission = submissionCooldowns.get(key) ?? 0;

  if (now - lastSubmission < cooldownMs) {
    return {
      allowed: false,
      retryAfterMs: cooldownMs - (now - lastSubmission),
    };
  }

  submissionCooldowns.set(key, now);
  return {
    allowed: true,
    retryAfterMs: 0,
  };
}

export function buildContactSubmissionPayload(values: ContactFormValues) {
  const companyLine = `Company: ${values.company.trim()}`;
  return {
    subject: "New Contact Form Submission - Magdy Design Studio",
    from_name: "Magdy Design Studio Website",
    replyto: values.email.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    company: values.company.trim(),
    message: `${companyLine}\n\n${values.message.trim()}`,
    botcheck: values.botcheck.trim(),
  };
}
