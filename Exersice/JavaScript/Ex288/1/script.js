// Создаем объект с датой за определенный момент времени (5 ноября 2025 года, 12:59:59)
let specificDate = new Date(2025, 10, 5, 12, 59, 59);

// Выводим день недели для указанной даты
let dayOfWeek = specificDate.getDay();
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(`День недели для указанной даты: ${daysOfWeek[dayOfWeek]}`);

// Создаем объект с датой для вашего дня рождения
let birthdayDate = new Date(2005, 7 - 1, 11); 
let birthdayDayOfWeek = birthdayDate.getDay();

// Выводим день недели для дня рождения
console.log(`День недели для вашего дня рождения: ${daysOfWeek[birthdayDayOfWeek]}`);

