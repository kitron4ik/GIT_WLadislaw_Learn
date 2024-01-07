// Недостатки:
// 1. Имя функции не соответствует выполняемому действию.
// 2. Функция делает две вещи: суммирует и делит на длину массива.
// 3. Нет проверки на случай деления на ноль.

// Исправления:
// 1. Изменим имя функции на более подходящее.
// 2. Разобьем функцию на две: одна для суммирования, вторая для деления.
// 3. Добавим проверку на длину массива.

function calculateAverage(arr) {
    if (arr.length === 0) {
        console.error("Array is empty.");
        return NaN; // или можно выбросить ошибку: throw new Error("Array is empty.");
    }

    return sum(arr) / arr.length;
}

function sum(arr) {
    return arr.reduce((acc, elem) => acc + elem, 0);
}


const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers));