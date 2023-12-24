let arr3 = ['a', 'b', 'c', 'd', 'e'];
let obj4 = {};
for (let i = 0; i < arr3.length; i++) {
    obj4[i + 1] = arr3[i];
}
console.log(obj4);