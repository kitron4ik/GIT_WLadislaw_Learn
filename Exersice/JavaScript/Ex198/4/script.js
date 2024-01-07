// Ошибка: func1 и func2 не вызываются, а результат их работы не используется.
// Исправление: Вызовем функции и сложим их результаты.

function func1() {
    return 3;
}

function func2() {
    return 5;
}

console.log(func1() + func2());

