// Функция для нахождения суммы элементов массива с использованием рекурсии
function getSum(arr) {
    let sum = arr.shift();

    if (arr.length !== 0) {
        sum += getSum(arr);
    }

    return sum;
}

console.log(getSum([1, 2, 3]));

// Задача
let arr = [1, 2, 3, 4, 5];

function getSumOfSquares(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const square = arr.shift() ** 2;

    return square + getSumOfSquares(arr);
}

console.log(getSumOfSquares(arr));

