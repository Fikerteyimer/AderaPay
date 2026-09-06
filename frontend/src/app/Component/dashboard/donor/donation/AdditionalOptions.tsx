
"use client";

import { useLanguage } from "../../../..//context/LanguageContext";

type Props = {
  anonymous: boolean;
  setAnonymous: (value: boolean) => void;
  dedication: boolean;
  setDedication: (value: boolean) => void;
  dedicationName: string;
  setDedicationName: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
};

export default function AdditionalOptions({
  anonymous,
  setAnonymous,
  dedication,
  setDedication,
  dedicationName,
  setDedicationName,
  message,
  setMessage,
}: Props) {
  const { language } = useLanguage();
  const isAmharic = language === "AM";

  return (
    <section className="mt-6 border-t border-[#F0E8F5] pt-6">
      <h3 className="text-sm font-semibold text-[#241C3D]">
        {isAmharic ? "ተጨማሪ አማራጮች" : "Additional Options"}
      </h3>

      <label className="mt-4 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#9F08BD]"
        />

        <span>
          <span className="block text-sm font-medium text-[#241C3D]">
            {isAmharic
              ? "ይህንን ልገሳ ስሜ ሳይጠቀስ ማድረግ እፈልጋለሁ"
              : "Make this donation anonymous"}
          </span>

          <span className="mt-1 block text-xs text-[#8B829C]">
            {isAmharic
              ? "ለሌሎች ተጠቃሚዎች ስምዎ አይታይም።"
              : "Your name will not be displayed publicly with this donation."}
          </span>
        </span>
      </label>

      <label className="mt-4 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={dedication}
          onChange={(e) => setDedication(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#9F08BD]"
        />

        <span className="text-sm font-medium text-[#241C3D]">
          {isAmharic
            ? "ለአንድ ሰው ስም ልገሳውን ማቅረብ"
            : "Dedicate this donation"}
        </span>
      </label>

      {dedication && (
        <input
          value={dedicationName}
          onChange={(e) => setDedicationName(e.target.value)}
          placeholder={isAmharic ? "የሰውዬው ስም" : "Person's name"}
          className="
            mt-3 w-full max-w-md rounded-lg
            border border-[#E9DAF4] bg-[#FBF8FD]
            px-4 py-2.5 text-sm outline-none
            focus:border-[#9F08BD]
          "
        />
      )}

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-[#241C3D]">
            {isAmharic
              ? "መልዕክት ወይም የጸሎት ጥያቄ"
              : "Message or prayer request"}
          </label>

          <span className="text-xs text-[#9C93B0]">
            {isAmharic ? "አማራጭ" : "Optional"}
          </span>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          maxLength={500}
          placeholder={
            isAmharic
              ? "መልዕክትዎን እዚህ ያስገቡ..."
              : "Write a message or prayer request..."
          }
          className="
            mt-2 w-full resize-none rounded-lg
            border border-[#E9DAF4] bg-[#FBF8FD]
            px-4 py-2.5 text-sm outline-none
            placeholder:text-[#9C93B0]
            focus:border-[#9F08BD]
          "
        />

        <p className="mt-1 text-right text-[11px] text-[#9C93B0]">
          {message.length}/500
        </p>
      </div>
    </section>
  );
}

