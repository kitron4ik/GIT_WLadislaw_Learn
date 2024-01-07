// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num + 1);
}

test(1);
// Ответ: выведет 2, так как внутренняя функция вызывается с параметром num + 1 (1 + 1 = 2)
