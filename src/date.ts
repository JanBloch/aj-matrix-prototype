export function getCurrentDate(): Date {
  return new Date();
}
export function getWeekFromDate(date: Date): CalendarWeek {
  let week: CalendarWeek = {
    year: date.getFullYear(),
    week: 0,
  };
  return week;
}

export interface CalendarWeek {
  year: number;
  week: number;
}
