// Ваша реализация функции func с вложенными функциями square и cube
function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    function cube(num) {
        return num * num * num;
    }

    return square(num1) + cube(num2);
}

// Пример использования функции func
console.log(func(2, 3)); // выведет сумму квадрата 2 и куба 3, то есть 13

