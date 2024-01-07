// Ошибка: функция isPrime всегда вернет false, так как внутри цикла сразу происходит возврат.
// Исправление: Перенесем return true; за пределы цикла и добавим return false; после цикла.

console.log(isPrime(13)); // должен вывести true

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

