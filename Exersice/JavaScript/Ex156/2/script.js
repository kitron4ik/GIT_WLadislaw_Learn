let array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumer = 0;

for (let subArr of array) {
    for (let innerArr of subArr) {
        for (let elem of innerArr) {
            sumer += elem;
        }
    }
}

console.log(sumer);