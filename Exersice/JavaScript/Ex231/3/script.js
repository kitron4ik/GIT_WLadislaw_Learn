// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(num) {
        console.log(num);
    }

    num = 2;
    func(num);
}

test(1);
// Ответ: выведет 2, так как переменная num внешней функции была изменена перед вызовом внутренней функции
