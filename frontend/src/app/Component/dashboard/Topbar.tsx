"use client";

import Link from "next/link";
import { useState } from "react";

type UserRole = "donor" | "church" | "admin";

type TopbarProps = {
  role: UserRole;
  userName?: string;
  onMenuClick?: () => void;
};

const roleContent = {
  donor: {
    label: "Donor Account",
    dashboard: "/dashboard/donor",
  },

  church: {
    label: "Church Account",
    dashboard: "/dashboard/church",
  },

  admin: {
    label: "Admin Account",
    dashboard: "/dashboard/admin",
  },
};

export default function Topbar({
  role,
  userName = "User",
  onMenuClick,
}: TopbarProps) {
  const [open, setOpen] = useState(false);

  const content = roleContent[role];

  const initials =
    userName
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <header
      className="
        sticky
        top-0
        z-50
        h-16
        border-b
        border-[#E9DAF4]
        bg-white/95
        backdrop-blur
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-lg
              text-[#5D5875]
              transition
              hover:bg-[#F6EEFB]
              hover:text-[#9F08BD]
              lg:hidden
            "
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* LOGO */}
          <Link
            href={content.dashboard}
            className="
              font-[family-name:var(--font-display)]
              text-2xl
              font-medium
              text-[#241C3D]
            "
          >
            Adera
            <span className="italic text-[#9F08BD]">
              Pay
            </span>
          </Link>

          <div className="hidden h-6 w-px bg-[#E9DAF4] sm:block" />

          <span className="hidden text-sm font-medium text-[#5D5875] sm:block">
            {content.label}
          </span>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center gap-2 sm:gap-3">

          {/* NOTIFICATIONS */}
          <button
            type="button"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-[#5D5875]
              transition
              hover:bg-[#F6EEFB]
              hover:text-[#9F08BD]
            "
          >
            🔔
          </button>

          {/* USER */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="
              flex
              items-center
              gap-2
              rounded-full
              p-1
              pr-1
              transition
              hover:bg-[#F6EEFB]
              sm:pr-2
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#9F08BD]
                to-[#B24CE8]
                text-xs
                font-bold
                text-white
              "
            >
              {initials}
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-[#241C3D]">
                {userName}
              </p>

              <p className="text-[11px] text-[#9C93B0]">
                {content.label}
              </p>
            </div>

            <span className="hidden text-xs text-[#9C93B0] sm:block">
              ▼
            </span>
          </button>

          {/* DROPDOWN */}
          {open && (
            <div
              className="
                absolute
                right-0
                top-12
                w-52
                overflow-hidden
                rounded-xl
                border
                border-[#E9DAF4]
                bg-white
                shadow-xl
                shadow-[#9F08BD]/10
              "
            >
              <div className="border-b border-[#F0E8F5] px-4 py-3">
                <p className="text-sm font-semibold text-[#241C3D]">
                  {userName}
                </p>

                <p className="mt-0.5 text-xs text-[#9C93B0]">
                  {content.label}
                </p>
              </div>

              <Link
                href={`${content.dashboard}/profile`}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-4
                  py-2.5
                  text-sm
                  text-[#5D5875]
                  hover:bg-[#F6EEFB]
                  hover:text-[#9F08BD]
                "
              >
                👤 Profile
              </Link>

              <Link
                href={`${content.dashboard}/settings`}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-4
                  py-2.5
                  text-sm
                  text-[#5D5875]
                  hover:bg-[#F6EEFB]
                  hover:text-[#9F08BD]
                "
              >
                ⚙️ Settings
              </Link>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  console.log("Logout");
                }}
                className="
                  w-full
                  border-t
                  border-[#F0E8F5]
                  px-4
                  py-2.5
                  text-left
                  text-sm
                  font-medium
                  text-red-500
                  hover:bg-red-50
                "
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}