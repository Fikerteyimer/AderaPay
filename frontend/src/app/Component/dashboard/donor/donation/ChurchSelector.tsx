
"use client";

import { useLanguage } from "../../../../context/LanguageContext";
import { registeredChurches } from "../donation/types";

type Props = {
  selectedChurch: number | null;
  setSelectedChurch: (id: number | null) => void;
  churchAmount: string;
  setChurchAmount: (value: string) => void;
  showAmount?: boolean;
};

export default function ChurchSelector({
  selectedChurch,
  setSelectedChurch,
  churchAmount,
  setChurchAmount,
  showAmount = false,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  const church = registeredChurches.find(
    (item) => item.id === selectedChurch
  );

  return (
    <section className="mt-6 border-t border-[#F0E8F5] pt-6">
      <h3 className="text-sm font-semibold text-[#241C3D]">
        {isAmharic ? "የቤተ ክርስቲያን ምርጫ" : "Church Preference"}
      </h3>

      <p className="mt-1 text-xs text-[#8B829C]">
        {isAmharic
          ? "ልገሳዎ እንዲደርስ የሚፈልጉትን የተመዘገበ ቤተ ክርስቲያን ይምረጡ።"
          : "Choose the registered church you would like your donation to support."}
      </p>

      <div className="relative mt-3">
        <select
          value={selectedChurch ?? ""}
          onChange={(e) =>
            setSelectedChurch(
              e.target.value ? Number(e.target.value) : null
            )
          }
          className="
            w-full appearance-none rounded-xl
            border border-[#E9DAF4] bg-white
            px-4 py-3 pr-10 text-sm text-[#241C3D]
            outline-none focus:border-[#9F08BD]
            focus:ring-2 focus:ring-[#9F08BD]/15
          "
        >
          <option value="">
            {isAmharic ? "ቤተ ክርስቲያን ይምረጡ" : "Select a church"}
          </option>

          {registeredChurches
            .filter((item) => item.verified)
            .map((item) => (
              <option key={item.id} value={item.id}>
                {isAmharic
                  ? `${item.amharicName} — ${item.location}`
                  : `${item.name} — ${item.location}`}
              </option>
            ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9C93B0]">
          ▼
        </span>
      </div>

      {showAmount && church && (
        <div className="mt-4 rounded-xl border border-[#E9DAF4] bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6EEFB] text-xl">
              ⛪
            </div>

            <div>
              <p className="text-sm font-semibold text-[#241C3D]">
                {isAmharic ? church.amharicName : church.name}
              </p>

              <p className="mt-1 text-xs text-[#8B829C]">
                {church.location}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
              {isAmharic ? "የልገሳ መጠን" : "Donation Amount"}
            </label>

            <input
              type="number"
              min="1"
              value={churchAmount}
              onChange={(e) => setChurchAmount(e.target.value)}
              placeholder={isAmharic ? "መጠን ያስገቡ" : "Enter amount"}
              className="
                w-full rounded-lg border border-[#E9DAF4]
                bg-[#FBF8FD] px-4 py-2.5
                text-sm outline-none
                focus:border-[#9F08BD]
              "
            />
          </div>
        </div>
      )}
    </section>
  );
}

