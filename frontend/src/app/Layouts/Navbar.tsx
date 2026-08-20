"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="w-full h-20 bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Adera<span className="text-[#D4AF37]">Pay</span>
        </a>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-7">

          <a
            href="#about"
            className="text-white font-medium hover:text-[#D4AF37] transition-colors"
          >
            About
          </a>

          <a
            href="#how-it-works"
            className="text-white font-medium hover:text-[#D4AF37] transition-colors"
          >
            How It Works
          </a>

          <a
            href="#churches"
            className="text-white font-medium hover:text-[#D4AF37] transition-colors"
          >
            Churches
          </a>

          {/* Language */}
          <div className="flex items-center border border-white/40 rounded-lg overflow-hidden">
            <button
              onClick={() => setLanguage("EN")}
              className={`px-3 py-2 text-sm font-medium transition ${
                language === "EN"
                  ? "bg-[#D4AF37] text-[#123C2A]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("AM")}
              className={`px-3 py-2 text-sm font-medium transition ${
                language === "AM"
                  ? "bg-[#D4AF37] text-[#123C2A]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              አማ
            </button>
          </div>

          {/* Donate */}
          <button
            className="
              px-6
              py-2.5
              rounded-xl
              bg-[#D4AF37]
              text-[#123C2A]
              font-bold
              hover:bg-[#E2C45A]
              hover:-translate-y-0.5
              transition-all
              duration-300
              shadow-lg
            "
          >
            Donate
          </button>

        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex items-center gap-3">

          {/* Language - ALWAYS VISIBLE */}
          <div className="flex items-center border border-white/40 rounded-lg overflow-hidden">

            <button
              onClick={() => setLanguage("EN")}
              className={`px-2.5 py-1.5 text-xs font-semibold transition ${
                language === "EN"
                  ? "bg-[#D4AF37] text-[#123C2A]"
                  : "text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("AM")}
              className={`px-2.5 py-1.5 text-xs font-semibold transition ${
                language === "AM"
                  ? "bg-[#D4AF37] text-[#123C2A]"
                  : "text-white"
              }`}
            >
              አማ
            </button>

          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
        }`}
      >
        <div className="bg-[#123C2A]/95 backdrop-blur-md border-t border-white/10 px-6 py-6">

          <div className="flex flex-col gap-5">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg hover:text-[#D4AF37] transition"
            >
              About
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg hover:text-[#D4AF37] transition"
            >
              How It Works
            </a>

            <a
              href="#churches"
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg hover:text-[#D4AF37] transition"
            >
              Churches
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              className="
                w-full
                py-3
                rounded-xl
                bg-[#D4AF37]
                text-[#123C2A]
                font-bold
                hover:bg-[#E2C45A]
                transition
              "
            >
              Donate
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;