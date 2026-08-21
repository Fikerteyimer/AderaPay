"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      back: "← Back to AderaPay",
      welcome: "Welcome back. Give with purpose.",
      loginTitle: "Welcome Back",
      loginDescription: "Login to continue to your AderaPay account.",
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
      welcome: "እንኳን ደህና መጡ። በዓላማ ይስጡ።",
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

  return (
    <main
      className={`
        ${fraunces.variable} ${inter.variable}
        relative
        min-h-screen
        overflow-hidden
        bg-[#FBF8FD]
        px-4
        py-6
        font-[family-name:var(--font-body)]
      `}
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A7F2]/30 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E8B34C]/15 blur-3xl" />

      {/* =========================
          TOP NAVIGATION
      ========================== */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#E9DAF4]
            bg-white/80
            px-4
            py-2
            text-sm
            font-medium
            text-[#5D5875]
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-x-0.5
            hover:border-[#9F08BD]/30
            hover:text-[#9F08BD]
            hover:shadow-md
          "
        >
          {t.back}
        </Link>
      </div>

      {/* =========================
          LOGIN CONTENT
      ========================== */}
      <div className="relative flex min-h-[calc(100vh-90px)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-6 text-center">
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
              <span className="italic text-[#9F08BD]">Pay</span>
            </Link>

            <p className="mt-2 text-sm text-[#5D5875]">
              {t.welcome}
            </p>
          </div>

          {/* Login Card */}
          <div
            className="
              rounded-3xl
              border
              border-[#E9DAF4]
              bg-white
              p-7
              shadow-xl
              shadow-[#9F08BD]/10
              sm:p-8
            "
          >
            {/* Header */}
            <div className="mb-7">
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
                "
              >
                <span className="text-xl">👋</span>
              </div>

              <h1
                className="
                  text-2xl
                  font-medium
                  text-[#241C3D]
                  font-[family-name:var(--font-display)]
                  sm:text-3xl
                "
              >
                {t.loginTitle}
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-[#5D5875]">
                {t.loginDescription}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#241C3D]"
                >
                  {t.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#E9DAF4]
                    bg-[#FBF8FD]
                    px-4
                    py-3
                    text-[#241C3D]
                    outline-none
                    transition
                    placeholder:text-[#9C93B0]
                    focus:border-[#9F08BD]
                    focus:ring-2
                    focus:ring-[#9F08BD]/15
                  "
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#241C3D]"
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
                    type={showPassword ? "text" : "password"}
                    placeholder={t.passwordPlaceholder}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#E9DAF4]
                      bg-[#FBF8FD]
                      px-4
                      py-3
                      pr-16
                      text-[#241C3D]
                      outline-none
                      transition
                      placeholder:text-[#9C93B0]
                      focus:border-[#9F08BD]
                      focus:ring-2
                      focus:ring-[#9F08BD]/15
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-3
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
                      hover:text-[#7D0795]
                    "
                  >
                    {showPassword ? t.hide : t.show}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 accent-[#9F08BD]"
                />

                <label
                  htmlFor="remember"
                  className="text-xs text-[#5D5875]"
                >
                  {t.remember}
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-[#9F08BD]
                  to-[#B24CE8]
                  py-3
                  font-bold
                  text-white
                  shadow-md
                  shadow-[#9F08BD]/25
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-[#9F08BD]/35
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#E8B34C]
                "
              >
                {t.login}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E9DAF4]" />

              <span className="text-xs text-[#9C93B0]">
                {t.or}
              </span>

              <div className="h-px flex-1 bg-[#E9DAF4]" />
            </div>

            {/* Register */}
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
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Login;