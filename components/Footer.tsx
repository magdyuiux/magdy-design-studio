import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/magdyuiux",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammedmagdy-uiuxdesigner",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:magdyuiux@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="page-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">Mohammed Magdy</p>
          <p className="mt-2 max-w-xl text-sm text-zinc-500">
            UI/UX designer and frontend developer focused on conversion-driven product experiences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-white/20 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
