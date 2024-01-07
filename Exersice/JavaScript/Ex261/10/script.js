// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let strings = ['hello', 'world', 'javascript'];
let reversedStrings = strings.map(str => str.split('').reverse().join(''));
console.log(reversedStrings);

