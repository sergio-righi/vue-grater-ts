/**
 * It returns a locale formatted date (year - 4 digits, month - 2 digits and day - 2 digits)
 * @param {date} date - date to be formatted
 * @param {string} locale - locale format to be applied
 */
const toDateString = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

/**
 * It returns a locale formatted date (hour - 2 digits and minute - 2 digits)
 * @param {date} date - date to be formatted
 * @param {string} locale - locale format to be applied
 */
const toTimeString = (date: Date, locale: string) =>
  date.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

/**
 * It returns a locale formatted month (default short)
 * @param {number} month - month to be formatted
 * @param {string} locale - locale format to be applied
 * @param {string} format - default short
 */
const toMonthString = (month: number, locale: string, format: any = "short") => {
  const date = new Date();
  date.setDate(1);
  date.setMonth(month);
  return date.toLocaleString(locale, {
    month: format,
  });
};

export default { toDateString, toMonthString, toTimeString };
