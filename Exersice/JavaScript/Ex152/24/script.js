let obj1 = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sumKeys = 0;
let sumValues = 0;
for (let key in obj1) {
    sumKeys += parseInt(key);
    sumValues += obj1[key];
}
let result = sumKeys / sumValues;
console.log(result);