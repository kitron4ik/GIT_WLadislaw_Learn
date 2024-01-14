// Заданные даты
let startDate = new Date(2000, 8, 1); // 1 сентября 2000 года
let endDate = new Date(2010, 1, 15);  // 15 февраля 2010 года

// Разница между датами в миллисекундах
let dateDiffMilliseconds = endDate - startDate;
console.log(`Разница в миллисекундах: ${dateDiffMilliseconds}`);

// Разница в днях
let dateDiffDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(`Разница в днях: ${dateDiffDays}`);

// Разница в месяцах
let dateDiffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
console.log(`Разница в месяцах: ${dateDiffMonths}`);

// Разница в годах
let dateDiffYears = endDate.getFullYear() - startDate.getFullYear();
console.log(`Разница в годах: ${dateDiffYears}`);

