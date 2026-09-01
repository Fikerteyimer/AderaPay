
"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { DonorLocation, PaymentMethod } from "../donation/types";

type Props = {
  location: DonorLocation;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
};

export default function PaymentMethods({
  location,
  paymentMethod,
  setPaymentMethod,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  const options =
    location === "ethiopia"
      ? [
          {
            id: "telebirr" as PaymentMethod,
            icon: "📱",
            title: "Telebirr",
            description: isAmharic
              ? "በTelebirr በፍጥነት ይክፈሉ።"
              : "Pay securely using Telebirr.",
          },
          {
            id: "cbe" as PaymentMethod,
            icon: "🏦",
            title: isAmharic
              ? "የኢትዮጵያ ንግድ ባንክ"
              : "Commercial Bank of Ethiopia",
            description: isAmharic
              ? "በንግድ ባንክ ይክፈሉ።"
              : "Pay using Commercial Bank of Ethiopia.",
          },
          {
            id: "abyssinia" as PaymentMethod,
            icon: "🏦",
            title: isAmharic ? "አቢሲኒያ ባንክ" : "Bank of Abyssinia",
            description: isAmharic
              ? "በአቢሲኒያ ባንክ ይክፈሉ።"
              : "Pay using Bank of Abyssinia.",
          },
        ]
      : [
          {
            id: "internationalCard" as PaymentMethod,
            icon: "💳",
            title: isAmharic ? "ዓለም አቀፍ ካርድ" : "International Card",
            description: isAmharic
              ? "Visa ወይም Mastercard ይጠቀሙ።"
              : "Pay using Visa or Mastercard.",
          },
          {
            id: "paypal" as PaymentMethod,
            icon: "🌐",
            title: "PayPal",
            description: isAmharic
              ? "በPayPal ለመክፈል የተዘጋጀ።"
              : "International payment through PayPal.",
          },
          {
            id: "wise" as PaymentMethod,
            icon: "💸",
            title: "Wise",
            description: isAmharic
              ? "ከውጭ ሀገር ለመላክ አማራጭ።"
              : "International transfer option.",
          },
        ];

  return (
    <section className="mt-6 border-t border-[#F0E8F5] pt-6">
      <h3 className="text-sm font-semibold text-[#241C3D]">
        {isAmharic ? "የክፍያ ዘዴ" : "Payment Method"}
      </h3>

      <p className="mt-1 text-xs text-[#8B829C]">
        {isAmharic
          ? "ለልገሳዎ የሚመችዎትን የክፍያ ዘዴ ይምረጡ።"
          : "Choose your preferred payment method."}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((payment) => {
          const selected = paymentMethod === payment.id;

          return (
            <button
              key={payment.id}
              type="button"
              onClick={() => setPaymentMethod(payment.id)}
              className={`
                rounded-xl border-2 p-4 text-left transition
                ${
                  selected
                    ? "border-[#9F08BD] bg-[#F6EEFB]"
                    : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    flex h-10 w-10 shrink-0 items-center
                    justify-center rounded-lg text-lg
                    ${selected ? "bg-[#9F08BD] text-white" : "bg-[#F6EEFB]"}
                  `}
                >
                  {payment.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#241C3D]">
                    {payment.title}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-[#7B728C]">
                    {payment.description}
                  </p>
                </div>

                {selected && (
                  <span className="text-[#9F08BD]">✓</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-xl border border-[#E9DAF4] bg-[#FBF8FD] p-3">
        <p className="text-xs leading-relaxed text-[#7B728C]">
          {location === "ethiopia"
            ? isAmharic
              ? "የኢትዮጵያ ክፍያ አማራጮች እንደ Telebirr፣ CBE እና አቢሲኒያ ባንክ ከተፈቀደ በኋላ ከAPI ጋር ይገናኛሉ።"
              : "Ethiopian payment options such as Telebirr, CBE and Bank of Abyssinia will be connected to their APIs once integration is completed."
            : isAmharic
              ? "የውጭ ክፍያ አማራጮች ለዓለም አቀፍ ለጋሾች የሚሰራ የክፍያ አቅራቢ በኋላ ይገናኛሉ።"
              : "International payment options will be connected to a provider that supports donors from multiple countries."}
        </p>
      </div>
    </section>
  );
}

