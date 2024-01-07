// Определение, не запуская код, что выведется в консоль
function test() {
    let num = 1;

    function func() {
        console.log(num);
    }

    func();
}
// Ответ: ничего не выведет, так как функция test не вызвана

