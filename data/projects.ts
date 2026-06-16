export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  features: string[];
  coverImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  nextProject?: {
    id: string;
    title: string;
    category: string;
  };
};

export const projectsData: Project[] = [
  {
    id: "ehsanlab",
    title: "EhsanLab - AI Product Studio",
    category: "SaaS marketing",
    year: "2026",
    client: "EhsanLab",
    role: "Product Designer (IA, UI system, marketing site, dashboard UX)",
    duration: "Focused portfolio case-study sprint",
    summary:
      "A premium SaaS case study that turns an early AI-generated concept into a cohesive marketing and product ecosystem for an AI consultancy.",
    liveUrl: "https://www.behance.net/gallery/251179753/EhsanLab-Modern-SaaS-QA-Platform-%28UX-Case-Study%29?platform=direct",
    challenge:
      "The original concept had an overloaded navigation model, unclear information architecture, and a generic SaaS feel that made the services, industries, proof, and dashboard story harder to scan.",
    solution:
      "I clarified the information architecture, extracted a reusable visual system, connected services and industries to proof, and designed a stronger Book a Call conversion flow that links the marketing website to the QA dashboard experience.",
    results: [
      "Reframed the experience around clear IA, service discovery, and conversion intent.",
      "Systemized marketing and dashboard UI with reusable tokens and components.",
      "Connected homepage proof metrics to the dashboard story for a stronger product ecosystem.",
    ],
    coverImage: "/projects/ehsanlab/cover.webp",
    technologies: [
      "Figma",
      "Information architecture",
      "Design systems",
      "SaaS marketing",
      "Dashboard UX",
      "Conversion design",
    ],
    features: [
      "Editorial case-study hero with a full-width desktop composition.",
      "Clarified navigation, footer, services, industries, and proof architecture.",
      "Tokenized design system for colors, type hierarchy, cards, buttons, inputs, and KPI modules.",
      "Featured case-study pattern instead of a repetitive case-study grid.",
      "Pricing and Book a Call flow designed around clear engagement models.",
      "QA dashboard view focused on KPI widgets and a bug board.",
    ],
    featured: true,
    nextProject: {
      id: "travel-app",
      title: "Travel Experience Platform",
      category: "Mobile product",
    },
  },

  {
    id: "solobook-onboarding",
    title: "SoloBook – Onboarding & First Invoice Activation Flow",
    category: "SaaS product",
    year: "2025",
    client: "Self-initiated concept for freelancers and solo founders",
    role: "Product Designer (UX, UI, flows)",
    duration: "3–5 day focused sprint",
    summary:
      "A lightweight onboarding and activation flow for a finance tool that helps freelancers send their first invoice in under 5 minutes.",
    challenge:
      "Most finance tools overwhelm new users with long setup, tooltip overload, and generic dashboards before they see any value. Freelancers and solo founders often drop off before sending their first invoice, which means no activation and no reason to come back.",
    solution:
      "I redesigned the first-run experience around one clear outcome: sending the first invoice. The flow starts with a goal-based welcome screen, collects only essential business details, guides users through creating a simple but real invoice, and ends on a contextual dashboard that reflects that first success and suggests confident next steps.",
    results: [
      "Modeled time to first invoice reduced from ~20–30 minutes of setup to under 5 minutes for a typical new user.",
      "Onboarding completion is designed to improve from ~40–50% to a targeted 75–80% through shorter, goal-based steps.",
      "A contextual post-onboarding dashboard replaces empty charts with a clear invoice status and guided next actions.",
    ],
    technologies: ["Figma", "UX Strategy", "Design systems", "SaaS onboarding"],
    features: [
      "Goal-based welcome screen that lets users choose 'Send my first invoice' as a clear first success.",
      "Minimal setup step that collects only essential business info with calm, supportive microcopy.",
      "First invoice creation flow designed to feel professional without overwhelming accounting complexity.",
      "Preview and send screen that builds confidence with a clear invoice preview and focused primary action.",
      "Post-onboarding dashboard that reflects the first invoice, shows status, and recommends next steps instead of generic empty charts.",
      "Bad onboarding comparison that contrasts traditional finance onboarding with SoloBook’s activation-first approach.",
    ],
    coverImage: "/projects/solobook/cover.png",
    liveUrl:
      "https://www.behance.net/gallery/251180129/SoloBook-UX-Case-Study",
    featured: true,
    nextProject: {
      id: "ehsanlab",
      title: "EhsanLab - AI Product Studio",
      category: "SaaS marketing",
    },
  },

  {
    id: "supportly-analytics-dashboard",
    title: "Supportly – Support Analytics Dashboard",
    category: "SaaS product",
    year: "2025",
    client: "Self-initiated concept for SaaS support teams",
    role: "Product Designer (UX, UI, flows)",
    duration: "1-week focused sprint",
    summary:
      "An AI-powered support analytics dashboard that turns a generic UI kit into a focused tool for support managers to spot urgent tickets, SLA risks, and agent performance in seconds.",
    challenge:
      "Support teams were drowning in disconnected ticket lists and noisy dashboards. Managers struggled to see which issues were truly urgent, how SLAs were trending, and which agents needed support without jumping between multiple views.",
    solution:
      "I defined a lean information architecture around three core screens—Overview, Tickets, and Agents—and redesigned the main dashboard using 80–90% of an existing SaaS UI kit. The layout prioritizes urgent KPIs, clear trends, and a clean tickets table, supported by a small design system for consistent cards, tables, and states.",
    results: [
      "Gave support managers a 10-second ‘morning health check’ via a focused Overview screen",
      "Reduced dashboard noise by limiting KPIs and grouping metrics into clear sections",
      "Created a reusable design system to extend Supportly without breaking visual consistency",
    ],
    technologies: ["Figma", "UX Strategy", "Design systems", "SaaS dashboard"],
    features: [
      "Overview dashboard with urgent KPIs and SLA insights",
      "Tickets workspace with empty/error states and focused filters",
      "Agent performance view for weekly coaching and trend analysis",
      "Information architecture and user flows for support managers",
      "Lightweight component system reusing 80–90% of the original UI kit",
    ],
    coverImage: "/projects/supportly/cover.jpg",
    liveUrl:
      "https://www.behance.net/gallery/249400427/Supportly-Customer-Support-Analytics-Dashboard",
    featured: true,
    nextProject: {
      id: "ecommerce-app",
      title: "Modern E-Commerce Mobile App",
      category: "Mobile product",
    },
  },
  {
    id: "travel-app",
    title: "Travel Experience Platform",
    category: "Mobile product",
    year: "2023",
    client: "Wanderlust Travel",
    role: "UI/UX Designer",
    duration: "5 months",
    summary:
      "A travel booking experience redesigned to help users discover and compare experiences with less search fatigue.",
    challenge:
      "Users were getting lost in noisy search results, unclear pricing, and fragmented booking steps. Discovery felt heavy, and conversion was suffering as a result.",
    solution:
      "I redesigned the discovery flow around intent, introduced better filtering and pricing clarity, and tightened the booking sequence so users could move from exploration to action with more confidence.",
    results: [
      "Simplified the path from discovery to booking",
      "Improved clarity of search and pricing states",
      "Built a more trustworthy travel browsing experience",
    ],
    technologies: [
      "Figma",
      "React Native",
      "Google Maps API",
      "Stripe",
      "Firebase",
    ],
    features: [
      "Map-led browsing",
      "Smarter filter controls",
      "Clearer booking flow",
      "Experience detail pages built for comparison",
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.wanderlust",
    nextProject: {
      id: "health-tracker",
      title: "Health and Wellness Tracker",
      category: "Product design",
    },
  },
  {
    id: "health-tracker",
    title: "Health and Wellness Tracker",
    category: "Product design",
    year: "2023",
    client: "HealthFirst Inc.",
    role: "Product Designer",
    duration: "6 months",
    summary:
      "A health tracking experience shaped to balance deeper insight with calmer day-to-day usability.",
    challenge:
      "Health apps in the category were either too shallow to be useful or so dense they became exhausting to use consistently. The product needed to feel supportive instead of overwhelming.",
    solution:
      "I built a clearer dashboard structure, improved the pacing of data reveal, and organized health metrics around habits and goals so users could understand progress without being hit with unnecessary complexity.",
    results: [
      "Balanced depth with calmer interface pacing",
      "Made progress tracking easier to understand",
      "Created space for future personalized insights",
    ],
    technologies: [
      "Figma",
      "React Native",
      "HealthKit",
      "Google Fit API",
      "Chart.js",
    ],
    features: [
      "Customizable health dashboard",
      "Integrated activity and sleep tracking",
      "Goal-focused progress summaries",
      "Habit and wellness planning tools",
    ],
    nextProject: {
      id: "design-system",
      title: "Enterprise Design System",
      category: "Design systems",
    },
  },
  {
    id: "design-system",
    title: "Enterprise Design System",
    category: "Design systems",
    year: "2022",
    client: "TechCorp Global",
    role: "Design System Lead",
    duration: "8 months",
    summary:
      "A shared design foundation created to align multiple product teams and reduce visual inconsistency across the company.",
    challenge:
      "The company had multiple products shipping with inconsistent components, duplicated patterns, and no unified system for design or frontend teams to work from.",
    solution:
      "I defined reusable component foundations, introduced documentation and contribution rules, and aligned design tokens with implementation needs so teams could scale without rebuilding the same UI repeatedly.",
    results: [
      "Standardized component usage across products",
      "Reduced design and frontend duplication",
      "Created a stronger shared source of truth",
    ],
    technologies: [
      "Storybook",
      "React",
      "TypeScript",
      "Figma",
      "Zeroheight",
    ],
    features: [
      "Reusable component library",
      "Tokenized visual system",
      "Documentation and contribution rules",
      "Accessibility guidance built into the system",
    ],
    githubUrl: "https://github.com/techcorp/design-system",
    nextProject: {
      id: "supportly-analytics-dashboard",
      title: "Supportly – Support Analytics Dashboard",
      category: "SaaS product",
    },
  },
];
