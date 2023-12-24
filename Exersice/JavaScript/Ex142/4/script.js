let sum = 0;
let count = 0;

for (let i = 1; sum <= 100; i++) {
  count++;
  sum += i;
}

console.log("Количество чисел:", count);