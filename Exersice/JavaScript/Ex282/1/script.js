// Переменные и значения по умолчанию в JavaScript

// Пример с изменением названий переменных и установкой значения по умолчанию для переменной y
let obj = {
    month: 12,
    day: 31,
};

let { year: y = 2025, month, day } = obj;

console.log(y);    // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

// Пример с изменением названий переменных и установкой значения по умолчанию для переменной c
let options = {
    width: 400,
    height: 500,
};

let { color: c = 'black', width: w, height: h } = options;

console.log(c); // выведет 'black'
console.log(w); // выведет 400
console.log(h); // выведет 500

