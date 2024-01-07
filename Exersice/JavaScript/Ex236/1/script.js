// Общая функция each, принимающая массив и коллбэк
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

// Задание 1: Возведение элементов массива в квадрат с использованием функции square
function square(num) {
    return num * num;
}

let result1 = each([1, 2, 3, 4, 5], square);
console.log(result1);

// Задание 2: Возведение элементов массива в куб с использованием функции cube
function cube(num) {
    return num ** 3;
}

let result2 = each([1, 2, 3, 4, 5], cube);
console.log(result2);

