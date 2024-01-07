
function areAllEven(arr) {
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// Пример использования:
console.log(areAllEven([2, 4, 6])); // true
console.log(areAllEven([2, 3, 4])); // false
