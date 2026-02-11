"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors no-underline"
      >
        <motion.span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card/50 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-card/80 transition-colors duration-300"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg
            className="w-5 h-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.span>
        <span className="font-medium text-sm">Back to projects</span>
      </Link>
    </motion.div>
  );
}
