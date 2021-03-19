import {
    addDays,
    startOfWeek,
    endOfWeek,
    addWeeks,
    startOfMonth,
    endOfMonth,
    addMonths,
} from 'date-fns';

const getDefaultRanges = (date) => [
    {
        label: 'Today 21',
        startDate: date,
        endDate: date,
        key: "1"
    },
    {
        label: 'Yesterday',
        startDate: addDays(date, -1),
        endDate: addDays(date, -1),
        key: "2"
    },
    {
        label: 'This Week',
        startDate: startOfWeek(date),
        endDate: endOfWeek(date),
        key: "3"
    },
    {
        label: 'Last Week',
        startDate: startOfWeek(addWeeks(date, -1)),
        endDate: endOfWeek(addWeeks(date, -1)),
        key: "4"
    },
    {
        label: 'Last 7 Days',
        startDate: addWeeks(date, -1),
        endDate: date,
        key: "5"
    },
    {
        label: 'This Month',
        startDate: startOfMonth(date),
        endDate: endOfMonth(date),
        key: "6"
    },
    {
        label: 'Last Month',
        startDate: startOfMonth(addMonths(date, -1)),
        endDate: endOfMonth(addMonths(date, -1)),
        key: "7"
    },
];

export const defaultRanges = getDefaultRanges(new Date());