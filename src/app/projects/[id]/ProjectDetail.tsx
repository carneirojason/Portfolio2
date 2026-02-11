"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { BackButton } from "@/components/BackButton";

const DEFAULT_GRADIENT = "from-violet-400/25 to-cyan-400/25";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const gradient = project.gradient ?? DEFAULT_GRADIENT;

  return (
    <main className="relative z-10 min-h-screen min-w-0 pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6">
      <div className="max-w-2xl mx-auto min-w-0">
        <div className="mb-10">
          <BackButton />
        </div>

        <motion.article
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Gradient background matching project card */}
          <motion.div
            variants={item}
            className={`absolute inset-0 bg-gradient-to-br ${gradient} bg-[length:200%_200%] opacity-95 animate-gradient-shift rounded-2xl`}
          />
          <div className="absolute inset-0 bg-card/30 backdrop-blur-[1px] rounded-2xl" />
          <div
            className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)",
            }}
          />
          <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />

          <div className="relative p-5 sm:p-8 md:p-10 min-w-0">
            {project.customer && (
              <motion.p
                variants={item}
                className="font-body text-sm sm:text-base font-semibold uppercase tracking-widest text-violet-300"
              >
                {project.customer}
              </motion.p>
            )}
            <motion.h1
              variants={item}
              className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight break-words ${project.customer ? "mt-2" : ""}`}
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-2 font-body text-base text-foreground-muted"
            >
              {project.tagline}
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {project.role && (
                <span className="rounded-lg bg-white/20 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 text-sm font-medium text-foreground">
                  {project.role}
                </span>
              )}
              <span className="rounded-lg bg-white/20 backdrop-blur-sm border border-white/25 px-3.5 py-1.5 text-sm font-medium text-foreground">
                {project.category}
              </span>
            </motion.div>
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="rounded-lg bg-white/25 backdrop-blur-sm border border-white/30 px-3.5 py-2 text-sm font-semibold text-foreground"
                  whileHover={{ scale: 1.03 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
