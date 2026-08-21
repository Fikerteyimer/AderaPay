"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";
import { useLanguage } from "../../context/LanguageContext";

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
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

const About = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      eyebrow: "About AderaPay",

      title: "Giving made simple,",

      titleAccent: " meaningful, and secure.",

      description:
        "AderaPay connects people with the churches and communities they care about, making it easier to give and make an impact from anywhere in the world.",

      givingPurpose: "Giving with purpose",

      together: "Together",

      heading:
        "Built to bring people closer to their communities",

      paragraph1:
        "AderaPay is a digital donation platform designed to make supporting churches easier for everyone. Whether you are nearby or living abroad, you can discover verified churches and contribute securely.",

      paragraph2:
        "We believe giving should be simple, transparent, and accessible. That’s why AderaPay brings donors and churches together in one trusted platform.",

      features: [
        {
          title: "Secure Giving",
          description:
            "Give confidently through a secure platform.",
        },
        {
          title: "Verified Churches",
          description:
            "Support churches verified by AderaPay.",
        },
        {
          title: "Easy Donations",
          description:
            "Donate from anywhere with just a few steps.",
        },
        {
          title: "Community Impact",
          description:
            "Help communities grow through your giving.",
        },
      ],
    },

    AM: {
      eyebrow: "ስለ አደራፔይ",

      title: "መስጠትን ቀላል፣",

      titleAccent: " ትርጉም ያለው እና አስተማማኝ።",

      description:
        "አደራፔይ ሰዎች የሚያስቡላቸውን አብያተ ክርስቲያናትና ማህበረሰቦች በቀላሉ እንዲደግፉ ያግዛል። ከየትኛውም የዓለም ክፍል መስጠትና ተፅዕኖ መፍጠር ይችላሉ።",

      givingPurpose: "በዓላማ መስጠት",

      together: "በአንድነት",

      heading:
        "ሰዎችን ከሚያስቡላቸው ማህበረሰቦች ጋር ለማቀራረብ የተገነባ",

      paragraph1:
        "አደራፔይ ለሁሉም ሰው ለአብያተ ክርስቲያናት ድጋፍ ማድረግን ቀላል ለማድረግ የተዘጋጀ የዲጂታል ልገሳ መድረክ ነው። በአቅራቢያዎ ቢሆኑም ወይም በውጭ አገር ቢኖሩም፣ የተረጋገጡ አብያተ ክርስቲያናትን ማግኘትና በአስተማማኝ ሁኔታ መለገስ ይችላሉ።",

      paragraph2:
        "መስጠት ቀላል፣ ግልጽ እና ለሁሉም ተደራሽ መሆን እንዳለበት እናምናለን። ለዚህም ነው አደራፔይ ለጋሾችንና አብያተ ክርስቲያናትን በአንድ የታመነ መድረክ የሚያገናኘው።",

      features: [
        {
          title: "አስተማማኝ ልገሳ",
          description:
            "በአስተማማኝ መድረክ በመጠቀም በእምነት ይለግሱ።",
        },
        {
          title: "የተረጋገጡ አብያተ ክርስቲያናት",
          description:
            "በአደራፔይ የተረጋገጡ አብያተ ክርስቲያናትን ይደግፉ።",
        },
        {
          title: "ቀላል ልገሳ",
          description:
            "በጥቂት ደረጃዎች ከየትኛውም ቦታ ይለግሱ።",
        },
        {
          title: "የማህበረሰብ ተፅዕኖ",
          description:
            "በልገሳዎ ማህበረሰቦች እንዲያድጉ ያግዙ።",
        },
      ],
    },
  };

  const t = content[language];

  const imageWrapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", "6%"]
  );

  return (
    <section
      id="about"
      className={`
        ${fraunces.variable} ${inter.variable}
        relative
        scroll-mt-20
        overflow-hidden
        bg-[#FBF8FD]
        px-6
        py-24
        font-[family-name:var(--font-body)]
        sm:py-28
      `}
    >
      {/* =========================================
          SOFT HERO GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[420px]
          bg-[radial-gradient(60%_100%_at_50%_0%,rgba(159,8,189,0.06),transparent)]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E8B34C]/70" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B34C]">
              {t.eyebrow}
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E8B34C]/70" />

          </div>

          <h2
            className="
              text-[clamp(2rem,3.5vw+1rem,3rem)]
              font-medium
              leading-[1.12]
              tracking-tight
              text-[#241C3D]
              font-[family-name:var(--font-display)]
            "
          >
            {t.title}

            <span className="italic text-[#9F08BD]">
              {t.titleAccent}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#5D5875]">
            {t.description}
          </p>
        </motion.div>

        {/* =====================================
            CONTENT
        ====================================== */}

        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-12">

          {/* =====================================
              IMAGE
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
            className="relative"
          >
            <div
              ref={imageWrapRef}
              className="
                relative
                h-[420px]
                overflow-hidden
                rounded-tl-[110px]
                rounded-br-[110px]
                rounded-tr-2xl
                rounded-bl-2xl
                border
                border-[#E9DAF4]
                shadow-xl
                shadow-[#9F08BD]/10
                sm:h-[480px]
              "
            >
              <motion.img
                src="/about.jpg"
                alt={
                  language === "AM"
                    ? "የአካባቢ ማህበረሰብ አባላት"
                    : "Community members supporting their church"
                }
                style={{
                  y: imageY,
                }}
                className="h-[120%] w-full object-cover"
              />
            </div>

            {/* =====================================
                FLOATING CARD
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                rotate: -3,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.35,
              }}
              className="
                absolute
                -bottom-6
                -right-4
                rounded-2xl
                border
                border-[#E9DAF4]
                bg-white
                p-5
                shadow-xl
                md:right-6
              "
            >
              <div className="flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-[#E8B34C]" />

                <p className="text-sm text-[#5D5875]">
                  {t.givingPurpose}
                </p>

              </div>

              <p
                className="
                  mt-1
                  text-2xl
                  font-medium
                  text-[#241C3D]
                  font-[family-name:var(--font-display)]
                "
              >
                {t.together}
              </p>
            </motion.div>
          </motion.div>

          {/* =====================================
              TEXT CONTENT
          ====================================== */}

          <div>

            <motion.h3
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              className="
                text-[clamp(1.5rem,1.6vw+1rem,1.875rem)]
                font-medium
                leading-snug
                text-[#241C3D]
                font-[family-name:var(--font-display)]
              "
            >
              {t.heading}
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.1,
              }}
              className="mt-6 leading-relaxed text-[#5D5875]"
            >
              {t.paragraph1}
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: 0.18,
              }}
              className="mt-4 leading-relaxed text-[#5D5875]"
            >
              {t.paragraph2}
            </motion.p>

            {/* =====================================
                FEATURES
            ====================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="
                mt-10
                divide-y
                divide-[#E9DAF4]
                border-t
                border-[#E9DAF4]
              "
            >
              {t.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group flex items-start gap-4 py-4"
                >
                  <span
                    className="
                      mt-0.5
                      flex
                      h-6
                      w-6
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F6EEFB]
                      text-xs
                      font-bold
                      text-[#9F08BD]
                      transition-colors
                      duration-300
                      group-hover:bg-[#9F08BD]
                      group-hover:text-white
                    "
                  >
                    ✓
                  </span>

                  <div>

                    <h4 className="font-semibold text-[#241C3D]">
                      {feature.title}
                    </h4>

                    <p className="mt-0.5 text-sm leading-relaxed text-[#5D5875]">
                      {feature.description}
                    </p>

                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;