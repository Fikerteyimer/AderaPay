
"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { DonorLocation as LocationType } from "../donation/types";

type Props = {
  location: LocationType;
  setLocation: (location: LocationType) => void;
  setPaymentMethod: (method: any) => void;
};

export default function DonorLocation({
  location,
  setLocation,
  setPaymentMethod,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  return (
    <section className="mt-6 border-t border-[#F0E8F5] pt-6">
      <h3 className="text-sm font-semibold text-[#241C3D]">
        {isAmharic
          ? "ልገሳዎን ከየት እያደረጉ ነው?"
          : "Where are you donating from?"}
      </h3>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <LocationCard
          selected={location === "ethiopia"}
          icon="🇪🇹"
          title={isAmharic ? "ኢትዮጵያ" : "Ethiopia"}
          description={
            isAmharic
              ? "በኢትዮጵያ ውስጥ ነኝ"
              : "I am donating from Ethiopia"
          }
          onClick={() => {
            setLocation("ethiopia");
            setPaymentMethod("telebirr");
          }}
        />

        <LocationCard
          selected={location === "abroad"}
          icon="🌍"
          title={isAmharic ? "ከኢትዮጵያ ውጭ" : "Outside Ethiopia"}
          description={
            isAmharic
              ? "ከኢትዮጵያ ውጭ ነኝ"
              : "I am donating from abroad"
          }
          onClick={() => {
            setLocation("abroad");
            setPaymentMethod("internationalCard");
          }}
        />
      </div>
    </section>
  );
}

function LocationCard({
  selected,
  icon,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-xl border-2 p-4 text-left transition
        ${
          selected
            ? "border-[#9F08BD] bg-[#F6EEFB]"
            : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>

        <div>
          <p className="text-sm font-semibold text-[#241C3D]">
            {title}
          </p>

          <p className="mt-1 text-xs text-[#7B728C]">
            {description}
          </p>
        </div>

        {selected && (
          <span className="ml-auto text-[#9F08BD]">✓</span>
        )}
      </div>
    </button>
  );
}

