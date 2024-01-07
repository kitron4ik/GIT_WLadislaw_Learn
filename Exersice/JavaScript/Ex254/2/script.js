// Модификация счетчика, чтобы считал до 5, а потом начинал сначала
let limitedCounter = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num = (num % 5) + 1;
    }
})();

limitedCounter(); //выведет 1
limitedCounter(); //выведет 2
limitedCounter(); //выведет 3
limitedCounter(); //выведет 4
limitedCounter(); //выведет 5
limitedCounter(); //выведет 1
// ...

