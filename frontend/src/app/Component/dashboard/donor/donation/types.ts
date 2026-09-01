
export type DonationOption =
  | "tenth"
  | "custom"
  | "firstSalary"
  | "churchNeed";

export type DonorLocation = "ethiopia" | "abroad";

export type PaymentMethod =
  | "telebirr"
  | "cbe"
  | "abyssinia"
  | "internationalCard"
  | "paypal"
  | "wise";

export type Church = {
  id: number;
  name: string;
  amharicName: string;
  location: string;
  verified: boolean;
};

export const registeredChurches: Church[] = [
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

