"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";

const DEFAULT_GRADIENT = "from-slate-400/25 to-sky-400/30";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={item} className="text-center w-full">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 pb-2 border-b border-white/25">
        {title}
      </h2>
      <div className="font-body text-foreground/95 text-base leading-relaxed max-w-2xl mx-auto [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:text-foreground [&_li]:font-medium">
        {children}
      </div>
    </motion.section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 last:mb-0">{children}</p>;
}

export function RafaleContent() {
  return (
    <main className="relative z-10 min-h-screen min-w-0 pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center min-w-0 w-full">
        <div className="mb-10 w-full flex justify-start">
          <BackButton />
        </div>

        <motion.article
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative rounded-2xl overflow-hidden w-full"
        >
          <motion.div
            variants={item}
            className={`absolute inset-0 bg-gradient-to-br ${DEFAULT_GRADIENT} bg-[length:200%_200%] opacity-95 animate-gradient-shift rounded-2xl`}
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

          <div className="relative p-5 sm:p-8 md:p-12 flex flex-col items-center text-center min-w-0">
            <motion.p
              variants={item}
              className="font-body text-sm sm:text-base font-semibold uppercase tracking-widest text-violet-300"
            >
              French Army
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              Rafale Flight Data Analysis and Structural Mechanical Damage
              Simulation Project
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                Collect, process and analyze flight data recorded by Rafale
                aircraft in service with the forces in order to simulate,
                through numerical models, the structural mechanical damage of the
                entire Rafale aircraft developed by Dassault.
              </p>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="Database Design and Conceptualization">
                <Paragraph>
                  This project, centered around data, plays a crucial role in
                  the DGA TA&apos;s operations. The initial phase involved the
                  creation and conceptualization of the database, encompassing
                  the design of tables, columns, primary and foreign keys, and
                  establishing relationships between tables.
                </Paragraph>
              </Section>

              <Section title="Calculation Optimization for Damage Estimation">
                <Paragraph>
                  Once the data was appropriately organized, the subsequent step
                  focused on optimizing calculations essential for estimating
                  damages incurred by each component of the Rafale aircraft,
                  utilizing mathematical models. Due to the sensitivity of the
                  data, specific details cannot be disclosed. However, advanced
                  techniques such as Fourier series, LU decomposition of
                  matrices and matrix calculations were employed to
                  significantly reduce computation time.
                </Paragraph>
              </Section>

              <Section title="Outcome: Improved Monitoring System">
                <Paragraph>
                  The outcome of this initiative is an improved monitoring
                  system for the health of Rafale fleet components, facilitating
                  streamlined maintenance processes. This project not only
                  contributes to a more efficient aircraft maintenance strategy
                  but also underscores the significance of data-driven
                  approaches in enhancing operational effectiveness.
                </Paragraph>
              </Section>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
