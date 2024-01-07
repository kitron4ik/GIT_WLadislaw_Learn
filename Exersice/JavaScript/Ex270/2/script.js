let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);
// Выведет ['a', 1, 2, 3, 1, 2, 3, 'b', 'c']

