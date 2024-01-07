let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];

let arr = [0, ...arr3];
console.log(arr);
// Выведет [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

