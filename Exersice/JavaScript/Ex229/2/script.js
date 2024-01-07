// Определение, не запуская код, что выведется в консоль
function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    num1 = 2;
    func();
}

test(1, 2);
// Ответ: выведет 4, так как num1 было изменено на 2, и теперь сумма 2 + 2 = 4

