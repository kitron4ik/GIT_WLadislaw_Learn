// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.every(function(num, index) {
    return num * index < 30;
});

console.log(result);

