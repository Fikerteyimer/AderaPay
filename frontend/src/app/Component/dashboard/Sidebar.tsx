"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type UserRole = "donor" | "church" | "admin";

type SidebarProps = {
  role: UserRole;
};

type MenuItem = {
  label: string;
  href: string;
  icon: string;
};

const menuItems: Record<UserRole, MenuItem[]> = {
  donor: [
    {
      label: "Overview",
      href: "/dashboard/donor",
      icon: "⌂",
    },
    {
      label: "My Donations",
      href: "/dashboard/donor/donations",
      icon: "♡",
    },
    {
      label: "Churches",
      href: "/dashboard/donor/churches",
      icon: "⛪",
    },
    {
      label: "Donation History",
      href: "/dashboard/donor/history",
      icon: "◷",
    },
    {
      label: "Favorites",
      href: "/dashboard/donor/favorites",
      icon: "☆",
    },
  ],

  church: [
    {
      label: "Overview",
      href: "/dashboard/church",
      icon: "⌂",
    },
    {
      label: "Donations",
      href: "/dashboard/church/donations",
      icon: "♡",
    },
    {
      label: "Campaigns",
      href: "/dashboard/church/campaigns",
      icon: "◈",
    },
    {
      label: "Donors",
      href: "/dashboard/church/donors",
      icon: "♙",
    },
    {
      label: "Reports",
      href: "/dashboard/church/reports",
      icon: "▤",
    },
  ],

  admin: [
    {
      label: "Overview",
      href: "/dashboard/admin",
      icon: "⌂",
    },
    {
      label: "Users",
      href: "/dashboard/admin/users",
      icon: "♙",
    },
    {
      label: "Churches",
      href: "/dashboard/admin/churches",
      icon: "⛪",
    },
    {
      label: "Donations",
      href: "/dashboard/admin/donations",
      icon: "♡",
    },
    {
      label: "Verification",
      href: "/dashboard/admin/verification",
      icon: "✓",
    },
    {
      label: "Reports",
      href: "/dashboard/admin/reports",
      icon: "▤",
    },
  ],
};

const roleLabels: Record<UserRole, string> = {
  donor: "Donor",
  church: "Church",
  admin: "Admin",
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const items = menuItems[role];

  return (
    <aside
      className="
        hidden
        h-[calc(100vh-4rem)]
        w-64
        shrink-0
        border-r
        border-[#E9DAF4]
        bg-white
        lg:flex
        lg:flex-col
      "
    >
      {/* ROLE HEADER */}
      <div className="border-b border-[#F0E8F5] p-5">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#F6EEFB]
              text-lg
            "
          >
            {role === "donor" && "🙏"}
            {role === "church" && "⛪"}
            {role === "admin" && "⚙️"}
          </div>

          <div>
            <p className="text-xs text-[#9C93B0]">
              Dashboard
            </p>

            <p className="text-sm font-semibold text-[#241C3D]">
              {roleLabels[role]}
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9C93B0]">
          Menu
        </p>

        <div className="space-y-1">
          {items.map((item) => {
            const isActive =
              item.href === `/dashboard/${role}`
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
                      ? "bg-[#F6EEFB] text-[#9F08BD]"
                      : "text-[#5D5875] hover:bg-[#FBF8FD] hover:text-[#9F08BD]"
                  }
                `}
              >
                <span
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    text-base
                    transition
                    ${
                      isActive
                        ? "bg-white text-[#9F08BD] shadow-sm"
                        : "text-[#9C93B0] group-hover:text-[#9F08BD]"
                    }
                  `}
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>

                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#9F08BD]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* BOTTOM */}
      <div className="border-t border-[#F0E8F5] p-4">
        <Link
          href={`/dashboard/${role}/settings`}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2.5
            text-sm
            font-medium
            text-[#5D5875]
            transition
            hover:bg-[#FBF8FD]
            hover:text-[#9F08BD]
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
              bg-[#FBF8FD]
            "
          >
            ⚙
          </span>

          Settings
        </Link>
      </div>
    </aside>
  );
}