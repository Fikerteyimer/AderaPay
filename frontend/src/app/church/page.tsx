"use client";
import { useLanguage } from "../context/LanguageContext";

export default function ChurchDashboard() {
  const { language } = useLanguage();

  const isAmharic = language === "am";

  return (
    <div className="min-h-screen bg-[#FBF8FD]">
     

      <div className="flex">
      
     

        
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
         
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#241C3D]">
              {isAmharic
                ? "የቤተ ክርስቲያን ዳሽቦርድ"
                : "Church Dashboard"}
            </h1>

            <p className="mt-2 text-sm text-[#5D5875]">
              {isAmharic
                ? "እንኳን ወደ ቤተ ክርስቲያንዎ ዳሽቦርድ በደህና መጡ።"
                : "Welcome to your church dashboard."}
            </p>
          </div>

          {/* QUICK STATS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              icon="♡"
              title={isAmharic ? "ጠቅላላ ልገሳ" : "Total Donations"}
              value="ETB 0"
            />

            <DashboardCard
              icon="♙"
              title={isAmharic ? "ለጋሾች" : "Donors"}
              value="0"
            />

            <DashboardCard
              icon="◈"
              title={isAmharic ? "ዘመቻዎች" : "Campaigns"}
              value="0"
            />

            <DashboardCard
              icon="▤"
              title={isAmharic ? "ወርሃዊ ልገሳ" : "This Month"}
              value="ETB 0"
            />
          </div>

          {/* WELCOME CARD */}
          <section className="mt-6 rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#241C3D]">
                  {isAmharic
                    ? "የቤተ ክርስቲያንዎን ልገሳዎች ያስተዳድሩ"
                    : "Manage Your Church Donations"}
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7B728C]">
                  {isAmharic
                    ? "በAderaPay የሚመጡ ልገሳዎችን፣ ለጋሾችን እና የልገሳ ዘመቻዎችን ከአንድ ቦታ ያስተዳድሩ።"
                    : "Manage donations, donors, and fundraising campaigns for your church from one place."}
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F6EEFB] text-2xl">
                ⛪
              </div>
            </div>
          </section>

          {/* RECENT ACTIVITY */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-[#E9DAF4] bg-white shadow-sm">
            <div className="border-b border-[#F0E8F5] p-5">
              <h2 className="text-lg font-semibold text-[#241C3D]">
                {isAmharic ? "የቅርብ ጊዜ እንቅስቃሴ" : "Recent Activity"}
              </h2>

              <p className="mt-1 text-xs text-[#9C93B0]">
                {isAmharic
                  ? "የቤተ ክርስቲያንዎ የቅርብ ጊዜ እንቅስቃሴ"
                  : "Recent activity from your church"}
              </p>
            </div>

            <div className="p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F6EEFB] text-xl">
                ◷
              </div>

              <p className="mt-3 text-sm font-medium text-[#5D5875]">
                {isAmharic
                  ? "እስካሁን ምንም እንቅስቃሴ የለም"
                  : "No recent activity"}
              </p>

              <p className="mt-1 text-xs text-[#9C93B0]">
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

/* =========================================================
   DASHBOARD CARD
========================================================= */

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
    <div className="rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#7B728C]">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-[#241C3D]">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6EEFB] text-lg font-bold text-[#9F08BD]">
          {icon}
        </div>
      </div>
    </div>
  );
}