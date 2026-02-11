"use client";

import { motion } from "framer-motion";

const PILLS = ["AI / ML", "SaaS", "Aerospace", "Data Science", "Founder"];

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 border-t border-border/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
            About me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Founder & builder at the
            <br />
            <span className="gradient-text">intersection of AI and product</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 space-y-6 font-body text-foreground-muted text-lg leading-relaxed"
        >
          <p>
            I’m a founder and builder focused on AI, data, and scalable products.
            I’ve launched and grown apps in sports tech and B2B SaaS, and
            delivered advanced engineering work in satellite imaging, aerospace,
            and ML — from landing-time prediction to structural damage
            simulation.
          </p>
          <p>
            I care about clean architecture, strong UX, and shipping things that
            users and customers actually rely on. If you’re looking for someone
            who can own a problem from idea to production, let’s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {PILLS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground-muted hover:border-accent/40 hover:text-accent transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
