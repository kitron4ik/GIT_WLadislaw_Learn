// Определение конца текущего дня
let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

// Разница в часах между текущим моментом времени и концом текущего дня
let hoursRemaining = (endOfDay - now) / (1000 * 60 * 60);

console.log(`Осталось ${hoursRemaining} часов до конца текущего дня`);

