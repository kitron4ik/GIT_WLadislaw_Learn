let currentDate = new Date(); // объект с текущим моментом времени
let noonDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0, 0); // объект с полднем текущего дня

console.log(currentDate > noonDate ? 'Полдень уже прошел' : 'Полдень еще не наступил');

