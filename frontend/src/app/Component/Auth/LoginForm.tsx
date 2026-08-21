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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className={`
        ${fraunces.variable} ${inter.variable}
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#FBF8FD]
        px-4
        font-[family-name:var(--font-body)]
      `}
    >
      {/* soft ambient glow, consistent with the rest of the site */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D9A7F2]/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E8B34C]/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-6 text-center">
          <Link
            href="/"
            className="text-3xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]"
          >
            Adera<span className="italic text-[#9F08BD]">Pay</span>
          </Link>

          <p className="mt-2 text-sm text-[#5D5875]">
            Welcome back. Give with purpose.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-[#E9DAF4] bg-white p-7 shadow-xl shadow-[#9F08BD]/10">
          {/* Header */}
          <div className="mb-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6EEFB]">
              <span className="text-xl">👋</span>
            </div>

            <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
              Welcome Back
            </h1>

            <p className="mt-1 text-sm text-[#5D5875]">
              Login to continue to your AderaPay account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[#241C3D]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="
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
                  focus:border-[#9F08BD]
                  focus:ring-2
                  focus:ring-[#9F08BD]/15
                "
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-[#241C3D]">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#9F08BD] transition hover:text-[#7D0795]"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-[#E9DAF4]
                    bg-[#FBF8FD]
                    px-4
                    py-2.5
                    pr-16
                    text-[#241C3D]
                    outline-none
                    transition
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
                    text-xs
                    font-semibold
                    text-[#9F08BD]
                    transition
                    hover:text-[#7D0795]
                  "
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 pt-1">
              <input id="remember" type="checkbox" className="accent-[#9F08BD]" />
              <label htmlFor="remember" className="text-xs text-[#5D5875]">
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                rounded-lg
                bg-gradient-to-r
                from-[#9F08BD]
                to-[#B24CE8]
                py-2.5
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
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E9DAF4]" />
            <span className="text-xs text-[#9C93B0]">OR</span>
            <div className="h-px flex-1 bg-[#E9DAF4]" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-[#5D5875]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#241C3D] transition hover:text-[#9F08BD]"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm text-[#5D5875] transition hover:text-[#241C3D]"
          >
            ← Back to AderaPay
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default Login;
