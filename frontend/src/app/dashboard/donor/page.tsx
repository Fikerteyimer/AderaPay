"use client";

import Topbar from "../../Component/dashboard/Topbar";
import Sidebar from "../../Component/dashboard/Sidebar";

export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      <Topbar
        role="donor"
        userName="Fikerte Yimer"
      />

      <div className="flex">

        <Sidebar role="donor" />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-semibold text-[#241C3D]">
            Donor Dashboard
          </h1>

          <p className="mt-2 text-[#5D5875]">
            Welcome to your donor dashboard.
          </p>
        </main>

      </div>
    </div>
  );
}