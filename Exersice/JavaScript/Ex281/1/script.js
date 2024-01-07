// Значения по умолчанию при деструктуризации объектов в JavaScript

// Пример с установкой значения по умолчанию для переменной year
let obj = {
    month: 12,
    day: 31,
};

let { year = 2025, month, day } = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

// Пример с установкой значения по умолчанию для переменной color
let options = {
    width: 400,
    height: 500,
};

let { color = 'black', width, height } = options;

console.log(color); // выведет 'black'
console.log(width); // выведет 400
console.log(height); // выведет 500

