"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";

const DEFAULT_GRADIENT = "from-sky-400/30 to-cyan-400/30";

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

export function LandingTimeContent() {
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
              Airbus
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              Precision Landing Time Prediction for Aircraft
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                Predict the landing time of an aircraft from a certain distance
                from the airport using meteorological data, flight data, airport
                data through machine learning and deep learning models.
              </p>
            </motion.div>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                At Navblue, a subsidiary of Airbus, I spearheaded a project
                focused on revolutionizing aircraft landing time predictions.
                This endeavor involved a meticulous integration of
                meteorological, flight, and airport data through a combination
                of machine learning and deep learning models.
              </p>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="Data Retrieval and Composition">
                <Paragraph>
                  The datasets were diverse and intricate. For flight data, we
                  delved into specifics such as historical landing times,
                  aircraft type, and previous delays. Airport data encompassed
                  details about the proximity of landing strips, airport
                  congestion patterns, and historical performance.
                  Meteorological data included parameters like wind speed,
                  visibility, and atmospheric pressure. Merging these datasets
                  formed a comprehensive foundation for our predictive models.
                </Paragraph>
              </Section>

              <Section title="Preprocessing Steps">
                <Paragraph>
                  Ensuring data quality was paramount. We performed rigorous
                  preprocessing to handle missing values, outliers, and
                  inconsistencies. For flight data, we engineered features like
                  time of day, day of the week, and holiday indicators to
                  capture temporal patterns. Airport data underwent geospatial
                  analysis to quantify the distance of landing strips from the
                  aircraft&apos;s current position. Meteorological data
                  required normalization and temporal alignment to synchronize
                  with flight timelines.
                </Paragraph>
              </Section>

              <Section title="Machine Learning Model - XGBoost">
                <Paragraph>
                  In the initial stages, we applied machine learning
                  techniques, including the robust XGBoost algorithm. Feature
                  importance analysis guided us in understanding the
                  contributions of different parameters. While effective,
                  XGBoost faced challenges, especially in accurately predicting
                  high delays.
                </Paragraph>
              </Section>

              <Section title="Deep Learning Models - Neural Network">
                <Paragraph>
                  Transitioning to deep learning, a neural network architecture
                  was developed to capture complex relationships within the
                  data. This model exhibited improvement over XGBoost, particularly
                  in handling scenarios with increased delays.
                </Paragraph>
              </Section>

              <Section title="Long Short-Term Memory (LSTM) Implementation">
                <Paragraph>
                  Recognizing the temporal nature of flight data, we explored
                  LSTM networks. The sequence-to-sequence learning capability of
                  LSTMs allowed us to model the changing positions of aircraft
                  over time, significantly enhancing our ability to predict
                  delays accurately.
                </Paragraph>
              </Section>

              <Section title="AWS Deployment and Scalability">
                <Paragraph>
                  Upon meticulous validation, the LSTM model was deployed on
                  Amazon Web Services (AWS). This cloud-based deployment ensured
                  scalability, enabling real-time predictions and adaptability to
                  varying operational demands. This comprehensive approach not
                  only enhanced the accuracy of landing time predictions but also
                  laid the foundation for a more resilient and adaptable system
                  for Navblue.
                </Paragraph>
              </Section>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
