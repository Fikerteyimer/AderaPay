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

type Language = "EN" | "AM";
type AccountType = "donor" | "church";

const Register = () => {
  const [language, setLanguage] = useState<Language>("EN");
  const [accountType, setAccountType] = useState<AccountType | null>(null);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",

    churchName: "",
    denomination: "",
    churchCountry: "",
    city: "",
    address: "",
    churchPhone: "",
    churchEmail: "",
    website: "",
    registrationNumber: "",
    yearEstablished: "",
    pastorName: "",
    memberCount: "",
    document: null as File | null,

    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const content = {
    EN: {
      back: "← Back to AderaPay",
      subtitle: "Create your AderaPay account",

      chooseTitle: "Join AderaPay",
      chooseDescription: "Choose how you would like to use AderaPay.",

      donor: "Donor",
      donorDescription:
        "Support churches and communities through meaningful giving.",

      church: "Church",
      churchDescription:
        "Register your church to receive and manage donations.",

      continue: "Continue →",
      next: "Next →",
      backButton: "← Back",

      createAccount: "Create Account",
      submitChurch: "Submit Registration",

      stepPersonal: "Personal Information",
      stepPersonalDesc: "Tell us a little about yourself.",

      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",

      email: "Email Address",
      emailPlaceholder: "you@example.com",

      phone: "Phone Number",
      phonePlaceholder: "+251 9XX XXX XXX",

      country: "Country",
      countryPlaceholder: "Enter your country",

      churchInfo: "Church Information",
      churchInfoDesc: "Tell us about your church.",

      churchName: "Church Name",
      churchNamePlaceholder: "Enter the official church name",

      denomination: "Denomination / Church Type",
      denominationPlaceholder: "e.g. Orthodox, Protestant, Catholic",

      city: "City",
      cityPlaceholder: "Enter city",

      address: "Church Address",
      addressPlaceholder: "Enter church address",

      churchPhone: "Church Phone Number",
      churchEmail: "Church Email",

      website: "Website / Social Media",
      websitePlaceholder: "Optional",

      verification: "Church Verification",
      verificationDesc:
        "These details help us verify that your church is legitimate.",

      registrationNumber: "Registration / License Number",
      registrationPlaceholder: "Enter registration number",

      yearEstablished: "Year Established",
      yearPlaceholder: "e.g. 2005",

      pastorName: "Pastor / Church Leader",
      pastorPlaceholder: "Enter leader's full name",

      memberCount: "Approximate Number of Members",
      memberPlaceholder: "e.g. 500",

      document: "Church Registration Document",
      documentHelp:
        "Upload an official registration or license document.",

      security: "Secure Your Account",
      securityDesc: "Create a strong password for your account.",

      password: "Password",
      passwordPlaceholder: "Create a password",

      confirmPassword: "Confirm Password",
      confirmPlaceholder: "Confirm your password",

      review: "Review Your Information",
      reviewDesc:
        "Please make sure everything is correct before continuing.",

      accountType: "Account Type",
      donorAccount: "Donor Account",
      churchAccount: "Church Account",

      terms:
        "I agree to AderaPay's Terms of Service and Privacy Policy.",

      already: "Already have an account?",
      login: "Login",

      donorFlow: "Donor registration",
      churchFlow: "Church registration",

      verificationNotice:
        "Your church information will be reviewed by AderaPay before the church can receive donations.",

      required: "Please complete this field.",
      passwordMismatch: "Passwords do not match.",
    },

    AM: {
      back: "← ወደ አደራፔይ ተመለስ",
      subtitle: "የአደራፔይ መለያዎን ይፍጠሩ",

      chooseTitle: "አደራፔይን ይቀላቀሉ",
      chooseDescription:
        "አደራፔይን እንዴት መጠቀም እንደሚፈልጉ ይምረጡ።",

      donor: "ለጋሽ",
      donorDescription:
        "በትርጉም ያለው ልገሳ አብያተ ክርስቲያናትንና ማህበረሰቦችን ይደግፉ።",

      church: "ቤተ ክርስቲያን",
      churchDescription:
        "ቤተ ክርስቲያንዎን ይመዝግቡ እና ልገሳዎችን ይቀበሉ።",

      continue: "ቀጥል →",
      next: "ቀጣይ →",
      backButton: "← ተመለስ",

      createAccount: "መለያ ፍጠር",
      submitChurch: "ምዝገባ አስገባ",

      stepPersonal: "የግል መረጃ",
      stepPersonalDesc: "ስለራስዎ ጥቂት መረጃ ይስጡን።",

      fullName: "ሙሉ ስም",
      fullNamePlaceholder: "ሙሉ ስምዎን ያስገቡ",

      email: "የኢሜይል አድራሻ",
      emailPlaceholder: "you@example.com",

      phone: "ስልክ ቁጥር",
      phonePlaceholder: "+251 9XX XXX XXX",

      country: "ሀገር",
      countryPlaceholder: "ሀገርዎን ያስገቡ",

      churchInfo: "የቤተ ክርስቲያን መረጃ",
      churchInfoDesc:
        "ስለ ቤተ ክርስቲያንዎ መረጃ ይስጡን።",

      churchName: "የቤተ ክርስቲያን ስም",
      churchNamePlaceholder:
        "የቤተ ክርስቲያኑን ሙሉ ስም ያስገቡ",

      denomination: "የእምነት አይነት",
      denominationPlaceholder:
        "ለምሳሌ ኦርቶዶክስ፣ ፕሮቴስታንት",

      city: "ከተማ",
      cityPlaceholder: "ከተማ ያስገቡ",

      address: "የቤተ ክርስቲያን አድራሻ",
      addressPlaceholder: "አድራሻ ያስገቡ",

      churchPhone: "የቤተ ክርስቲያን ስልክ",
      churchEmail: "የቤተ ክርስቲያን ኢሜይል",

      website: "ድህረ ገጽ / ማህበራዊ ሚዲያ",
      websitePlaceholder: "ካለ ያስገቡ",

      verification: "የቤተ ክርስቲያን ማረጋገጫ",
      verificationDesc:
        "እነዚህ መረጃዎች ቤተ ክርስቲያኑ ትክክለኛ መሆኗን ለማረጋገጥ ይረዳሉ።",

      registrationNumber: "የምዝገባ / ፈቃድ ቁጥር",
      registrationPlaceholder: "የምዝገባ ቁጥር ያስገቡ",

      yearEstablished: "የተመሰረተበት ዓመት",
      yearPlaceholder: "ለምሳሌ 2005",

      pastorName: "የፓስተር / መሪ ስም",
      pastorPlaceholder: "የመሪውን ሙሉ ስም ያስገቡ",

      memberCount: "ግምታዊ የአባላት ብዛት",
      memberPlaceholder: "ለምሳሌ 500",

      document: "የቤተ ክርስቲያን ምዝገባ ሰነድ",
      documentHelp:
        "የምዝገባ ወይም የፈቃድ ሰነድ ይጫኑ።",

      security: "መለያዎን ያስጠብቁ",
      securityDesc:
        "ለመለያዎ ጠንካራ የይለፍ ቃል ይፍጠሩ።",

      password: "የይለፍ ቃል",
      passwordPlaceholder: "የይለፍ ቃል ይፍጠሩ",

      confirmPassword: "የይለፍ ቃል ያረጋግጡ",
      confirmPlaceholder: "የይለፍ ቃልዎን ያረጋግጡ",

      review: "መረጃዎን ይገምግሙ",
      reviewDesc:
        "ከመቀጠልዎ በፊት ሁሉም መረጃዎች ትክክል መሆናቸውን ያረጋግጡ።",

      accountType: "የመለያ አይነት",
      donorAccount: "የለጋሽ መለያ",
      churchAccount: "የቤተ ክርስቲያን መለያ",

      terms:
        "የአደራፔይን የአገልግሎት ውሎችና የግላዊነት ፖሊሲ እቀበላለሁ።",

      already: "አስቀድመው መለያ አለዎት?",
      login: "ግባ",

      donorFlow: "የለጋሽ ምዝገባ",
      churchFlow: "የቤተ ክርስቲያን ምዝገባ",

      verificationNotice:
        "ቤተ ክርስቲያኑ ልገሳ ከመቀበሏ በፊት መረጃዎቿ በአደራፔይ ይገመገማሉ።",

      required: "እባክዎ ይህን መስክ ይሙሉ።",
      passwordMismatch: "የይለፍ ቃሎች አይመሳሰሉም።",
    },
  };

  const t = content[language];

  const totalSteps = accountType === "church" ? 5 : 4;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      document: file,
    }));

    if (file) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.document;
        return next;
      });
    }
  };

  const chooseAccount = (type: AccountType) => {
    setAccountType(type);
    setStep(2);
    setDirection(1);
    setErrors({});
  };

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};

    const requiredFields =
      accountType === "donor"
        ? step === 2
          ? ["name", "email", "phone", "country"]
          : step === 3
          ? ["password", "confirmPassword"]
          : []
        : step === 2
        ? [
            "churchName",
            "denomination",
            "city",
            "churchCountry",
            "address",
            "churchPhone",
            "churchEmail",
          ]
        : step === 3
        ? [
            "registrationNumber",
            "yearEstablished",
            "pastorName",
            "memberCount",
          ]
        : step === 4
        ? ["password", "confirmPassword"]
        : [];

    requiredFields.forEach((field) => {
      const value =
        formData[field as keyof typeof formData];

      if (!value || String(value).trim() === "") {
        newErrors[field] = t.required;
      }
    });

    if (accountType === "church" && step === 3) {
      if (!formData.document) {
        newErrors.document = t.required;
      }
    }

    if (
      (step === 3 && accountType === "donor") ||
      (step === 4 && accountType === "church")
    ) {
      if (
        formData.password &&
        formData.confirmPassword &&
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword = t.passwordMismatch;
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) return;

    if (step < totalSteps) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    setErrors({});

    if (step > 1) {
      setDirection(-1);
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Registration:", {
      accountType,
      ...formData,
    });

    // Connect your backend/API here.
  };

  const goBackToSelection = () => {
    setAccountType(null);
    setStep(1);
    setErrors({});
  };

  const stepVariants = {
    enter: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir * 25,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (dir: 1 | -1) => ({
      opacity: 0,
      x: dir * -25,
    }),
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
        px-3
        py-3
        font-[family-name:var(--font-body)]

        sm:px-4
        sm:py-4

        lg:h-screen
        lg:overflow-hidden
      `}
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A7F2]/30 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#E8B34C]/15 blur-3xl" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-[calc(100vh-1.5rem)]
          w-full
          max-w-xl
          flex-col

          sm:h-[calc(100vh-2rem)]

          lg:h-[calc(100vh-2rem)]
        "
      >
        {/* TOP BAR */}
        <div className="flex shrink-0 items-center justify-between pb-2 sm:pb-3">
          <Link
            href="/"
            className="text-sm font-medium text-[#5D5875] transition hover:text-[#9F08BD]"
          >
            {t.back}
          </Link>

          <div className="flex items-center rounded-full border border-[#E9DAF4] bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                language === "EN"
                  ? "bg-[#9F08BD] text-white"
                  : "text-[#5D5875] hover:text-[#9F08BD]"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage("AM")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                language === "AM"
                  ? "bg-[#9F08BD] text-white"
                  : "text-[#5D5875] hover:text-[#9F08BD]"
              }`}
            >
              አማ
            </button>
          </div>
        </div>

        {/* LOGO */}
        <div className="shrink-0 pb-2 text-center sm:pb-3">
          <Link
            href="/"
            className="text-3xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]"
          >
            Adera
            <span className="italic text-[#9F08BD]">Pay</span>
          </Link>

          <p className="mt-1 text-sm text-[#5D5875]">
            {t.subtitle}
          </p>
        </div>

        {/* MAIN CARD */}
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
          <div className="min-h-0 flex-1 overflow-hidden p-4 sm:p-5 md:p-6">
            {/* ACCOUNT SELECTION */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                }}
                className="flex h-full flex-col justify-center"
              >
                <div className="mb-5 text-center">
                  <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
                    {t.chooseTitle}
                  </h1>

                  <p className="mt-2 text-sm leading-relaxed text-[#5D5875]">
                    {t.chooseDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  {/* DONOR */}
                  <button
                    type="button"
                    onClick={() => chooseAccount("donor")}
                    className="
                      group
                      w-full
                      rounded-2xl
                      border-2
                      border-[#E9DAF4]
                      p-4
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#9F08BD]
                      hover:bg-[#F6EEFB]
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6EEFB] text-xl transition group-hover:bg-[#9F08BD]">
                        🙏
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-semibold text-[#241C3D]">
                          {t.donor}
                        </h2>

                        <p className="mt-0.5 text-sm leading-relaxed text-[#5D5875]">
                          {t.donorDescription}
                        </p>
                      </div>

                      <span className="text-lg text-[#9F08BD]">
                        →
                      </span>
                    </div>
                  </button>

                  {/* CHURCH */}
                  <button
                    type="button"
                    onClick={() => chooseAccount("church")}
                    className="
                      group
                      w-full
                      rounded-2xl
                      border-2
                      border-[#E9DAF4]
                      p-4
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#E8B34C]
                      hover:bg-[#FFFDF8]
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF7E6] text-xl transition group-hover:bg-[#E8B34C]">
                        ⛪
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="font-semibold text-[#241C3D]">
                          {t.church}
                        </h2>

                        <p className="mt-0.5 text-sm leading-relaxed text-[#5D5875]">
                          {t.churchDescription}
                        </p>
                      </div>

                      <span className="text-lg text-[#E8B34C]">
                        →
                      </span>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* FORM FLOW */}
            {step > 1 && (
              <div className="flex h-full min-h-0 flex-col">
                {/* FLOW HEADER */}
                <div className="shrink-0">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9F08BD]">
                      {accountType === "church"
                        ? t.churchFlow
                        : t.donorFlow}
                    </span>

                    <span className="text-xs text-[#9C93B0]">
                      {step - 1} / {totalSteps - 1}
                    </span>
                  </div>

                  <div className="mb-4 flex gap-1.5">
                    {Array.from({
                      length: totalSteps - 1,
                    }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          index < step - 1
                            ? "bg-gradient-to-r from-[#9F08BD] to-[#B24CE8]"
                            : "bg-[#F1E9F7]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* SCROLLABLE FORM AREA */}
                <div
                  className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                    overscroll-contain
                    pr-1
                    pb-6
                    [scrollbar-width:thin]
                  "
                >
                  <AnimatePresence
                    mode="wait"
                    custom={direction}
                  >
                    {/* DONOR INFORMATION */}
                    {accountType === "donor" && step === 2 && (
                      <motion.div
                        key="donor-info"
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.25,
                          ease: EASE,
                        }}
                      >
                        <StepHeading
                          title={t.stepPersonal}
                          description={t.stepPersonalDesc}
                        />

                        <div className="space-y-3">
                          <Input
                            label={t.fullName}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.fullNamePlaceholder}
                            error={errors.name}
                            required
                          />

                          <Input
                            label={t.email}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.emailPlaceholder}
                            type="email"
                            error={errors.email}
                            required
                          />

                          <Input
                            label={t.phone}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t.phonePlaceholder}
                            type="tel"
                            error={errors.phone}
                            required
                          />

                          <Input
                            label={t.country}
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder={t.countryPlaceholder}
                            error={errors.country}
                            required
                          />

                          <StepButtons
                            onBack={goBackToSelection}
                            onNext={nextStep}
                            backText={t.backButton}
                            nextText={t.next}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* CHURCH INFORMATION */}
                    {accountType === "church" && step === 2 && (
                      <motion.div
                        key="church-info"
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.25,
                          ease: EASE,
                        }}
                      >
                        <StepHeading
                          title={t.churchInfo}
                          description={t.churchInfoDesc}
                        />

                        <div className="space-y-3">
                          <Input
                            label={t.churchName}
                            name="churchName"
                            value={formData.churchName}
                            onChange={handleChange}
                            placeholder={t.churchNamePlaceholder}
                            error={errors.churchName}
                            required
                          />

                          <Input
                            label={t.denomination}
                            name="denomination"
                            value={formData.denomination}
                            onChange={handleChange}
                            placeholder={t.denominationPlaceholder}
                            error={errors.denomination}
                            required
                          />

                          <div className="grid gap-3 sm:grid-cols-2">
                            <Input
                              label={t.city}
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder={t.cityPlaceholder}
                              error={errors.city}
                              required
                            />

                            <Input
                              label={t.country}
                              name="churchCountry"
                              value={formData.churchCountry}
                              onChange={handleChange}
                              placeholder={t.countryPlaceholder}
                              error={errors.churchCountry}
                              required
                            />
                          </div>

                          <Input
                            label={t.address}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder={t.addressPlaceholder}
                            error={errors.address}
                            required
                          />

                          <div className="grid gap-3 sm:grid-cols-2">
                            <Input
                              label={t.churchPhone}
                              name="churchPhone"
                              value={formData.churchPhone}
                              onChange={handleChange}
                              placeholder={t.phonePlaceholder}
                              error={errors.churchPhone}
                              required
                            />

                            <Input
                              label={t.churchEmail}
                              name="churchEmail"
                              value={formData.churchEmail}
                              onChange={handleChange}
                              placeholder={t.emailPlaceholder}
                              type="email"
                              error={errors.churchEmail}
                              required
                            />
                          </div>

                          <Input
                            label={t.website}
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder={t.websitePlaceholder}
                          />

                          <StepButtons
                            onBack={goBackToSelection}
                            onNext={nextStep}
                            backText={t.backButton}
                            nextText={t.next}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* CHURCH VERIFICATION */}
                    {accountType === "church" && step === 3 && (
                      <motion.div
                        key="verification"
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.25,
                          ease: EASE,
                        }}
                      >
                        <StepHeading
                          title={t.verification}
                          description={t.verificationDesc}
                        />

                        <div className="space-y-3">
                          <Input
                            label={t.registrationNumber}
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            placeholder={t.registrationPlaceholder}
                            error={errors.registrationNumber}
                            required
                          />

                          <div className="grid gap-3 sm:grid-cols-2">
                            <Input
                              label={t.yearEstablished}
                              name="yearEstablished"
                              value={formData.yearEstablished}
                              onChange={handleChange}
                              placeholder={t.yearPlaceholder}
                              type="number"
                              error={errors.yearEstablished}
                              required
                            />

                            <Input
                              label={t.memberCount}
                              name="memberCount"
                              value={formData.memberCount}
                              onChange={handleChange}
                              placeholder={t.memberPlaceholder}
                              type="number"
                              error={errors.memberCount}
                              required
                            />
                          </div>

                          <Input
                            label={t.pastorName}
                            name="pastorName"
                            value={formData.pastorName}
                            onChange={handleChange}
                            placeholder={t.pastorPlaceholder}
                            error={errors.pastorName}
                            required
                          />

                          {/* DOCUMENT */}
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                              {t.document}
                            </label>

                            <div className="rounded-xl border-2 border-dashed border-[#E9DAF4] bg-[#FBF8FD] p-3 transition hover:border-[#9F08BD]">
                              <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileChange}
                                className="w-full text-sm text-[#5D5875]"
                              />

                              <p className="mt-1.5 text-xs text-[#9C93B0]">
                                {t.documentHelp}
                              </p>

                              {formData.document && (
                                <p className="mt-1.5 break-all text-xs font-medium text-[#9F08BD]">
                                  ✓ {formData.document.name}
                                </p>
                              )}
                            </div>

                            {errors.document && (
                              <p className="mt-1 text-xs text-red-500">
                                {errors.document}
                              </p>
                            )}
                          </div>

                          <StepButtons
                            onBack={previousStep}
                            onNext={nextStep}
                            backText={t.backButton}
                            nextText={t.next}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* SECURITY */}
                    {((accountType === "donor" && step === 3) ||
                      (accountType === "church" && step === 4)) && (
                      <motion.div
                        key="security"
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.25,
                          ease: EASE,
                        }}
                      >
                        <StepHeading
                          title={t.security}
                          description={t.securityDesc}
                        />

                        <div className="space-y-3">
                          <Input
                            label={t.password}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder={t.passwordPlaceholder}
                            type="password"
                            error={errors.password}
                            required
                          />

                          <Input
                            label={t.confirmPassword}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder={t.confirmPlaceholder}
                            type="password"
                            error={errors.confirmPassword}
                            required
                          />

                          <StepButtons
                            onBack={previousStep}
                            onNext={nextStep}
                            backText={t.backButton}
                            nextText={t.next}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* DONOR REVIEW */}
                    {accountType === "donor" && step === 4 && (
                      <Review
                        title={t.review}
                        description={t.reviewDesc}
                        accountType={t.donorAccount}
                        rows={[
                          [t.fullName, formData.name],
                          [t.email, formData.email],
                          [t.phone, formData.phone],
                          [t.country, formData.country],
                        ]}
                        terms={t.terms}
                        submitText={t.createAccount}
                        backText={t.backButton}
                        onBack={previousStep}
                        onSubmit={handleSubmit}
                      />
                    )}

                    {/* CHURCH REVIEW */}
                    {accountType === "church" && step === 5 && (
                      <Review
                        title={t.review}
                        description={t.reviewDesc}
                        accountType={t.churchAccount}
                        rows={[
                          [t.churchName, formData.churchName],
                          [t.denomination, formData.denomination],
                          [t.city, formData.city],
                          [t.country, formData.churchCountry],
                          [t.address, formData.address],
                          [t.churchPhone, formData.churchPhone],
                          [t.churchEmail, formData.churchEmail],
                          [
                            t.registrationNumber,
                            formData.registrationNumber,
                          ],
                          [
                            t.yearEstablished,
                            formData.yearEstablished,
                          ],
                          [t.pastorName, formData.pastorName],
                          [t.memberCount, formData.memberCount],
                        ]}
                        notice={t.verificationNotice}
                        terms={t.terms}
                        submitText={t.submitChurch}
                        backText={t.backButton}
                        onBack={previousStep}
                        onSubmit={handleSubmit}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>

          {/* LOGIN INSIDE CARD */}
          {step === 1 && (
            <div className="shrink-0 border-t border-[#F0E8F5] px-4 py-3 text-center sm:px-6 sm:py-4">
              <p className="text-sm text-[#5D5875]">
                {t.already}{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#241C3D] transition hover:text-[#9F08BD]"
                >
                  {t.login}
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

/* =========================================================
   STEP HEADING
========================================================= */

type StepHeadingProps = {
  title: string;
  description: string;
};

const StepHeading = ({
  title,
  description,
}: StepHeadingProps) => {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
        {title}
      </h1>

      <p className="mt-1 text-sm text-[#5D5875]">
        {description}
      </p>
    </div>
  );
};

/* =========================================================
   INPUT
========================================================= */

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
};

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-[#241C3D]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`
          w-full
          rounded-lg
          border
          ${
            error
              ? "border-red-400"
              : "border-[#E9DAF4]"
          }
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
        `}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

/* =========================================================
   STEP BUTTONS
========================================================= */

type StepButtonsProps = {
  onBack: () => void;
  onNext: () => void;
  backText: string;
  nextText: string;
};

const StepButtons = ({
  onBack,
  onNext,
  backText,
  nextText,
}: StepButtonsProps) => {
  return (
    <div className="mt-5 flex gap-3 pb-1">
      <button
        type="button"
        onClick={onBack}
        className="
          w-1/3
          shrink-0
          rounded-lg
          border
          border-[#241C3D]
          py-2.5
          text-sm
          font-semibold
          text-[#241C3D]
          transition
          hover:bg-[#241C3D]
          hover:text-white
        "
      >
        {backText}
      </button>

      <button
        type="button"
        onClick={onNext}
        className="
          flex-1
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
        "
      >
        {nextText}
      </button>
    </div>
  );
};

/* =========================================================
   REVIEW
========================================================= */

type ReviewProps = {
  title: string;
  description: string;
  accountType: string;
  rows: [string, string][];
  terms: string;
  submitText: string;
  backText: string;
  notice?: string;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
};

const Review = ({
  title,
  description,
  accountType,
  rows,
  terms,
  submitText,
  backText,
  notice,
  onBack,
  onSubmit,
}: ReviewProps) => {
  return (
    <motion.form
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -25 }}
      transition={{
        duration: 0.25,
        ease: EASE,
      }}
      onSubmit={onSubmit}
      className="pb-2"
    >
      <h1 className="text-2xl font-medium text-[#241C3D] font-[family-name:var(--font-display)]">
        {title}
      </h1>

      <p className="mb-4 mt-1 text-sm text-[#5D5875]">
        {description}
      </p>

      <div className="mb-3 rounded-xl bg-[#F6EEFB] p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#9F08BD]">
          {accountType}
        </p>
      </div>

      <div className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-[#E9DAF4] bg-[#FBF8FD] p-2.5"
          >
            <p className="text-xs text-[#9C93B0]">
              {label}
            </p>

            <p className="mt-0.5 break-words text-sm font-medium text-[#241C3D]">
              {value || "—"}
            </p>
          </div>
        ))}
      </div>

      {notice && (
        <div className="mt-3 rounded-xl border border-[#E8B34C]/40 bg-[#FFF9EC] p-3">
          <p className="text-xs leading-relaxed text-[#6D5A2A]">
            {notice}
          </p>
        </div>
      )}

      <label className="mt-4 flex items-start gap-2">
        <input
          type="checkbox"
          required
          className="mt-1 accent-[#9F08BD]"
        />

        <span className="text-xs leading-relaxed text-[#5D5875]">
          {terms}
        </span>
      </label>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="
            w-1/3
            shrink-0
            rounded-lg
            border
            border-[#241C3D]
            py-2.5
            text-sm
            font-semibold
            text-[#241C3D]
            transition
            hover:bg-[#241C3D]
            hover:text-white
          "
        >
          {backText}
        </button>

        <button
          type="submit"
          className="
            flex-1
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
          "
        >
          {submitText}
        </button>
      </div>
    </motion.form>
  );
};

export default Register;