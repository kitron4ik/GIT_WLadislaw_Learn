// Определение, не запуская код, что выведется в консоль
function test() {
    let num = 1;

    function func() {
        console.log(num);
    }
}

test();
// Ответ: ничего не выведет, так как функция func не вызвана

