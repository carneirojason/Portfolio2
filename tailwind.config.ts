import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    // Card gradients (dynamic class names) – ensure all cards keep their colors
    "from-emerald-400/30",
    "to-cyan-400/30",
    "from-violet-400/30",
    "from-amber-400/30",
    "to-orange-400/30",
    "from-sky-400/30",
    "from-slate-400/25",
    "to-sky-400/30",
    "from-fuchsia-400/30",
    "from-rose-400/30",
    "to-amber-400/30",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        border: "var(--border)",
        "gradient-1": "var(--gradient-1)",
        "gradient-2": "var(--gradient-2)",
        "gradient-3": "var(--gradient-3)",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradientShift 6s ease infinite",
        "float": "float 5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
