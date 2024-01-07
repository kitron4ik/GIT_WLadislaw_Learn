// Общая функция each, принимающая массив и коллбэк
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

// Задание 1: Увеличиваем каждый элемент массива в два раза
let numbers = [1, 2, 3, 4, 5];
let result1 = each(numbers, function(num) {
    return num * 2;
});
console.log(result1);

// Задание 2: Переворачиваем символы каждой строки в обратном порядке
let strings = ["abc", "def", "ghi"];
let result2 = each(strings, function(str) {
    return str.split("").reverse().join("");
});
console.log(result2);

// Задание 3: Делаем заглавным первый символ каждой строки
let words = ["apple", "banana", "cherry"];
let result3 = each(words, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(result3);

