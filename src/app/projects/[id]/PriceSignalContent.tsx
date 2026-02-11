"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";

const DEFAULT_GRADIENT = "from-violet-400/30 to-cyan-400/30";
const APP_URL = "https://price-signal-wine.vercel.app/";

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

export function PriceSignalContent() {
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
              Price Signal
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                PriceSignal is a B2B SaaS platform that monitors competitor
                pricing pages, extracts plans and prices using AI, and detects
                real pricing changes without FX noise. Used by 100+ companies,
                it provides structured comparisons, PDF reports, and automated
                alerts via subscription tiers.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 w-full flex flex-col items-center gap-4"
            >
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-semibold text-sm hover:bg-foreground/90 transition-colors"
              >
                Visit Price Signal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="w-full max-w-2xl min-w-0 rounded-xl overflow-hidden border border-white/25 shadow-2xl bg-card/50">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/20 bg-black/20">
                  <span className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  </span>
                  <span className="flex-1 flex justify-center">
                    <span className="text-xs text-foreground-muted font-mono truncate max-w-[200px] sm:max-w-xs">
                      price-signal-wine.vercel.app
                    </span>
                  </span>
                </div>
                <div className="relative w-full aspect-[4/3] min-h-[280px] bg-black/30">
                  <iframe
                    src={APP_URL}
                    title="Price Signal app preview"
                    className="absolute inset-0 w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="The Problem">
                <Paragraph>Companies struggle to:</Paragraph>
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Monitor competitor pricing changes consistently</li>
                  <li>Detect meaningful plan or price updates</li>
                  <li>Avoid false alerts caused by currency fluctuations</li>
                  <li>Compare pricing structures across different formats</li>
                  <li>Maintain up-to-date competitive reports</li>
                </ul>
                <Paragraph>
                  Manual tracking is unreliable and time-consuming.
                </Paragraph>
              </Section>

              <Section title="The Solution">
                <Paragraph>
                  I built PriceSignal as an automated competitive intelligence
                  tool that:
                </Paragraph>
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Crawls competitor pricing pages</li>
                  <li>Uses AI (vision + text) to extract structured pricing data</li>
                  <li>Detects deterministic changes (price, currency, plan add/remove)</li>
                  <li>Ignores FX-driven false positives</li>
                  <li>Matches plans across companies for comparison</li>
                  <li>Generates PDF reports</li>
                  <li>Sends optional email alerts and weekly automated reports</li>
                </ul>
                <Paragraph>
                  The product follows a subscription model (Free Trial, Starter,
                  Pro) with usage limits and automation features.
                </Paragraph>
              </Section>

              <Section title="Key Features">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Pricing page crawling by URL</li>
                  <li>AI-powered plan &amp; price extraction (with confidence scoring)</li>
                  <li>Deterministic change detection (no FX noise)</li>
                  <li>Multi-currency comparison (original + base currency)</li>
                  <li>Plan matching across companies</li>
                  <li>PDF exportable comparison reports</li>
                  <li>Email alerts &amp; weekly automated reports</li>
                  <li>Stripe subscription tiers (Free Trial / Starter / Pro)</li>
                  <li>Auth via Supabase</li>
                  <li>Usage limits &amp; tier-based automation</li>
                </ul>
              </Section>

              <Section title="Technical Stack">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Next.js (full-stack React framework)</li>
                  <li>Prisma</li>
                  <li>PostgreSQL</li>
                  <li>Supabase (Auth)</li>
                  <li>Stripe (subscriptions &amp; billing)</li>
                  <li>Resend (transactional emails)</li>
                  <li>AI extraction pipeline (vision + structured text parsing)</li>
                  <li>Background jobs for crawling &amp; change detection</li>
                </ul>
              </Section>

              <Section title="Impact">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Used by 100+ companies</li>
                  <li>Subscription-based SaaS with recurring revenue</li>
                  <li>Automated monitoring replacing manual tracking workflows</li>
                  <li>Ongoing feature iteration based on user feedback</li>
                  <li>Built end-to-end (architecture, backend, billing, infra)</li>
                </ul>
              </Section>

              <Section title="What I Learned / Challenges">
                <ul className="list-disc pl-6 pr-2 space-y-2 my-4 max-w-lg mx-auto text-left">
                  <li>Building reliable crawlers for unpredictable HTML structures</li>
                  <li>Designing deterministic change detection logic</li>
                  <li>Preventing false positives from FX fluctuations</li>
                  <li>Structuring AI extraction with validation + confidence scoring</li>
                  <li>Designing scalable multi-tenant SaaS architecture</li>
                  <li>Handling Stripe subscription lifecycle and webhooks</li>
                  <li>Designing tier-based feature gating and usage limits</li>
                  <li>Implementing background jobs and automation workflows</li>
                </ul>
              </Section>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
