// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let numbers = [2, 5, 12, -3, 8, 0, 15];
let filteredNumbers = numbers.filter(function(num) {
    return num > 0 && num < 10;
});

console.log(filteredNumbers);

