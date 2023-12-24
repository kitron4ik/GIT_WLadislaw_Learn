let arr4 = ['a', 'b', 'c', 'd', 'e'];
let obj5 = {};
for (let i = 0; i < arr4.length; i++) {
    obj5[arr4[i]] = i + 1;
}
console.log(obj5);