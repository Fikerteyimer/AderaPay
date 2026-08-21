"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";
import { useRouter } from "next/navigation";
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ================= ROUTER =================
  const router = useRouter();

  // ================= LANGUAGE =================
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    {
      name: language === "EN" ? "About" : "ስለ እኛ",
      href: "#about",
    },
    {
      name: language === "EN" ? "How It Works" : "እንዴት ይሰራል",
      href: "#how-it-works",
    },
    {
      name: language === "EN" ? "Churches" : "አብያተ ክርስቲያናት",
      href: "#churches",
    },
  ];

  // ================= SCROLL DETECTION =================
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ================= NAVIGATION =================
  const handleScroll = (href: string) => {
    setMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ================= LOGIN =================
  const handleDonate = () => {
    setMenuOpen(false);
    router.push("/login");
  };

  return (
    <nav
      className={`
        ${fraunces.variable} ${inter.variable}
        fixed
        left-0
        top-0
        z-[100]
        h-16
        w-full
        font-[family-name:var(--font-body)]
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-white/10 bg-[#100C1E]/85 shadow-lg shadow-black/20 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center px-5 sm:px-6">

        {/* ================= LOGO ================= */}

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="group flex flex-shrink-0 items-center"
        >
          <span
            className="
              text-2xl
              font-medium
              text-white
              font-[family-name:var(--font-display)]
              md:text-[1.7rem]
            "
          >
            Adera
          </span>

          <span
            className="
              text-2xl
              italic
              font-medium
              text-[#E8B34C]
              font-[family-name:var(--font-display)]
              md:text-[1.7rem]
            "
          >
            Pay
          </span>

          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#E8B34C] transition-transform duration-300 group-hover:scale-125" />
        </button>

        {/* ================= DESKTOP CENTER NAV ================= */}

        <div className="hidden flex-1 justify-center md:flex">
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-1.5
              py-1.5
              backdrop-blur-sm
            "
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="
                  relative
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:text-[#E8B34C]
                "
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP RIGHT ================= */}

        <div className="hidden flex-shrink-0 items-center gap-3 md:flex">

          {/* LANGUAGE */}

          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.06] p-1">

            <button
              onClick={() => setLanguage("EN")}
              className={`
                rounded-full
                px-3
                py-1.5
                text-xs
                font-bold
                transition-all
                duration-300
                ${
                  language === "EN"
                    ? "bg-[#E8B34C] text-[#241C3D] shadow-sm"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("AM")}
              className={`
                rounded-full
                px-3
                py-1.5
                text-xs
                font-bold
                transition-all
                duration-300
                ${
                  language === "AM"
                    ? "bg-[#E8B34C] text-[#241C3D] shadow-sm"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              አማ
            </button>

          </div>

          {/* DESKTOP DONATE */}

          <button
            onClick={handleDonate}
            className="
              rounded-full
              bg-gradient-to-r
              from-[#9F08BD]
              to-[#B24CE8]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              shadow-md
              shadow-[#9F08BD]/30
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              hover:shadow-[#9F08BD]/40
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#E8B34C]
            "
          >
            {language === "EN" ? "Donate" : "ይለግሱ"}
          </button>

        </div>

        {/* ================= MOBILE RIGHT ================= */}

        <div className="ml-auto flex items-center gap-3 md:hidden">

          {/* MOBILE LANGUAGE */}

          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.06] p-1">

            <button
              onClick={() => setLanguage("EN")}
              className={`
                rounded-full
                px-2.5
                py-1.5
                text-[11px]
                font-bold
                transition-all
                duration-300
                ${
                  language === "EN"
                    ? "bg-[#E8B34C] text-[#241C3D]"
                    : "text-white/80"
                }
              `}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("AM")}
              className={`
                rounded-full
                px-2.5
                py-1.5
                text-[11px]
                font-bold
                transition-all
                duration-300
                ${
                  language === "AM"
                    ? "bg-[#E8B34C] text-[#241C3D]"
                    : "text-white/80"
                }
              `}
            >
              አማ
            </button>

          </div>

          {/* HAMBURGER */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              transition-all
              duration-300
              hover:bg-white/10
            "
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{
                duration: 0.25,
                ease: EASE,
              }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{
                duration: 0.25,
                ease: EASE,
              }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.25,
              ease: EASE,
            }}
            className="absolute left-0 top-16 w-full px-4 pt-3 md:hidden"
          >
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#E9DAF4]
                bg-white
                shadow-2xl
              "
            >
              <div className="flex flex-col gap-2 p-5">

                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.3,
                      ease: EASE,
                    }}
                    onClick={() => handleScroll(link.href)}
                    className="
                      w-full
                      rounded-xl
                      px-4
                      py-3.5
                      text-left
                      font-semibold
                      text-[#241C3D]
                      transition-all
                      duration-300
                      hover:bg-[#F6EEFB]
                      hover:text-[#9F08BD]
                    "
                  >
                    {link.name}
                  </motion.button>
                ))}

                {/* MOBILE DONATE */}

                <motion.button
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.05 * navLinks.length,
                    duration: 0.3,
                    ease: EASE,
                  }}
                  onClick={handleDonate}
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-[#9F08BD]
                    to-[#B24CE8]
                    py-3.5
                    font-bold
                    text-white
                    shadow-md
                    shadow-[#9F08BD]/25
                    transition-all
                    duration-300
                    hover:shadow-lg
                  "
                >
                  {language === "EN" ? "Donate" : "ይለግሱ"}
                </motion.button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;