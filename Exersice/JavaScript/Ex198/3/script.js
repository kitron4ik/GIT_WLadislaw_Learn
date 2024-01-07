
// Ошибка: функция func не вызывается, поэтому ничего не выводится в консоль.
// Исправление: Вызовем функцию с передачей массива в качестве аргумента.

let arr = [1, 2, 3, 4, 5];

function func(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    console.log(res);
}

func(arr);

