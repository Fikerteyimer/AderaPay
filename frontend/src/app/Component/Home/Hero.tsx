"use client";

import { motion } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";
import { useLanguage } from "../../context/LanguageContext";
import { useRouter } from "next/navigation";

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

const translations = {
  EN: {
    eyebrow: "AderaPay",

    title: "Support the churches",

    highlight: "that matter to you.",

    description:
      "Giving made simple, secure, and personal. Stay connected to the churches and communities you care about, wherever you are.",

    donate: "Start Donating",

    explore: "Explore Churches",

    trust: "Connecting people through meaningful giving",
  },

  AM: {
    eyebrow: "አደራፔይ",

    title: "ለሚወዷቸዉ አብያተ ክርስቲያናት",

    highlight: "ልገሳዎን ያድርጉ።",

    description:
      "ምጽዋትን በቀላሉ፣ በአስተማማኝ ሁኔታ እና በልበ ሙሉነት ያድርጉ። በሚኖሩበት ቦታ ሁሉ ከሚወዷቸው አብያተ ክርስቲያናትና ማህበረሰቦች ጋር ተቀራርበው ይቆዩ።",

    donate: "ምጽዋትን ያድርጉ",

    explore: "አብያተ ክርስቲያናትን ይፈልጉ",

    trust: "ትርጉም ባለው ልገሳ አቢያተ ክርስትያናትን እና ማህበረሰቦችን እንደግፍ",
  },
};


const Hero = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const t = translations[language];

  return (
    <section
      className={`
        ${fraunces.variable} ${inter.variable}
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#100C1E]
        font-[family-name:var(--font-body)]
      `}
    >
      {/* =========================================
          AMBIENT DAWN-LIGHT BACKGROUND
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(120%_80%_at_50%_-10%,#3A1D66_0%,#1B1338_45%,#100C1E_80%)]
        "
      />

      {/* Soft gold glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[45%]
          bg-[linear-gradient(to_top,rgba(232,179,76,0.08),transparent)]
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          flex-col
          items-center
          justify-center
          px-5
          pb-14
          pt-24
          sm:px-8
        "
      >
        <div className="mx-auto w-full max-w-3xl text-center">

          {/* =====================================
              EYEBROW
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: EASE,
            }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E8B34C]/70" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B34C]">
              {t.eyebrow}
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#E8B34C]/70" />
          </motion.div>

          {/* =====================================
              HEADLINE
          ====================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: EASE,
            }}
            className="
              text-[clamp(2.25rem,5vw+1rem,4.25rem)]
              font-medium
              leading-[1.08]
              tracking-tight
              text-[#F6EFFB]
              font-[family-name:var(--font-display)]
            "
          >
            {t.title}

            <span
              className="
                block
                font-[family-name:var(--font-display)]
                italic
                text-[#D9A7F2]
              "
            >
              {t.highlight}
            </span>
          </motion.h1>

          {/* =====================================
              DESCRIPTION
          ====================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.32,
              duration: 0.7,
              ease: EASE,
            }}
            className="
              mx-auto
              mt-6
              max-w-xl
              text-[clamp(1rem,0.4vw+0.95rem,1.15rem)]
              leading-relaxed
              text-[#C9C1DC]
            "
          >
            {t.description}
          </motion.p>

          {/* =====================================
              BUTTONS
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.44,
              duration: 0.7,
              ease: EASE,
            }}
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >
            {/* START DONATING */}

            <button
  onClick={() => router.push("/login")}
  className="
    w-full
    rounded-full
    bg-gradient-to-r
    from-[#9F08BD]
    to-[#B24CE8]
    px-8
    py-3.5
    font-semibold
    text-white
    shadow-[0_10px_30px_-8px_rgba(159,8,189,0.6)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_16px_36px_-8px_rgba(159,8,189,0.75)]
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-[#E8B34C]
    sm:w-auto
  "
>
  {t.donate}
</button>

            {/* EXPLORE CHURCHES */}

            <button
              onClick={() =>
                document
                  .querySelector("#churches")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                w-full
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                px-8
                py-3.5
                font-semibold
                text-[#F0E6FA]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/30
                hover:bg-white/[0.08]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#E8B34C]
                sm:w-auto
              "
            >
              {t.explore}
            </button>
          </motion.div>

          {/* =====================================
              TRUST STRIP
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.56,
              duration: 0.7,
              ease: EASE,
            }}
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-6
              border-t
              border-white/10
              pt-8
              sm:flex-row
              sm:gap-10
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex -space-x-2">

                <div
                  className="
                    h-8
                    w-8
                    rounded-full
                    border-2
                    border-[#100C1E]
                    bg-[#9F08BD]
                  "
                />

                <div
                  className="
                    h-8
                    w-8
                    rounded-full
                    border-2
                    border-[#100C1E]
                    bg-[#4AA8D8]
                  "
                />

                <div
                  className="
                    h-8
                    w-8
                    rounded-full
                    border-2
                    border-[#100C1E]
                    bg-[#E8B34C]
                  "
                />

              </div>

              <p className="text-sm font-medium text-[#C9C1DC]">
                {t.trust}
              </p>

            </div>
          </motion.div>

        </div>
      </div>

      

    </section>
  );
};

export default Hero;