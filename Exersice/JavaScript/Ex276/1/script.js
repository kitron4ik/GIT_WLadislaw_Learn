let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name2, surname2, ...info2] = arr2;

console.log(name2);    // выведет 'John'
console.log(surname2); // выведет 'Smit'
console.log(info2);    // выведет ['development', 'programmer', 2000]

