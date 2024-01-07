// Реализация счетчика
let counter1 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter1(); //выведет 1
counter1(); //выведет 2
counter1(); //выведет 3
// ...

// Для второго счетчика необходимо создать отдельный экземпляр
let counter2 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter2(); //выведет 1
counter2(); //выведет 2
counter2(); //выведет 3
// ...

