function test(func) {
    // Выведет результат работы переданной функции
    console.log(func(3));
}

// Вызов анонимной функции, которая возводит число в куб
test(function(num) {
    return num * num * num;
});

// Вызов Function Declaration с именем func
test(func);

function func(num) {
    return num * num * num;
}

// Вызов Function Expression с тем же именем func
test(func);

var func = function(num) {
    return num * num * num;
};

// Вызов функции, которая суммирует два числа и выводит результат алертом
test(function(num1, num2) {
    alert(num1 + num2);
});

