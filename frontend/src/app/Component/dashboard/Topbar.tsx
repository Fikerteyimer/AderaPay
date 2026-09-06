
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

  const isAmharic = language === "AM";
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
        border-white/10
        bg-[#0d0234]
        backdrop-blur-xl
      "
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =========================
            LEFT SIDE
        ========================= */}
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
              text-white/70
              transition
              hover:bg-white/10
              hover:text-white
              lg:hidden
            "
            aria-label={isAmharic ? "ምናሌ ክፈት" : "Open menu"}
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
              text-white
            "
          >
            Adera
            <span className="italic text-[#E8B34C]">Pay</span>
          </Link>

          {/* DIVIDER */}
          <div className="hidden h-6 w-px bg-white/15 sm:block" />

          {/* ACCOUNT TYPE */}
          <span
            className="
              hidden
              text-sm
              font-medium
              text-white/65
              sm:block
            "
          >
            {isAmharic ? content.amharicLabel : content.label}
          </span>
        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className="relative flex items-center gap-2 sm:gap-3">

          {/* NOTIFICATIONS */}
          <button
            type="button"
            aria-label={isAmharic ? "ማሳወቂያዎች" : "Notifications"}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-white/70
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            🔔
          </button>


          {/* USER BUTTON */}
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
              hover:bg-white/10
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
                bg-gradient-to-br
                from-[#9F08BD]
                to-[#B24CE8]
                text-xs
                font-bold
                text-white
                shadow-md
              "
            >
              {initials}
            </div>


            {/* USER INFO */}
            <div className="hidden text-left sm:block">

              <p className="text-sm font-semibold text-white">
                {userName}
              </p>

              <p className="text-[11px] text-white/55">
                {isAmharic ? content.amharicLabel : content.label}
              </p>

            </div>


            {/* ARROW */}
            <span className="hidden text-xs text-white/50 sm:block">
              {open ? "▲" : "▼"}
            </span>

          </button>


          {/* =========================
              DROPDOWN
          ========================= */}
          {open && (
            <div
              className="
                absolute
                right-0
                top-12
                w-60
                overflow-hidden
                rounded-xl
                border
                border-[#E9DAF4]
                bg-white
                shadow-2xl
                shadow-black/20
              "
            >

              {/* USER HEADER */}
              <div className="border-b border-[#F0E8F5] px-4 py-3">

                <p className="text-sm font-semibold text-[#241C3D]">
                  {userName}
                </p>

                <p className="mt-0.5 text-xs text-[#8B829C]">
                  {isAmharic ? content.amharicLabel : content.label}
                </p>

              </div>


              {/* PROFILE */}
              <Link
                href={`${content.dashboard}/profile`}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-4
                  py-2.5
                  text-sm
                  text-[#4A435C]
                  transition
                  hover:bg-[#F6EEFB]
                  hover:text-[#9F08BD]
                "
              >
                👤 {isAmharic ? "መገለጫ" : "Profile"}
              </Link>


              {/* SETTINGS */}
              <Link
                href={`${content.dashboard}/settings`}
                onClick={() => setOpen(false)}
                className="
                  block
                  px-4
                  py-2.5
                  text-sm
                  text-[#4A435C]
                  transition
                  hover:bg-[#F6EEFB]
                  hover:text-[#9F08BD]
                "
              >
                ⚙️ {isAmharic ? "ቅንብሮች" : "Settings"}
              </Link>


              {/* LANGUAGE */}
              <div className="border-t border-[#F0E8F5] px-4 py-3">

                <div className="mb-2 flex items-center justify-between">

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6F667F]">
                    {isAmharic ? "ቋንቋ" : "Language"}
                  </p>

                  <span className="text-base">
                    🌐
                  </span>

                </div>


                <div className="grid grid-cols-2 gap-2">

                  {/* ENGLISH */}
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`
                      rounded-lg
                      border
                      px-3
                      py-2
                      text-xs
                      font-medium
                      transition
                      ${
                        language === "en"
                          ? "border-[#9F08BD] bg-[#F6EEFB] text-[#9F08BD]"
                          : "border-[#E9DAF4] bg-white text-[#4A435C] hover:border-[#CFA6DD] hover:bg-[#FBF8FD]"
                      }
                    `}
                  >
                    <span className="block">
                      English
                    </span>

                    <span className="mt-0.5 block text-[10px] text-[#8B829C]">
                      EN
                    </span>
                  </button>


                  {/* AMHARIC */}
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("am")}
                    className={`
                      rounded-lg
                      border
                      px-3
                      py-2
                      text-xs
                      font-medium
                      transition
                      ${
                        language === "am"
                          ? "border-[#9F08BD] bg-[#F6EEFB] text-[#9F08BD]"
                          : "border-[#E9DAF4] bg-white text-[#4A435C] hover:border-[#CFA6DD] hover:bg-[#FBF8FD]"
                      }
                    `}
                  >
                    <span className="block">
                      አማርኛ
                    </span>

                    <span className="mt-0.5 block text-[10px] text-[#8B829C]">
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
                  w-full
                  border-t
                  border-[#F0E8F5]
                  px-4
                  py-2.5
                  text-left
                  text-sm
                  font-medium
                  text-red-500
                  transition
                  hover:bg-red-50
                "
              >
                🚪 {isAmharic ? "ውጣ" : "Logout"}
              </button>

            </div>
          )}

        </div>
      </div>
    </header>
  );
}

