// Получение дня недели для 31 декабря текущего года
let now = new Date(); // Получаем текущий момент времени
let lastDayOfYear = new Date(now.getFullYear(), 11, 31); // Создаем объект с датой 31 декабря текущего года

let dayOfWeek = lastDayOfYear.getDay(); // Определяем день недели
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(`День недели для 31 декабря текущего года: ${daysOfWeek[dayOfWeek]}`);

