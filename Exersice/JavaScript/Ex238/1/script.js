// Исходный код с использованием обычных функций и коллбэков
let result = filter([1, 2, 3, 4, 5], function (elem) {
    return elem % 2 == 0;
});

let result2 = every([1, 2, 3, 4, 5], function (elem) {
    return elem > 0;
});

let result3 = every([1, 2, 3, 4, 5], function (elem, index) {
    return elem * index > 10;
});

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result4 = each(arr, function (elem, index) {
    return elem * index > 10;
});

// Упрощенный код с использованием стрелочных функций
let resultArrow = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

let result2Arrow = every([1, 2, 3, 4, 5], elem => elem > 0);

let result3Arrow = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

let result4Arrow = each(arr, (elem, index) => elem * index > 10);

