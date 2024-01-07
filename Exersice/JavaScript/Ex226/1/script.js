// Ваша реализация функции test
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Пример использования функции
let result = test([1, 2, 3], function(num) {
    return num * num;
});

console.log(result); // выведет [1, 4, 9]

// Вызов созданной функции test, передав массив с числами и функцию возводящую в куб
let resultCubes = test([2, 3, 4], function(num) {
    return num * num * num;
});

console.log(resultCubes); // выведет [8, 27, 64]

