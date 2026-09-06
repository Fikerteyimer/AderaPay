"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

type DonationStatus = "completed" | "pending" | "failed";

type Donation = {
  id: string;
  date: string;
  church: string;
  churchAmharic: string;
  type: string;
  typeAmharic: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentMethodAmharic: string;
  status: DonationStatus;
  reference: string;
};


const donations: Donation[] = [
  {
    id: "1",
    date: "2026-08-18",
    church: "St. Mary Church",
    churchAmharic: "ቅድስት ማርያም ቤተ ክርስቲያን",
    type: "1/10 of My Income",
    typeAmharic: "ከገቢዬ 1/10",
    amount: 5000,
    currency: "ETB",
    paymentMethod: "Telebirr",
    paymentMethodAmharic: "ቴሌብር",
    status: "completed",
    reference: "ADR-2026-00182",
  },
  {
    id: "2",
    date: "2026-08-10",
    church: "Holy Trinity Church",
    churchAmharic: "ቅድስት ሥላሴ ቤተ ክርስቲያን",
    type: "Custom Amount",
    typeAmharic: "የራስዎ መጠን",
    amount: 2500,
    currency: "ETB",
    paymentMethod: "Commercial Bank of Ethiopia",
    paymentMethodAmharic: "የኢትዮጵያ ንግድ ባንክ",
    status: "completed",
    reference: "ADR-2026-00154",
  },
  {
    id: "3",
    date: "2026-08-04",
    church: "St. George Church",
    churchAmharic: "ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን",
    type: "First Salary",
    typeAmharic: "የመጀመሪያ ደመወዝ",
    amount: 12000,
    currency: "ETB",
    paymentMethod: "Abyssinia Bank",
    paymentMethodAmharic: "አቢሲኒያ ባንክ",
    status: "completed",
    reference: "ADR-2026-00121",
  },
  {
    id: "4",
    date: "2026-07-28",
    church: "Medhane Alem Church",
    churchAmharic: "መድኃኔ ዓለም ቤተ ክርስቲያን",
    type: "Help a Church",
    typeAmharic: "ቤተ ክርስቲያንን ይርዱ",
    amount: 3500,
    currency: "ETB",
    paymentMethod: "Telebirr",
    paymentMethodAmharic: "ቴሌብር",
    status: "pending",
    reference: "ADR-2026-00098",
  },
  {
    id: "5",
    date: "2026-07-15",
    church: "St. Michael Church",
    churchAmharic: "ቅዱስ ሚካኤል ቤተ ክርስቲያን",
    type: "Custom Amount",
    typeAmharic: "የራስዎ መጠን",
    amount: 1500,
    currency: "ETB",
    paymentMethod: "International Card",
    paymentMethodAmharic: "ዓለም አቀፍ ካርድ",
    status: "completed",
    reference: "ADR-2026-00073",
  },
  {
    id: "6",
    date: "2026-07-02",
    church: "St. Mary Church",
    churchAmharic: "ቅድስት ማርያም ቤተ ክርስቲያን",
    type: "1/10 of My Income",
    typeAmharic: "ከገቢዬ 1/10",
    amount: 4000,
    currency: "ETB",
    paymentMethod: "Commercial Bank of Ethiopia",
    paymentMethodAmharic: "የኢትዮጵያ ንግድ ባንክ",
    status: "failed",
    reference: "ADR-2026-00041",
  },
];

type FilterStatus = "all" | DonationStatus;

export default function DonationHistoryPage() {
  const { language } = useLanguage();

  const isAmharic = language === "am";

  const [statusFilter, setStatusFilter] =
    useState<FilterStatus>("all");

  const [search, setSearch] = useState("");

  const [selectedDonation, setSelectedDonation] =
    useState<Donation | null>(null);

  const t = {
    title: isAmharic
      ? "የልገሳ ታሪክ"
      : "Donation History",

    subtitle: isAmharic
      ? "ያለፉትን ልገሳዎችዎን ይመልከቱ እና የልገሳ ዝርዝሮችዎን ይከታተሉ።"
      : "View your previous donations and keep track of your giving.",

    back: isAmharic ? "ተመለስ" : "Back",

    search: isAmharic
      ? "ልገሳ ይፈልጉ..."
      : "Search donations...",

    all: isAmharic ? "ሁሉም" : "All",

    completed: isAmharic
      ? "ተጠናቋል"
      : "Completed",

    pending: isAmharic
      ? "በመጠባበቅ ላይ"
      : "Pending",

    failed: isAmharic
      ? "አልተሳካም"
      : "Failed",

    totalDonations: isAmharic
      ? "ጠቅላላ ልገሳ"
      : "Total Donations",

    totalAmount: isAmharic
      ? "ጠቅላላ መጠን"
      : "Total Amount",

    successful: isAmharic
      ? "የተሳኩ"
      : "Successful",

    pendingAmount: isAmharic
      ? "በመጠባበቅ ላይ"
      : "Pending",

    church: isAmharic
      ? "ቤተ ክርስቲያን"
      : "Church",

    donationType: isAmharic
      ? "የልገሳ ዓይነት"
      : "Donation Type",

    amount: isAmharic
      ? "መጠን"
      : "Amount",

    payment: isAmharic
      ? "የክፍያ ዘዴ"
      : "Payment",

    date: isAmharic
      ? "ቀን"
      : "Date",

    status: isAmharic
      ? "ሁኔታ"
      : "Status",

    reference: isAmharic
      ? "የማጣቀሻ ቁጥር"
      : "Reference",

    details: isAmharic
      ? "ዝርዝር"
      : "Details",

    viewDetails: isAmharic
      ? "ዝርዝር ይመልከቱ"
      : "View Details",

    downloadReceipt: isAmharic
      ? "ደረሰኝ አውርድ"
      : "Download Receipt",

    noDonations: isAmharic
      ? "ምንም የልገሳ ታሪክ አልተገኘም።"
      : "No donation history found.",

    noMatching: isAmharic
      ? "ከፍለጋዎ ጋር የሚዛመድ ልገሳ የለም።"
      : "No donations match your search.",

    donationDetails: isAmharic
      ? "የልገሳ ዝርዝሮች"
      : "Donation Details",

    close: isAmharic
      ? "ዝጋ"
      : "Close",

    secure: isAmharic
      ? "የልገሳ መረጃዎ በደህንነት ይጠበቃል።"
      : "Your donation information is securely stored.",
  };

  /* =========================================================
     FILTER DONATIONS
  ========================================================= */

  const filteredDonations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return donations.filter((donation) => {
      const matchesStatus =
        statusFilter === "all" ||
        donation.status === statusFilter;

      const searchableText = `
        ${donation.church}
        ${donation.churchAmharic}
        ${donation.type}
        ${donation.typeAmharic}
        ${donation.paymentMethod}
        ${donation.paymentMethodAmharic}
        ${donation.reference}
        ${donation.amount}
      `.toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  /* =========================================================
     SUMMARY
  ========================================================= */

  const completedDonations = donations.filter(
    (donation) => donation.status === "completed"
  );

  const pendingDonations = donations.filter(
    (donation) => donation.status === "pending"
  );

  const totalAmount = completedDonations.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );

  const pendingAmount = pendingDonations.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );

  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(
      isAmharic ? "am-ET" : "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    ).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-6">
          <div className="flex items-center gap-3">

            <Link
              href="/dashboard/donor"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-[#E9DAF4]
                bg-white
                text-[#5D5875]
                transition
                hover:border-[#9F08BD]
                hover:text-[#9F08BD]
              "
              aria-label={t.back}
            >
              ←
            </Link>

            <div>
              <h1 className="text-2xl font-semibold text-[#241C3D]">
                {t.title}
              </h1>

              <p className="mt-1 text-sm text-[#7B728C]">
                {t.subtitle}
              </p>
            </div>

          </div>
        </div>

        {/* =====================================================
            SUMMARY CARDS
        ===================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <SummaryCard
            icon="♡"
            label={t.totalDonations}
            value={donations.length.toString()}
          />

          <SummaryCard
            icon="💜"
            label={t.totalAmount}
            value={`ETB ${totalAmount.toLocaleString()}`}
          />

          <SummaryCard
            icon="✓"
            label={t.successful}
            value={completedDonations.length.toString()}
          />

          <SummaryCard
            icon="◷"
            label={t.pendingAmount}
            value={`ETB ${pendingAmount.toLocaleString()}`}
          />

        </div>

        {/* =====================================================
            HISTORY CARD
        ===================================================== */}

        <section
          className="
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-[#E9DAF4]
            bg-white
            shadow-sm
          "
        >

          {/* TOP */}
          <div
            className="
              flex
              flex-col
              gap-4
              border-b
              border-[#F0E8F5]
              p-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div>
              <h2 className="text-lg font-semibold text-[#241C3D]">
                {t.title}
              </h2>

              <p className="mt-1 text-xs text-[#9C93B0]">
                {filteredDonations.length}{" "}
                {isAmharic ? "ልገሳዎች" : "donations"}
              </p>
            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:w-72">

              <span
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-[#9C93B0]
                "
              >
                🔎
              </span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.search}
                className="
                  w-full
                  rounded-lg
                  border
                  border-[#E9DAF4]
                  bg-[#FBF8FD]
                  py-2.5
                  pl-10
                  pr-4
                  text-sm
                  text-[#241C3D]
                  outline-none
                  placeholder:text-[#9C93B0]
                  focus:border-[#9F08BD]
                  focus:ring-2
                  focus:ring-[#9F08BD]/15
                "
              />

            </div>

          </div>

          {/* ===================================================
              FILTERS
          =================================================== */}

          <div className="border-b border-[#F0E8F5] px-5 py-3">

            <div className="flex flex-wrap gap-2">

              <FilterButton
                selected={statusFilter === "all"}
                onClick={() => setStatusFilter("all")}
              >
                {t.all}
              </FilterButton>

              <FilterButton
                selected={statusFilter === "completed"}
                onClick={() => setStatusFilter("completed")}
              >
                ✓ {t.completed}
              </FilterButton>

              <FilterButton
                selected={statusFilter === "pending"}
                onClick={() => setStatusFilter("pending")}
              >
                ◷ {t.pending}
              </FilterButton>

              <FilterButton
                selected={statusFilter === "failed"}
                onClick={() => setStatusFilter("failed")}
              >
                × {t.failed}
              </FilterButton>

            </div>

          </div>

          {/* ===================================================
              DESKTOP TABLE
          =================================================== */}

          <div className="hidden overflow-x-auto lg:block">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="border-b border-[#F0E8F5] bg-[#FBF8FD]">

                  <th className={tableHeaderClass}>
                    {t.date}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.church}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.donationType}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.amount}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.payment}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.status}
                  </th>

                  <th className={tableHeaderClass}>
                    {t.details}
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredDonations.map((donation) => (

                  <tr
                    key={donation.id}
                    className="
                      border-b
                      border-[#F5EFF8]
                      transition
                      hover:bg-[#FBF8FD]
                    "
                  >

                    <td className={tableCellClass}>
                      {formatDate(donation.date)}
                    </td>

                    <td className={tableCellClass}>
                      <div className="flex items-center gap-2.5">

                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#F6EEFB]
                          "
                        >
                          ⛪
                        </div>

                        <span className="max-w-[180px] truncate font-medium text-[#241C3D]">
                          {isAmharic
                            ? donation.churchAmharic
                            : donation.church}
                        </span>

                      </div>
                    </td>

                    <td className={tableCellClass}>
                      <span className="text-[#5D5875]">
                        {isAmharic
                          ? donation.typeAmharic
                          : donation.type}
                      </span>
                    </td>

                    <td className={tableCellClass}>
                      <span className="font-bold text-[#9F08BD]">
                        {donation.currency}{" "}
                        {donation.amount.toLocaleString()}
                      </span>
                    </td>

                    <td className={tableCellClass}>
                      <span className="text-[#5D5875]">
                        {isAmharic
                          ? donation.paymentMethodAmharic
                          : donation.paymentMethod}
                      </span>
                    </td>

                    <td className={tableCellClass}>
                      <StatusBadge status={donation.status} />
                    </td>

                    <td className={tableCellClass}>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDonation(donation)
                        }
                        className="
                          rounded-lg
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-[#9F08BD]
                          transition
                          hover:bg-[#F6EEFB]
                        "
                      >
                        {t.viewDetails}
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* ===================================================
              MOBILE CARDS
          =================================================== */}

          <div className="divide-y divide-[#F0E8F5] lg:hidden">

            {filteredDonations.map((donation) => (

              <div
                key={donation.id}
                className="p-4"
              >

                <div className="flex items-start justify-between gap-3">

                  <div className="flex min-w-0 items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F6EEFB]
                      "
                    >
                      ⛪
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-semibold text-[#241C3D]">
                        {isAmharic
                          ? donation.churchAmharic
                          : donation.church}
                      </p>

                      <p className="mt-0.5 text-xs text-[#9C93B0]">
                        {formatDate(donation.date)}
                      </p>

                    </div>

                  </div>

                  <StatusBadge status={donation.status} />

                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div>
                    <p className="text-[11px] text-[#9C93B0]">
                      {t.donationType}
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#5D5875]">
                      {isAmharic
                        ? donation.typeAmharic
                        : donation.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] text-[#9C93B0]">
                      {t.payment}
                    </p>

                    <p className="mt-1 truncate text-xs font-medium text-[#5D5875]">
                      {isAmharic
                        ? donation.paymentMethodAmharic
                        : donation.paymentMethod}
                    </p>
                  </div>

                </div>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#F0E8F5]
                    pt-3
                  "
                >

                  <span className="text-lg font-bold text-[#9F08BD]">
                    {donation.currency}{" "}
                    {donation.amount.toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDonation(donation)
                    }
                    className="
                      rounded-lg
                      bg-[#F6EEFB]
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-[#9F08BD]
                    "
                  >
                    {t.viewDetails}
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* EMPTY */}
          {filteredDonations.length === 0 && (

            <div className="px-5 py-16 text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F6EEFB]
                  text-2xl
                "
              >
                ♡
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#241C3D]">
                {search
                  ? t.noMatching
                  : t.noDonations}
              </h3>

              <p className="mt-1 text-xs text-[#9C93B0]">
                {isAmharic
                  ? "የልገሳዎ መረጃ እዚህ ይታያል።"
                  : "Your donation records will appear here."}
              </p>

            </div>

          )}

        </section>

        {/* =====================================================
            SECURITY NOTE
        ===================================================== */}

        <div
          className="
            mt-5
            rounded-xl
            border
            border-[#E9DAF4]
            bg-white
            p-4
          "
        >

          <div className="flex items-start gap-3">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#F6EEFB]
              "
            >
              🔒
            </div>

            <div>

              <h3 className="text-sm font-semibold text-[#241C3D]">
                {isAmharic
                  ? "ደህንነት"
                  : "Your donation records"}
              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#7B728C]">
                {t.secure}
              </p>

            </div>

          </div>

        </div>

      </main>

      {/* =======================================================
          DONATION DETAILS MODAL
      ======================================================= */}

      {selectedDonation && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#241C3D]/30
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedDonation(null)}
        >

          <div
            className="
              w-full
              max-w-lg
              overflow-hidden
              rounded-2xl
              border
              border-[#E9DAF4]
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#F0E8F5]
                p-5
              "
            >

              <div>

                <h2 className="text-lg font-semibold text-[#241C3D]">
                  {t.donationDetails}
                </h2>

                <p className="mt-1 text-xs text-[#9C93B0]">
                  {selectedDonation.reference}
                </p>

              </div>

              <button
                type="button"
                onClick={() => setSelectedDonation(null)}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  text-[#9C93B0]
                  transition
                  hover:bg-[#F6EEFB]
                  hover:text-[#9F08BD]
                "
              >
                ×
              </button>

            </div>

            {/* MODAL BODY */}

            <div className="p-5">

              <div
                className="
                  rounded-xl
                  bg-[#F8F0FB]
                  p-5
                  text-center
                "
              >

                <p className="text-xs text-[#7B728C]">
                  {t.amount}
                </p>

                <p className="mt-1 text-3xl font-bold text-[#9F08BD]">
                  {selectedDonation.currency}{" "}
                  {selectedDonation.amount.toLocaleString()}
                </p>

                <div className="mt-3">
                  <StatusBadge
                    status={selectedDonation.status}
                  />
                </div>

              </div>

              <div className="mt-5 divide-y divide-[#F0E8F5]">

                <DetailRow
                  label={t.church}
                  value={
                    isAmharic
                      ? selectedDonation.churchAmharic
                      : selectedDonation.church
                  }
                />

                <DetailRow
                  label={t.donationType}
                  value={
                    isAmharic
                      ? selectedDonation.typeAmharic
                      : selectedDonation.type
                  }
                />

                <DetailRow
                  label={t.date}
                  value={formatDate(selectedDonation.date)}
                />

                <DetailRow
                  label={t.payment}
                  value={
                    isAmharic
                      ? selectedDonation.paymentMethodAmharic
                      : selectedDonation.paymentMethod
                  }
                />

                <DetailRow
                  label={t.reference}
                  value={selectedDonation.reference}
                />

              </div>

              {/* RECEIPT */}

              {selectedDonation.status === "completed" && (

                <button
                  type="button"
                  onClick={() => {
                    /*
                      LATER:

                      Connect this to your receipt API.

                      Example:
                      window.open(
                        `/api/donations/${selectedDonation.id}/receipt`,
                        "_blank"
                      );
                    */
                    console.log(
                      "Download receipt:",
                      selectedDonation.reference
                    );
                  }}
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-[#9F08BD]
                    to-[#B24CE8]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    shadow-[#9F08BD]/20
                    transition
                    hover:-translate-y-0.5
                  "
                >
                  🧾 {t.downloadReceipt}
                </button>

              )}

              <button
                type="button"
                onClick={() => setSelectedDonation(null)}
                className="
                  mt-3
                  w-full
                  rounded-lg
                  border
                  border-[#E9DAF4]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-[#5D5875]
                  transition
                  hover:bg-[#FBF8FD]
                "
              >
                {t.close}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

type SummaryCardProps = {
  icon: string;
  label: string;
  value: string;
};

function SummaryCard({
  icon,
  label,
  value,
}: SummaryCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#E9DAF4]
        bg-white
        p-5
        shadow-sm
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#F6EEFB]
            text-lg
            text-[#9F08BD]
          "
        >
          {icon}
        </div>

        <div>

          <p className="text-xs text-[#9C93B0]">
            {label}
          </p>

          <p className="mt-1 text-lg font-bold text-[#241C3D]">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   FILTER BUTTON
========================================================= */

type FilterButtonProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function FilterButton({
  selected,
  onClick,
  children,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-lg
        px-3
        py-2
        text-xs
        font-semibold
        transition
        ${
          selected
            ? "bg-[#9F08BD] text-white shadow-sm"
            : "bg-[#FBF8FD] text-[#5D5875] hover:bg-[#F6EEFB] hover:text-[#9F08BD]"
        }
      `}
    >
      {children}
    </button>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({
  status,
}: {
  status: DonationStatus;
}) {
  const config = {
    completed: {
      label: "Completed",
      amharic: "ተጠናቋል",
      className: "bg-green-50 text-green-600",
      icon: "✓",
    },

    pending: {
      label: "Pending",
      amharic: "በመጠባበቅ ላይ",
      className: "bg-yellow-50 text-yellow-600",
      icon: "◷",
    },

    failed: {
      label: "Failed",
      amharic: "አልተሳካም",
      className: "bg-red-50 text-red-500",
      icon: "×",
    },
  };

  const item = config[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1
        rounded-full
        px-2.5
        py-1
        text-[11px]
        font-semibold
        ${item.className}
      `}
    >
      {item.icon}

      <span className="hidden sm:inline">
        {item.label}
      </span>

      <span className="sm:hidden">
        {item.label.slice(0, 1)}
      </span>
    </span>
  );
}

/* =========================================================
   DETAIL ROW
========================================================= */

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-5 py-3">

      <span className="shrink-0 text-xs text-[#9C93B0]">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-[#241C3D]">
        {value}
      </span>

    </div>
  );
}

/* =========================================================
   TABLE STYLES
========================================================= */

const tableHeaderClass = `
  px-5
  py-3
  text-left
  text-[10px]
  font-bold
  uppercase
  tracking-[0.08em]
  text-[#9C93B0]
`;

const tableCellClass = `
  px-5
  py-4
  text-sm
`;