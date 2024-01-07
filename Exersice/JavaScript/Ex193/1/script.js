
function divideByTwoUntilTen(num) {
    let iterations = 0;

    while (num >= 10) {
        num /= 2;
        iterations++;
    }

    return iterations;
}

let result = divideByTwoUntilTen(64);
console.log(result);
// Объяснение: Функция делит число на 2 до тех пор, пока результат не станет меньше 10, и возвращает количество итераций.

