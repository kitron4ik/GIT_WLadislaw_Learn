// Ошибка: num.split('') возвращает массив строк, а не чисел.
// Исправление: Заменим num.split('') на Array.from(String(num), Number).

let num = 12345;
let digitsSum = getDigitsSum(num);
console.log(digitsSum);

function getDigitsSum(num) {
    let arr = Array.from(String(num), Number);
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}
