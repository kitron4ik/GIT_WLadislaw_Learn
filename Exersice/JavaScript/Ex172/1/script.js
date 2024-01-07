// Вывод случайного целого числа от 1 до 100
let randomInteger = Math.floor(Math.random() * 100) + 1;
console.log(`Случайное целое число от 1 до 100: ${randomInteger}`);

// Заполнение массива 10 случайными целыми числами
let randomNumbersArray = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    randomNumbersArray.push(randomNum);
}

console.log("Массив случайных целых чисел:", randomNumbersArray);

