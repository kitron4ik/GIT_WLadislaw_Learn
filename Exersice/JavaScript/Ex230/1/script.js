// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num);
}

test(1);
// Ответ: выведет 1, так как localNum равен значению num, которое передается в test
