import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// If you want to split date into Year, month, day, hours.You need to pass date like this: 20231018183000
// Function will return 2023-10-18 18:30. You can also pass, second parameter if you wanna hours only
export function splitDate(date: number, hours = false) {
  const stringedDate = date.toString();
  return !hours
    ? stringedDate.slice(0, 4) +
        "-" +
        stringedDate.slice(4, 6) +
        "-" +
        stringedDate.slice(6, 8) +
        " " +
        stringedDate.slice(8, 10) +
        ":" +
        stringedDate.slice(10, 12)
    : stringedDate.slice(8, 10) + ":" + stringedDate.slice(10, 12);
}
