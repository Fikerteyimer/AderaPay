"use client";

import { motion } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";
import { useLanguage } from "../../../app/context/LanguageContext";
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

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const HowItWorks = () => {
  const { language } = useLanguage();

  const isAmharic = language === "AM";
  const router = useRouter();


  const steps = isAmharic
    ? [
  {
    number: "01",
    title: "መለገስ የሚፈልጉትን ቤተ ክርስቲያን ይምረጡ",
    description:
      "የተረጋገጡ ቤተ ክርስቲያናትን ይመልከቱና መደገፍ የሚፈልጉትን ቤተ ክርስቲያን፣ ማህበረሰብ ወይም ዓላማ ይምረጡ።",
  },
  {
    number: "02",
    title: "የልገሳ አይነትና መጠን ይምረጡ",
    description:
      "በኩራት፣ አስራት ወይም ምጽዋትን  ይምረጡ። ምን ማለት እንደሆነ ካላወቁ ከመምረጥዎ በፊት ስለ እያንዳንዱ የልገሳ አይነት ተጨማሪ መረጃ ማንበብ ይችላሉ።",
  },
  {
    number: "03",
    title: "በአስተማማኝ ሁኔታ ይለግሱ",
    description:
      "የልገሳዎን መጠን ያስገቡና በቀላል፣ ፈጣንና የተጠበቀ የክፍያ ሂደት ልገሳዎን ያጠናቅቁ።",
  },
  {
    number: "04",
    title: "ተፅዕኖ ይፍጠሩ",
    description:
      "ልገሳዎ ቤተ ክርስቲያኑንና ማህበረሰቡን ለሚጠቅሙ አገልግሎቶችና ትርጉም ላላቸው ስራዎች ይደርሳል።",
  },
]:
[
  {
    number: "01",
    title: "Find a Church",
    description:
      "Explore verified churches and choose the church, community, or cause you would like to support.",
  },
  {
    number: "02",
    title: "Choose Your Giving",
    description:
      "Choose First-Time Giving, 1/10 Giving, or a Donation. Not sure what they mean? You can learn more about each giving option before you choose.",
  },
  {
    number: "03",
    title: "Give Securely",
    description:
      "Enter your giving amount and complete your contribution through a simple, fast, and secure payment process.",
  },
  {
    number: "04",
    title: "Make an Impact",
    description:
      "Your contribution supports the church and helps create meaningful change in the community.",
  },
]

  return (
    <section
      id="how-it-works"
      className={`
        ${fraunces.variable} ${inter.variable}
        bg-white
        px-6
        py-24
        font-[family-name:var(--font-body)]
        scroll-mt-20
        sm:py-28
      `}
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================
            SECTION HEADER
        ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E8B34C]/70" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8B34C]">
              {isAmharic ? "እንዴት እንደሚሰራ" : "How It Works"}
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
            {isAmharic ? (
              <>
                መስጠት{" "}
                <span className="italic text-[#9F08BD]">
                  ቀላል ነው።
                </span>
              </>
            ) : (
              <>
                Giving is{" "}
                <span className="italic text-[#9F08BD]">
                  simple.
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#5D5875]">
            {isAmharic
              ? "አደራፔይ ቤተክርስቲያናትን ለማግኘት፣ በደህንነት ለመለገስ እና የሚያስፈልጉዎትን ማህበረሰቦች ለመደገፍ ቀላል መንገድ ያቀርባል።"
              : "AderaPay makes it easy to discover churches, make secure donations, and support the communities that matter to you."}
          </p>
        </motion.div>

        {/* =====================================
            STEPS
        ====================================== */}
        <div className="relative">
          {/* Connecting thread */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              right-[12.5%]
              top-7
              hidden
              h-px
              bg-gradient-to-r
              from-[#9F08BD]/0
              via-[#E8B34C]/50
              to-[#9F08BD]/0
              lg:block
            "
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-[#E9DAF4]
                  bg-[#FBF8FD]
                  p-7
                  transition-colors
                  duration-300
                  hover:border-[#E8B34C]/60
                  hover:shadow-xl
                  hover:shadow-[#9F08BD]/10
                "
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="
                    relative
                    z-10
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#9F08BD]
                    to-[#6B2FA0]
                    text-lg
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#9F08BD]/25
                    ring-4
                    ring-white
                  "
                >
                  {step.number}
                </motion.div>

                {/* Decorative line */}
                <div
                  className="
                    mb-5
                    h-1
                    w-10
                    rounded-full
                    bg-[#E8B34C]
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />

                {/* Content */}
                <h3
                  className="
                    text-xl
                    font-medium
                    text-[#241C3D]
                    font-[family-name:var(--font-display)]
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#5D5875]">
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="absolute right-6 top-7 text-xs font-bold tracking-widest text-[#E9DAF4]">
                  {isAmharic ? "ደረጃ" : "STEP"}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =====================================
            BOTTOM CTA
        ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-[#5D5875]">
            {isAmharic
              ? "ለለውጥ ዝግጁ ነዎት?"
              : "Ready to make a difference?"}
          </p>

          <button
            onClick={() =>router.push("/login")}
            className="
              rounded-full
              bg-gradient-to-r
              from-[#9F08BD]
              to-[#B24CE8]
              px-8
              py-3.5
              font-semibold
              text-white
              shadow-lg
              shadow-[#9F08BD]/25
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-[#9F08BD]/35
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#E8B34C]
            "
          >
            {isAmharic ? "መለገስ ይጀምሩ" : "Start Donating"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;