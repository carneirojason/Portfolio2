"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";

const DEFAULT_GRADIENT = "from-fuchsia-400/30 to-cyan-400/30";

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

const PAPER_URL = "/images/Multivariate_time_series/Multivariate_time_series.pdf";

export function TimeseriesXaiContent() {
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
              Private French energy company
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              Time Series &amp; XAI: multivariate approaches using unsupervised
              learning
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                Unveiling the secrets of energy performance through advanced
                data-driven methodologies, this project expertly integrates
                Matrix Profile algorithms and innovative Deep Learning
                techniques, providing a captivating exploration into the
                intricate world of multivariate time series analysis for
                enhanced energy production efficiency and anomaly detection.
              </p>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="Context and Objective">
                <Paragraph>
                  The project addresses the needs of a software company
                  specializing in energy performance management. With sensors
                  deployed in an energy production facility, the company
                  collects time-indexed numerical data for machine operations.
                  The goal is to explain the results of an AI model for time
                  series analysis, focusing on understanding disparities and
                  gaining insights into multivariate time series.
                </Paragraph>
              </Section>

              <Section title="Matrix Profile Algorithm">
                <Paragraph>
                  The Matrix Profile algorithm, introduced in 2016, is employed
                  to detect anomalies or recurring patterns within one or more
                  time series. The report introduces essential definitions such
                  as time series, window, subseries, motif, and Matrix Profile.
                  It details the calculation of Euclidean Z-normalized distance
                  and the use of Pearson correlation for similarity assessment.
                </Paragraph>
              </Section>

              <Section title="Deep Learning Approach - Autoencoders">
                <Paragraph>
                  This section is based on a Deep Learning approach using
                  Autoencoders to detect patterns and gain understanding from
                  multivariate time series. The chosen architecture is a
                  convolutional neural network autoencoder. The study focuses on
                  enhancing interpretability by addressing the issue of
                  redundancy and correlation in motifs extracted by manually
                  defined convolutional filters. Techniques such as adaptive
                  rectified linear units (adarelu) and regularization are
                  introduced to improve motif interpretability and automatically
                  determine the relevant number of motifs.
                </Paragraph>
              </Section>

              <Section title="Conclusion">
                <Paragraph>
                  In conclusion, the report explores two methods for analyzing
                  multivariate time series, yielding promising results. The
                  discussion emphasizes the importance of carefully considering
                  whether machine learning or deep learning is necessary, as
                  algorithmic approaches can often achieve excellent results more
                  cost-effectively. The project underscores the topical nature
                  of explainable AI (XAI) and multivariate time series
                  analysis, acknowledging the ongoing research in these fields.
                </Paragraph>
              </Section>

              <motion.div
                variants={item}
                className="mt-14 pt-8 border-t border-white/20 w-full flex flex-col items-center justify-center text-center"
              >
                <p className="font-body text-foreground/95 text-base mb-3 max-w-xl mx-auto">
                  If you can read French and you wish to gain further insights
                  into this subject, I suggest reviewing the technical paper
                  authored collaboratively with my colleagues:
                </p>
                <a
                  href={PAPER_URL}
                  download="Multivariate_time_series.pdf"
                  className="inline-flex items-center justify-center font-semibold text-foreground underline decoration-violet-400 underline-offset-2 hover:decoration-cyan-400 transition-colors"
                >
                  Download Paper
                </a>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
