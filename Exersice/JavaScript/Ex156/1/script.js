let arr1 = [[1, 2, 3], [4, 5], [6]];
let sum1 = 0;

for (let subArr1 of arr1) {
    for (let elem1 of subArr1) {
        sum1 += elem1;
    }
}

console.log(sum1);