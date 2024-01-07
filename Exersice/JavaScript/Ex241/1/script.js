// Пример 1
function test1() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        // лексическое окружение = {num1: 1, num2: 2}
        return num1 + num2;
    }
}

let func1 = test1();
console.log(func1()); // выведет 3

// Пример 2
function test2() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        // лексическое окружение = {num1: 1, num2: 2}
        return num1 + num2;
    }
}

console.log(test2()()); // выведет 3

// Пример 3
function test3() {
    let num1 = 1;

    return function() {
        // лексическое окружение = {num1: 1}
        return num1 + num2; // num2 не определена внутри функции
    }
}

let num2 = 2;
let func3 = test3();
console.log(func3()); // выведет ошибку

// Пример 4
function test4() {
    let num = 1;

    return function() {
        // лексическое окружение = {num: 1}
        return num;
    }
}

let num4 = 2;
let func4 = test4();
console.log(func4()); // выведет 1

