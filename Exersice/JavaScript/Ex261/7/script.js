// Дан многомерный массив произвольного уровня вложенности. Используя метод map преобразуйте все элементы этого массива в одномерный массив.

let multidimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flattenedArray = multidimensionalArray.map(arr => arr.flat());
console.log(flattenedArray);

