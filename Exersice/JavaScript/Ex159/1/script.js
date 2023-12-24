let arr1 = [];

for (let i = 0; i < 3; i++) {
    arr1[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr1[i].push(j);
    }
}

console.log(arr1);