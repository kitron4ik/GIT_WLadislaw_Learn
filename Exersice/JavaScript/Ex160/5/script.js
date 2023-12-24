let arr5 = [];

for (let i = 0, k5 = 1; i < 3; i++) {
    arr5[i] = [];

    for (let j = 0; j < 3; j++) {
        arr5[i][j] = k5++;
    }
}

console.log(arr5);