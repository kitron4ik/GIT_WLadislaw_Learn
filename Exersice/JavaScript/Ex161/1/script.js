let obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let sum1 =
    obj1.key1.key1 +
    obj1.key1.key2 +
    obj1.key1.key3 +
    obj1.key2.key1 +
    obj1.key2.key2 +
    obj1.key2.key3 +
    obj1.key3.key1 +
    obj1.key3.key2 +
    obj1.key3.key3;

console.log(sum1);