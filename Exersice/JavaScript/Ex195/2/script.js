function areAllDigitsOdd(num) {
    let digits = String(num).split('').map(Number);
    for (let digit of digits) {
        if (digit % 2 === 0) {
            return false;
        }
    }
    return true;
}

// Пример использования:
console.log(areAllDigitsOdd(13579)); // true
console.log(areAllDigitsOdd(12345)); // false
