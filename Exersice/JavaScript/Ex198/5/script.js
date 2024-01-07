// Ошибка: переменная elem не определена, также есть проблема с названием переменной sum.
// Исправление: Изменим название переменной sum на res, и используем корректное имя в цикле.

let arrSum = sum([1, 2, 3, 4, 5]);
console.log(arrSum);

function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}


