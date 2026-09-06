"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

type UserRole = "donor" | "church" | "admin";

type SidebarProps = {
  role: UserRole;
  mobileOpen: boolean;
  onClose: () => void;
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

export default function Sidebar({
  role,
  mobileOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const { language } = useLanguage();

  const isAmharic = language === "AM";
  const items = menuItems[role];

  const roleLabel = isAmharic
    ? roleAmharicLabels[role]
    : roleLabels[role];

  return (
    <>
      {/* MOBILE BACKDROP */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[285px] flex-col overflow-hidden bg-[#0d0234] shadow-2xl transition-transform duration-300 ease-out lg:top-16 lg:z-40 lg:h-[calc(100vh-4rem)] lg:w-64 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* TOP SECTION */}
        <div className="shrink-0 border-b border-white/10 px-5 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* ROLE ICON */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#cf37d4] to-[#eb7af3] text-xl shadow-lg shadow-black/20">
                {role === "donor" && "🙏"}
                {role === "church" && "⛪"}
                {role === "admin" && "⚙️"}
              </div>

              {/* ROLE TEXT */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  {isAmharic ? "ዳሽቦርድ" : "Dashboard"}
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white">
                  {roleLabel}
                </p>
              </div>
            </div>

            {/* MOBILE CLOSE BUTTON */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white/60 transition-all hover:bg-white/10 hover:text-white lg:hidden"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          className="sidebar-scroll flex-1 overflow-y-auto px-3 py-5"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d437d1 transparent",
          }}
        >
          {/* MENU TITLE */}
          <div className="mb-3 px-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              {isAmharic ? "ዝርዝሮች" : "Menu"}
            </p>
          </div>

          {/* MENU ITEMS */}
          <div className="space-y-1.5">
            {items.map((item) => {
              const isActive =
                item.href === `/${role}`
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group relative flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#27003b] shadow-lg shadow-black/10"
                      : "text-white/65 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#d437d1]" />
                  )}

                  {/* ICON */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#f8d7f3] text-[#94169b]"
                        : "bg-white/7 text-white/55 group-hover:bg-[#D4AF37]/15 group-hover:text-[#d437c9]"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* LABEL */}
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">
                    {isAmharic
                      ? item.amharicLabel
                      : item.label}
                  </span>

                  {/* ACTIVE DOT */}
                  {isActive && (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a537d4]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* BOTTOM SECTION */}
        <div className="shrink-0 border-t border-white/10 p-3">
          {/* SETTINGS */}
          <Link
            href={`/${role}/settings`}
            onClick={onClose}
            className="group flex items-center gap-3 rounded-2xl px-3 py-3 text-white/60 transition-all duration-200 hover:bg-white/8 hover:text-white"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/7 text-white/55 transition-all group-hover:bg-[#D4AF37]/15 group-hover:text-[#D4AF37]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.8 1.8-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V22h-2.54v-.1a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.8-1.8.06-.06A1.7 1.7 0 0 0 8.1 17a1.7 1.7 0 0 0-1.56-1.04H6.4v-2.54h.14A1.7 1.7 0 0 0 8.1 12a1.7 1.7 0 0 0-.34-1.88L7.7 10.06l1.8-1.8.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56V7h2.54v.1a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.8 1.8-.06.06A1.7 1.7 0 0 0 19.4 12a1.7 1.7 0 0 0 1.56 1.04H21v2.54h-.04A1.7 1.7 0 0 0 19.4 15Z" />
              </svg>
            </span>

            <span className="text-sm font-medium">
              {isAmharic ? "ቅንብሮች" : "Settings"}
            </span>
          </Link>

        
          
        </div>
      </aside>
    </>
  );
}