"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
      >
        <p className="font-body text-sm text-foreground-subtle">
          © {year} Jason Carneiro
        </p>
        <a
          href="#hero"
          className="font-body text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          Back to top
        </a>
      </motion.div>
    </footer>
  );
}
