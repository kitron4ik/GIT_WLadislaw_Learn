let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
  sum += parseInt(elem);
}

console.log(sum);