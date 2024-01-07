function createLimitedCounter() {
    let number = 10;

    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        } else {
            console.log('Отсчет окончен');
        }
    };
}

let limitedCounter = createLimitedCounter();

limitedCounter(); // выведет 9
limitedCounter(); // выведет 8
// ...
limitedCounter(); // выведет 1
limitedCounter(); // выведет 0
limitedCounter(); // выведет 'Отсчет окончен'

