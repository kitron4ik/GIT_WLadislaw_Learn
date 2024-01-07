let numbers = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;

for (let number of numbers) {
    sumOfCubes += Math.pow(number, 3);
}

let squareRootOfSum = Math.sqrt(sumOfCubes);
console.log(squareRootOfSum);
