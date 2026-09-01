"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

type UserRole = "donor" | "church" | "admin";

type SidebarProps = {
  role: UserRole;
};

type MenuItem = {
  label: string;
  amharicLabel: string;
  href: string;
  icon: string;
};

const menuItems: Record<UserRole, MenuItem[]> = {
  donor: [
    {
      label: "Overview",
      amharicLabel: "አጠቃላይ እይታ",
      href: "/donor",
      icon: "⌂",
    },
    {
      label: "My Donations",
      amharicLabel: "ልገሳዎቼ",
      href: "/donor/donations",
      icon: "♡",
    },
    {
      label: "Churches",
      amharicLabel: "ቤተ ክርስቲያናት",
      href: "/donor/churches",
      icon: "⛪",
    },
    {
      label: "Donation History",
      amharicLabel: "የልገሳ ታሪክ",
      href: "/donor/history",
      icon: "◷",
    },
    {
      label: "Favorites",
      amharicLabel: "ተወዳጆች",
      href: "/donor/favorites",
      icon: "☆",
    },
  ],

  church: [
    {
      label: "Overview",
      amharicLabel: "አጠቃላይ እይታ",
      href: "/church",
      icon: "⌂",
    },
    {
      label: "Donations",
      amharicLabel: "ልገሳዎች",
      href: "/church/donations",
      icon: "♡",
    },
    {
      label: "Campaigns",
      amharicLabel: "ዘመቻዎች",
      href: "/church/campaigns",
      icon: "◈",
    },
    {
      label: "Donors",
      amharicLabel: "ለጋሾች",
      href: "/church/donors",
      icon: "♙",
    },
    {
      label: "Reports",
      amharicLabel: "ሪፖርቶች",
      href: "/church/reports",
      icon: "▤",
    },
  ],

  admin: [
    {
      label: "Overview",
      amharicLabel: "አጠቃላይ እይታ",
      href: "/admin",
      icon: "⌂",
    },
    {
      label: "Users",
      amharicLabel: "ተጠቃሚዎች",
      href: "/admin/users",
      icon: "♙",
    },
    {
      label: "Churches",
      amharicLabel: "ቤተ ክርስቲያናት",
      href: "/admin/churches",
      icon: "⛪",
    },
    {
      label: "Donations",
      amharicLabel: "ልገሳዎች",
      href: "/admin/donations",
      icon: "♡",
    },
    {
      label: "Verification",
      amharicLabel: "ማረጋገጫ",
      href: "/admin/verification",
      icon: "✓",
    },
    {
      label: "Reports",
      amharicLabel: "ሪፖርቶች",
      href: "/admin/reports",
      icon: "▤",
    },
  ],
};

const roleLabels: Record<UserRole, string> = {
  donor: "Donor",
  church: "Church",
  admin: "Admin",
};

const roleAmharicLabels: Record<UserRole, string> = {
  donor: "ለጋሽ",
  church: "ቤተ ክርስቲያን",
  admin: "አስተዳዳሪ",
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const { language } = useLanguage();

  const isAmharic = language === "am";
  const items = menuItems[role];

  const roleLabel = isAmharic
    ? roleAmharicLabels[role]
    : roleLabels[role];

  return (
    <aside
      className="
       fixed
        left-0
        top-16
        z-40
        hidden
        h-[calc(100vh-4rem)]
        w-64
        shrink-0
        flex-col
        border-r
        border-[#3A3047]
        bg-[#0d0234]
        lg:flex
      "
    >
      {/* =========================
          ROLE HEADER
      ========================= */}
      <div className="border-b border-[#E8E0EE] p-5">
        <div className="flex items-center gap-3">

          {/* ROLE ICON */}
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#EEE5F5]
              text-lg
              shadow-sm
            "
          >
            {role === "donor" && "🙏"}
            {role === "church" && "⛪"}
            {role === "admin" && "⚙️"}
          </div>

          {/* ROLE INFO */}
          <div>
            <p className="text-xs font-medium text-[#8B829C]">
              {isAmharic ? "ዳሽቦርድ" : "Dashboard"}
            </p>

            <p className="text-sm font-semibold text-[#241C3D]">
              {roleLabel}
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="flex-1 overflow-y-auto p-4">

        <p
          className="
            mb-3
            px-3
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#958AA3]
          "
        >
          {isAmharic ? "ምናሌ" : "Menu"}
        </p>

        <div className="space-y-1.5">
          {items.map((item) => {

            /*
             * Exact match for the main dashboard.
             * For other pages, check whether pathname
             * starts with the item's href.
             */
            const isActive =
              item.href === `/${role}`
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-[#EDE3F3] text-[#9F08BD] shadow-sm"
                      : "text-[#5E566A] hover:bg-white hover:text-[#9F08BD] hover:shadow-sm"
                  }
                `}
              >

                {/* ICON */}
                <span
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    text-base
                    transition-all

                    ${
                      isActive
                        ? "bg-white text-[#9F08BD] shadow-sm"
                        : "bg-[#F0EAF4] text-[#81768E] group-hover:bg-[#EDE3F3] group-hover:text-[#9F08BD]"
                    }
                  `}
                >
                  {item.icon}
                </span>

                {/* LABEL */}
                <span className="truncate">
                  {isAmharic
                    ? item.amharicLabel
                    : item.label}
                </span>

                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <span
                    className="
                      ml-auto
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#9F08BD]
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* =========================
          BOTTOM SETTINGS
      ========================= */}
      <div className="border-t border-[#E8E0EE] p-4">

        <Link
          href={`/${role}/settings`}
          className="
            group
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-sm
            font-medium
            text-[#5E566A]
            transition-all
            hover:bg-white
            hover:text-[#9F08BD]
            hover:shadow-sm
          "
        >

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-[#F0EAF4]
              text-[#81768E]
              transition
              group-hover:bg-[#EDE3F3]
              group-hover:text-[#9F08BD]
            "
          >
            ⚙
          </span>

          {isAmharic ? "ቅንብሮች" : "Settings"}
        </Link>

      </div>
    </aside>
  );
}