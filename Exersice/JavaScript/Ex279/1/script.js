// Деструктуризация объектов в JavaScript

// Пример с деструктуризацией объекта
let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year, month, day } = obj;

console.log(year);   // выведет 2025
console.log(month);  // выведет 12
console.log(day);    // выведет 31

// Пример с предварительным объявлением переменных
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let color, width, height;

({ color, width, height } = options);

console.log(color);  // выведет 'red'
console.log(width);  // выведет 400
console.log(height); // выведет 500

