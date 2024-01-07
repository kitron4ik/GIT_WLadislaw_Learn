// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log(allPositive);

