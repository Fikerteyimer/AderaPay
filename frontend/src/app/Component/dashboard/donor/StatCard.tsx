
"use client";

import { useLanguage } from "../../../context/LanguageContext";

type StatCardProps = {
  icon: string;

  title: {
    en: string;
    am: string;
  };

  value: string;

  description: {
    en: string;
    am: string;
  };
};

export default function StatCard({
  icon,
  title,
  value,
  description,
}: StatCardProps) {
  const { language } = useLanguage();

  const isAmharic = language === "AM";

  return (
    <div className="group rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between">
        
        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6EEFB] text-lg text-[#9F08BD] transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>

        {/* Description */}
        <span className="rounded-full bg-[#FAF7FC] px-2.5 py-1 text-[11px] font-medium text-[#9C93B0]">
          {isAmharic ? description.am : description.en}
        </span>
      </div>

      {/* Title */}
      <p className="mt-5 text-sm font-medium text-[#7B728C]">
        {isAmharic ? title.am : title.en}
      </p>

      {/* Value */}
      <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#241C3D]">
        {value}
      </h3>
    </div>
  );
}

