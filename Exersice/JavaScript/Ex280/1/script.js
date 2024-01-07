// Имена переменных при деструктуризации объектов в JavaScript

// Пример с измененными именами переменных
let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year: y, month: m, day: d } = obj;

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31

// Пример с измененными именами переменных и предварительным объявлением переменных
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let c, w, h;

({ color: c, width: w, height: h } = options);

console.log(c);  // выведет 'red'
console.log(w);  // выведет 400
console.log(h);  // выведет 500

