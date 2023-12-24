let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj) {
  newObj[obj[key]] = key;
}

console.log(newObj);