"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";
import { useEffect, useState } from "react";
import { getAssetUrl } from "@/lib/basePath";

const DEFAULT_GRADIENT = "from-amber-400/30 to-orange-400/30";

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

export function SatelliteImagingContent() {
  const [imagePath1, setImagePath1] = useState<string>("");
  const [imagePath2, setImagePath2] = useState<string>("");

  useEffect(() => {
    // Set image URLs on client side to ensure correct base path
    setImagePath1(getAssetUrl("images/Thales/weight_pruning.jpg"));
    setImagePath2(getAssetUrl("images/Thales/distillation.jpg"));
  }, []);

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
              Thales
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              Advanced Satellite Imaging System Optimization Project
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                This innovative project revolutionizes satellite operations by
                employing a rapid reinforcement learning-based mission planning
                algorithm, coupled with a compact, AI-driven image quality
                assessment model, enabling instantaneous optimization of image
                capture costs and efficient use of satellite storage space.
              </p>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="Mission Planning Optimization">
                <Paragraph>
                  In the realm of satellite imagery, the process of planning
                  missions to capture specific images involves intricate
                  combinatorial mathematics. Traditionally, the task is
                  time-consuming due to numerous variables. To expedite this
                  process without compromising total costs, I implemented a
                  reinforcement learning algorithm. This algorithm significantly
                  reduced mission planning time compared to traditional
                  mathematical models, resulting in slightly lower costs. The
                  key advantage lies in the ability to dynamically update the
                  satellite&apos;s mission plan instantaneously when it passes
                  under a ground station antenna, allowing for real-time
                  adjustments based on already captured images.
                </Paragraph>
              </Section>

              <Section title="AI Image Quality Assessment Model">
                <Paragraph>
                  Addressing the challenge of distinguishing usable images from
                  those affected by factors such as cloud cover, a Convolutional
                  Neural Network (CNN) was developed. The CNN acts as an
                  artificial intelligence (AI) model capable of assessing image
                  quality before storage, preventing the unnecessary occupation
                  of limited satellite storage space.
                </Paragraph>
              </Section>

              <Section title="Model Deployment Strategies">
                <Paragraph>
                  Embedding AI models into satellites poses challenges due to
                  limited storage capacity. Three strategies were employed for
                  efficient model integration:
                </Paragraph>
                <ul className="text-center list-none space-y-3 my-6 max-w-xl mx-auto">
                  <li>
                    <strong className="text-foreground">Quantification:</strong>{" "}
                    Optimizing storage by reducing the precision of model
                    weights.
                  </li>
                  <li>
                    <strong className="text-foreground">Weight Pruning:</strong>{" "}
                    Drastically reducing network size by removing connections,
                    neurons, or layers with the smallest weights.
                  </li>
                  <li>
                    <strong className="text-foreground">Distillation:</strong>{" "}
                    Employing knowledge transfer techniques to distill the
                    essence of a complex model into a smaller, more efficient
                    form.
                  </li>
                </ul>
                {imagePath1 && (
                  <motion.div
                    variants={item}
                    className="my-6 flex justify-center"
                  >
                    <Image
                      src={imagePath1}
                      alt="Weight pruning: before and after neural network structure"
                      width={560}
                      height={320}
                      unoptimized
                      className="rounded-xl border border-white/20 w-full max-w-lg object-cover shadow-lg"
                    />
                  </motion.div>
                )}
                {imagePath2 && (
                  <motion.div
                    variants={item}
                    className="my-6 flex justify-center"
                  >
                    <Image
                      src={imagePath2}
                      alt="Knowledge distillation: teacher model transferring knowledge to student model"
                      width={560}
                      height={320}
                      unoptimized
                      className="rounded-xl border border-white/20 w-full max-w-lg object-cover shadow-lg"
                    />
                  </motion.div>
                )}
                <Paragraph>
                  The chosen solution involved a combination of all three
                  methods, achieving a substantial reduction in storage space
                  while maintaining accurate image quality assessments.
                </Paragraph>
              </Section>

              <Section title="Project Impact">
                <Paragraph>
                  In summary, the project enables the instantaneous creation of
                  a mission plan optimizing the overall cost of satellite image
                  captures. The incorporation of a CNN allows the satellite to
                  store only usable images, maximizing storage efficiency.
                  Additionally, the ability to provide the satellite with an
                  updated mission plan in real-time upon data transfer to a
                  ground station enhances operational flexibility and
                  responsiveness.
                </Paragraph>
                <motion.div
                  variants={item}
                  className="mt-6 flex justify-center"
                >
                  <Image
                    src="/images/Thales/method_satellite.JPG"
                    alt="Satellite imaging workflow: mission planning, ground station, image quality and processing"
                    width={560}
                    height={360}
                    unoptimized
                    className="rounded-xl border border-white/20 w-full max-w-lg object-cover shadow-lg"
                  />
                </motion.div>
              </Section>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
