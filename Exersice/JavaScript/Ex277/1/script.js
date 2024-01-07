// Пример 3:
let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;

console.log(name);       // выведет 'John'
console.log(surname);    // выведет 'Smit'
console.log(department); // выведет 'development'
console.log(position);   // выведет 'trainee'

