// Определение разности в миллисекундах между текущим моментом и заданным моментом
let date1 = new Date();
let date2 = new Date(2015, 4, 25, 12, 59, 59);

console.log(`Разность в миллисекундах: ${date1 - date2}`);

// Определение разности в днях между 1 января и 10 сентября текущего года
let currentYear = new Date().getFullYear();
let january1 = new Date(currentYear, 0, 1);
let september10 = new Date(currentYear, 8, 10);

let daysDifference1 = Math.floor((september10 - january1) / (1000 * 60 * 60 * 24));
console.log(`Разность в днях между 1 января и 10 сентября текущего года: ${daysDifference1} дней`);

// Определение разности в днях между 20 числом текущего месяца и 10 числом следующего
let currentMonth = new Date().getMonth();
let day20CurrentMonth = new Date(currentYear, currentMonth, 20);
let day10NextMonth = new Date(currentYear, currentMonth + 1, 10);

let daysDifference2 = Math.floor((day10NextMonth - day20CurrentMonth) / (1000 * 60 * 60 * 24));
console.log(`Разность в днях между 20 числом текущего месяца и 10 числом следующего: ${daysDifference2} дней`);
