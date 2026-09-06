
"use client";

import Link from "next/link";
import { useLanguage } from "../../../../context/LanguageContext";

export default function DonationHeader() {
  const { language } = useLanguage();
  const isAmharic = language === "AM";

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <Link
          href="/donor"
          className="
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg border border-[#E9DAF4] bg-white
            text-[#5D5875] transition
            hover:border-[#9F08BD]
            hover:text-[#9F08BD]
          "
        >
          ←
        </Link>

        <div>
          <h1 className="text-2xl font-semibold text-[#241C3D]">
            {isAmharic ? "ልገሳዎቼ" : "My Donations"}
          </h1>

          <p className="mt-1 text-sm text-[#7B728C]">
            {isAmharic
              ? "በዓላማ ይስጡ፣ ለሚወዷቸው ቤተ ክርስቲያናት ይደግፉ።"
              : "Give with purpose and support the churches that matter to you."}
          </p>
        </div>
      </div>
    </div>
  );
}

