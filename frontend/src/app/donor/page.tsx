
"use client";

import Welcome from "../Component/dashboard/welcome";
import StatCard from "../Component/dashboard/donor/StatCard";

export default function DonorDashboard() {
  return (
    <div>
      {/* Welcome */}
      <Welcome />

      {/* Statistics */}
      <section className="mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* Total Donations */}
          <StatCard
            icon="♡"
            title={{
              en: "Total Donations",
              am: "ጠቅላላ ልገሳ",
            }}
            value="12,500 ETB"
            description={{
              en: "+12% this month",
              am: "በዚህ ወር +12%",
            }}
          />

          {/* This Month */}
          <StatCard
            icon="♥"
            title={{
              en: "This Month",
              am: "የዚህ ወር ልገሳ",
            }}
            value="2,500 ETB"
            description={{
              en: "+8% this month",
              am: "በዚህ ወር +8%",
            }}
          />

          {/* Churches Supported */}
          <StatCard
            icon="⛪"
            title={{
              en: "Churches Supported",
              am: "የተደገፉ ቤተክርስቲያናት",
            }}
            value="5"
            description={{
              en: "Active",
              am: "ንቁ",
            }}
          />

          {/* Impact */}
          <StatCard
            icon="✦"
            title={{
              en: "Community Impact",
              am: "የማህበረሰብ ተፅዕኖ",
            }}
            value="24"
            description={{
              en: "People helped",
              am: "የተረዱ ሰዎች",
            }}
          />

        </div>
      </section>
    </div>
  );
}

