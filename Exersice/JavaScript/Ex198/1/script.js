// Ошибка: func1 и func2 ничего не возвращают, поэтому при сложении получится NaN.
// Исправление: Изменим функции так, чтобы они возвращали значения.

function func1() {
    return 3;
}

function func2() {
    return 5;
}

console.log(func1() + func2());
