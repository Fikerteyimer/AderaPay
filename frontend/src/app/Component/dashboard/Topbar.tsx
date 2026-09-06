"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type UserRole = "donor" | "church" | "admin";

type TopbarProps = {
  role: UserRole;
  userName?: string;
  onMenuClick?: () => void;
};

const roleContent = {
  donor: {
    label: "Donor Account",
    amharicLabel: "የለጋሽ መለያ",
    dashboard: "/donor",
  },

  church: {
    label: "Church Account",
    amharicLabel: "የቤተ ክርስቲያን መለያ",
    dashboard: "/church",
  },

  admin: {
    label: "Admin Account",
    amharicLabel: "የአስተዳዳሪ መለያ",
    dashboard: "/admin",
  },
};

export default function Topbar({
  role,
  userName = "User",
  onMenuClick,
}: TopbarProps) {
  const [open, setOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  /*
   * Your LanguageContext currently uses:
   * "EN" | "AM"
   *
   * So Topbar must use those same values.
   */
  const isAmharic = language === "AM";

  const content = roleContent[role];

  /* USER INITIALS */
  const initials =
    userName
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  /* LANGUAGE CHANGE */
  const handleLanguageChange = (lang: "EN" | "AM") => {
    setLanguage(lang);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        h-16
        border-b
        border-[#D4AF37]/20
        bg-[#123C2A]
        shadow-sm
        backdrop-blur-xl
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <div className="flex min-w-0 items-center gap-3">

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-xl
              text-white/80
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-[#D4AF37]
              active:scale-95
              lg:hidden
            "
            aria-label={
              isAmharic
                ? "ምናሌ ክፈት"
                : "Open menu"
            }
          >
            ☰
          </button>

          {/* LOGO */}
          <Link
            href={content.dashboard}
            className="
              shrink-0
              font-[family-name:var(--font-display)]
              text-2xl
              font-semibold
              tracking-tight
              text-white
              transition-opacity
              hover:opacity-90
            "
          >
            Adera
            <span className="italic text-[#D4AF37]">
              Pay
            </span>
          </Link>

          {/* DIVIDER */}
          <div
            className="
              hidden
              h-6
              w-px
              bg-white/15
              sm:block
            "
          />

          {/* ACCOUNT TYPE */}
          <span
            className="
              hidden
              truncate
              text-sm
              font-medium
              text-white/65
              sm:block
            "
          >
            {isAmharic
              ? content.amharicLabel
              : content.label}
          </span>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        <div className="relative flex shrink-0 items-center gap-1.5 sm:gap-3">

          {/* NOTIFICATIONS */}
          <button
            type="button"
            aria-label={
              isAmharic
                ? "ማሳወቂያዎች"
                : "Notifications"
            }
            className="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-lg
              text-white/75
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-[#D4AF37]
              active:scale-95
            "
          >
            🔔

            {/* NOTIFICATION DOT */}
            <span
              className="
                absolute
                right-1
                top-1
                h-2
                w-2
                rounded-full
                bg-[#D4AF37]
                ring-2
                ring-[#123C2A]
              "
            />
          </button>

          {/* =================================================
              USER BUTTON
          ================================================= */}
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
              transition-all
              duration-200
              hover:bg-white/10
              active:scale-[0.98]
              sm:pr-2
            "
            aria-expanded={open}
            aria-haspopup="menu"
          >

            {/* AVATAR */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/40
                bg-[#D4AF37]
                text-xs
                font-bold
                text-[#123C2A]
                shadow-md
                shadow-black/10
              "
            >
              {initials}
            </div>

            {/* USER INFO */}
            <div className="hidden text-left sm:block">

              <p className="max-w-[140px] truncate text-sm font-semibold text-white">
                {userName}
              </p>

              <p className="max-w-[140px] truncate text-[11px] text-white/55">
                {isAmharic
                  ? content.amharicLabel
                  : content.label}
              </p>

            </div>

            {/* ARROW */}
            <span
              className="
                hidden
                text-[10px]
                text-white/50
                transition-transform
                sm:block
              "
            >
              {open ? "▲" : "▼"}
            </span>
          </button>

          {/* =================================================
              DROPDOWN
          ================================================= */}
          {open && (
            <div
              className="
                absolute
                right-0
                top-12
                z-[100]
                w-[270px]
                overflow-hidden
                rounded-2xl
                border
                border-[#D4AF37]/20
                bg-white
                shadow-2xl
                shadow-black/20
              "
            >

              {/* USER HEADER */}
              <div
                className="
                  border-b
                  border-[#E8E1D3]
                  bg-[#123C2A]
                  px-4
                  py-4
                "
              >
                <div className="flex items-center gap-3">

                  {/* SMALL AVATAR */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D4AF37]
                      text-sm
                      font-bold
                      text-[#123C2A]
                    "
                  >
                    {initials}
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-sm font-semibold text-white">
                      {userName}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-white/60">
                      {isAmharic
                        ? content.amharicLabel
                        : content.label}
                    </p>

                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <Link
                href={`${content.dashboard}/profile`}
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  text-sm
                  text-[#3E493F]
                  transition-all
                  duration-200
                  hover:bg-[#F7F4EA]
                  hover:text-[#123C2A]
                "
              >
                <span className="text-base">
                  👤
                </span>

                <span>
                  {isAmharic
                    ? "መገለጫ"
                    : "Profile"}
                </span>
              </Link>

              {/* SETTINGS */}
              <Link
                href={`${content.dashboard}/settings`}
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  text-sm
                  text-[#3E493F]
                  transition-all
                  duration-200
                  hover:bg-[#F7F4EA]
                  hover:text-[#123C2A]
                "
              >
                <span className="text-base">
                  ⚙️
                </span>

                <span>
                  {isAmharic
                    ? "ቅንብሮች"
                    : "Settings"}
                </span>
              </Link>

              {/* =================================================
                  LANGUAGE
              ================================================= */}
              <div
                className="
                  border-t
                  border-[#E8E1D3]
                  px-4
                  py-4
                "
              >

                <div className="mb-3 flex items-center justify-between">

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-[#6B756C]
                    "
                  >
                    {isAmharic
                      ? "ቋንቋ"
                      : "Language"}
                  </p>

                  <span className="text-base">
                    🌐
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">

                  {/* ENGLISH */}
                  <button
                    type="button"
                    onClick={() =>
                      handleLanguageChange("EN")
                    }
                    className={`
                      rounded-xl
                      border
                      px-3
                      py-2.5
                      text-xs
                      font-medium
                      transition-all
                      duration-200
                      ${
                        language === "EN"
                          ? "border-[#D4AF37] bg-[#F7F4EA] text-[#123C2A] shadow-sm"
                          : "border-[#E5E1D8] bg-white text-[#4A554C] hover:border-[#D4AF37]/50 hover:bg-[#FAF9F5]"
                      }
                    `}
                  >
                    <span className="block">
                      English
                    </span>

                    <span className="mt-0.5 block text-[10px] text-[#8B948D]">
                      EN
                    </span>
                  </button>

                  {/* AMHARIC */}
                  <button
                    type="button"
                    onClick={() =>
                      handleLanguageChange("AM")
                    }
                    className={`
                      rounded-xl
                      border
                      px-3
                      py-2.5
                      text-xs
                      font-medium
                      transition-all
                      duration-200
                      ${
                        language === "AM"
                          ? "border-[#D4AF37] bg-[#F7F4EA] text-[#123C2A] shadow-sm"
                          : "border-[#E5E1D8] bg-white text-[#4A554C] hover:border-[#D4AF37]/50 hover:bg-[#FAF9F5]"
                      }
                    `}
                  >
                    <span className="block">
                      አማርኛ
                    </span>

                    <span className="mt-0.5 block text-[10px] text-[#8B948D]">
                      AM
                    </span>
                  </button>

                </div>
              </div>

              {/* LOGOUT */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  console.log("Logout");
                }}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-t
                  border-[#E8E1D3]
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-medium
                  text-red-500
                  transition-all
                  duration-200
                  hover:bg-red-50
                "
              >
                <span className="text-base">
                  🚪
                </span>

                <span>
                  {isAmharic
                    ? "ውጣ"
                    : "Logout"}
                </span>
              </button>

            </div>
          )}
        </div>
      </div>
    </header>
  );
}