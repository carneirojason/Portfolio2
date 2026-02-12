"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";
import { useEffect, useState } from "react";
import { getAssetUrl } from "@/lib/basePath";

const DEFAULT_GRADIENT = "from-emerald-400/30 to-cyan-400/30";
const IMG = "/images/sweet-spot";

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

const screenshotNames = [
  { src: "logo.png", alt: "Sweet Spot app logo" },
  { src: "dashboard.png", alt: "Sweet Spot Dashboard - win rate, matches, upcoming matches" },
  { src: "matchJournal.png", alt: "Match Journal - search, upcoming and recent matches" },
  { src: "gamaeplan.png", alt: "Game Plan - AI strategy generator and tactics" },
  { src: "stats1.png", alt: "Statistics - total matches, win/loss, form, court time" },
  { src: "budget.png", alt: "Budget and subscription management" },
];

export function SweetSpotContent() {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    // Set video URL on client side to ensure correct base path
    setVideoUrl(getAssetUrl("images/sweet-spot/marketing.mp4"));
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
              Product · Founder
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              Sweet Spot
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                Sweet Spot is a production Flutter app that helps tennis
                players track matches, analyze performance, and plan tactics. It
                combines match journaling, advanced stats, and AI-generated game
                plans in a freemium model. Published on Google Play and used by
                hundreds of players.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 w-full flex flex-col items-center"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                Marketing video
              </h3>
              {videoUrl && (
                <video
                  src={videoUrl}
                  controls
                  className="w-full max-w-[320px] rounded-xl border border-white/20 shadow-lg bg-black/30"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="The Problem">
                <Paragraph>
                  Competitive and recreational tennis players often:
                </Paragraph>
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Track results manually (or not at all)</li>
                  <li>Lack structured match analysis</li>
                  <li>Don&apos;t review tactical patterns</li>
                  <li>Have no personalized performance insights</li>
                </ul>
                <Paragraph>
                  Most apps focus only on score tracking, not tactical
                  improvement.
                </Paragraph>
              </Section>

              <Section title="The Solution">
                <Paragraph>
                  I built Sweet Spot as a full-featured tennis performance
                  companion that allows players to:
                </Paragraph>
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Log matches and maintain a match journal</li>
                  <li>Analyze win rates and performance trends</li>
                  <li>Track opponent profiles</li>
                  <li>Plan tactics on a visual tactical board</li>
                  <li>Receive AI-generated game plans and insights</li>
                  <li>Track gear and performance context</li>
                </ul>
                <Paragraph>
                  The app uses a freemium model with subscriptions and AI
                  credit purchases.
                </Paragraph>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-2xl mx-auto my-6 sm:my-8 min-w-0">
                  {screenshotNames.map(({ src, alt }) => (
                    <motion.div
                      key={src}
                      variants={item}
                      className="flex justify-center"
                    >
                      <Image
                        src={`${IMG}/${src}`}
                        alt={alt}
                        width={160}
                        height={280}
                        unoptimized
                        className="rounded-xl border border-white/20 shadow-lg w-full max-w-full sm:max-w-[160px] h-auto object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section title="Key Features">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>AI-powered game plans and match insights</li>
                  <li>Match tracking &amp; CRUD</li>
                  <li>Performance analytics &amp; trend detection</li>
                  <li>Tactical diagram board</li>
                  <li>Opponent profiles &amp; history</li>
                  <li>In-app subscriptions (Premium)</li>
                  <li>AI credit system for monetized features</li>
                  <li>Firebase authentication</li>
                  <li>Cloud-based data sync</li>
                </ul>
              </Section>

              <Section title="Technical Stack">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>
                    <strong className="text-foreground">Flutter</strong>{" "}
                    (cross-platform mobile)
                  </li>
                  <li>
                    <strong className="text-foreground">Riverpod</strong> (state
                    management)
                  </li>
                  <li>
                    <strong className="text-foreground">GoRouter</strong>{" "}
                    (navigation)
                  </li>
                  <li>
                    <strong className="text-foreground">Firebase</strong> — Auth,
                    Firestore, Cloud Functions
                  </li>
                  <li>
                    <strong className="text-foreground">Freezed</strong>{" "}
                    (immutable models)
                  </li>
                  <li>In-app purchases &amp; subscription handling</li>
                  <li>Production deployment on Google Play</li>
                </ul>
              </Section>

              <Section title="Impact">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Published on Google Play</li>
                  <li>Downloaded by hundreds of tennis players</li>
                  <li>5 star reviews</li>
                  <li>Live subscription + IAP monetization</li>
                  <li>Real user feedback driving iteration</li>
                  <li>Continuous feature development</li>
                </ul>
              </Section>

              <Section title="What I Learned / Challenges">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Designing scalable Firestore data models</li>
                  <li>Handling subscription edge cases and purchase restoration</li>
                  <li>Optimizing Firestore reads to reduce costs</li>
                  <li>Managing complex state with Riverpod</li>
                  <li>Building AI credit logic and secure backend validation</li>
                  <li>Shipping and maintaining a production app</li>
                </ul>
              </Section>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
