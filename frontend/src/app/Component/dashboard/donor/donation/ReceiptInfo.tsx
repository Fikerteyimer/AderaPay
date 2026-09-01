
"use client";

import { useLanguage } from "../../../../context/LanguageContext";

export default function ReceiptInfo() {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  return (
    <div className="mt-5 rounded-xl border border-[#E9DAF4] bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F6EEFB]">
          🧾
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#241C3D]">
            {isAmharic ? "የልገሳ ደረሰኝ" : "Donation Receipt"}
          </h3>

          <p className="mt-1 text-xs leading-relaxed text-[#7B728C]">
            {isAmharic
              ? "ክፍያዎ ከተረጋገጠ በኋላ PDF ደረሰኝዎን ማውረድ ይችላሉ።"
              : "Once your payment is verified, you will be able to download a PDF receipt."}
          </p>
        </div>
      </div>
    </div>
  );
}

