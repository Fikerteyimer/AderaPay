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

const About = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      eyebrow: "About AderaPay",

      title: "Giving made simple,",

      titleAccent: " meaningful, and secure.",

      description:
        "AderaPay makes it easier to support churches and communities through meaningful giving, wherever you are.",

      givingPurpose: "Giving with purpose",

      together: "Together",

      heading: "Built to bring people closer to their churches",

      paragraph1:
        "AderaPay is a digital giving platform created to make supporting churches easier for everyone. Whether you are nearby or living abroad, you can discover verified churches and give securely.",

      paragraph2:
        "Giving can take different forms. You can make a first-time offering, give your 1/10 according to your practice of faith, or make a voluntary donation to support the work of your church.",

      givingTypes: [
        {
          title: "First-Time Offering",
          description:
            "A meaningful first offering given when beginning your journey of giving.",
        },
        {
          title: "1/10 Giving",
          description:
            "Give your 1/10 to support the church and its ministry according to your faith and practice.",
        },
        {
          title: "Donation",
          description:
            "Make a voluntary contribution whenever you want to support your church and community.",
        },
      ],
    },

    AM: {
      eyebrow: "ስለ አደራፔይ",

      title: "ምጽዋትን ቀላል፣",

      titleAccent: " ትርጉም ያለውና አስተማማኝ ማድረግ።",

      description:
        "አደራፔይ  አብያተ ክርስቲያናትና ማህበረሰቦችን ባሉብት ቦታ ሆነው መስጠት እንዲችሉ ያድርግዎታል።",

      givingPurpose: "በዓላማ መስጠት",

      together: "በአንድነት",

      heading:
        "ሰዎችን ከሚወዷቸው አብያተ ክርስቲያናት ጋር ለማቀራረብ",

      paragraph1:
        "አደራፔይ ለአብያተ ክርስቲያናት ድጋፍ ማድረግን ቀላልና አስተማማኝ ለማድረግ የተዘጋጀ የዲጂታል መስጫ መድረክ ነው። በአቅራቢያዎ ቢሆኑም ወይም በውጭ አገር ቢኖሩም፣ የተረጋገጡ አብያተ ክርስቲያናትን ማግኘትና በአስተማማኝ ሁኔታ መስጠት ይችላሉ።",

      paragraph2:
        "መስጠት በተለያዩ መንገዶች ሊሆን ይችላል። የመጀመሪያ ልገሳ ማድረግ፣ እንደ እምነትዎና ልማድዎ አንድ አስረኛዎን መስጠት፣ ወይም የቤተ ክርስቲያንዎን አገልግሎት ለመደገፍ በፈቃደኝነት መለገስ ይችላሉ።",

      givingTypes: [
        {
          title: "የመጀመሪያ ልገሳ/በኩራት",
          description:
            "የመስጠት ጉዞዎን ሲጀምሩ በልብዎ የሚያደርጉት የመጀመሪያ ስጦታ።",
        },
        {
          title: "አንድ አስረኛ/አስራት",
          description:
            "እንደ እምነትዎና ልማድዎ ለቤተ ክርስቲያንና ለአገልግሎቷ ከሚያገኙት ላይ አንድ አስረኛዉን የሚሰጡበት።",
        },
        {
          title: "ልገሳ",
          description:
            "ቤተ ክርስቲያንዎንና ማህበረሰብዎን ለመደገፍ በፈቃደኝነት የሚያደርጉት ስጦታ።",
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
    ["-4%", "4%"]
  );

  return (
    <section
      id="about"
      className={`
        ${fraunces.variable}
        ${inter.variable}
        relative
        scroll-mt-20
        overflow-hidden
        bg-[#FBF8FD]
        px-5
        py-24
        font-[family-name:var(--font-body)]
        sm:px-6
        sm:py-28
        lg:py-32
      `}
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-[#9F08BD]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#E8B34C]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            mx-auto
            mb-16
            max-w-5xl
            text-center
            sm:mb-20
          "
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-[#E8B34C]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#E8B34C]
              "
            >
              {t.eyebrow}
            </span>

            <span
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-[#E8B34C]
              "
            />
          </div>

          {/* LARGE MAIN HEADING */}
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

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-[#5D5875]
              sm:text-lg
            "
          >
            {t.description}
          </p>
        </motion.div>

        {/* ================================
            IMAGE + CONTENT
        ================================= */}

        <div
          className="
            grid
            items-start
            gap-14
            md:grid-cols-[0.82fr_1.18fr]
            md:gap-14
            lg:gap-20
          "
        >

          {/* ================================
              IMAGE
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
            className="relative md:sticky md:top-28"
          >
            <div
              ref={imageWrapRef}
              className="
                relative
                h-[330px]
                overflow-hidden
                rounded-[30px]
                border
                border-[#E9DAF4]
                bg-[#F6EEFB]
                shadow-2xl
                shadow-[#9F08BD]/10
                sm:h-[400px]
                md:h-[460px]
                lg:h-[520px]
              "
            >
              <motion.img
                src="/about.jpg"
                alt={
                  language === "AM"
                    ? "የቤተ ክርስቲያን ማህበረሰብ"
                    : "Church community"
                }
                style={{
                  y: imageY,
                }}
                className="
                  h-[110%]
                  w-full
                  object-cover
                "
              />

              {/* Image gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#241C3D]/50
                  via-[#241C3D]/5
                  to-transparent
                "
              />

              {/* Image accent */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  h-12
                  w-12
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                "
              >
                <div className="flex h-full items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8B34C]" />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: EASE,
              }}
              className="
                absolute
                -bottom-6
                left-5
                rounded-2xl
                border
                border-[#E9DAF4]
                bg-white
                px-5
                py-4
                shadow-xl
                shadow-[#241C3D]/10
                sm:left-8
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E8B34C]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#6B657D]
                  "
                >
                  {t.givingPurpose}
                </span>
              </div>

              <p
                className="
                  mt-1
                  text-xl
                  font-medium
                  text-[#241C3D]
                  font-[family-name:var(--font-display)]
                "
              >
                {t.together}
              </p>
            </motion.div>
          </motion.div>

          {/* ================================
              TEXT CONTENT
          ================================= */}

          <div className="pt-2 md:pt-1">

            {/* Heading */}
            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                ease: EASE,
              }}
              className="
                max-w-3xl
                text-[clamp(2rem,3vw,3.2rem)]
                font-medium
                leading-[1.08]
                tracking-[-0.025em]
                text-[#241C3D]
                font-[family-name:var(--font-display)]
              "
            >
              {t.heading}
            </motion.h3>

            {/* Gold divider */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 70,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: EASE,
              }}
              className="
                mt-6
                h-1
                rounded-full
                bg-[#E8B34C]
              "
            />

            {/* Paragraph 1 */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              className="
                mt-7
                text-[15px]
                leading-8
                text-[#5D5875]
                sm:text-base
              "
            >
              {t.paragraph1}
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: EASE,
              }}
              className="
                mt-4
                text-[15px]
                leading-8
                text-[#5D5875]
                sm:text-base
              "
            >
              {t.paragraph2}
            </motion.p>

            {/* ================================
                GIVING TYPES
            ================================= */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.givingTypes.map((type, index) => (
                <motion.div
                  key={`${language}-${type.title}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: EASE,
                  }}
                  className="
                    group
                    relative
                    min-w-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E9DAF4]
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E8B34C]/70
                    hover:shadow-xl
                    hover:shadow-[#9F08BD]/10
                  "
                >
                  {/* Decorative glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-24
                      w-24
                      rounded-full
                      bg-[#9F08BD]/5
                      blur-2xl
                      transition-all
                      duration-300
                      group-hover:bg-[#E8B34C]/10
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      relative
                      mb-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F6EEFB]
                      text-sm
                      font-semibold
                      text-[#9F08BD]
                      transition-all
                      duration-300
                      group-hover:bg-[#9F08BD]
                      group-hover:text-white
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      relative
                      text-[15px]
                      font-semibold
                      leading-6
                      text-[#241C3D]
                    "
                  >
                    {type.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-2
                      text-xs
                      leading-6
                      text-[#6B657D]
                    "
                  >
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;