// Получение дня недели для первого числа предыдущего месяца
let now = new Date();

// Учтем возможные проблемы с январем (месяц с номером 0)
let month = now.getMonth() === 0 ? 11 : now.getMonth() - 1;

let date = new Date(now.getFullYear(), month, 1);
console.log(date.getDay());

// Определение дня недели для такого же дня месяца месяц назад
let lastMonthSameDay = new Date(now.getFullYear(), now.getMonth(), 1);
lastMonthSameDay.setMonth(lastMonthSameDay.getMonth() - 1);
console.log(`День недели месяц назад для такого же дня месяца: ${lastMonthSameDay.getDay()}`);

