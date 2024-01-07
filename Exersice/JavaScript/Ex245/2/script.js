function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test()();

let func1 = func;
let func2 = func;
func1(); // выведет 0
func2(); // выведет 1
func1(); // выведет 2
func2(); // выведет 3

