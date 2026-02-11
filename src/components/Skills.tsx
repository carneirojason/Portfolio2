"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Data Engineering",
    skills: [
      "Data pipelines",
      "ETL",
      "SQL",
      "PostgreSQL",
      "Data modeling",
      "Distributed systems",
      "AWS",
      "Databricks",
      "dbt",
      "Airflow",
      "Apache Spark",
    ],
  },
  {
    title: "ML & AI Engineering",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "XGBoost",
      "LSTM",
      "CNN",
      "Reinforcement Learning",
      "NLP",
      "XAI",
      "Time series",
      "Scikit-learn",
      "MLOps",
    ],
  },
  {
    title: "Software & AI Engineering",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      "C++",
      "Flutter",
      "Firebase",
      "Stripe",
      "Supabase",
      "APIs",
      "Streamlit",
      "Web Scraping",
      "Prisma",
      "Riverpod",
      "git",
      "Google Play",
    ],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function SkillPill({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.02,
        ease,
      }}
      className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-violet-500/40 hover:bg-white/10 hover:text-foreground"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {name}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text bg-[length:200%_auto] animate-gradient-shift">
              My skills
            </span>
          </h2>
          <p className="mt-2 font-body text-sm text-foreground-muted max-w-md mx-auto">
            Data Engineer · ML Engineer · Software &amp; AI Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
          className="relative rounded-2xl sm:rounded-3xl border border-border bg-card/30 p-6 sm:p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {SKILL_GROUPS.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: groupIndex * 0.1,
                  ease,
                }}
                className="flex flex-col"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-4 pb-2 border-b border-white/20">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillPill
                      key={skill}
                      name={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
