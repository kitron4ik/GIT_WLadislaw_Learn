// Ошибка: переменная sum не определена в момент ее вызова.
// Исправление: Перенесем вызов функции sum ниже ее определения.

let arr = [1, 2, 3, 4, 5];
let sumResult = sum(arr);
console.log(sumResult);

function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

