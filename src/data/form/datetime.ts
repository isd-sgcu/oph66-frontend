export const MONTHS: string[] = [
  "มกราคม / January",
  "กุมภาพันธ์ / February",
  "มีนาคม / March",
  "เมษายน / April",
  "พฤษภาคม / May",
  "มิถุนายน / June",
  "กรกฎาคม / July",
  "สิงหาคม / August",
  "กันยายน / September",
  "ตุลาคม / October",
  "พฤศจิกายน / November",
  "ธันวาคม / December",
];

export const YEARS: string[] = Array.from(
  Array(100),
  (_, i) => (i + 2467).toString() + " / " + (i + 1924).toString()
);
export const DAYS: string[] = Array.from(Array(31), (_, i) =>
  (i + 1).toString()
);
