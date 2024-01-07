function test(num, func1, func2) {
    // Возвращает сумму результатов переданных функций
    return func1(num) + func2(num);
}

// Вызов функции test, передав число 2 и функцию возводящую в квадрат и в куб
console.log(test(2,
    function(num) {
        return num * num; // возвращает квадрат
    },
    function(num) {
        return num * num * num; // возвращает куб
    }
));

// Вызов функции test, передав число 3, функцию возводящую в квадрат и в куб
console.log(test(3,
    function(num) {
        return num * num; // возвращает квадрат
    },
    function(num) {
        return num * num * num; // возвращает куб
    }
));

