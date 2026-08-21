"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Fraunces, Inter } from "next/font/google";

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

type Language = "EN" | "AM";

const Login = () => {
  const [language, setLanguage] = useState<Language>("EN");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const content = {
    EN: {
      back: "← Back to AderaPay",
      subtitle: "Welcome back. Give with purpose.",

      loginTitle: "Welcome Back",
      loginDescription:
        "Login to continue to your AderaPay account.",

      email: "Email Address",
      emailPlaceholder: "you@example.com",

      password: "Password",
      passwordPlaceholder: "Enter your password",

      forgot: "Forgot password?",
      remember: "Remember me",

      login: "Login",

      or: "OR",

      noAccount: "Don't have an account?",
      create: "Create one",

      show: "Show",
      hide: "Hide",
    },

    AM: {
      back: "← ወደ አደራፔይ ተመለስ",
      subtitle: "እንኳን ደህና መጡ። በዓላማ ይስጡ።",

      loginTitle: "እንኳን ደህና መጡ",
      loginDescription:
        "ወደ አደራፔይ መለያዎ ለመቀጠል ይግቡ።",

      email: "የኢሜይል አድራሻ",
      emailPlaceholder: "you@example.com",

      password: "የይለፍ ቃል",
      passwordPlaceholder: "የይለፍ ቃልዎን ያስገቡ",

      forgot: "የይለፍ ቃልዎን ረሱ?",
      remember: "አስታውሰኝ",

      login: "ግባ",

      or: "ወይም",

      noAccount: "መለያ የለዎትም?",
      create: "መለያ ይፍጠሩ",

      show: "አሳይ",
      hide: "ደብቅ",
    },
  };

  const t = content[language];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) return;

    console.log("Login:", formData);

    // Connect your login API here.
  };

  return (
    <main
      className={`
        ${fraunces.variable}
        ${inter.variable}

        relative
        min-h-screen
        overflow-hidden
        bg-[#FBF8FD]
        px-4
        py-4
        font-[family-name:var(--font-body)]

        lg:h-screen
        lg:overflow-hidden
      `}
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A7F2]/30 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E8B34C]/15 blur-3xl" />

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: EASE,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-2rem)]
          w-full
          max-w-xl
          flex-col

          lg:h-[calc(100vh-2rem)]
          lg:min-h-0
        "
      >
        {/* =========================
            TOP BAR
        ========================= */}

        <div className="flex shrink-0 items-center justify-between pb-3">
          <Link
            href="/"
            className="
              text-sm
              font-medium
              text-[#5D5875]
              transition
              hover:text-[#9F08BD]
            "
          >
            {t.back}
          </Link>

          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
          />
        </div>

        {/* =========================
            LOGO
        ========================= */}

        <div className="shrink-0 pb-3 text-center">
          <Link
            href="/"
            className="
              text-3xl
              font-medium
              text-[#241C3D]
              font-[family-name:var(--font-display)]
            "
          >
            Adera
            <span className="italic text-[#9F08BD]">
              Pay
            </span>
          </Link>

          <p className="mt-1 text-sm text-[#5D5875]">
            {t.subtitle}
          </p>
        </div>

        {/* =========================
            LOGIN CARD
        ========================= */}

        <div
          className="
            flex
            min-h-0
            flex-1
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-[#E9DAF4]
            bg-white
            shadow-xl
            shadow-[#9F08BD]/10
          "
        >
          {/* CARD CONTENT */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              p-5
              sm:p-6
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: EASE,
              }}
              className="flex min-h-full flex-col justify-center"
            >
              {/* =========================
                  HEADER
              ========================= */}

              <div className="mb-5">
                <div
                  className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F6EEFB]
                    text-xl
                  "
                >
                  👋
                </div>

                <h1
                  className="
                    text-2xl
                    font-medium
                    text-[#241C3D]
                    font-[family-name:var(--font-display)]
                  "
                >
                  {t.loginTitle}
                </h1>

                <p className="mt-1 text-sm text-[#5D5875]">
                  {t.loginDescription}
                </p>
              </div>

              {/* =========================
                  FORM
              ========================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-sm
                      font-medium
                      text-[#241C3D]
                    "
                  >
                    {t.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>

                {/* PASSWORD */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="
                        text-sm
                        font-medium
                        text-[#241C3D]
                      "
                    >
                      {t.password}
                    </label>

                    <Link
                      href="/forgot-password"
                      className="
                        text-xs
                        font-medium
                        text-[#9F08BD]
                        transition
                        hover:text-[#7D0795]
                      "
                    >
                      {t.forgot}
                    </Link>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={
                        t.passwordPlaceholder
                      }
                      required
                      className={`${inputClass} pr-16`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute
                        right-2.5
                        top-1/2
                        -translate-y-1/2
                        rounded-md
                        px-2
                        py-1
                        text-xs
                        font-semibold
                        text-[#9F08BD]
                        transition
                        hover:bg-[#F6EEFB]
                      "
                    >
                      {showPassword
                        ? t.hide
                        : t.show}
                    </button>
                  </div>
                </div>

                {/* REMEMBER */}

                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="
                      h-4
                      w-4
                      accent-[#9F08BD]
                    "
                  />

                  <label
                    htmlFor="remember"
                    className="
                      text-xs
                      text-[#5D5875]
                    "
                  >
                    {t.remember}
                  </label>
                </div>

                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  disabled={
                    !formData.email ||
                    !formData.password
                  }
                  className="
                    w-full
                    rounded-lg
                    bg-gradient-to-r
                    from-[#9F08BD]
                    to-[#B24CE8]
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    shadow-[#9F08BD]/25
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    hover:shadow-[#9F08BD]/35
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    disabled:hover:translate-y-0
                  "
                >
                  {t.login}
                </button>
              </form>

              {/* =========================
                  DIVIDER
              ========================= */}

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#E9DAF4]" />

                <span className="text-xs text-[#9C93B0]">
                  {t.or}
                </span>

                <div className="h-px flex-1 bg-[#E9DAF4]" />
              </div>

              {/* =========================
                  REGISTER LINK
              ========================= */}

              <p className="text-center text-sm text-[#5D5875]">
                {t.noAccount}{" "}
                <Link
                  href="/register"
                  className="
                    font-semibold
                    text-[#241C3D]
                    transition
                    hover:text-[#9F08BD]
                  "
                >
                  {t.create}
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

/* =========================================================
   LANGUAGE SWITCHER
========================================================= */

function LanguageSwitcher({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div
      className="
        flex
        items-center
        rounded-full
        border
        border-[#E9DAF4]
        bg-white
        p-1
        shadow-sm
      "
    >
      <button
        type="button"
        onClick={() => setLanguage("EN")}
        className={`
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          transition

          ${
            language === "EN"
              ? "bg-[#9F08BD] text-white"
              : "text-[#5D5875] hover:text-[#9F08BD]"
          }
        `}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("AM")}
        className={`
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          transition

          ${
            language === "AM"
              ? "bg-[#9F08BD] text-white"
              : "text-[#5D5875] hover:text-[#9F08BD]"
          }
        `}
      >
        አማ
      </button>
    </div>
  );
}

/* =========================================================
   INPUT STYLE
========================================================= */

const inputClass = `
  w-full
  rounded-lg
  border
  border-[#E9DAF4]
  bg-[#FBF8FD]
  px-4
  py-2.5
  text-[#241C3D]
  outline-none
  transition
  placeholder:text-[#9C93B0]
  focus:border-[#9F08BD]
  focus:ring-2
  focus:ring-[#9F08BD]/15
`;

export default Login;