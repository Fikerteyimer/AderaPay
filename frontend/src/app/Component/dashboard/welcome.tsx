
"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Welcome() {
  const { language } = useLanguage();

  const isAmharic = language === "AM";

  return (
    <section className="relative mb-7 overflow-hidden rounded-2xl border border-[#E9E2F2] bg-white px-5 py-5 shadow-[0_4px_20px_rgba(36,28,61,0.05)] sm:px-7 sm:py-6">
      
      {/* Decorative shape */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#F2EAF8]" />

      <div className="absolute right-10 top-5 h-3 w-3 rounded-full bg-[#D4AF37]/70" />

      <div className="relative">
        
        {/* Label */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#9B91A8]">
          {isAmharic ? "የልገሳ ዳሽቦርድ" : "DONOR DASHBOARD"}
        </p>

        {/* Title */}
        <h1 className="text-xl font-semibold tracking-tight text-[#241C3D] sm:text-2xl">
          {isAmharic
            ? "ወደ ልገሳ ዳሽቦርድ እንኳን በደህና መጡ"
            : "Welcome back to your donor dashboard!"}
        </h1>

        {/* Description */}
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#7B728C]">
          {isAmharic
            ? "የልገሳዎን እና በማህበረሰቡ ላይ የሚያደርሱትን ተፅዕኖ ይመልከቱ።"
            : "Here’s an overview of your giving and the impact you’re making."}
        </p>
      </div>

      {/* Gold accent */}
      <div className="absolute bottom-0 left-5 h-[2px] w-12 rounded-full bg-[#D4AF37] sm:left-7" />
    </section>
  );
}

