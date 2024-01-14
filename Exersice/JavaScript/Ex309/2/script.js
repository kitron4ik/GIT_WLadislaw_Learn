let currentDate2 = new Date(); // объект с текущим моментом времени
let halfMonthDate = new Date(currentDate2.getFullYear(), currentDate2.getMonth(), 15); // объект с 15 числом текущего месяца

console.log(currentDate2 > halfMonthDate ? 'Прошла уже половина месяца' : 'Половина месяца еще не наступила');

