// findIndex: Дан массив чисел. Найдите индекс элемента с определенным значением.

let numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex(function(num) {
    return num === 3;
});

console.log(index);

