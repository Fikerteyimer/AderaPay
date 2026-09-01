"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

type DonationOption =
  | "tenth"
  | "custom"
  | "firstSalary"
  | "churchNeed";

type DonorLocation = "ethiopia" | "abroad";

type PaymentMethod =
  | "telebirr"
  | "cbe"
  | "abyssinia"
  | "internationalCard"
  | "paypal"
  | "wise";

type Church = {
  id: number;
  name: string;
  amharicName: string;
  location: string;
  verified: boolean;
};

/*
|--------------------------------------------------------------------------
| REGISTERED / VERIFIED CHURCHES
|--------------------------------------------------------------------------
| Later replace this with your API/database data.
|
| Only churches that have been verified by the admin should appear here.
|--------------------------------------------------------------------------
*/

const registeredChurches: Church[] = [
  {
    id: 1,
    name: "St. Mary Church",
    amharicName: "ቅድስት ማርያም ቤተ ክርስቲያን",
    location: "Addis Ababa",
    verified: true,
  },
  {
    id: 2,
    name: "Holy Trinity Church",
    amharicName: "ቅድስት ሥላሴ ቤተ ክርስቲያን",
    location: "Addis Ababa",
    verified: true,
  },
  {
    id: 3,
    name: "St. George Church",
    amharicName: "ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን",
    location: "Dessie",
    verified: true,
  },
  {
    id: 4,
    name: "Medhane Alem Church",
    amharicName: "መድኃኔ ዓለም ቤተ ክርስቲያን",
    location: "Bahir Dar",
    verified: true,
  },
  {
    id: 5,
    name: "St. Michael Church",
    amharicName: "ቅዱስ ሚካኤል ቤተ ክርስቲያን",
    location: "Addis Ababa",
    verified: true,
  },
];

/*
|--------------------------------------------------------------------------
| MAIN PAGE
|--------------------------------------------------------------------------
*/

export default function MyDonationsPage() {
  const { language } = useLanguage();
  const isAmharic = language === "am";

  const [option, setOption] =
    useState<DonationOption>("tenth");

  const [income, setIncome] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [firstSalary, setFirstSalary] = useState("");

  const [selectedChurch, setSelectedChurch] =
    useState<number | null>(null);

  const [churchAmount, setChurchAmount] = useState("");

  const [donorLocation, setDonorLocation] =
    useState<DonorLocation>("ethiopia");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("telebirr");

  const [anonymous, setAnonymous] = useState(false);
  const [dedication, setDedication] = useState(false);
  const [dedicationName, setDedicationName] = useState("");
  const [message, setMessage] = useState("");

  /*
  |--------------------------------------------------------------------------
  | TRANSLATIONS
  |--------------------------------------------------------------------------
  */

  const t = {
    title: isAmharic ? "ልገሳዎቼ" : "My Donations",

    subtitle: isAmharic
      ? "በዓላማ ይስጡ፣ ለሚወዷቸው ቤተ ክርስቲያናት ይደግፉ።"
      : "Give with purpose and support the churches that matter to you.",

    makeDonation: isAmharic
      ? "ልገሳ ያድርጉ"
      : "Make a Donation",

    chooseGiving: isAmharic
      ? "ልገሳዎን እንዴት ማድረግ እንደሚፈልጉ ይምረጡ።"
      : "Choose how you would like to give.",

    tenth: isAmharic
      ? "ከገቢዬ 1/10"
      : "1/10 of My Income",

    tenthDescription: isAmharic
      ? "10% የገቢዎን በራስ-ሰር ያስሉ።"
      : "Automatically calculate 10% of your income.",

    custom: isAmharic
      ? "የራስዎ መጠን"
      : "Custom Amount",

    customDescription: isAmharic
      ? "መስጠት የሚፈልጉትን መጠን ይምረጡ።"
      : "Choose the amount you want to give.",

    firstSalary: isAmharic
      ? "የመጀመሪያ ደመወዝ"
      : "First Salary",

    firstSalaryDescription: isAmharic
      ? "የመጀመሪያ ደመወዝዎን እንደ ልዩ ልገሳ ይስጡ።"
      : "Give your first salary as a special donation.",

    churchNeed: isAmharic
      ? "ቤተ ክርስቲያንን ይርዱ"
      : "Help a Church",

    churchNeedDescription: isAmharic
      ? "ከተመዘገቡ ቤተ ክርስቲያናት ይምረጡ።"
      : "Choose from registered and verified churches.",

    monthlyIncome: isAmharic
      ? "ወርሃዊ ገቢ"
      : "Monthly Income",

    enterIncome: isAmharic
      ? "ገቢዎን ያስገቡ"
      : "Enter your income",

    yourTenth: isAmharic
      ? "የእርስዎ 1/10 ልገሳ"
      : "Your 1/10 Donation",

    calculateTitle: isAmharic
      ? "የ1/10 ልገሳዎን ያስሉ"
      : "Calculate Your 1/10 Donation",

    enterDonation: isAmharic
      ? "ልገሳዎን ያስገቡ"
      : "Enter Your Donation",

    donationAmount: isAmharic
      ? "የልገሳ መጠን"
      : "Donation Amount",

    enterAmount: isAmharic
      ? "መጠን ያስገቡ"
      : "Enter amount",

    firstSalaryTitle: isAmharic
      ? "የመጀመሪያ ደመወዝ ልገሳ"
      : "First Salary Donation",

    firstSalaryAmount: isAmharic
      ? "የመጀመሪያ ደመወዝ መጠን"
      : "First Salary Amount",

    churchPreference: isAmharic
      ? "የቤተ ክርስቲያን ምርጫ"
      : "Church Preference",

    churchPreferenceDescription: isAmharic
      ? "ልገሳዎ እንዲደርስ የሚፈልጉትን የተመዘገበ ቤተ ክርስቲያን ይምረጡ።"
      : "Choose the registered church you would like your donation to support.",

    selectChurch: isAmharic
      ? "ቤተ ክርስቲያን ይምረጡ"
      : "Select a church",

    verifiedChurch: isAmharic
      ? "የተረጋገጠ"
      : "Verified",

    where: isAmharic
      ? "ልገሳዎን ከየት እያደረጉ ነው?"
      : "Where are you donating from?",

    ethiopia: isAmharic
      ? "ኢትዮጵያ"
      : "Ethiopia",

    abroad: isAmharic
      ? "ከኢትዮጵያ ውጭ"
      : "Outside Ethiopia",

    paymentMethod: isAmharic
      ? "የክፍያ ዘዴ"
      : "Payment Method",

    paymentDescription: isAmharic
      ? "ለልገሳዎ የሚመችዎትን የክፍያ ዘዴ ይምረጡ።"
      : "Choose your preferred payment method.",

    telebirr: "Telebirr",

    cbe: isAmharic
      ? "የኢትዮጵያ ንግድ ባንክ"
      : "Commercial Bank of Ethiopia",

    abyssinia: isAmharic
      ? "አቢሲኒያ ባንክ"
      : "Bank of Abyssinia",

    internationalCard: isAmharic
      ? "ዓለም አቀፍ ካርድ"
      : "International Card",

    paypal: "PayPal",

    wise: "Wise",

    comingSoon: isAmharic
      ? "በቅርቡ"
      : "Coming soon",

    summary: isAmharic
      ? "የልገሳ ማጠቃለያ"
      : "Donation Summary",

    amount: isAmharic
      ? "መጠን"
      : "Amount",

    destination: isAmharic
      ? "የልገሳ መድረሻ"
      : "Donation Destination",

    anonymous: isAmharic
      ? "ይህንን ልገሳ ስሜ ሳይጠቀስ ማድረግ እፈልጋለሁ"
      : "Make this donation anonymous",

    dedication: isAmharic
      ? "ለአንድ ሰው ስም ልገሳውን ማቅረብ"
      : "Dedicate this donation",

    dedicationName: isAmharic
      ? "የሰውዬው ስም"
      : "Person's name",

    message: isAmharic
      ? "መልዕክት ወይም የጸሎት ጥያቄ"
      : "Message or prayer request",

    optional: isAmharic
      ? "አማራጭ"
      : "Optional",

    continue: isAmharic
      ? "ወደ ክፍያ ይቀጥሉ"
      : "Continue to Payment",

    securePayment: isAmharic
      ? "ክፍያዎ በደህንነት የተጠበቀ ይሆናል። ክፍያው ከተሳካ በኋላ ደረሰኝዎን ማውረድ ይችላሉ።"
      : "Your payment will be securely processed. After a successful donation, you will be able to download your receipt.",

    receipt: isAmharic
      ? "የልገሳ ደረሰኝ"
      : "Donation Receipt",

    receiptDescription: isAmharic
      ? "ክፍያዎ ከተረጋገጠ በኋላ PDF ደረሰኝዎን ማውረድ ይችላሉ።"
      : "Once your payment is verified, you will be able to download a PDF receipt.",
  };

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const calculatedAmount = useMemo(() => {
    const value = Number(income);

    if (!value || value <= 0) {
      return 0;
    }

    return value / 10;
  }, [income]);

  const currentAmount = useMemo(() => {
    if (option === "tenth") {
      return calculatedAmount;
    }

    if (option === "custom") {
      return Number(customAmount) || 0;
    }

    if (option === "firstSalary") {
      return Number(firstSalary) || 0;
    }

    if (option === "churchNeed") {
      return Number(churchAmount) || 0;
    }

    return 0;
  }, [
    option,
    calculatedAmount,
    customAmount,
    firstSalary,
    churchAmount,
  ]);

  /*
  |--------------------------------------------------------------------------
  | SELECTED CHURCH
  |--------------------------------------------------------------------------
  */

  const selectedChurchData = registeredChurches.find(
    (church) => church.id === selectedChurch
  );

  /*
  |--------------------------------------------------------------------------
  | PAYMENT OPTIONS
  |--------------------------------------------------------------------------
  */

  const paymentOptions =
    donorLocation === "ethiopia"
      ? [
          {
            id: "telebirr" as PaymentMethod,
            icon: "📱",
            title: t.telebirr,
            description: isAmharic
              ? "በTelebirr በፍጥነት ይክፈሉ።"
              : "Pay securely using Telebirr.",
          },
          {
            id: "cbe" as PaymentMethod,
            icon: "🏦",
            title: t.cbe,
            description: isAmharic
              ? "በንግድ ባንክ ይክፈሉ።"
              : "Pay using Commercial Bank of Ethiopia.",
          },
          {
            id: "abyssinia" as PaymentMethod,
            icon: "🏦",
            title: t.abyssinia,
            description: isAmharic
              ? "በአቢሲኒያ ባንክ ይክፈሉ።"
              : "Pay using Bank of Abyssinia.",
          },
        ]
      : [
          {
            id: "internationalCard" as PaymentMethod,
            icon: "💳",
            title: t.internationalCard,
            description: isAmharic
              ? "Visa ወይም Mastercard ይጠቀሙ።"
              : "Pay using Visa or Mastercard.",
          },
          {
            id: "paypal" as PaymentMethod,
            icon: "🌐",
            title: t.paypal,
            description: isAmharic
              ? "በPayPal ለመክፈል የተዘጋጀ።"
              : "International payment through PayPal.",
          },
          {
            id: "wise" as PaymentMethod,
            icon: "💸",
            title: t.wise,
            description: isAmharic
              ? "ከውጭ ሀገር ለመላክ አማራጭ።"
              : "International transfer option.",
          },
        ];

  /*
  |--------------------------------------------------------------------------
  | VALIDATION
  |--------------------------------------------------------------------------
  */

  const canContinue =
    currentAmount > 0 &&
    selectedChurch !== null &&
    paymentMethod !== null;

  /*
  |--------------------------------------------------------------------------
  | PAYMENT LABEL
  |--------------------------------------------------------------------------
  */

  const paymentLabel = useMemo(() => {
    switch (paymentMethod) {
      case "telebirr":
        return "Telebirr";

      case "cbe":
        return t.cbe;

      case "abyssinia":
        return t.abyssinia;

      case "internationalCard":
        return t.internationalCard;

      case "paypal":
        return "PayPal";

      case "wise":
        return "Wise";

      default:
        return "";
    }
  }, [paymentMethod, t.cbe, t.abyssinia, t.internationalCard]);

  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center gap-3">

            <Link
              href="/dashboard/donor"
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg border border-[#E9DAF4] bg-white
                text-[#5D5875] transition
                hover:border-[#9F08BD]
                hover:text-[#9F08BD]
              "
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

        {/* MAIN CARD */}
        <section
          className="
            overflow-hidden rounded-2xl
            border border-[#E9DAF4]
            bg-white shadow-sm
          "
        >

          {/* CARD HEADER */}
          <div className="border-b border-[#F0E8F5] p-5">
            <h2 className="text-lg font-semibold text-[#241C3D]">
              {t.makeDonation}
            </h2>

            <p className="mt-1 text-sm text-[#7B728C]">
              {t.chooseGiving}
            </p>
          </div>

          <div className="p-5">

            {/* DONATION TYPES */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <DonationOptionCard
                selected={option === "tenth"}
                title={t.tenth}
                description={t.tenthDescription}
                icon="♡"
                onClick={() => setOption("tenth")}
              />

              <DonationOptionCard
                selected={option === "custom"}
                title={t.custom}
                description={t.customDescription}
                icon="＋"
                onClick={() => setOption("custom")}
              />

              <DonationOptionCard
                selected={option === "firstSalary"}
                title={t.firstSalary}
                description={t.firstSalaryDescription}
                icon="★"
                onClick={() => setOption("firstSalary")}
              />

              <DonationOptionCard
                selected={option === "churchNeed"}
                title={t.churchNeed}
                description={t.churchNeedDescription}
                icon="⛪"
                onClick={() => setOption("churchNeed")}
              />

            </div>

            {/* 1/10 */}
            {option === "tenth" && (
              <div className="mt-5 rounded-xl bg-[#F8F0FB] p-4 sm:p-5">

                <h3 className="font-semibold text-[#241C3D]">
                  {t.calculateTitle}
                </h3>

                <p className="mt-1 text-xs text-[#7B728C]">
                  {isAmharic
                    ? "ገቢዎን ያስገቡ፣ AderaPay 10% ያሰላል።"
                    : "Enter your income and AderaPay will calculate 10% for you."}
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <InputWithCurrency
                    id="income"
                    label={t.monthlyIncome}
                    value={income}
                    onChange={setIncome}
                    placeholder={t.enterIncome}
                  />

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#241C3D]">
                      {t.yourTenth}
                    </label>

                    <div className="
                      flex h-[46px] items-center
                      rounded-lg border border-[#E9DAF4]
                      bg-white px-4 font-bold text-[#9F08BD]
                    ">
                      ETB {calculatedAmount.toLocaleString()}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* CUSTOM */}
            {option === "custom" && (
              <div className="mt-5 rounded-xl bg-[#F8F0FB] p-4 sm:p-5">

                <h3 className="font-semibold text-[#241C3D]">
                  {t.enterDonation}
                </h3>

                <p className="mt-1 text-xs text-[#7B728C]">
                  {isAmharic
                    ? "መስጠት የሚፈልጉትን መጠን ይምረጡ።"
                    : "Choose any amount you would like to donate."}
                </p>

                <div className="mt-4 max-w-md">
                  <InputWithCurrency
                    id="customAmount"
                    label={t.donationAmount}
                    value={customAmount}
                    onChange={setCustomAmount}
                    placeholder={t.enterAmount}
                    min="1"
                  />
                </div>

              </div>
            )}

            {/* FIRST SALARY */}
            {option === "firstSalary" && (
              <div className="mt-5 rounded-xl bg-[#FFF9EC] p-4 sm:p-5">

                <h3 className="font-semibold text-[#241C3D]">
                  {t.firstSalaryTitle}
                </h3>

                <p className="mt-1 text-xs text-[#7B728C]">
                  {isAmharic
                    ? "የመጀመሪያ ደመወዝዎን እንደ ልዩ ልገሳ ለመስጠት መጠኑን ያስገቡ።"
                    : "Enter the amount of your first salary."}
                </p>

                <div className="mt-4 max-w-md">
                  <InputWithCurrency
                    id="firstSalary"
                    label={t.firstSalaryAmount}
                    value={firstSalary}
                    onChange={setFirstSalary}
                    placeholder={
                      isAmharic
                        ? "የመጀመሪያ ደመወዝዎን ያስገቡ"
                        : "Enter your first salary"
                    }
                    min="1"
                  />
                </div>

              </div>
            )}

            {/* CHURCH NEED */}
            {option === "churchNeed" && (
              <div className="mt-5 rounded-xl bg-[#FFF9EC] p-4 sm:p-5">

                <h3 className="font-semibold text-[#241C3D]">
                  {t.churchNeed}
                </h3>

                <p className="mt-1 text-xs text-[#7B728C]">
                  {t.churchPreferenceDescription}
                </p>

                <div className="mt-4">

                  <label
                    htmlFor="churchSelect"
                    className="mb-1.5 block text-sm font-medium text-[#241C3D]"
                  >
                    {t.churchPreference}
                  </label>

                  <div className="relative">

                    <select
                      id="churchSelect"
                      value={selectedChurch ?? ""}
                      onChange={(e) =>
                        setSelectedChurch(
                          e.target.value
                            ? Number(e.target.value)
                            : null
                        )
                      }
                      className="
                        w-full appearance-none rounded-xl
                        border border-[#E9DAF4]
                        bg-white px-4 py-3 pr-10
                        text-sm text-[#241C3D]
                        outline-none transition
                        focus:border-[#9F08BD]
                        focus:ring-2 focus:ring-[#9F08BD]/15
                      "
                    >

                      <option value="">
                        {t.selectChurch}
                      </option>

                      {registeredChurches
                        .filter((church) => church.verified)
                        .map((church) => (
                          <option
                            key={church.id}
                            value={church.id}
                          >
                            {isAmharic
                              ? `${church.amharicName} — ${church.location}`
                              : `${church.name} — ${church.location}`}
                          </option>
                        ))}

                    </select>

                    <span className="
                      pointer-events-none
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-[#9C93B0]
                    ">
                      ▼
                    </span>

                  </div>

                </div>

                {/* SELECTED CHURCH */}
                {selectedChurchData && (
                  <div className="
                    mt-4 rounded-xl
                    border border-[#E9DAF4]
                    bg-white p-4
                  ">

                    <div className="flex items-center gap-3">

                      <div className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-xl bg-[#F6EEFB]
                        text-xl
                      ">
                        ⛪
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <p className="
                            text-sm font-semibold
                            text-[#241C3D]
                          ">
                            {isAmharic
                              ? selectedChurchData.amharicName
                              : selectedChurchData.name}
                          </p>

                          <span className="
                            rounded-full
                            bg-green-50
                            px-2 py-0.5
                            text-[10px]
                            font-semibold
                            text-green-600
                          ">
                            ✓ {t.verifiedChurch}
                          </span>

                        </div>

                        <p className="
                          mt-1 text-xs
                          text-[#8B829C]
                        ">
                          {selectedChurchData.location}
                        </p>

                      </div>

                    </div>

                    <div className="mt-4">

                      <InputWithCurrency
                        id="churchAmount"
                        label={t.donationAmount}
                        value={churchAmount}
                        onChange={setChurchAmount}
                        placeholder={t.enterAmount}
                        min="1"
                      />

                    </div>

                  </div>
                )}

              </div>
            )}

            {/* CHURCH PREFERENCE FOR OTHER DONATION TYPES */}
            {option !== "churchNeed" && (
              <div className="mt-6 border-t border-[#F0E8F5] pt-6">

                <h3 className="text-sm font-semibold text-[#241C3D]">
                  {t.churchPreference}
                </h3>

                <p className="mt-1 text-xs text-[#8B829C]">
                  {t.churchPreferenceDescription}
                </p>

                <div className="mt-3 relative">

                  <select
                    value={selectedChurch ?? ""}
                    onChange={(e) =>
                      setSelectedChurch(
                        e.target.value
                          ? Number(e.target.value)
                          : null
                      )
                    }
                    className="
                      w-full appearance-none
                      rounded-xl
                      border border-[#E9DAF4]
                      bg-white px-4 py-3 pr-10
                      text-sm text-[#241C3D]
                      outline-none transition
                      focus:border-[#9F08BD]
                      focus:ring-2 focus:ring-[#9F08BD]/15
                    "
                  >

                    <option value="">
                      {t.selectChurch}
                    </option>

                    {registeredChurches
                      .filter((church) => church.verified)
                      .map((church) => (
                        <option
                          key={church.id}
                          value={church.id}
                        >
                          {isAmharic
                            ? `${church.amharicName} — ${church.location}`
                            : `${church.name} — ${church.location}`}
                        </option>
                      ))}

                  </select>

                  <span className="
                    pointer-events-none
                    absolute right-4 top-1/2
                    -translate-y-1/2
                    text-[#9C93B0]
                  ">
                    ▼
                  </span>

                </div>

              </div>
            )}

            {/* DONOR LOCATION */}
            <div className="mt-6 border-t border-[#F0E8F5] pt-6">

              <h3 className="text-sm font-semibold text-[#241C3D]">
                {t.where}
              </h3>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">

                <LocationCard
                  selected={donorLocation === "ethiopia"}
                  icon="🇪🇹"
                  title={t.ethiopia}
                  description={
                    isAmharic
                      ? "በኢትዮጵያ ውስጥ ነኝ"
                      : "I am donating from Ethiopia"
                  }
                  onClick={() => {
                    setDonorLocation("ethiopia");
                    setPaymentMethod("telebirr");
                  }}
                />

                <LocationCard
                  selected={donorLocation === "abroad"}
                  icon="🌍"
                  title={t.abroad}
                  description={
                    isAmharic
                      ? "ከኢትዮጵያ ውጭ ነኝ"
                      : "I am donating from abroad"
                  }
                  onClick={() => {
                    setDonorLocation("abroad");
                    setPaymentMethod("internationalCard");
                  }}
                />

              </div>
            </div>

            {/* PAYMENT METHODS */}
            <div className="mt-6 border-t border-[#F0E8F5] pt-6">

              <h3 className="text-sm font-semibold text-[#241C3D]">
                {t.paymentMethod}
              </h3>

              <p className="mt-1 text-xs text-[#8B829C]">
                {t.paymentDescription}
              </p>

              <div className="
                mt-4 grid gap-3
                sm:grid-cols-2
                lg:grid-cols-3
              ">

                {paymentOptions.map((payment) => {

                  const isSelected =
                    paymentMethod === payment.id;

                  return (
                    <button
                      key={payment.id}
                      type="button"
                      onClick={() =>
                        setPaymentMethod(payment.id)
                      }
                      className={`
                        rounded-xl border-2 p-4
                        text-left transition
                        ${
                          isSelected
                            ? "border-[#9F08BD] bg-[#F6EEFB]"
                            : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
                        }
                      `}
                    >

                      <div className="flex items-start gap-3">

                        <div
                          className={`
                            flex h-10 w-10
                            shrink-0 items-center
                            justify-center
                            rounded-lg text-lg
                            ${
                              isSelected
                                ? "bg-[#9F08BD] text-white"
                                : "bg-[#F6EEFB]"
                            }
                          `}
                        >
                          {payment.icon}
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center gap-2">

                            <p className="
                              text-sm font-semibold
                              text-[#241C3D]
                            ">
                              {payment.title}
                            </p>

                            {donorLocation === "abroad" && (
                              <span className="
                                rounded-full
                                bg-[#FFF4D6]
                                px-1.5 py-0.5
                                text-[9px]
                                font-semibold
                                text-[#9A7100]
                              ">
                                {t.comingSoon}
                              </span>
                            )}

                          </div>

                          <p className="
                            mt-1 text-xs
                            leading-relaxed
                            text-[#7B728C]
                          ">
                            {payment.description}
                          </p>

                        </div>

                        {isSelected && (
                          <span className="text-[#9F08BD]">
                            ✓
                          </span>
                        )}

                      </div>

                    </button>
                  );
                })}

              </div>

              <div className="
                mt-4 rounded-xl
                border border-[#E9DAF4]
                bg-[#FBF8FD]
                p-3
              ">

                <p className="
                  text-xs leading-relaxed
                  text-[#7B728C]
                ">
                  {donorLocation === "ethiopia"
                    ? isAmharic
                      ? "የኢትዮጵያ ክፍያ አማራጮች እንደ Telebirr፣ CBE እና አቢሲኒያ ባንክ ከተፈቀደ በኋላ ከAPI ጋር ይገናኛሉ።"
                      : "Ethiopian payment options such as Telebirr, CBE and Bank of Abyssinia will be connected to their APIs once integration and authorization are completed."
                    : isAmharic
                      ? "የውጭ ክፍያ አማራጮች ለዓለም አቀፍ ለጋሾች የሚሰራ የክፍያ አቅራቢ በኋላ ይገናኛሉ።"
                      : "International payment options will be connected to a provider that supports donors from multiple countries."}
                </p>

              </div>

            </div>

            {/* ADDITIONAL OPTIONS */}
            <div className="mt-6 border-t border-[#F0E8F5] pt-6">

              <h3 className="text-sm font-semibold text-[#241C3D]">
                {isAmharic
                  ? "ተጨማሪ አማራጮች"
                  : "Additional Options"}
              </h3>

              {/* ANONYMOUS */}
              <label className="
                mt-4 flex cursor-pointer
                items-start gap-3
              ">

                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) =>
                    setAnonymous(e.target.checked)
                  }
                  className="
                    mt-1 h-4 w-4
                    accent-[#9F08BD]
                  "
                />

                <span>

                  <span className="
                    block text-sm
                    font-medium text-[#241C3D]
                  ">
                    {t.anonymous}
                  </span>

                  <span className="
                    mt-1 block text-xs
                    text-[#8B829C]
                  ">
                    {isAmharic
                      ? "ለሌሎች ተጠቃሚዎች ስምዎ አይታይም።"
                      : "Your name will not be displayed publicly with this donation."}
                  </span>

                </span>

              </label>

              {/* DEDICATION */}
              <label className="
                mt-4 flex cursor-pointer
                items-start gap-3
              ">

                <input
                  type="checkbox"
                  checked={dedication}
                  onChange={(e) =>
                    setDedication(e.target.checked)
                  }
                  className="
                    mt-1 h-4 w-4
                    accent-[#9F08BD]
                  "
                />

                <span className="
                  text-sm font-medium
                  text-[#241C3D]
                ">
                  {t.dedication}
                </span>

              </label>

              {dedication && (
                <div className="mt-3 max-w-md">

                  <input
                    value={dedicationName}
                    onChange={(e) =>
                      setDedicationName(e.target.value)
                    }
                    placeholder={t.dedicationName}
                    className={inputClass}
                  />

                </div>
              )}

              {/* MESSAGE */}
              <div className="mt-4">

                <div className="
                  flex items-center
                  justify-between
                ">

                  <label
                    htmlFor="message"
                    className="
                      text-sm font-medium
                      text-[#241C3D]
                    "
                  >
                    {t.message}
                  </label>

                  <span className="
                    text-xs text-[#9C93B0]
                  ">
                    {t.optional}
                  </span>

                </div>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  rows={3}
                  maxLength={500}
                  placeholder={
                    isAmharic
                      ? "መልዕክትዎን እዚህ ያስገቡ..."
                      : "Write a message or prayer request..."
                  }
                  className={`${inputClass} mt-2 resize-none`}
                />

                <p className="
                  mt-1 text-right
                  text-[11px] text-[#9C93B0]
                ">
                  {message.length}/500
                </p>

              </div>

            </div>

            {/* SUMMARY */}
            <div className="
              mt-6 rounded-2xl
              border border-[#E9DAF4]
              bg-[#FBF8FD] p-5
            ">

              <h3 className="
                font-semibold text-[#241C3D]
              ">
                {t.summary}
              </h3>

              <div className="
                mt-4
                divide-y divide-[#E9E0F0]
              ">

                <SummaryLine
                  label={
                    isAmharic
                      ? "የልገሳ ዓይነት"
                      : "Donation Type"
                  }
                  value={
                    option === "tenth"
                      ? t.tenth
                      : option === "custom"
                        ? t.custom
                        : option === "firstSalary"
                          ? t.firstSalary
                          : t.churchNeed
                  }
                />

                <SummaryLine
                  label={t.destination}
                  value={
                    selectedChurchData
                      ? isAmharic
                        ? selectedChurchData.amharicName
                        : selectedChurchData.name
                      : isAmharic
                        ? "ቤተ ክርስቲያን አልተመረጠም"
                        : "No church selected"
                  }
                />

                <SummaryLine
                  label={t.paymentMethod}
                  value={paymentLabel}
                />

                <SummaryLine
                  label={
                    isAmharic
                      ? "ከየት ነው?"
                      : "Donor Location"
                  }
                  value={
                    donorLocation === "ethiopia"
                      ? t.ethiopia
                      : t.abroad
                  }
                />

                <div className="
                  flex items-center
                  justify-between gap-4 py-4
                ">

                  <span className="
                    text-sm text-[#7B728C]
                  ">
                    {t.amount}
                  </span>

                  <span className="
                    text-xl font-bold
                    text-[#9F08BD]
                  ">
                    ETB {currentAmount.toLocaleString()}
                  </span>

                </div>

              </div>
            </div>

            {/* CONTINUE */}
            <div className="
              mt-5 flex flex-col
              gap-3 sm:flex-row
              sm:items-center
              sm:justify-between
            ">

              <p className="
                text-xs leading-relaxed
                text-[#8B829C]
              ">
                🔒 {t.securePayment}
              </p>

              <button
                type="button"
                disabled={!canContinue}
                className="
                  rounded-lg
                  bg-gradient-to-r
                  from-[#9F08BD]
                  to-[#B24CE8]
                  px-7 py-3
                  text-sm font-bold
                  text-white
                  shadow-md
                  shadow-[#9F08BD]/20
                  transition
                  hover:-translate-y-0.5
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  disabled:hover:translate-y-0
                "
              >
                {t.continue} →
              </button>

            </div>

          </div>
        </section>

        {/* RECEIPT */}
        <div className="
          mt-5 rounded-xl
          border border-[#E9DAF4]
          bg-white p-4
        ">

          <div className="
            flex items-start gap-3
          ">

            <div className="
              flex h-10 w-10
              shrink-0 items-center
              justify-center
              rounded-lg bg-[#F6EEFB]
            ">
              🧾
            </div>

            <div>

              <h3 className="
                text-sm font-semibold
                text-[#241C3D]
              ">
                {t.receipt}
              </h3>

              <p className="
                mt-1 text-xs
                leading-relaxed
                text-[#7B728C]
              ">
                {t.receiptDescription}
              </p>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| DONATION OPTION CARD
|--------------------------------------------------------------------------
*/

type DonationOptionCardProps = {
  selected: boolean;
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
};

function DonationOptionCard({
  selected,
  title,
  description,
  icon,
  onClick,
}: DonationOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-xl border-2
        p-4 text-left
        transition-all
        ${
          selected
            ? "border-[#9F08BD] bg-[#F6EEFB] shadow-sm"
            : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
        }
      `}
    >

      <div className="flex items-start gap-3">

        <div
          className={`
            flex h-10 w-10
            shrink-0 items-center
            justify-center
            rounded-lg text-lg
            ${
              selected
                ? "bg-[#9F08BD] text-white"
                : "bg-[#F6EEFB] text-[#9F08BD]"
            }
          `}
        >
          {icon}
        </div>

        <div className="min-w-0">

          <h3 className="
            text-sm font-semibold
            text-[#241C3D]
          ">
            {title}
          </h3>

          <p className="
            mt-1 text-xs
            leading-relaxed
            text-[#7B728C]
          ">
            {description}
          </p>

        </div>

      </div>

    </button>
  );
}

/*
|--------------------------------------------------------------------------
| LOCATION CARD
|--------------------------------------------------------------------------
*/

type LocationCardProps = {
  selected: boolean;
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
};

function LocationCard({
  selected,
  icon,
  title,
  description,
  onClick,
}: LocationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-xl border-2
        p-4 text-left
        transition
        ${
          selected
            ? "border-[#9F08BD] bg-[#F6EEFB]"
            : "border-[#E9DAF4] bg-white hover:border-[#CFA6DD]"
        }
      `}
    >

      <div className="
        flex items-center gap-3
      ">

        <span className="text-2xl">
          {icon}
        </span>

        <div>

          <p className="
            text-sm font-semibold
            text-[#241C3D]
          ">
            {title}
          </p>

          <p className="
            mt-1 text-xs
            text-[#7B728C]
          ">
            {description}
          </p>

        </div>

        {selected && (
          <span className="
            ml-auto text-[#9F08BD]
          ">
            ✓
          </span>
        )}

      </div>

    </button>
  );
}

/*
|--------------------------------------------------------------------------
| CURRENCY INPUT
|--------------------------------------------------------------------------
*/

type InputWithCurrencyProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  min?: string;
};

function InputWithCurrency({
  id,
  label,
  value,
  onChange,
  placeholder,
  min = "0",
}: InputWithCurrencyProps) {
  return (
    <div>

      <label
        htmlFor={id}
        className="
          mb-1.5 block
          text-sm font-medium
          text-[#241C3D]
        "
      >
        {label}
      </label>

      <div className="relative">

        <span className="
          absolute left-3 top-1/2
          -translate-y-1/2
          text-sm text-[#9C93B0]
        ">
          ETB
        </span>

        <input
          id={id}
          type="number"
          min={min}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className={`${inputClass} pl-12`}
        />

      </div>

    </div>
  );
}

/*
|--------------------------------------------------------------------------
| SUMMARY LINE
|--------------------------------------------------------------------------
*/

type SummaryLineProps = {
  label: string;
  value: string;
};

function SummaryLine({
  label,
  value,
}: SummaryLineProps) {
  return (
    <div className="
      flex items-center
      justify-between gap-4 py-3
    ">

      <span className="
        text-sm text-[#7B728C]
      ">
        {label}
      </span>

      <span className="
        max-w-[60%]
        text-right text-sm
        font-medium text-[#241C3D]
      ">
        {value}
      </span>

    </div>
  );
}

/*
|--------------------------------------------------------------------------
| INPUT STYLE
|--------------------------------------------------------------------------
*/

const inputClass = `
  w-full
  rounded-lg
  border border-[#E9DAF4]
  bg-[#FBF8FD]
  px-4 py-2.5
  text-sm text-[#241C3D]
  outline-none
  transition
  placeholder:text-[#9C93B0]
  focus:border-[#9F08BD]
  focus:ring-2
  focus:ring-[#9F08BD]/15
`;