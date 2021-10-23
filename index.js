let data = [
  [
    { day: 1, holiday: true, saturday: false, sunday: false },
    { day: 2, holiday: true, saturday: true, sunday: false },
    { day: 3, holiday: true, saturday: false, sunday: true },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: true, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: true },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: true, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: true },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: true, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: true },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: true, sunday: false },
    { day: 31, holiday: false, saturday: false, sunday: true },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: true, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: true, saturday: false, sunday: false },
    { day: 12, holiday: true, saturday: false, sunday: false },
    { day: 13, holiday: true, saturday: true, sunday: false },
    { day: 14, holiday: true, saturday: false, sunday: true },
    { day: 15, holiday: true, saturday: false, sunday: false },
    { day: 16, holiday: true, saturday: false, sunday: false },
    { day: 17, holiday: true, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: true },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: true, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: true },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: true, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: true },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: true, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: true },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: true, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: true },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: true, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: true },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
    { day: 31, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: true, saturday: true, sunday: false },
    { day: 4, holiday: true, saturday: false, sunday: true },
    { day: 5, holiday: true, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: true, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: true },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: true, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: true },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: true, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: true, saturday: true, sunday: false },
    { day: 2, holiday: true, saturday: false, sunday: true },
    { day: 3, holiday: true, saturday: false, sunday: false },
    { day: 4, holiday: true, saturday: false, sunday: false },
    { day: 5, holiday: true, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: true },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: true, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: true },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: true, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: true },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: true, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: true },
    { day: 31, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: true, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: true },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: true, saturday: true, sunday: false },
    { day: 13, holiday: true, saturday: false, sunday: true },
    { day: 14, holiday: true, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: true, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: true },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: true, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: true },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: true, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: true },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: true, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: true },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: true, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: true },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: true, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: true },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
    { day: 31, holiday: false, saturday: true, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: true },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: true, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: true },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: true, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: true },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: true, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: true },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: true, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: true },
    { day: 30, holiday: false, saturday: false, sunday: false },
    { day: 31, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: true, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: true },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: true, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: true },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: true, saturday: false, sunday: true },
    { day: 20, holiday: true, saturday: false, sunday: false },
    { day: 21, holiday: true, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: true, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: true, saturday: false, sunday: false },
    { day: 2, holiday: true, saturday: true, sunday: false },
    { day: 3, holiday: true, saturday: false, sunday: true },
    { day: 4, holiday: true, saturday: false, sunday: false },
    { day: 5, holiday: true, saturday: false, sunday: false },
    { day: 6, holiday: true, saturday: false, sunday: false },
    { day: 7, holiday: true, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: true },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: true, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: true },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: true, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: true },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: true, sunday: false },
    { day: 31, holiday: false, saturday: false, sunday: true },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: false, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: false },
    { day: 6, holiday: false, saturday: true, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: true },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: false, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: false },
    { day: 13, holiday: false, saturday: true, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: true },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: false, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: false },
    { day: 20, holiday: false, saturday: true, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: true },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: false, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: false },
    { day: 27, holiday: false, saturday: true, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: true },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
  ],
  [
    { day: 1, holiday: false, saturday: false, sunday: false },
    { day: 2, holiday: false, saturday: false, sunday: false },
    { day: 3, holiday: false, saturday: false, sunday: false },
    { day: 4, holiday: false, saturday: true, sunday: false },
    { day: 5, holiday: false, saturday: false, sunday: true },
    { day: 6, holiday: false, saturday: false, sunday: false },
    { day: 7, holiday: false, saturday: false, sunday: false },
    { day: 8, holiday: false, saturday: false, sunday: false },
    { day: 9, holiday: false, saturday: false, sunday: false },
    { day: 10, holiday: false, saturday: false, sunday: false },
    { day: 11, holiday: false, saturday: true, sunday: false },
    { day: 12, holiday: false, saturday: false, sunday: true },
    { day: 13, holiday: false, saturday: false, sunday: false },
    { day: 14, holiday: false, saturday: false, sunday: false },
    { day: 15, holiday: false, saturday: false, sunday: false },
    { day: 16, holiday: false, saturday: false, sunday: false },
    { day: 17, holiday: false, saturday: false, sunday: false },
    { day: 18, holiday: false, saturday: true, sunday: false },
    { day: 19, holiday: false, saturday: false, sunday: true },
    { day: 20, holiday: false, saturday: false, sunday: false },
    { day: 21, holiday: false, saturday: false, sunday: false },
    { day: 22, holiday: false, saturday: false, sunday: false },
    { day: 23, holiday: false, saturday: false, sunday: false },
    { day: 24, holiday: false, saturday: false, sunday: false },
    { day: 25, holiday: false, saturday: true, sunday: false },
    { day: 26, holiday: false, saturday: false, sunday: true },
    { day: 27, holiday: false, saturday: false, sunday: false },
    { day: 28, holiday: false, saturday: false, sunday: false },
    { day: 29, holiday: false, saturday: false, sunday: false },
    { day: 30, holiday: false, saturday: false, sunday: false },
    { day: 31, holiday: false, saturday: false, sunday: false },
  ],
];
let today = new URLSearchParams(window.location.search).get("today");
today = today.replace("-", "");

let year = today.substring(0, 4);
let month = today.substring(4, 6);
let day = today.substring(6, 8);

let dayData = data[month - 1][day - 1];
document.write(
  !(dayData.holiday || dayData.saturday || dayData.sunday) ? 1 : ""
);
