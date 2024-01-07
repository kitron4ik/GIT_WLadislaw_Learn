function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    }
    
    return num ** 2;
}

console.log(func(10)); // выведет 100
console.log(func(-5)); // выведет 5
// Объяснение: Аналогично предыдущей задаче, но return num ** 2; находится вне блока условия, поэтому выполнится в любом случае.
