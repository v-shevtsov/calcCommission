import { isSameWeek, parseISO } from 'date-fns';

export const isTheSameWeek = (start, end) => isSameWeek(
  parseISO(start),
  parseISO(end),
  { weekStartsOn: 1 },
);
