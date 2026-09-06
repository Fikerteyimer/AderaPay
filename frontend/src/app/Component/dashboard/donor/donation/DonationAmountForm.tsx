
"use client";

import { useLanguage } from "../../../../context/LanguageContext";

type Props = {
  option: "tenth" | "custom" | "firstSalary";
  income: string;
  setIncome: (value: string) => void;
  customAmount: string;
  setCustomAmount: (value: string) => void;
  firstSalary: string;
  setFirstSalary: (value: string) => void;
  calculatedAmount: number;
};

export default function DonationAmountForm({
  option,
  income,
  setIncome,
  customAmount,
  setCustomAmount,
  firstSalary,
  setFirstSalary,
  calculatedAmount,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "AM";

  if (option === "tenth") {
    return (
      <div className="mt-5 rounded-xl bg-[#F8F0FB] p-4 sm:p-5">
        <h3 className="font-semibold text-[#241C3D]">
          {isAmharic
            ? "የ1/10 ልገሳዎን ያስሉ"
            : "Calculate Your 1/10 Donation"}
        </h3>

        <p className="mt-1 text-xs text-[#7B728C]">
          {isAmharic
            ? "ገቢዎን ያስገቡ፣ AderaPay 10% ያሰላል።"
            : "Enter your income and AderaPay will calculate 10% for you."}
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <CurrencyInput
            label={isAmharic ? "ወርሃዊ ገቢ" : "Monthly Income"}
            value={income}
            onChange={setIncome}
            placeholder={isAmharic ? "ገቢዎን ያስገቡ" : "Enter your income"}
          />

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
              {isAmharic ? "የእርስዎ 1/10 ልገሳ" : "Your 1/10 Donation"}
            </label>

            <div className="flex h-[46px] items-center rounded-lg border border-[#E9DAF4] bg-white px-4 font-bold text-[#9F08BD]">
              ETB {calculatedAmount.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (option === "custom") {
    return (
      <AmountBox
        title={isAmharic ? "ልገሳዎን ያስገቡ" : "Enter Your Donation"}
        description={
          isAmharic
            ? "መስጠት የሚፈልጉትን መጠን ይምረጡ።"
            : "Choose any amount you would like to donate."
        }
        label={isAmharic ? "የልገሳ መጠን" : "Donation Amount"}
        value={customAmount}
        onChange={setCustomAmount}
        placeholder={isAmharic ? "መጠን ያስገቡ" : "Enter amount"}
      />
    );
  }

  return (
    <AmountBox
      title={isAmharic ? "የመጀመሪያ ደመወዝ ልገሳ" : "First Salary Donation"}
      description={
        isAmharic
          ? "የመጀመሪያ ደመወዝዎን እንደ ልዩ ልገሳ ለመስጠት መጠኑን ያስገቡ።"
          : "Enter the amount of your first salary."
      }
      label={isAmharic ? "የመጀመሪያ ደመወዝ መጠን" : "First Salary Amount"}
      value={firstSalary}
      onChange={setFirstSalary}
      placeholder={
        isAmharic ? "የመጀመሪያ ደመወዝዎን ያስገቡ" : "Enter your first salary"
      }
    />
  );
}

function AmountBox({
  title,
  description,
  label,
  value,
  onChange,
  placeholder,
}: {
  title: string;
  description: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="mt-5 rounded-xl bg-[#F8F0FB] p-4 sm:p-5">
      <h3 className="font-semibold text-[#241C3D]">{title}</h3>

      <p className="mt-1 text-xs text-[#7B728C]">{description}</p>

      <div className="mt-4 max-w-md">
        <CurrencyInput
          label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function CurrencyInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#9C93B0]">
          ETB
        </span>

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            w-full rounded-lg border border-[#E9DAF4]
            bg-[#FBF8FD] px-4 py-2.5 pl-12
            text-sm text-[#241C3D] outline-none
            placeholder:text-[#9C93B0]
            focus:border-[#9F08BD]
            focus:ring-2 focus:ring-[#9F08BD]/15
          "
        />
      </div>
    </div>
  );
}

