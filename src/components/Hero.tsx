"use client";

import { motion } from "framer-motion";

const ROLES = "Data Engineer · ML Engineer · Software & AI Engineer";

const MARQUEE_ITEMS = [
  "Data pipelines",
  "Machine learning",
  "AI systems",
  "Optimization",
  "Aerospace",
  "SaaS",
  "Python",
  "Cloud",
  "APIs",
  "Time series",
  "XAI",
  "Data science",
  "Simulation",
  "Startups",
  "B2B",
  "MLOps",
  "ETL",
  "Distributed systems",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center px-4 pt-20 sm:px-6 sm:pt-24 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-500/20 blur-[120px]"
          animate={{
            x: ["-50%", "-48%", "-50%"],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px]"
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[80px]"
          animate={{
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Centered content - takes remaining space so "Explore work" stays visible */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-4xl mx-auto text-center min-w-0 min-h-0 py-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight break-words"
        >
          <span className="gradient-text bg-[length:200%_auto] animate-gradient-shift">
            My Portfolio
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 sm:mt-6 font-body text-base sm:text-lg md:text-xl text-foreground-muted text-balance"
        >
          {ROLES}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 font-body text-foreground-muted/90 max-w-xl mx-auto leading-relaxed"
        >
          Long-standing obsession for mathematics, optimization, and systems
          that behave predictably.
        </motion.p>

        {/* Infinite marquee - modern app style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 sm:mt-12 w-full overflow-hidden"
          aria-hidden
        >
          <div className="flex w-max animate-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="mx-4 flex-shrink-0 rounded-full bg-white/5 border border-white/10 px-4 py-2 font-body text-sm text-foreground-muted backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 sm:mt-10 md:mt-14 flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View projects
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-full border-2 border-foreground-subtle/40 px-6 py-3.5 text-sm font-medium text-foreground-muted hover:border-violet-500/50 hover:text-foreground transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>

      {/* Explore work - in flow so it’s never hidden by buttons on short screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 shrink-0 flex flex-col items-center pb-6 sm:pb-8 pt-2"
      >
        <a
          href="#projects"
          className="group flex flex-col items-center gap-4 sm:gap-6 text-foreground-subtle hover:text-foreground-muted transition-colors"
        >
          <span className="font-body text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            Explore work
          </span>
          <span className="relative h-1 w-40 sm:w-48 md:w-64 overflow-hidden rounded-full bg-white/10">
            <span
              className="absolute inset-0 rounded-full bg-[length:200%_100%] animate-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%, transparent 100%)",
              }}
            />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
