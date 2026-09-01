"use client";

import Link from "next/link";
import {
  Heart,
  Church,
  ArrowRight,
  Search,
} from "lucide-react";

export default function DonorFavoritesPage() {
  const favorites = [
    {
      id: 1,
      name: "St. Mary Church",
      location: "Addis Ababa, Ethiopia",
      description: "Supporting families and community programs.",
      image: "⛪",
    },
    {
      id: 2,
      name: "Bethel Community Church",
      location: "Dessie, Ethiopia",
      description: "Helping children and families in need.",
      image: "🤍",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBF8FD] p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#241C3D] sm:text-3xl">
            Favorites
          </h1>

          <p className="mt-1 text-sm text-[#5D5875]">
            Churches and organizations you saved for later.
          </p>
        </div>

        <Link
          href="/dashboard/donor/churches"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-[#9F08BD]
            to-[#B24CE8]
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-md
            shadow-[#9F08BD]/20
            transition
            hover:-translate-y-0.5
          "
        >
          <Search size={17} />
          Find Churches
        </Link>
      </div>

      {/* Favorites */}
      {favorites.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((church) => (
            <div
              key={church.id}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#E9DAF4]
                bg-white
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Card top */}
              <div className="flex items-center justify-between bg-[#F6EEFB] p-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-2xl
                    shadow-sm
                  "
                >
                  {church.image}
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${church.name} from favorites`}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#9F08BD]
                    shadow-sm
                    transition
                    hover:bg-[#9F08BD]
                    hover:text-white
                  "
                >
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h2 className="font-semibold text-[#241C3D]">
                  {church.name}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-xs text-[#9C93B0]">
                  <Church size={14} />
                  {church.location}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#5D5875]">
                  {church.description}
                </p>

                <Link
                  href={`/dashboard/donor/churches/${church.id}`}
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-[#E9DAF4]
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-[#241C3D]
                    transition
                    hover:border-[#9F08BD]
                    hover:text-[#9F08BD]
                  "
                >
                  View Church

                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div
          className="
            flex
            min-h-[350px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-[#E9DAF4]
            bg-white
            px-6
            text-center
          "
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6EEFB]">
            <Heart
              size={28}
              className="text-[#9F08BD]"
            />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-[#241C3D]">
            No favorites yet
          </h2>

          <p className="mt-2 max-w-md text-sm text-[#5D5875]">
            When you find a church you want to support later,
            save it to your favorites.
          </p>

          <Link
            href="/dashboard/donor/churches"
            className="
              mt-5
              rounded-lg
              bg-[#241C3D]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#9F08BD]
            "
          >
            Explore Churches
          </Link>
        </div>
      )}
    </main>
  );
}