
"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { DonationOption, DonorLocation } from "../donation/types";

type Props = {
  option: DonationOption;
  churchName: string;
  paymentLabel: string;
  location: DonorLocation;
  amount: number;
};

export default function DonationSummary({
  option,
  churchName,
  paymentLabel,
  location,
  amount,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "AM";

  const donationType = {
    tenth: isAmharic ? "ከገቢዬ 1/10" : "1/10 of My Income",
    custom: isAmharic ? "የራስዎ መጠን" : "Custom Amount",
    firstSalary: isAmharic ? "የመጀመሪያ ደመወዝ" : "First Salary",
    churchNeed: isAmharic ? "ቤተ ክርስቲያንን ይርዱ" : "Help a Church",
  }[option];

  return (
    <div className="mt-6 rounded-2xl border border-[#E9DAF4] bg-[#FBF8FD] p-5">
      <h3 className="font-semibold text-[#241C3D]">
        {isAmharic ? "የልገሳ ማጠቃለያ" : "Donation Summary"}
      </h3>

      <div className="mt-4 divide-y divide-[#E9E0F0]">
        <SummaryLine
          label={isAmharic ? "የልገሳ ዓይነት" : "Donation Type"}
          value={donationType}
        />

        <SummaryLine
          label={isAmharic ? "የልገሳ መድረሻ" : "Donation Destination"}
          value={
            churchName ||
            (isAmharic
              ? "ቤተ ክርስቲያን አልተመረጠም"
              : "No church selected")
          }
        />

        <SummaryLine
          label={isAmharic ? "የክፍያ ዘዴ" : "Payment Method"}
          value={paymentLabel}
        />

        <SummaryLine
          label={isAmharic ? "የለጋሽ ቦታ" : "Donor Location"}
          value={
            location === "ethiopia"
              ? isAmharic
                ? "ኢትዮጵያ"
                : "Ethiopia"
              : isAmharic
                ? "ከኢትዮጵያ ውጭ"
                : "Outside Ethiopia"
          }
        />

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm text-[#7B728C]">
            {isAmharic ? "መጠን" : "Amount"}
          </span>

          <span className="text-xl font-bold text-[#9F08BD]">
            ETB {amount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

function SummaryLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-sm text-[#7B728C]">{label}</span>

      <span className="max-w-[60%] text-right text-sm font-medium text-[#241C3D]">
        {value}
      </span>
    </div>
  );
}

