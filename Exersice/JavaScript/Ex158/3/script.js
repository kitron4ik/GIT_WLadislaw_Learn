let arr3 = [];

for (let i = 0; i < 3; i++) {
    arr3[i] = [];

    for (let j = 0; j < 2; j++) {
        arr3[i][j] = [];

        for (let k = 0; k < 5; k++) {
            arr3[i][j].push(k + 1);
        }
    }
}

console.log(arr3);