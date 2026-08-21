"use client";

import { motion } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const WhyChoose = () => {
  const { language } = useLanguage();

  const isAmharic = language === "AM";

  const reasons = isAmharic
    ? [
        {
          icon: "🔒",
          title: "ደህንነቱ የተጠበቀ ልገሳ",
          description:
            "ልገሳዎችዎ በደህንነቱ በተጠበቀ እና በታማኝ መድረክ ይስተናገዳሉ።",
        },
        {
          icon: "✓",
          title: "የተረጋገጡ ቤተክርስቲያናት",
          description:
            "በአደራፔይ ላይ የሚቀርብ እያንዳንዱ ቤተክርስቲያን ከመዘርዘሩ በፊት በጥንቃቄ ይረጋገጣል።",
        },
        {
          icon: "🌍",
          title: "ከየትኛውም ቦታ ይስጡ",
          description:
            "የትም ቦታ ቢሆኑ ከቤተክርስቲያንዎ እና ከማህበረሰብዎ ጋር ግንኙነትዎን ይቀጥሉ።",
        },
        {
          icon: "🌐",
          title: "እንግሊዝኛ እና አማርኛ",
          description:
            "አደራፔይን በመረጡት ቋንቋ በምቾት ይጠቀሙ።",
        },
        {
          icon: "⚡",
          title: "ቀላል እና ፈጣን",
          description:
            "ቤተክርስቲያን ያግኙ እና ልገሳዎን በጥቂት ቀላል ደረጃዎች ያጠናቅቁ።",
        },
        {
          icon: "🤝",
          title: "የማህበረሰብ ተፅዕኖ",
          description:
            "እያንዳንዱ ልገሳዎ ቤተክርስቲያንዎ በማህበረሰቡ ውስጥ ስራውን እንዲቀጥል ይረዳል።",
        },
      ]
    : [
        {
          icon: "🔒",
          title: "Secure Giving",
          description:
            "Your donations are handled through a secure, trusted platform.",
        },
        {
          icon: "✓",
          title: "Verified Churches",
          description:
            "Every church on AderaPay is carefully verified before it's listed.",
        },
        {
          icon: "🌍",
          title: "Give From Anywhere",
          description:
            "Stay connected to your church and community wherever you are.",
        },
        {
          icon: "🌐",
          title: "English & Amharic",
          description:
            "Use AderaPay comfortably in either language.",
        },
        {
          icon: "⚡",
          title: "Simple & Fast",
          description:
            "Find a church and complete your donation in just a few steps.",
        },
        {
          icon: "🤝",
          title: "Community Impact",
          description:
            "Every gift helps a church continue its work in the community.",
        },
      ];

  return (
    <section
      id="why-choose"
      className={`
        ${fraunces.variable} ${inter.variable}
        bg-[#FBF8FD]
        px-6
        py-20
        font-[family-name:var(--font-body)]
        sm:py-28
      `}
    >
      <div className="mx-auto max-w-5xl">
        {/* =====================================
            HEADER
        ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-xl text-center sm:mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B34C]">
            {isAmharic ? "ለምን አደራፔይ?" : "Why AderaPay"}
          </span>

          <h2
            className="
              mt-4
              text-[clamp(1.75rem,3vw+1rem,2.5rem)]
              font-medium
              leading-tight
              text-[#241C3D]
              font-[family-name:var(--font-display)]
            "
          >
            {isAmharic ? (
              <>
                ልገሳን{" "}
                <span className="italic text-[#9F08BD]">
                  የተሻለ እናደርገዋለን።
                </span>
              </>
            ) : (
              <>
                Giving made
                <span className="italic text-[#9F08BD]"> better.</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#5D5875] md:text-base">
            {isAmharic
              ? "ለእርስዎ አስፈላጊ የሆኑ ቤተክርስቲያናትን እና ማህበረሰቦችን ለመደገፍ የሚያስፈልግዎትን ሁሉ እናቀርባለን።"
              : "Everything you need to support the churches and communities that matter to you."}
          </p>
        </motion.div>

        {/* =====================================
            REASONS
        ====================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex gap-4"
            >
              <span className="flex-shrink-0 text-2xl leading-none">
                {reason.icon}
              </span>

              <div>
                <h3
                  className="
                    text-base
                    font-semibold
                    text-[#241C3D]
                    font-[family-name:var(--font-display)]
                  "
                >
                  {reason.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[#5D5875]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================
            BOTTOM MESSAGE
        ====================================== */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mt-16 text-center text-sm font-medium text-[#5D5875]"
        >
          <span className="text-[#E8B34C]">✦</span>{" "}
          {isAmharic
            ? "በመተማመን ይስጡ። ትርጉም ያለው ለውጥ ያምጡ።"
            : "Give with confidence. Make a meaningful difference."}
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChoose;