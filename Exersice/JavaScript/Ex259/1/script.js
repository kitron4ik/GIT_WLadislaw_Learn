// Функция для нахождения суммы примитивных элементов многомерного массива
function sumOfPrimitives(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (typeof elem === 'object') {
            sum += sumOfPrimitives(elem);
        } else {
            sum += elem;
        }
    }
    return sum;
}

// Пример использования для многомерного массива
console.log(sumOfPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// Задача 1
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(sumOfPrimitives(Object.values(obj)));

// Задача 2
function concatenateStrings(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc + concatenateStrings(curr) : acc + curr, '');
}

let nestedStringsArray = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
let concatenatedString = concatenateStrings(nestedStringsArray);
console.log(concatenatedString);

