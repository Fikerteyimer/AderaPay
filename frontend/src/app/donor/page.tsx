"use client";



export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      
      <div className="flex">

    

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#241C3D]">
              Welcome back, Fikerte 👋
            </h1>

            <p className="mt-1 text-sm text-[#7B728C]">
              Here’s an overview of your giving and the impact you’re making.
            </p>
          </div>

          {/* =========================
              STAT CARDS
          ========================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              icon="♡"
              title="Total Donated"
              value="ETB 24,500"
              description="All time"
            />

            <StatCard
              icon="↗"
              title="This Year"
              value="ETB 8,750"
              description="2026 donations"
            />

            <StatCard
              icon="⛪"
              title="Churches Supported"
              value="8"
              description="Across your giving"
            />

            <StatCard
              icon="◷"
              title="This Month"
              value="ETB 1,500"
              description="August 2026"
            />

          </div>

          {/* =========================
              RECENT + QUICK DONATION
          ========================= */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

            {/* RECENT DONATIONS */}
            <div className="rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm xl:col-span-2">

              <div className="mb-5 flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-semibold text-[#241C3D]">
                    Recent Donations
                  </h2>

                  <p className="mt-1 text-xs text-[#8B829C]">
                    Your latest contributions
                  </p>
                </div>

                <a
                  href="/dashboard/donor/donations"
                  className="text-sm font-semibold text-[#9F08BD] transition hover:text-[#7D0795]"
                >
                  View all →
                </a>

              </div>

              <div className="space-y-3">

                <DonationItem
                  church="St. Mary Church"
                  date="Aug 18, 2026"
                  amount="ETB 1,000"
                />

                <DonationItem
                  church="Holy Trinity Church"
                  date="Aug 12, 2026"
                  amount="ETB 500"
                />

                <DonationItem
                  church="St. George Church"
                  date="Jul 28, 2026"
                  amount="ETB 750"
                />

                <DonationItem
                  church="Medhane Alem Church"
                  date="Jul 15, 2026"
                  amount="ETB 1,250"
                />

              </div>

            </div>

            {/* QUICK DONATION */}
            <div className="rounded-2xl bg-gradient-to-br from-[#27003b] via-[#220035] to-[#1e0045] p-6 text-white shadow-lg">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                ♡
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                Make a Difference
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Your generosity can help churches and communities
                continue their important work.
              </p>

              <a
                href="/dashboard/donor/churches"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#27003b] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Donate Now →
              </a>

            </div>

          </div>

          {/* =========================
              IMPACT
          ========================= */}
          <div className="mt-6 rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm">

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-[#241C3D]">
                Your Giving Impact
              </h2>

              <p className="mt-1 text-xs text-[#8B829C]">
                See how your contributions are making a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              <ImpactCard
                value="24"
                label="Total Donations"
              />

              <ImpactCard
                value="8"
                label="Churches Supported"
              />

              <ImpactCard
                value="ETB 24.5K"
                label="Total Given"
              />

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

type StatCardProps = {
  icon: string;
  title: string;
  value: string;
  description: string;
};

function StatCard({
  icon,
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6EEFB] text-lg font-bold text-[#9F08BD]">
          {icon}
        </div>

        <span className="text-xs text-[#9C93B0]">
          {description}
        </span>

      </div>

      <p className="mt-5 text-sm font-medium text-[#7B728C]">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-[#241C3D]">
        {value}
      </h3>

    </div>
  );
}


/* =========================================================
   DONATION ITEM
========================================================= */

type DonationItemProps = {
  church: string;
  date: string;
  amount: string;
};

function DonationItem({
  church,
  date,
  amount,
}: DonationItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#F0E8F5] bg-[#FBF8FD] p-3.5">

      <div className="flex min-w-0 items-center gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6EEFB] text-lg">
          ⛪
        </div>

        <div className="min-w-0">

          <p className="truncate text-sm font-semibold text-[#241C3D]">
            {church}
          </p>

          <p className="mt-0.5 text-xs text-[#9C93B0]">
            {date}
          </p>

        </div>

      </div>

      <div className="ml-3 shrink-0 text-right">

        <p className="text-sm font-bold text-[#241C3D]">
          {amount}
        </p>

        <p className="mt-0.5 text-xs font-medium text-green-600">
          Completed
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   IMPACT CARD
========================================================= */

type ImpactCardProps = {
  value: string;
  label: string;
};

function ImpactCard({
  value,
  label,
}: ImpactCardProps) {
  return (
    <div className="rounded-xl bg-[#FBF8FD] p-4 text-center">

      <p className="text-2xl font-bold text-[#9F08BD]">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-[#7B728C]">
        {label}
      </p>

    </div>
  );
}