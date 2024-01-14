// Получение дня недели для 31 декабря следующего года
let now = new Date();
let nextYearLastDay = new Date(now.getFullYear() + 1, 11, 31);
let dayOfWeekNextYear = nextYearLastDay.getDay();
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(`День недели для 31 декабря следующего года: ${daysOfWeek[dayOfWeekNextYear]}`);

// Определение дня недели через год для такой же даты, как сегодня
let nextYearSameDay = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
let dayOfWeekNextYearSameDay = nextYearSameDay.getDay();
console.log(`День недели через год для такой же даты: ${daysOfWeek[dayOfWeekNextYearSameDay]}`);

// Определение дня недели год назад для такой же даты, как сегодня
let lastYearSameDay = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let dayOfWeekLastYearSameDay = lastYearSameDay.getDay();
console.log(`День недели год назад для такой же даты: ${daysOfWeek[dayOfWeekLastYearSameDay]}`);

