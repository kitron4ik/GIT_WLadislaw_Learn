// Определение функции func1
function func1() {
    return function() {
        return 1;
    };
}

// Определение функции func2
function func2() {
    return function() {
        return 2;
    };
}

// Вычисление суммы результатов функций func1 и func2
let sumResult = func1()() + func2()();

// Вывод результата в консоль
console.log(sumResult); // выведет 3

