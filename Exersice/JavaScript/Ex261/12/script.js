// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let numbers = [2, 4, 6, 8, 10];
let multipliedByIndex = numbers.map((num, index) => num * index);
console.log(multipliedByIndex);

