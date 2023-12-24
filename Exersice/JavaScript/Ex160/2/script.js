let arr2 = [];

for (let i = 0, k2 = 2; i < 4; i++) {
    arr2[i] = [];

    for (let j = 0; j < 3; j++) {
        arr2[i].push(k2);
        k2 += 2;
    }
}

console.log(arr2);