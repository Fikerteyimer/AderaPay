"use client";

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

const Footer = () => {
  const { language } = useLanguage();

  const isAmharic = language === "AM";

  const links = isAmharic
    ? [
        { name: "ስለ እኛ", href: "#about" },
        { name: "እንዴት እንደሚሰራ", href: "#how-it-works" },
        { name: "ቤተክርስቲያናት", href: "#churches" },
      ]
    : [
        { name: "About", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Churches", href: "#churches" },
      ];

  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className={`
        ${fraunces.variable} ${inter.variable}
        border-t
        border-white/10
        bg-[#100C1E]
        px-6
        py-10
        font-[family-name:var(--font-body)]
      `}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <span className="text-xl font-medium text-white font-[family-name:var(--font-display)]">
            Adera
          </span>

          <span className="text-xl font-medium italic text-[#E8B34C] font-[family-name:var(--font-display)]">
            Pay
          </span>
        </button>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-white/60 transition-colors duration-300 hover:text-[#E8B34C]"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/40">
          {isAmharic
            ? `© ${year} AderaPay። መብቱ በሙሉ የተጠበቀ ነው።`
            : `© ${year} AderaPay. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;