"use client";

import Topbar from "../../Component/dashboard/Topbar";

export default function ChurchDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      <Topbar
        role="church"
        userName="My Church"
        userEmail="church@example.com"
      />

      <main className="p-6 sm:p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[#241C3D]">
            Church Dashboard
          </h1>

          <p className="mt-2 text-[#5D5875]">
            Manage your church and receive donations.
          </p>
        </div>
      </main>
    </div>
  );
}