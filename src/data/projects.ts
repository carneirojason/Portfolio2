export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  role?: string;
  tags: string[];
  href?: string;
  /** "founder" = products I've founded; "work" = professional & collaborative work */
  section: "founder" | "work";
  /** Gradient for card: "from-XXX to-YYY" (Tailwind from/to classes) - both must be listed in tailwind safelist */
  gradient: string;
  /** Client/customer (displayed prominently on work section cards) */
  customer?: string;
}

export const projects: Project[] = [
  {
    id: "sweet-spot",
    title: "Sweet Spot",
    tagline: "Tennis app powered by AI",
    category: "Product · Founder",
    role: "Founder",
    tags: ["Flutter", "Firebase", "Riverpod", "AI", "Google Play"],
    section: "founder",
    gradient: "from-emerald-400/30 to-cyan-400/30",
  },
  {
    id: "price-signal",
    title: "Price Signal",
    tagline: "Competitive pricing monitoring SaaS",
    category: "Product · Founder",
    role: "Founder",
    tags: ["Next.js", "Stripe", "Supabase", "AI Extraction", "B2B SaaS"],
    section: "founder",
    gradient: "from-violet-400/30 to-cyan-400/30",
  },
  {
    id: "satellite-imaging",
    title: "Advanced Satellite Imaging System Optimization",
    tagline: "Optimization of advanced satellite imaging systems",
    category: "Engineering",
    tags: ["Reinforcement Learning", "CNN", "Model Compression", "Python"],
    section: "work",
    gradient: "from-amber-400/30 to-orange-400/30",
    customer: "Thales",
  },
  {
    id: "landing-time",
    title: "Precision Landing Time Prediction",
    tagline: "Aircraft landing time prediction",
    category: "Engineering",
    tags: ["XGBoost", "LSTM", "AWS", "Deep Learning", "Time Series"],
    section: "work",
    gradient: "from-sky-400/30 to-cyan-400/30",
    customer: "Airbus",
  },
  {
    id: "rafale",
    title: "Rafale Flight Data & Structural Simulation",
    tagline: "Flight data analysis and structural mechanical damage simulation",
    category: "Engineering",
    tags: ["Data Modeling", "Numerical Methods", "Simulation", "PostgreSQL"],
    section: "work",
    gradient: "from-slate-400/25 to-sky-400/30",
    customer: "French Army",
  },
  {
    id: "timeseries-xai",
    title: "Time Series & XAI",
    tagline: "Multivariate approaches using unsupervised learning",
    category: "Research",
    tags: ["Matrix Profile", "Autoencoders", "XAI", "Deep Learning"],
    section: "work",
    gradient: "from-fuchsia-400/30 to-cyan-400/30",
    customer: "Private French energy company",
  },
  {
    id: "nutricuisine",
    title: "NutriCuisine",
    tagline: "Personalized meal planning",
    category: "Product",
    tags: ["Web Scraping", "NLP", "Streamlit", "Neural Networks"],
    section: "work",
    gradient: "from-rose-400/30 to-amber-400/30",
    customer: "Marmiton",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
