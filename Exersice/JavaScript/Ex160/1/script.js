let arr1 = [];

for (let i = 0, k1 = 1; i < 4; i++) {
    arr1[i] = [];

    for (let j = 0; j < 2; j++) {
        arr1[i].push(k1++);
    }
}

console.log(arr1);