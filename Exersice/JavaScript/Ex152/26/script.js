let obj3 = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
let newArray = [];
for (let key in obj3) {
  if (obj3[key].toString().startsWith('1') || obj3[key].toString().startsWith('2')) {
      newArray.push(obj3[key]);
  }
}
console.log(newArray);
