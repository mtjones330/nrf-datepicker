import { calendarConfig } from "./calendar.config";

const millisPerDay = 1000 * 60 * 60 * 25;

export const generateCalendar = (year: number, month: number): number[][] => {
  const config = calendarConfig[year][month];

  const firstDay = +new Date(config[0]);
  const lastDay = +new Date(config[1]);
  let nextDay = firstDay;
  const weeks = [];

  while (nextDay < lastDay) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      week[i] = nextDay;
      nextDay = +new Date((nextDay += millisPerDay)).setHours(0, 0, 0, 0);
    }

    weeks.push(week);
  }

  return weeks;
};
