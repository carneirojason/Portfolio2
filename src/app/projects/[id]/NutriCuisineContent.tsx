"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/BackButton";
import { useEffect, useState } from "react";
import { getAssetUrl } from "@/lib/basePath";

const DEFAULT_GRADIENT = "from-rose-400/30 to-amber-400/30";

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

export function NutriCuisineContent() {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    // Set video URL on client side to ensure correct base path
    setVideoUrl(getAssetUrl("images/marmiton/demo_NutriCuisine.mp4"));
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
              Marmiton
            </motion.p>
            <motion.h1
              variants={item}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2"
            >
              NutriCuisine: Personalized Meal Planning
            </motion.h1>

            <motion.div variants={item} className="mt-6 w-full max-w-2xl mx-auto">
              <p className="font-body text-foreground/95 text-base leading-relaxed">
                NutriCuisine utilizes web scraping, nutrition databases, and
                advanced NLP-driven algorithms to help users plan personalized
                meals. Input your details and available ingredients, and let
                the system recommend a balanced combination of starters, meals,
                and desserts tailored to your nutritional needs.
              </p>
            </motion.div>

            <div className="mt-12 w-full flex flex-col items-center gap-12">
              <Section title="Recipe Retrieval with Web Scraping">
                <Paragraph>
                  Utilizing web scraping, NutriCuisine fetches recipes from the
                  renowned French website Marmiton. This vast database provides
                  millions of recipes with detailed ingredients and
                  instructions, but lacks crucial calorie information, a gap
                  effectively filled by NutriCuisine.
                </Paragraph>
              </Section>

              <Section title="Data Cleaning and Parsing">
                <Paragraph>
                  The acquired data undergoes thorough cleaning and parsing to
                  enhance its structure and readability. This step ensures a
                  consistent format, making subsequent processes more
                  efficient.
                </Paragraph>
              </Section>

              <Section title="Nutritional Database Integration">
                <Paragraph>
                  Mapping each ingredient to its nutritional resources involves
                  integrating a comprehensive nutrition database. Challenges
                  arise when dealing with varied portion sizes, such as slices
                  instead of standardized grams. Custom operations are
                  implemented to overcome these intricacies.
                </Paragraph>
              </Section>

              <Section title="Individual Nutrient Calculation">
                <Paragraph>
                  To calculate individual nutritional requirements, NutriCuisine
                  employs the Mifflin-St Jeor formula:
                </Paragraph>
                <motion.div
                  variants={item}
                  className="my-6 text-left max-w-md mx-auto rounded-xl bg-black/25 border border-white/25 p-4 font-mono text-base text-foreground"
                >
                  <p className="text-foreground mb-1">
                    <strong>For Men:</strong> 10 × weight (kg) + 6.25 × height
                    (cm) − 5 × age (years) + 5
                  </p>
                  <p className="text-foreground">
                    <strong>For Women:</strong> 10 × weight (kg) + 6.25 × height
                    (cm) − 5 × age (years) − 161
                  </p>
                </motion.div>
                <Paragraph>
                  After obtaining the BMR, the total daily calorie needs are
                  determined by multiplying the BMR by an activity factor based
                  on the individual&apos;s level of physical activity:
                </Paragraph>
                <ul className="text-center list-none space-y-2 my-4 max-w-lg mx-auto">
                  <li>Sedentary: × 1.2</li>
                  <li>Lightly active: × 1.375</li>
                  <li>Moderately active: × 1.55</li>
                  <li>Very active: × 1.725</li>
                  <li>
                    Extremely active (more than 2 hours of intense exercise per
                    day): × 1.9
                  </li>
                </ul>
                <Paragraph>
                  The resulting value represents the estimated daily calorie
                  requirement for the user based on their characteristics and
                  activity level.
                </Paragraph>
              </Section>

              <Section title="AI Model Development">
                <Paragraph>
                  A sophisticated neural network, complemented by embedding
                  techniques, is developed. This model, given user attributes
                  and nutritional needs, creates optimal combinations of
                  starters, meals, and desserts. The embedding process groups
                  ingredients with similar nutritional profiles, fostering
                  creativity and coherence in the generated recipes.
                </Paragraph>
              </Section>

              <Section title="Interface Design with Streamlit">
                <Paragraph>
                  NutriCuisine presents a user-friendly interface built on
                  Streamlit. Users input personal details, including weight,
                  height, sex, and activity level. Additionally, they can
                  specify any disliked or allergenic ingredients. The model then
                  delivers the top four recipes that precisely align with the
                  user&apos;s nutritional requirements and preferences.
                </Paragraph>
              </Section>

              <motion.section variants={item} className="text-center w-full">
                <div className="font-body text-foreground/95 text-base leading-relaxed max-w-2xl mx-auto [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:text-foreground [&_li]:font-medium">
                  <Paragraph>
                    This comprehensive approach ensures NutriCuisine&apos;s
                    ability to not only recommend personalized recipes but also
                    cater to users&apos; dietary restrictions and preferences
                    with a seamless and intuitive interface.
                  </Paragraph>
                </div>
              </motion.section>

              <motion.div
                variants={item}
                className="mt-6 pt-8 border-t border-white/20 w-full flex flex-col items-center justify-center text-center"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  Watch NutriCuisine DEMO
                </h3>
                {videoUrl && (
                  <video
                    src={videoUrl}
                    controls
                    className="w-full max-w-lg rounded-xl border border-white/20 shadow-lg bg-black/30"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
