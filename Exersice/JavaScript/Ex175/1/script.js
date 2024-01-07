// Заданная строка
let str = 'я учу javascript!';

// Вырезание слова 'учу' с использованием substr
let substrResult = str.substr(2, 3); // начиная с позиции 2, вырезаем 3 символа
console.log(`Вырезано с помощью substr: ${substrResult}`);

// Вырезание слова 'javascript' с использованием substring
let substringResult = str.substring(6, 16); // начиная с позиции 6, вырезаем до позиции 16
console.log(`Вырезано с помощью substring: ${substringResult}`);

// Вырезание слова 'javascript' с использованием slice
let sliceResult = str.slice(6, -1); // начиная с позиции 6 и до предпоследнего символа
console.log(`Вырезано с помощью slice: ${sliceResult}`);

