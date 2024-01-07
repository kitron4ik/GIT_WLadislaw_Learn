// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    console.log(num);
}

test(1);
// Ответ: выведет 1, так как изменение localNum внутри функции не влияет на переменную num во внешней функции
