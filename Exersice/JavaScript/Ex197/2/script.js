// Недостатки:
// 1. Функция делает две вещи: суммирует arr1 и arr2, затем делит результаты друг на друга.

// Исправления:
// 1. Разобьем функцию на две: одна для суммирования, вторая для деления.

function calculateRatio(arr1, arr2) {
    const sum1 = sum(arr1);
    const sum2 = sum(arr2);

    if (sum2 === 0) {
        console.error("Cannot divide by zero.");
        return NaN; // или можно выбросить ошибку: throw new Error("Cannot divide by zero.");
    }

    return sum1 / sum2;
}


const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
console.log(calculateRatio(numbers1, numbers2));