let array = [[1, 2, 3], [4, 5], [6]];
let sumer = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        sumer += array[i][j];
    }
}

console.log(sumer);