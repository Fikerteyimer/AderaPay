
"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { DonationOption } from "../donation/types";

type Props = {
  option: DonationOption;
  setOption: (option: DonationOption) => void;
};

export default function DonationTypeSelector({
  option,
  setOption,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  const options = [
    {
      id: "tenth" as DonationOption,
      icon: "♡",
      title: isAmharic ? "ከገቢዬ 1/10" : "1/10 of My Income",
      description: isAmharic
        ? "10% የገቢዎን በራስ-ሰር ያስሉ።"
        : "Automatically calculate 10% of your income.",
    },
    {
      id: "custom" as DonationOption,
      icon: "＋",
      title: isAmharic ? "የራስዎ መጠን" : "Custom Amount",
      description: isAmharic
        ? "መስጠት የሚፈልጉትን መጠን ይምረጡ።"
        : "Choose the amount you want to give.",
    },
    {
      id: "firstSalary" as DonationOption,
      icon: "★",
      title: isAmharic ? "የመጀመሪያ ደመወዝ" : "First Salary",
      description: isAmharic
        ? "የመጀመሪያ ደመወዝዎን እንደ ልዩ ልገሳ ይስጡ።"
        : "Give your first salary as a special donation.",
    },
    {
      id: "churchNeed" as DonationOption,
      icon: "⛪",
      title: isAmharic ? "ቤተ ክርስቲያንን ይርዱ" : "Help a Church",
      description: isAmharic
        ? "ከተመዘገቡ ቤተ ክርስቲያናት ይምረጡ።"
        : "Choose from registered and verified churches.",
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-[#241C3D]">
        {isAmharic ? "ልገሳ ያድርጉ" : "Make a Donation"}
      </h2>

      <p className="mt-1 text-sm text-[#7B728C]">
        {isAmharic
          ? "ልገሳዎን እንዴት ማድረግ እንደሚፈልጉ ይምረጡ።"
          : "Choose how you would like to give."}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((item) => {
          const selected = option === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOption(item.id)}
              className={`
                rounded-xl border-2 p-4 text-left transition-all
                ${
                  selected
                    ? "border-[#9F08BD] bg-[#F6EEFB] shadow-sm"
                    : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-lg text-lg
                    ${
                      selected
                        ? "bg-[#9F08BD] text-white"
                        : "bg-[#F6EEFB] text-[#9F08BD]"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#241C3D]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-[#7B728C]">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

