function hasConsecutiveDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }
    }
    return false;
}

// Пример использования:
console.log(hasConsecutiveDuplicates([1, 2, 2, 3])); // true
console.log(hasConsecutiveDuplicates([1, 2, 3, 4])); // false

