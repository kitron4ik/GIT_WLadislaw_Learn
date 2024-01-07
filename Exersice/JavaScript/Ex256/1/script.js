// Код без рекурсии, с использованием метода shift
function func(arr) {
    console.log(arr.shift()); // выведет 1
    console.log(arr); // выведет [2, 3] - массив уменьшился

    console.log(arr.shift()); // выведет 2
    console.log(arr); // выведет [3] - массив уменьшился

    console.log(arr.shift()); // выведет 3
    console.log(arr); // выведет [] - массив пуст
}

func([1, 2, 3]);

// Код с использованием рекурсии
function funcRecursive(arr) {
    console.log(arr.shift(), arr);

    if (arr.length !== 0) {
        funcRecursive(arr);
    }
}

funcRecursive([1, 2, 3]);

// Задача
let arr = [1, 2, 3, 4, 5];

function printArrayElements(arr) {
    console.log(arr.shift());

    if (arr.length !== 0) {
        printArrayElements(arr);
    }
}

printArrayElements(arr);

