function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    } else {
        return num ** 2;
    }
}

console.log(func(10)); // выведет 100
console.log(func(-5)); // выведет 5
// Объяснение: В данной функции при num <= 0 выполняется первый return, иначе - второй.
