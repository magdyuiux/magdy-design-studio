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
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    category: "SaaS product",
    year: "2023",
    client: "FinTech Solutions Inc.",
    role: "Lead UI/UX Designer",
    duration: "3 months",
    summary:
      "A financial dashboard redesigned to make dense real-time reporting readable for non-technical teams and executives.",
    challenge:
      "The platform was aggregating complex financial data from multiple sources, but users struggled to understand what mattered at a glance. Key insights were buried inside cluttered widgets and weak hierarchy.",
    solution:
      "I restructured the information architecture around decision-making moments, grouped metrics into clear modules, simplified comparison states, and introduced a dashboard system that could flex for different user roles without losing clarity.",
    results: [
      "Reduced time-to-insight for core dashboards",
      "Improved executive scanability across reporting views",
      "Created a modular system for future dashboard expansion",
    ],
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Modular dashboard layout",
      "Real-time financial data visualization",
      "Role-based reporting views",
      "Export-ready summaries for stakeholders",
    ],
    liveUrl: "https://fintech-demo.magdy.design",
    githubUrl: "https://github.com/yourusername/fintech-dashboard",
    featured: true,
    nextProject: {
      id: "ecommerce-app",
      title: "Modern E-Commerce Mobile App",
      category: "Mobile product",
    },
  },
  {
    id: "ecommerce-app",
    title: "Modern E-Commerce Mobile App",
    category: "Mobile product",
    year: "2024",
    client: "ShopEasy Retail",
    role: "Product Designer and UX Researcher",
    duration: "4 months",
    summary:
      "A mobile commerce experience rebuilt around faster product discovery and a cleaner checkout flow.",
    challenge:
      "The existing app was losing revenue through high cart abandonment and weak retention. Users had difficulty scanning products, trusting pricing, and finishing checkout without friction.",
    solution:
      "I mapped the main drop-off points, simplified the purchase flow, tightened the visual hierarchy on product pages, and introduced a faster decision path with clearer actions, fewer interruptions, and more relevant recommendations.",
    results: [
      "Targeted the highest-friction checkout moments",
      "Made product discovery faster on small screens",
      "Improved clarity around pricing and purchase actions",
    ],
    technologies: ["Figma", "React Native", "Hotjar", "Google Analytics", "Firebase"],
    features: [
      "One-tap checkout path",
      "Smarter product discovery",
      "Wishlist and save-for-later flows",
      "Integrated order tracking",
    ],
    liveUrl: "https://apps.apple.com/app/shop-easy",
    featured: true,
    nextProject: {
      id: "ai-saas",
      title: "AI Content Creation Platform",
      category: "Marketing website",
    },
  },
  {
    id: "ai-saas",
    title: "AI Content Creation Platform",
    category: "Marketing website",
    year: "2024",
    client: "NeuroTech AI",
    role: "Web Designer and Frontend Developer",
    duration: "2 months",
    summary:
      "A conversion-led landing experience built to explain a new AI product faster and reduce bounce from unclear positioning.",
    challenge:
      "The landing page was failing to communicate product value quickly enough. Visitors were dropping before they understood the offer, which made acquisition spend less efficient.",
    solution:
      "I rebuilt the hero hierarchy, added clearer product framing, introduced stronger proof and demo touchpoints, and organized the page around a simpler conversion path that reduced hesitation at each scroll depth.",
    results: [
      "+42% lift in landing-page conversions",
      "Clearer product understanding in the first screen",
      "Stronger CTA progression across the page",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Vercel Analytics", "A/B testing"],
    features: [
      "Hero section rewritten around value clarity",
      "Demo-led product explanation",
      "Stronger social proof placement",
      "Experiment-ready CTA architecture",
    ],
    liveUrl: "https://neurotech-ai.com",
    githubUrl: "https://github.com/yourusername/ai-saas-platform",
    featured: true,
    nextProject: {
      id: "travel-app",
      title: "Travel Experience Platform",
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
    technologies: ["Figma", "React Native", "Google Maps API", "Stripe", "Firebase"],
    features: [
      "Map-led browsing",
      "Smarter filter controls",
      "Clearer booking flow",
      "Experience detail pages built for comparison",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.wanderlust",
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
    technologies: ["Figma", "React Native", "HealthKit", "Google Fit API", "Chart.js"],
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
    technologies: ["Storybook", "React", "TypeScript", "Figma", "Zeroheight"],
    features: [
      "Reusable component library",
      "Tokenized visual system",
      "Documentation and contribution rules",
      "Accessibility guidance built into the system",
    ],
    githubUrl: "https://github.com/techcorp/design-system",
    nextProject: {
      id: "fintech-dashboard",
      title: "FinTech Analytics Dashboard",
      category: "SaaS product",
    },
  },
];
