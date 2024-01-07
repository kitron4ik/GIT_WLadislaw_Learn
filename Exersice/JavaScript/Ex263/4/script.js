// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let strings = ['apple', 'banana', 'orange', 'kiwi'];
let longStrings = strings.filter(function(str) {
    return str.length > 5;
});

console.log(longStrings);

