// Дан массив с числами. Оставьте в нем только отрицательные числа.

let numbers = [-1, 2, -3, 4, -5];
let negativeNumbers = numbers.filter(function(num) {
    return num < 0;
});

console.log(negativeNumbers);

