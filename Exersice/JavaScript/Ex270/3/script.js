let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let arr = ['a', 'b', 'c', ...arr2];
console.log(arr);
// Выведет ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]

