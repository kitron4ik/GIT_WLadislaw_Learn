// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    console.log(localNum);
}

test(1);
// Ответ: будет ошибка, так как переменная localNum не видна снаружи функции func
