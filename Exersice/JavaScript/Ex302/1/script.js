// Определение начала текущего дня
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Разница в часах между началом текущего дня и текущим моментом времени
let hoursDifference = (now - startOfDay) / (1000 * 60 * 60);

console.log(`Количество часов между началом текущего дня и текущим моментом времени: ${hoursDifference} часов`);

