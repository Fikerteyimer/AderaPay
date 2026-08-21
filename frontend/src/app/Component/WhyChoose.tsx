"use client";

import { motion } from "framer-motion";
import {
  Fraunces,
  Inter,
  Noto_Sans_Ethiopic,
} from "next/font/google";
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

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ethiopic",
});

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
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
          "ልገሳዎ በአስተማማኝና ደህንነቱ በተጠበቀ መድረክ ይከናወናል።",
      },
      {
        icon: "✓",
        title: "የተረጋገጡ ቤተ ክርስቲያናት",
        description:
          "በአደራፔይ ላይ ከመዘርዘራቸው በፊት የሚቀርቡ ቤተ ክርስቲያናት በጥንቃቄ ትክክለኝነታቸዉ ይረጋገጣሉ።",
      },
      {
        icon: "🌍",
        title: "ከየትኛውም ቦታ ይለግሱ",
        description:
          "የትም ቦታ ቢሆኑ ከፈለጉት ቤተ ክርስቲያንና ማህበረሰብ ጋር ግንኙነትዎን መቅጠል ይችላሉ።",
      },
      {
        icon: "🌐",
        title: "አማርኛ እና እንግሊዝኛ",
        description:
          "አደራፔይን በአማርኛና በ እንግሊዝኛ በቀላሉና በምቾት ይጠቀሙ።",
      },
    
      {
        icon: "📊",
        title: "የልገሳ ሪፖርት",
        description:
          "ልገሳዎ የት እንደደረሰና ለምን እንደዋለ ለማወቅ የተዘጋጁ ሪፖርቶችን መመልከት ይችላሉ።",
      },
      {
        icon: "🧾",
        title: "የክፍያ ደረሰኝ",
        description:
          "እያንዳንዱን ልገሳ ካጠናቀቁ በኋላ የክፍያ ማረጋገጫና ደረሰኝ ያግኙ።",
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
        icon: "📊",
        title: "Donation Reports",
        description:
          "See reports showing where your giving goes and how it supports the church and community.",
      },
      {
        icon: "🧾",
        title: "Payment Receipts",
        description:
          "Receive a payment confirmation and receipt after every completed donation.",
      },
    ];

  return (
    <section
      id="why-choose"
      className={`
        ${fraunces.variable}
        ${inter.variable}
        ${notoEthiopic.variable}

        bg-[#FBF8FD]
        px-6
        py-20
        font-[family-name:var(--font-body)]
        sm:py-28
      `}
    >
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <motion.div
          key={`header-${language}`}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: EASE,
          }}
          className={`
            mx-auto
            mb-16
            max-w-xl
            text-center
            sm:mb-20

            ${
              isAmharic
                ? "font-[family-name:var(--font-ethiopic)]"
                : ""
            }
          `}
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#E8B34C]
            "
          >
            {isAmharic
              ? "ለምን አደራፔይ?"
              : "Why AderaPay"}
          </span>

          <h2
            className={`
              mt-4
              text-[clamp(1.75rem,3vw+1rem,2.5rem)]
              font-medium
              leading-tight
              text-[#241C3D]

              ${
                isAmharic
                  ? "font-[family-name:var(--font-ethiopic)]"
                  : "font-[family-name:var(--font-display)]"
              }
            `}
          >
            {isAmharic ? (
              <>
                ልገሳን{" "}
                <span className="text-[#9F08BD]">
                  ቀላል እና የተሻለ እናደርገዋለን።
                </span>
              </>
            ) : (
              <>
                Giving made{" "}
                <span className="italic text-[#9F08BD]">
                  better.
                </span>
              </>
            )}
          </h2>

          <p
            className={`
              mt-4
              text-sm
              leading-relaxed
              text-[#5D5875]
              md:text-base

              ${
                isAmharic
                  ? "font-[family-name:var(--font-ethiopic)]"
                  : ""
              }
            `}
          >
            {isAmharic
              ? "ለእርስዎ አስፈላጊ የሆኑ ቤተ ክርስቲያናትንና ማህበረሰቦችን በቀላሉ እና በመተማመን ለመደገፍ የሚያስፈልግዎትን ሁሉ እናቀርባለን።"
              : "Everything you need to support the churches and communities that matter to you."}
          </p>
        </motion.div>

        {/* ================= REASONS ================= */}

        <motion.div
          key={`reasons-${language}`}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={`${language}-${index}-${reason.title}`}
              variants={itemVariants}
              className={`
                flex
                gap-4

                ${
                  isAmharic
                    ? "font-[family-name:var(--font-ethiopic)]"
                    : ""
                }
              `}
            >
              {/* ICON */}

              <span
                className="
                  flex-shrink-0
                  text-2xl
                  leading-none
                "
              >
                {reason.icon}
              </span>

              {/* TEXT */}

              <div>
                <h3
                  className={`
                    text-base
                    font-semibold
                    text-[#241C3D]

                    ${
                      isAmharic
                        ? "font-[family-name:var(--font-ethiopic)]"
                        : "font-[family-name:var(--font-display)]"
                    }
                  `}
                >
                  {reason.title}
                </h3>

                <p
                  className={`
                    mt-1.5
                    text-sm
                    leading-relaxed
                    text-[#5D5875]

                    ${
                      isAmharic
                        ? "font-[family-name:var(--font-ethiopic)]"
                        : ""
                    }
                  `}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.p
          key={`bottom-${language}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: EASE,
            delay: 0.1,
          }}
          className={`
            mt-16
            text-center
            text-sm
            font-medium
            text-[#5D5875]

            ${
              isAmharic
                ? "font-[family-name:var(--font-ethiopic)]"
                : ""
            }
          `}
        >
          <span className="text-[#E8B34C]">
            ✦
          </span>{" "}

          {isAmharic
            ? "በመተማመን ይስጡ። ትርጉም ያለው ለውጥ ያምጡ።"
            : "Give with confidence. Make a meaningful difference."}
        </motion.p>

      </div>
    </section>
  );
};

export default WhyChoose;