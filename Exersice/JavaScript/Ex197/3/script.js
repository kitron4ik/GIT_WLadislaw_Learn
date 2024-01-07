// Недостатки:
// 1. Ошибка в операции умножения вместо сложения.
// 2. Имя функции не соответствует выполняемому действию.

// Исправления:
// 1. Заменим операцию умножения на сложение.
// 2. Изменим имя функции.

function calculateSum(arr) {
    return arr.reduce((acc, elem) => acc + elem, 0);
}


const numbers3 = [1, 2, 3, 4];
console.log(calculateSum(numbers3));