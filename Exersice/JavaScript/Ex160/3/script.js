let arr3 = [];

for (let i = 0, k3 = 1; i < 2; i++) {
    arr3[i] = [];

    for (let j = 0; j < 2; j++) {
        arr3[i][j] = [k3++, k3++];
    }
}

console.log(arr3);