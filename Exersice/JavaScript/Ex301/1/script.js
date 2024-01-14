// Определение полудня вчерашнего дня
let now = new Date();
let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);

// Разница в часах между вчерашним полднем и текущим моментом времени
let hoursDifference = (now - yesterdayNoon) / (1000 * 60 * 60);

console.log(`Количество часов между вчерашним полднем и текущим моментом времени: ${hoursDifference} часов`);

