// Определение, не запуская код, что выведется в консоль
function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    func();
}

test(1, 2);
// Ответ: выведет 3, так как num1 = 1, num2 = 2, их сумма 1 + 2 = 3

