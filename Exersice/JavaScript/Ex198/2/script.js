// Ошибка: return res; находится внутри цикла, что приведет к преждевременному выходу из функции.
// Исправление: Перенесем return res; за пределы цикла.

function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

console.log(sum([1, 2, 3, 4, 5]));
