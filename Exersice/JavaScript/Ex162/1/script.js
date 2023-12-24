let obj1 = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
};

let sum1 = 0;

for (let key1 in obj1) {
    let subObj1 = obj1[key1];
    for (let key2 in subObj1) {
        sum1 += subObj1[key2];
    }
}

console.log(sum1);