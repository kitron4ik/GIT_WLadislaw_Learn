// Определение функции func1
function func1(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}

// Вызов функции func1 с тремя параметрами
console.log(func1(2)(3)(4)); // выведет 9

// Определение функции func2
function func2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return [num1, num2, num3, num4];
            };
        };
    };
}

// Вызов функции func2 с четырьмя параметрами и завершающим вызовом
console.log(func2(2)(3)(4)(5)()); // выведет [2, 3, 4, 5]

