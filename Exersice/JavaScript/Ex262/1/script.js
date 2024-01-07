// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

numbers.forEach(function(num) {
    sumOfSquares += num * num;
});

console.log(sumOfSquares);

