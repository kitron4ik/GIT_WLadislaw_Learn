// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(num) {
        num = 2;
    }

    func(num);
    console.log(num);
}

test(1);
// Ответ: выведет 1, так как внутренняя функция имеет свою локальную переменную num,
// и изменение ее значения не влияет на переменную num во внешней функции

