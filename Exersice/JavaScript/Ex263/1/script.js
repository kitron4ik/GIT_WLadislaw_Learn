// Дан массив с числами. Оставьте в нем только положительные числа.

let numbers = [-1, 2, -3, 4, -5];
let positiveNumbers = numbers.filter(function(num) {
    return num > 0;
});

console.log(positiveNumbers);

