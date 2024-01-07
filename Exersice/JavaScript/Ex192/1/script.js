function func(num) {
    return num;
    
    let res = num ** 2;
    return res;
}

console.log(func(3)); // выведет 3
// Объяснение: В данной функции первый return возвращает значение num, и после этого выполнение функции завершается, поэтому второй return не будет выполнен.