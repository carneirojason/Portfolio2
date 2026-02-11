"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl border border-border bg-card/30 p-6 sm:p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              <span className="gradient-text bg-[length:200%_auto] animate-gradient-shift">
                Let&apos;s work together
              </span>
            </h2>
            <p className="mt-4 font-body text-foreground-muted">
              Open to product, engineering, and founder roles.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="mailto:jason.carneiroo@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all text-center break-all max-w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                jason.carneiroo@gmail.com
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jason-carneiro-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-border px-6 py-3.5 text-sm font-medium text-foreground-muted hover:border-violet-500/50 hover:text-foreground transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
