let array10 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < array10.length; i++) {
    let firstDigit = parseInt(array10[i].toString()[0]);
    if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
        console.log(array10[i]);
    }
}