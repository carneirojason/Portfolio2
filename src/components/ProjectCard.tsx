"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const DEFAULT_GRADIENT = "from-violet-400/25 to-cyan-400/25";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = project.gradient ?? DEFAULT_GRADIENT;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-sm min-w-0"
    >
      <motion.div
        className="group relative block rounded-2xl overflow-hidden h-[380px] flex flex-col text-center transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1"
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
      >
        <Link
          href={project.href ?? `/projects/${project.id}`}
          className="absolute inset-0 flex flex-col"
          aria-label={`View project: ${project.title}`}
        >
        {/* Light gradient background - same size for all */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} bg-[length:200%_200%] opacity-95 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-gradient-shift`}
        />
        <div className="absolute inset-0 bg-card/25 backdrop-blur-[1px] group-hover:bg-card/5 transition-colors duration-300" />
        {/* Shine overlay - diagonal gloss */}
        <div
          className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 100%)",
          }}
        />
        <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-white/30 transition-colors pointer-events-none" />

        <div className="relative flex flex-col h-full p-6 sm:p-7 items-center text-center">
          {/* Customer (work section) - distinct color & size */}
          {project.customer && (
            <p className="font-body text-sm sm:text-base font-semibold uppercase tracking-widest text-violet-300">
              {project.customer}
            </p>
          )}
          {/* 1) Title */}
          <h3 className={`font-display text-xl sm:text-2xl font-bold text-foreground leading-tight ${project.customer ? "mt-2" : ""}`}>
            {project.title}
          </h3>

          {/* 2) Description - min-height so it's never hidden by skills */}
          <p className="mt-3 font-body text-sm text-foreground-muted leading-relaxed line-clamp-3 flex-1 min-h-[3.5rem]">
            {project.tagline}
          </p>

          {/* 3) Skills / Technology - more visible */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="rounded-lg bg-white/25 backdrop-blur-sm border border-white/30 px-3.5 py-2 text-sm font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Explore - whole card is clickable via parent <a> */}
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground-muted group-hover:text-foreground transition-colors italic" aria-hidden>
            Explore
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
        </Link>
      </motion.div>
    </motion.article>
  );
}
