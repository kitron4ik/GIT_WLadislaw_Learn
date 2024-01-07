// Дан следующий массив:

let arr = ['123', '456', '789'];

// Используя метод map преобразуйте этот массив в следующий:

let transformedArray = arr.map(str => str.split('').map(Number));
console.log(transformedArray);

