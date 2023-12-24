let array9 = [-2, 5, -1, 8, -3, 10];
let positiveSum = 0;
for (let i = 0; i < array9.length; i++) {
    if (array9[i] > 0) {
        positiveSum += array9[i];
    }
}
console.log(positiveSum);