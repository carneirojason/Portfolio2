"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const founderProjects = projects.filter((p) => p.section === "founder");
const workProjects = projects.filter((p) => p.section === "work");

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center min-w-0">
        {/* Founder */}
        {founderProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Founder
            </h2>
            <p className="mt-2 font-body text-sm text-foreground-muted max-w-md mx-auto">
              Products I&apos;ve founded and built.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
              {founderProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Professional & collaborative work */}
        {workProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Professional & collaborative work
            </h2>
            <p className="mt-2 font-body text-sm text-foreground-muted max-w-md mx-auto">
              Engineering and research projects delivered in collaboration.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {workProjects.map((project, i) => (
                <div
                  key={project.id}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] max-w-sm"
                >
                  <ProjectCard
                    project={project}
                    index={i + founderProjects.length}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
