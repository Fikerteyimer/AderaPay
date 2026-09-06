"use client";

import { useState } from "react";
import Topbar from "../Component/dashboard/Topbar";
import Sidebar from "../Component/dashboard/Sidebar";

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      {/* TOPBAR */}
      <Topbar
        role="donor"
        userName="Fikerte Yimer"
        onMenuClick={() => setSidebarOpen(true)}
      />

      {/* SIDEBAR */}
      <Sidebar
        role="donor"
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* MAIN CONTENT */}
      <main className="min-h-screen lg:pl-64">
        {children}
      </main>
    </div>
  );
}