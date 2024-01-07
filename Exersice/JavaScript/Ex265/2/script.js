// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.some(function(num, index) {
    return num * index > 30;
});

console.log(result);

