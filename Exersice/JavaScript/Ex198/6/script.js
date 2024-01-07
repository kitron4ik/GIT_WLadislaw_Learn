// Ошибка: переменная elem не определена.
// Исправление: Уберем переменную elem из цикла, так как она не используется.

let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
}
