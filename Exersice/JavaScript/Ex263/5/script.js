// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter(function(num, index) {
    return num * index < 30;
});

console.log(filteredNumbers);

