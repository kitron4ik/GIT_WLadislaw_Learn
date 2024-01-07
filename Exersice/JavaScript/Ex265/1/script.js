// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let numbers = [-2, 0, 5, -8, 10];
let hasPositive = numbers.some(function(num) {
    return num > 0;
});

console.log(hasPositive);

