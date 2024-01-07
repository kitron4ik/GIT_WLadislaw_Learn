function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = createCounter();

counter(); // выведет 1
counter(); // выведет 2
counter(); // выведет 3

