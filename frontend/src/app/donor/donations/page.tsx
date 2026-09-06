
"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import DonationHeader from "../../Component/dashboard/donor/donation/DonationHeader.tsx";
import DonationTypeSelector from "../../Component/dashboard/donor/donation/DonationTypeSelector";
import DonationAmountForm from "../../Component/dashboard/donor/donation/DonationAmountForm";
import ChurchSelector from "../../Component/dashboard/donor/donation/ChurchSelector";
import DonorLocation from "../../Component/dashboard/donor/donation/DonorLocation";
import PaymentMethods from "../../Component/dashboard/donor/donation/PaymentMethods";
import AdditionalOptions from "../../Component/dashboard/donor/donation/AdditionalOptions";
import DonationSummary from "../../Component/dashboard/donor/donation/DonationSummary";
import ReceiptInfo from "../../Component/dashboard/donor/donation/ReceiptInfo";

import {
  DonationOption,
  DonorLocation as LocationType,
  PaymentMethod,
  registeredChurches,
} from "../../Component/dashboard/donor/donation/types";

export default function MyDonationsPage() {
  const { language } = useLanguage();
  const isAmharic = language === "AM";

  const [option, setOption] =
    useState<DonationOption>("tenth");

  const [income, setIncome] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [firstSalary, setFirstSalary] = useState("");
  const [churchAmount, setChurchAmount] = useState("");

  const [selectedChurch, setSelectedChurch] =
    useState<number | null>(null);

  const [donorLocation, setDonorLocation] =
    useState<LocationType>("ethiopia");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("telebirr");

  const [anonymous, setAnonymous] = useState(false);
  const [dedication, setDedication] = useState(false);
  const [dedicationName, setDedicationName] = useState("");
  const [message, setMessage] = useState("");

  const calculatedAmount = useMemo(() => {
    const value = Number(income);

    if (!value || value <= 0) {
      return 0;
    }

    return value / 10;
  }, [income]);

  const currentAmount = useMemo(() => {
    switch (option) {
      case "tenth":
        return calculatedAmount;

      case "custom":
        return Number(customAmount) || 0;

      case "firstSalary":
        return Number(firstSalary) || 0;

      case "churchNeed":
        return Number(churchAmount) || 0;

      default:
        return 0;
    }
  }, [
    option,
    calculatedAmount,
    customAmount,
    firstSalary,
    churchAmount,
  ]);

  const selectedChurchData = registeredChurches.find(
    (church) => church.id === selectedChurch
  );

  const paymentLabel = useMemo(() => {
    switch (paymentMethod) {
      case "telebirr":
        return "Telebirr";

      case "cbe":
        return isAmharic
          ? "የኢትዮጵያ ንግድ ባንክ"
          : "Commercial Bank of Ethiopia";

      case "abyssinia":
        return isAmharic
          ? "አቢሲኒያ ባንክ"
          : "Bank of Abyssinia";

      case "internationalCard":
        return isAmharic
          ? "ዓለም አቀፍ ካርድ"
          : "International Card";

      case "paypal":
        return "PayPal";

      case "wise":
        return "Wise";

      default:
        return "";
    }
  }, [paymentMethod, isAmharic]);

  const canContinue =
    currentAmount > 0 &&
    selectedChurch !== null &&
    paymentMethod !== null;

  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

        <DonationHeader />

        <section className="overflow-hidden rounded-2xl border border-[#E9DAF4] bg-white shadow-sm">

          <div className="p-5">

            <DonationTypeSelector
              option={option}
              setOption={setOption}
            />

            <DonationAmountForm
              option={
                option === "churchNeed"
                  ? "custom"
                  : option
              }
              income={income}
              setIncome={setIncome}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
              firstSalary={firstSalary}
              setFirstSalary={setFirstSalary}
              calculatedAmount={calculatedAmount}
            />

            {option === "churchNeed" && (
              <ChurchSelector
                selectedChurch={selectedChurch}
                setSelectedChurch={setSelectedChurch}
                churchAmount={churchAmount}
                setChurchAmount={setChurchAmount}
                showAmount
              />
            )}

            {option !== "churchNeed" && (
              <ChurchSelector
                selectedChurch={selectedChurch}
                setSelectedChurch={setSelectedChurch}
                churchAmount={churchAmount}
                setChurchAmount={setChurchAmount}
              />
            )}

            <DonorLocation
              location={donorLocation}
              setLocation={setDonorLocation}
              setPaymentMethod={setPaymentMethod}
            />

            <PaymentMethods
              location={donorLocation}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            <AdditionalOptions
              anonymous={anonymous}
              setAnonymous={setAnonymous}
              dedication={dedication}
              setDedication={setDedication}
              dedicationName={dedicationName}
              setDedicationName={setDedicationName}
              message={message}
              setMessage={setMessage}
            />

            <DonationSummary
              option={option}
              churchName={
                selectedChurchData
                  ? isAmharic
                    ? selectedChurchData.amharicName
                    : selectedChurchData.name
                  : ""
              }
              paymentLabel={paymentLabel}
              location={donorLocation}
              amount={currentAmount}
            />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-xs leading-relaxed text-[#8B829C]">
                🔒{" "}
                {isAmharic
                  ? "ክፍያዎ በደህንነት የተጠበቀ ይሆናል። ክፍያው ከተሳካ በኋላ ደረሰኝዎን ማውረድ ይችላሉ።"
                  : "Your payment will be securely processed. After a successful donation, you will be able to download your receipt."}
              </p>

              <button
                type="button"
                disabled={!canContinue}
                className="
                  rounded-lg bg-gradient-to-r
                  from-[#9F08BD] to-[#B24CE8]
                  px-7 py-3 text-sm font-bold text-white
                  shadow-md shadow-[#9F08BD]/20
                  transition hover:-translate-y-0.5
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isAmharic
                  ? "ወደ ክፍያ ይቀጥሉ"
                  : "Continue to Payment"}{" "}
                →
              </button>

            </div>

          </div>
        </section>

        <ReceiptInfo />

      </main>
    </div>
  );
}

