let arr10 = [];

for (let i = 0, k10 = 1; i < 3; i++) {
    arr10[i] = [];

    for (let j = 0; j < 3; j++) {
        arr10[i][j] = k10++;
    }
}

console.log(arr10);