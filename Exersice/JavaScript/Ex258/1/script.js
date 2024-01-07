// Функция для вывода примитивных элементов многомерного массива
function printPrimitives(arr) {
    for (let elem of arr) {
        if (typeof elem === 'object') {
            // Элемент - массив или объект
            printPrimitives(elem);
        } else {
            // Элемент - примитив
            console.log(elem);
        }
    }
}

// Пример использования для многомерного массива
printPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// Задача 1
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
printPrimitives(Object.values(obj));

// Задача 2
function flattenArray(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr), []);
}

let nestedArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let flatArray = flattenArray(nestedArray);
console.log(flatArray);

