// Функция для добавления знака '!' к элементам массива
function addExclamation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = addExclamation(arr[i]);
        } else {
            arr[i] = arr[i] + '!';
        }
    }
    return arr;
}

// Пример использования для многомерного массива
console.log(addExclamation([1, [2, 7, 8], [3, 4, [5, 6]]]));

// Задача
function squareNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = squareNumbers(arr[i]);
        } else if (typeof arr[i] === 'number') {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}

let multidimensionalArray = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareNumbers(multidimensionalArray));

