"use client";

import Link from "next/link";
import { useState } from "react";

type UserRole = "donor" | "church" | "admin";

type TopbarProps = {
  userName?: string;
  userEmail?: string;
  role: UserRole;
};

export default function Topbar({
  userName = "User",
  userEmail = "user@example.com",
  role,
}: TopbarProps) {
  const [open, setOpen] = useState(false);

  const safeName = userName?.trim() || "User";

  const initials = safeName
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const roleName = {
    donor: "Donor",
    church: "Church",
    admin: "Admin",
  }[role];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E9DAF4] bg-white/95 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* Mobile menu */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#5D5875] hover:bg-[#F6EEFB] hover:text-[#9F08BD] lg:hidden"
          >
            ☰
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-xl font-medium text-[#241C3D] sm:text-2xl"
          >
            Adera
            <span className="italic text-[#9F08BD]">Pay</span>
          </Link>

          <div className="hidden h-6 w-px bg-[#E9DAF4] sm:block" />

          <span className="hidden text-sm font-medium text-[#5D5875] sm:block">
            {roleName} Dashboard
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Notification */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#5D5875] hover:bg-[#F6EEFB] hover:text-[#9F08BD]"
          >
            🔔

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#9F08BD]" />
          </button>

          {/* User */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full p-1.5 hover:bg-[#F6EEFB] sm:gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#9F08BD] to-[#B24CE8] text-xs font-bold text-white">
                {initials}
              </div>

              <div className="hidden text-left sm:block">
                <p className="max-w-[140px] truncate text-sm font-semibold text-[#241C3D]">
                  {safeName}
                </p>

                <p className="text-xs text-[#9C93B0]">
                  {roleName}
                </p>
              </div>

              <span className="hidden text-xs text-[#9C93B0] sm:block">
                ▼
              </span>
            </button>

            {/* Dropdown */}
            {open && (
              <>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 h-full w-full cursor-default"
                />

                <div className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl border border-[#E9DAF4] bg-white shadow-xl">

                  <div className="border-b border-[#F0E8F5] px-4 py-3">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#9F08BD] to-[#B24CE8] text-xs font-bold text-white">
                        {initials}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#241C3D]">
                          {safeName}
                        </p>

                        <p className="truncate text-xs text-[#9C93B0]">
                          {userEmail}
                        </p>
                      </div>

                    </div>
                  </div>

                  <Link
                    href={`/dashboard/${role}/profile`}
                    onClick={() => setOpen(false)}
                    className="flex gap-3 px-4 py-3 text-sm text-[#5D5875] hover:bg-[#F6EEFB] hover:text-[#9F08BD]"
                  >
                    👤
                    Profile
                  </Link>

                  <Link
                    href={`/dashboard/${role}/settings`}
                    onClick={() => setOpen(false)}
                    className="flex gap-3 px-4 py-3 text-sm text-[#5D5875] hover:bg-[#F6EEFB] hover:text-[#9F08BD]"
                  >
                    ⚙️
                    Settings
                  </Link>

                  <div className="border-t border-[#F0E8F5]" />

                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      console.log("Logout");
                    }}
                    className="flex w-full gap-3 px-4 py-3 text-left text-sm text-red-500 hover:bg-red-50"
                  >
                    ↪
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}