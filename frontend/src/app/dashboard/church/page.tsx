"use client";

import Topbar from "../../Component/dashboard/Topbar";
import Sidebar from "../../Component/dashboard/Sidebar";

export default function ChurchDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      <Topbar
        role="church"
        userName="My Church"
      />

      <div className="flex">

        <Sidebar role="church" />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-semibold text-[#241C3D]">
            Church Dashboard
          </h1>

          <p className="mt-2 text-[#5D5875]">
            Welcome to your church dashboard.
          </p>
        </main>

      </div>
    </div>
  );
}