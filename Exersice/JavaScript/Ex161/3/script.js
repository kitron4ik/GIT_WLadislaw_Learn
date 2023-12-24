let obj3 = {
    key1: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
        },
        f: 5,
    },
    key2: {
        g: 6,
        h: 7,
    },
};

let sum3 = obj3.key1.a + obj3.key1.b + obj3.key1.c.d + obj3.key1.c.e + obj3.key1.f + obj3.key2.g + obj3.key2.h;

console.log(sum3);