"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const Register = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "donor",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Registration data:", formData);

    // Later:
    // send formData to your backend
  };

  const stepVariants = {
    enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: 1 | -1) => ({ opacity: 0, x: dir * -24 }),
  };

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
        py-12
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

          <p className="mt-2 text-sm text-[#5D5875]">Create your AderaPay account</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#E9DAF4] bg-white p-7 shadow-xl shadow-[#9F08BD]/10">
          {/* Progress */}
          <div className="mb-7 flex items-center justify-center">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex items-center">
                <div
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    ${
                      step >= number
                        ? "bg-gradient-to-br from-[#9F08BD] to-[#6B2FA0] text-white shadow-sm shadow-[#9F08BD]/30"
                        : "bg-[#F1E9F7] text-[#9C93B0]"
                    }
                  `}
                >
                  {number}
                </div>

                {number !== 3 && (
                  <div
                    className={`
                      h-0.5
                      w-12
                      transition-colors
                      duration-300
                      ${step > number ? "bg-[#E8B34C]" : "bg-[#F1E9F7]"}
                    `}
                  />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: EASE }}
              >
                <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
                  Personal Information
                </h1>

                <p className="mb-6 mt-1 text-sm text-[#5D5875]">
                  Tell us a little about yourself.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                      Full Name
                    </label>

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-[#E9DAF4] bg-[#FBF8FD] px-4 py-2.5 text-[#241C3D] outline-none transition focus:border-[#9F08BD] focus:ring-2 focus:ring-[#9F08BD]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                      Email Address
                    </label>

                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[#E9DAF4] bg-[#FBF8FD] px-4 py-2.5 text-[#241C3D] outline-none transition focus:border-[#9F08BD] focus:ring-2 focus:ring-[#9F08BD]/15"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="mt-3 w-full rounded-lg bg-gradient-to-r from-[#9F08BD] to-[#B24CE8] py-2.5 font-bold text-white shadow-md shadow-[#9F08BD]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#9F08BD]/35"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: EASE }}
              >
                <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
                  Secure Your Account
                </h1>

                <p className="mb-6 mt-1 text-sm text-[#5D5875]">
                  Create a strong password for your account.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                      Password
                    </label>

                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="Create a password"
                      className="w-full rounded-lg border border-[#E9DAF4] bg-[#FBF8FD] px-4 py-2.5 text-[#241C3D] outline-none transition focus:border-[#9F08BD] focus:ring-2 focus:ring-[#9F08BD]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                      Confirm Password
                    </label>

                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full rounded-lg border border-[#E9DAF4] bg-[#FBF8FD] px-4 py-2.5 text-[#241C3D] outline-none transition focus:border-[#9F08BD] focus:ring-2 focus:ring-[#9F08BD]/15"
                    />
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="w-1/3 rounded-lg border border-[#241C3D] py-2.5 font-semibold text-[#241C3D] transition hover:bg-[#241C3D] hover:text-white"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 rounded-lg bg-gradient-to-r from-[#9F08BD] to-[#B24CE8] py-2.5 font-bold text-white shadow-md shadow-[#9F08BD]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#9F08BD]/35"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.form
                key="step3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: EASE }}
                onSubmit={handleSubmit}
              >
                <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
                  Choose Your Account
                </h1>

                <p className="mb-6 mt-1 text-sm text-[#5D5875]">
                  How do you want to use AderaPay?
                </p>

                <div className="space-y-3">
                  {/* Donor */}
                  <label
                    className={`
                      block
                      cursor-pointer
                      rounded-xl
                      border-2
                      p-4
                      transition
                      ${
                        formData.accountType === "donor"
                          ? "border-[#9F08BD] bg-[#F6EEFB]"
                          : "border-[#E9DAF4]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="donor"
                      checked={formData.accountType === "donor"}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🤍</div>

                      <div>
                        <h3 className="font-semibold text-[#241C3D]">Donor</h3>
                        <p className="text-sm text-[#5D5875]">
                          Support churches and communities.
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Church */}
                  <label
                    className={`
                      block
                      cursor-pointer
                      rounded-xl
                      border-2
                      p-4
                      transition
                      ${
                        formData.accountType === "church"
                          ? "border-[#9F08BD] bg-[#F6EEFB]"
                          : "border-[#E9DAF4]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="church"
                      checked={formData.accountType === "church"}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="flex items-center gap-3">
                      <div className="text-2xl">⛪</div>

                      <div>
                        <h3 className="font-semibold text-[#241C3D]">Church</h3>
                        <p className="text-sm text-[#5D5875]">
                          Receive and manage donations.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Terms */}
                <div className="mt-5 flex items-start gap-2">
                  <input type="checkbox" required className="mt-1 accent-[#9F08BD]" />
                  <p className="text-xs leading-relaxed text-[#5D5875]">
                    I agree to AderaPay&apos;s Terms of Service and Privacy Policy.
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="w-1/3 rounded-lg border border-[#241C3D] py-2.5 font-semibold text-[#241C3D] transition hover:bg-[#241C3D] hover:text-white"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-gradient-to-r from-[#9F08BD] to-[#B24CE8] py-2.5 font-bold text-white shadow-md shadow-[#9F08BD]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#9F08BD]/35"
                  >
                    Create Account
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-[#5D5875]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#241C3D] transition hover:text-[#9F08BD]"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
          <Link href="/" className="text-sm text-[#5D5875] transition hover:text-[#241C3D]">
            ← Back to AderaPay
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default Register;
