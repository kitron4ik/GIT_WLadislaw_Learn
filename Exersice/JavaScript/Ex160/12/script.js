let arr12 = [];

for (let i = 0, k12 = 1; i < 3; i++) {
    arr12[i] = [];

    for (let j = 0; j < 3; j++) {
        arr12[i][j] = k12++;
    }
}

console.log(arr12);