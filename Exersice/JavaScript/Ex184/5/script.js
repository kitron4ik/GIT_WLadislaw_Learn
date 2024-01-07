
let num = 12345;
let arr = String(num).split('');

let prod = 1; // начальное значение должно быть 1, а не 0
for (let digit of arr) {
    prod *= Number(digit);
}

console.log(prod);

