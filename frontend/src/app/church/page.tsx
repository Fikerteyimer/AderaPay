
"use client";

import { useLanguage } from "../context/LanguageContext";

export default function ChurchDashboard() {
  const { language } = useLanguage();

  // LanguageContext uses "EN" | "AM"
  const isAmharic = language === "AM";

  return (
    <div className="min-h-screen bg-[#F8F6EF]">
      <div className="flex">
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

          {/* PAGE HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#123C2A]">
              {isAmharic
                ? "የቤተ ክርስቲያን ዳሽቦርድ"
                : "Church Dashboard"}
            </h1>

            <p className="mt-2 text-sm text-[#657268]">
              {isAmharic
                ? "እንኳን ወደ ቤተ ክርስቲያንዎ ዳሽቦርድ በደህና መጡ።"
                : "Welcome to your church dashboard."}
            </p>
          </div>

          {/* STAT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              icon="♡"
              title={
                isAmharic
                  ? "ጠቅላላ ልገሳ"
                  : "Total Donations"
              }
              value="ETB 0"
            />

            <DashboardCard
              icon="♙"
              title={
                isAmharic
                  ? "ለጋሾች"
                  : "Donors"
              }
              value="0"
            />

            <DashboardCard
              icon="◈"
              title={
                isAmharic
                  ? "ዘመቻዎች"
                  : "Campaigns"
              }
              value="0"
            />

            <DashboardCard
              icon="▤"
              title={
                isAmharic
                  ? "ወርሃዊ ልገሳ"
                  : "This Month"
              }
              value="ETB 0"
            />
          </div>

          {/* MANAGE DONATIONS */}
          <section
            className="
              mt-6
              rounded-2xl
              border
              border-[#D4AF37]/20
              bg-white
              p-5
              shadow-sm
              transition-shadow
              hover:shadow-md
              sm:p-6
            "
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-lg font-semibold text-[#123C2A]">
                  {isAmharic
                    ? "የቤተ ክርስቲያንዎን ልገሳዎች ያስተዳድሩ"
                    : "Manage Your Church Donations"}
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#718078]">
                  {isAmharic
                    ? "በAderaPay የሚመጡ ልገሳዎችን፣ ለጋሾችን እና የልገሳ ዘመቻዎችን ከአንድ ቦታ ያስተዳድሩ።"
                    : "Manage donations, donors, and fundraising campaigns for your church from one place."}
                </p>
              </div>

              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-[#F7F3E6]
                  text-2xl
                "
              >
                ⛪
              </div>

            </div>
          </section>

          {/* RECENT ACTIVITY */}
          <section
            className="
              mt-6
              overflow-hidden
              rounded-2xl
              border
              border-[#D4AF37]/20
              bg-white
              shadow-sm
            "
          >
            <div className="border-b border-[#EAE7DD] p-5">
              <h2 className="text-lg font-semibold text-[#123C2A]">
                {isAmharic
                  ? "የቅርብ ጊዜ እንቅስቃሴ"
                  : "Recent Activity"}
              </h2>

              <p className="mt-1 text-xs text-[#8A948D]">
                {isAmharic
                  ? "የቤተ ክርስቲያንዎ የቅርብ ጊዜ እንቅስቃሴ"
                  : "Recent activity from your church"}
              </p>
            </div>

            <div className="p-8 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#F7F3E6]
                  text-xl
                  text-[#123C2A]
                "
              >
                ◷
              </div>

              <p className="mt-3 text-sm font-medium text-[#536057]">
                {isAmharic
                  ? "እስካሁን ምንም እንቅስቃሴ የለም"
                  : "No recent activity"}
              </p>

              <p className="mt-1 text-xs text-[#8A948D]">
                {isAmharic
                  ? "ልገሳዎች ሲጀምሩ እዚህ ይታያሉ።"
                  : "Donations and other activity will appear here."}
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

type DashboardCardProps = {
  icon: string;
  title: string;
  value: string;
};

function DashboardCard({
  icon,
  title,
  value,
}: DashboardCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#D4AF37]/20
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-[#718078]">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-[#123C2A]">
            {value}
          </p>
        </div>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#D4AF37]/20
            bg-[#F7F3E6]
            text-lg
            font-bold
            text-[#123C2A]
          "
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

