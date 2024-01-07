function sumDigits(num) {
    return Array.from(String(num), Number).reduce((acc, digit) => acc + digit, 0);
}
