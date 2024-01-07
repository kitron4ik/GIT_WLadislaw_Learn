// findLastIndex: Дан массив чисел. Найдите индекс последнего элемента с определенным значением.

let numbers = [1, 2, 3, 4, 2, 5];

let lastIndex = numbers.findLastIndex(function(num) {
    return num === 2;
});

console.log(lastIndex);

