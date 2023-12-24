let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let evenObj = {};

for (let key in obj) {
  if (obj[key] % 2 === 0) {
    evenObj[key] = obj[key];
  }
}

console.log(evenObj);