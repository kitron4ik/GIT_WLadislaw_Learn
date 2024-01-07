// Дан массив, в нем могут быть обычные элементы и подмассивы. Оставьте в нем только обычные элементы.

let mixedArray = [1, 2, [3, 4], 5, [6, 7]];
let flatArray = mixedArray.filter(function(elem) {
    return !Array.isArray(elem);
});

console.log(flatArray);

