// Пример 1
function outerFunction() {
    let outerVar = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

let closureExample1 = outerFunction();
closureExample1(); // выведет 'I am from the outer function'

// Пример 2
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let increment = counter();
increment(); // выведет 1
increment(); // выведет 2

// Пример 3
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
console.log(double(5)); // выведет 10

let triple = createMultiplier(3);
console.log(triple(5)); // выведет 15

