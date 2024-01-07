// Определение, не запуская код, что выведется в консоль
function test() {
    let num;

    function func() {
        console.log(num);
    }

    num = 1
    func();

    num = 2
    func();
}

test();
// Ответ: выведет 1 и 2, так как func вызывается дважды, с разными значениями num


