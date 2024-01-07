function createDecreasingCounter() {
    let number = 10;

    return function() {
        number--;
        console.log(number);
    };
}

let decreasingCounter = createDecreasingCounter();

decreasingCounter(); // выведет 9
decreasingCounter(); // выведет 8
decreasingCounter(); // выведет 7

