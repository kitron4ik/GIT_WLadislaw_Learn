task Ex201
papka 1
function func() {
    let num = 5;
    return num;
}

console.log(num);

papka 2
function func() {
    let num = 5;
    return num;
}

console.log(func());

task Ex202
papka 1
let num = 1;

function func() {
    num = 2;
}
func();

console.log(num);

papka 2
let num = 1;

function func() {
    let num = 2;
}
func();

console.log(num);

task Ex203
papka 1
let num = 1;

function func() {
    num = 2;
}
func();

console.log(num);

papka 2
let num = 1;

function func() {
    num = 2;
}

console.log(num);

papka 3
let num = 1;

function func() {
    let num = 2;
}
func();

console.log(num);

papka 4
let num = 1;

function func() {
    let num = 2;
}

console.log(num);
func();

papka 5
let num = 1;

function func() {
    num = 2;
}

console.log(num);
func();

papka 6
let num = 1;

function func() {
    num++;
}

func();
func();
func();
console.log(num);

papka 7
function func() {
    num = 2;
}

let num = 1;
console.log(num);
func();

papka 8
function func() {
    num = 2;
}

let num = 1;
func();
console.log(num);

task Ex204
papka 1
function func(localNum) {
    console.log(localNum);
}

func(1);

papka 2
function func(localNum) {
    console.log(localNum);
}

let num = 1;
func(num);

papka 3
function func(localNum) {
    console.log(localNum);
}

let num = 1;
func(num);
num = 2;

papka 4
let num = 1;

function func(localNum) {
    console.log(localNum);
}

num = 2;
func(num);

papka 5
function func(localNum) {
    localNum = 2;
}

let num = 1;
func(num);
console.log(num);

papka 6
function func(localNum) {
    num = 2;
}

let num = 1;
func(num);
console.log(num);

papka 7
function func(localNum) {
    let num = 2;
}

let num = 1;
func(num);
console.log(num);

task Ex205
papka 1
function func(num) {
    num = 2;
}

let num = 1;
func(num);
console.log(num);

papka 2
function func() {
    num = 2;
}

let num = 1;
func();
console.log(num);

papka 3
function func() {
    let num = 2;
}

let num = 1;
func();
console.log(num);

task Ex206
papka 1
function func(obj) {
    obj.a = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj);
console.log(obj);

papka 2

function func(arg) {
    arg = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj);

papka 3
function func(obj) {
    obj = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj);

papka 4
function func(arr) {
    arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

papka 5
function func(arr) {
    arr.slice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

papka 6
function func(arr) {
    let newArr = arr;
    newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

task Ex207
papka 1
function func() {
    return '!';
}

console.log(func());
console.log(func); 

task Ex208
papka 1
function func() {
    return 'Hello, world!';
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

task Ex209
papka 1
function func1() {
    return 3;
}
let func2 = func1;
console.log(func1() + func2());

task Ex210
papka 1
let func1 = function() {
    return 1;
};
let func2 = function() {
    return 2;
};
console.log(func1() + func2());

task Ex211
papka 1
function func() {
    return '!';
}

func = 'string';

task Ex212
papka 1
// Function Declaration
function funcDeclaration() {
    console.log('!');
}
funcDeclaration(); // выведет '!'

// Function Expression
let funcExpression = function() {
    console.log('!');
};
funcExpression(); // выведет '!'

task Ex213
papka 1
// Function Declaration доступна выше своего объявления
funcDeclaration(); // выведет '!'
function funcDeclaration() {
    console.log('!');
}

// Function Expression не доступна выше своего объявления
try {
    funcExpression(); // ошибка, такой функции еще нет
} catch (error) {
    console.error(error.message);
}
let funcExpression = function() {
    console.log('!');
};

task Ex214
papka 1
let func1 = function() {
    console.log('!');
};
let func2 = function() {
    console.log('!');
};
function func3() {
    console.log('!');
}

task Ex215
papka 1
// Все функции, которые не вызываются или не участвуют в выражении, считаются Function Declaration.

// Function Declaration
function func() {
    console.log('!');
}

// Function Expression
let func = function() {
    console.log('!');
};

// Function Expression
+function() {
    console.log('!');
};

// Function Expression
!function func() {
    console.log('!');
};

// Function Expression
-function func() {
    console.log('!');
};

// Function Expression
1 + function func() {
    console.log('!');
};

// Function Expression
(function func() {
    console.log('!');
});

// Function Expression
console.log(
    function() {
        console.log('!');
    }
);

task Ex216
papka 1
// Функция с именем, но Function Expression
+function func() {
    console.log('!');
}

// Вызовет ошибку, так как func не является доступной функцией
func(); 

// Присваиваем функцию с именем func переменной test
let test = function func() {
    console.log('!');
};

// Вызываем функцию через переменную test
test(); 

task Ex217
papka 1
// Именованное функциональное выражение
let test = function func() {
    console.log(func); // функция выведет свой же исходный код
};

test(); // вызываем функцию

// Вызов функции внутри нее самой
let test = function func() {
    console.log('!'); 
    func(); // вызываем сами себя
};

test(); // вызываем функцию

// Имя test - это переменная, func - привязано к функции
test = 'something';
func(); // выдаст ошибку, так как func привязано к функции

// Пример именованного функционального выражения
let namedFunc = function anotherFunc() {
    console.log(anotherFunc); // функция выведет свой же исходный код
};

namedFunc(); // вызываем функцию

task Ex218
papka 1
// Определение типа функции в JavaScript

// Function Expression, невозможно вызвать до определения
let test = function func() {
    console.log('!');
};
// test(); // вызовет ошибку, так как Function Expression

// Function Declaration, можно вызвать до определения
function func() {
    console.log('!');
}
// func(); // вызовет '!', так как Function Declaration

// Function Expression, невозможно вызвать по имени
console.log(
    function func() {
        console.log('!');
    }
);

// Function Expression, невозможно вызвать по имени
+function func() {
    console.log('!');
}

// Function Declaration, можно вызвать до определения
function func() {
    console.log('!');
}
// func(); // вызовет '!', так как Function Declaration

task Ex219
papka 1
// Определение типа функции в JavaScript

// Function Declaration
function func() {
    console.log('!');
}

// Function Expression
-1;
function func() {
    console.log('!');
}

// Function Expression
-1
function func() {
    console.log('!');
}

// Function Declaration
1
function func() {
    console.log('!');
}

// Function Expression
-1-
function func() {
    console.log('!');
}

task Ex220
papka 1
function func() {
    console.log('!');
} + 1;

// Function Declaration
function func() {
    console.log('!');
} + 1;

// Function Expression
+function func() {
    console.log('!');
} + 1;

// Function Expression
+function func() {
    console.log('!');
} + 1;

// Function Declaration
+1
function func() {
    console.log('!');
} + 1;

// Function Declaration
function func() {
    console.log('!');
} + console.log('!');

task Ex221
// Массив с анонимными функциями в JavaScript

papka 1
let arr = [
    function() { return 1; },
    function() { return 2; },
    function() { return 3; },
];

papka 2
console.log(arr[2]() + " (using array)"); // выведет '3 (using array)'

papka 3
let sum = arr[0]() + arr[1]() + arr[2]();
console.log(sum + " (sum of results)"); // выведет '6 (sum of results)'

papka 4
for (let func of arr) {
    console.log(func()); // вызываем наши функции в цикле
}

task Ex222
// Объект с анонимными функциями в JavaScript

papka 1
let obj = {
    func1: function() { return 1; },
    func2: function() { return 2; },
    func3: function() { return 3; },
};

let sum = obj.func1() + obj.func2() + obj.func3();
console.log(sum + " (sum of results)"); // выведет '6 (sum of results)'

papka 2
for (let key in obj) {
    console.log(obj[key]()); // вызываем функции в цикле
}

task Ex223
// Применение объекта с функциями в JavaScript

papka 1
let mathOperations = {
    sum: function(numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    },
    sumOfSquares: function(numbers) {
        return numbers.reduce((acc, num) => acc + num * num, 0);
    },
    sumOfCubes: function(numbers) {
        return numbers.reduce((acc, num) => acc + num * num * num, 0);
    },
};

// Пример использования
let numbersArray = [1, 2, 3, 4, 5];

console.log(mathOperations.sum(numbersArray)); // выведет 15 (1+2+3+4+5)
console.log(mathOperations.sumOfSquares(numbersArray)); // выведет 55 (1^2+2^2+3^2+4^2+5^2)
console.log(mathOperations.sumOfCubes(numbersArray)); // выведет 225 (1^3+2^3+3^3+4^3+5^3)

task Ex224
papka 1
function test(func) {
    // Выведет результат работы переданной функции
    console.log(func(3));
}

// Вызов анонимной функции, которая возводит число в куб
test(function(num) {
    return num * num * num;
});

// Вызов Function Declaration с именем func
test(func);

function func(num) {
    return num * num * num;
}

// Вызов Function Expression с тем же именем func
test(func);

var func = function(num) {
    return num * num * num;
};

// Вызов функции, которая суммирует два числа и выводит результат алертом
test(function(num1, num2) {
    alert(num1 + num2);
});

task Ex225
papka 1
function test(num, func1, func2) {
    // Возвращает сумму результатов переданных функций
    return func1(num) + func2(num);
}

// Вызов функции test, передав число 2 и функцию возводящую в квадрат и в куб
console.log(test(2,
    function(num) {
        return num * num; // возвращает квадрат
    },
    function(num) {
        return num * num * num; // возвращает куб
    }
));

// Вызов функции test, передав число 3, функцию возводящую в квадрат и в куб
console.log(test(3,
    function(num) {
        return num * num; // возвращает квадрат
    },
    function(num) {
        return num * num * num; // возвращает куб
    }
));

task Ex226
papka 1
// Ваша реализация функции test
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

// Пример использования функции
let result = test([1, 2, 3], function(num) {
    return num * num;
});

console.log(result); // выведет [1, 4, 9]

// Вызов созданной функции test, передав массив с числами и функцию возводящую в куб
let resultCubes = test([2, 3, 4], function(num) {
    return num * num * num;
});

console.log(resultCubes); // выведет [8, 27, 64]

task Ex227
papka 1
// Ваша реализация функции func с вложенными функциями square и cube
function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    function cube(num) {
        return num * num * num;
    }

    return square(num1) + cube(num2);
}

// Пример использования функции func
console.log(func(2, 3)); // выведет сумму квадрата 2 и куба 3, то есть 13

task Ex228
papka 1
// Определение, не запуская код, что выведется в консоль
function test() {
    let num = 1;

    function func() {
        console.log(num);
    }

    func();
}

test();
// Ответ: выведет 1


papka 2
// Определение, не запуская код, что выведется в консоль
function test() {
    let num = 1;

    function func() {
        console.log(num);
    }
}

test();
// Ответ: ничего не выведет, так как функция func не вызвана

papka 3
// Определение, не запуская код, что выведется в консоль
function test() {
    let num = 1;

    function func() {
        console.log(num);
    }

    func();
}
// Ответ: ничего не выведет, так как функция test не вызвана

papka 4
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


task Ex229
papka 1
// Определение, не запуская код, что выведется в консоль
function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    func();
}

test(1, 2);
// Ответ: выведет 3, так как num1 = 1, num2 = 2, их сумма 1 + 2 = 3

papka 2
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

task Ex230
papka 1
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num);
}

test(1);
// Ответ: выведет 1, так как localNum равен значению num, которое передается в test
papka 2
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num + 1);
}

test(1);
// Ответ: выведет 2, так как внутренняя функция вызывается с параметром num + 1 (1 + 1 = 2)
papka 3
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        console.log(num);
    }

    func(num + 1);
}

test(1);
// Ответ: выведет 1, так как внутренняя функция вызывается с параметром num + 1, но num остается неизменным (1)
papka 4
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
papka 5
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
papka 6
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(localNum) {
        num = 2;
    }

    func(num);
    console.log(num);
}

test(1);
// Ответ: выведет 2, так как изменение переменной num внутри функции влияет на переменную num во внешней функции
task Ex231
papka 1
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
}

test(1);
// Ответ: выведет 1, так как внутренняя функция имеет свою локальную переменную num,
// которая равна переданному параметру внешней функции

papka 2
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

papka 3
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(num) {
        console.log(num);
    }

    num = 2;
    func(num);
}

test(1);
// Ответ: выведет 2, так как переменная num внешней функции была изменена перед вызовом внутренней функции
papka 4
// Определение, не запуская код, что выведется в консоль
function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
    num = 2;
}

test(1);
// Ответ: выведет 1, так как переменная num внутренней функции имеет свою локальную область видимости,
// и изменение переменной num после вызова внутренней функции не влияет на ее значение

task Ex232
papka 1
// Определение функции func1
function func1() {
    return function() {
        return 1;
    };
}

// Определение функции func2
function func2() {
    return function() {
        return 2;
    };
}

// Вычисление суммы результатов функций func1 и func2
let sumResult = func1()() + func2()();

// Вывод результата в консоль
console.log(sumResult); // выведет 3

task Ex233
papka 1
// Определение функции func
function func() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}

// Вызов функции func с несколькими уровнями вложенности
console.log(func()()()()()()); // выведет '!'

task Ex234
papka 1
// Определение функции func1
function func1(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}

// Вызов функции func1 с тремя параметрами
console.log(func1(2)(3)(4)); // выведет 9

// Определение функции func2
function func2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return [num1, num2, num3, num4];
            };
        };
    };
}

// Вызов функции func2 с четырьмя параметрами и завершающим вызовом
console.log(func2(2)(3)(4)(5)()); // выведет [2, 3, 4, 5]

task Ex235
papka 1
// Общая функция each, принимающая массив и коллбэк
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

// Задание 1: Увеличиваем каждый элемент массива в два раза
let numbers = [1, 2, 3, 4, 5];
let result1 = each(numbers, function(num) {
    return num * 2;
});
console.log(result1);

// Задание 2: Переворачиваем символы каждой строки в обратном порядке
let strings = ["abc", "def", "ghi"];
let result2 = each(strings, function(str) {
    return str.split("").reverse().join("");
});
console.log(result2);

// Задание 3: Делаем заглавным первый символ каждой строки
let words = ["apple", "banana", "cherry"];
let result3 = each(words, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(result3);

task Ex236
// Общая функция each, принимающая массив и коллбэк
function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); // вызываем функцию-коллбэк
    }

    return result;
}

// Задание 1: Возведение элементов массива в квадрат с использованием функции square
function square(num) {
    return num * num;
}

let result1 = each([1, 2, 3, 4, 5], square);
console.log(result1);

// Задание 2: Возведение элементов массива в куб с использованием функции cube
function cube(num) {
    return num ** 3;
}

let result2 = each([1, 2, 3, 4, 5], cube);
console.log(result2);

task Ex237
papka 1
// Обычные функции
let func1 = function (num1, num2) {
    let result = num1 * num2;
    return result;
}

let func2 = function (num) {
    return num * num;
}

let func3 = function () {
    console.log('!!!');
}

// Стрелочные функции
let arrowFunc1 = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

let arrowFunc2 = num => num * num;

let arrowFunc3 = () => console.log('!!!');

task Ex238
papka 1
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

task Ex239
papka 1
// Пример 1
let num = 1;

function func() {
    console.log(num);
}

func(); // выведет 1

// Пример 2
let num = 1; 

function func() {
    console.log(num);
}

num = 2;
func(); // выведет 2

// Пример 3
let num = 1; 

function func() {
    console.log(num);
}

func(); // выведет 1
num = 2;
func(); // выведет 2

task Ex240
papka 1
// Пример 1
let num1 = 1;
let num2 = 2;

function func() {
    // функция знает про переменные num1 и num2
    // лексическое окружение: {num1: 1, num2: 2}
}

// Пример 2
let num1 = 1; // окружение {num1: 1}
let num2 = 2; // окружение {num1: 1, num2: 2}

// Поменяем переменную num1:
num1 = 123; // окружение {num1: 123, num2: 2}

function func() {
    // функция может использовать переменные num1 и num2 из лексического окружения
}

task Ex241
papka 1
// Пример 1
function test1() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        // лексическое окружение = {num1: 1, num2: 2}
        return num1 + num2;
    }
}

let func1 = test1();
console.log(func1()); // выведет 3

// Пример 2
function test2() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        // лексическое окружение = {num1: 1, num2: 2}
        return num1 + num2;
    }
}

console.log(test2()()); // выведет 3

// Пример 3
function test3() {
    let num1 = 1;

    return function() {
        // лексическое окружение = {num1: 1}
        return num1 + num2; // num2 не определена внутри функции
    }
}

let num2 = 2;
let func3 = test3();
console.log(func3()); // выведет ошибку

// Пример 4
function test4() {
    let num = 1;

    return function() {
        // лексическое окружение = {num: 1}
        return num;
    }
}

let num4 = 2;
let func4 = test4();
console.log(func4()); // выведет 1

task Ex242
papka 1
// Пример 1
function outerFunction() {
    let outerVar = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

let closureExample1 = outerFunction();
closureExample1(); // выведет 'I am from the outer function'

// Пример 2
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let increment = counter();
increment(); // выведет 1
increment(); // выведет 2

// Пример 3
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
console.log(double(5)); // выведет 10

let triple = createMultiplier(3);
console.log(triple(5)); // выведет 15

task Ex243
papka 1
function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = createCounter();

counter(); // выведет 1
counter(); // выведет 2
counter(); // выведет 3

papka 2
function createDecreasingCounter() {
    let number = 10;

    return function() {
        number--;
        console.log(number);
    };
}

let decreasingCounter = createDecreasingCounter();

decreasingCounter(); // выведет 9
decreasingCounter(); // выведет 8
decreasingCounter(); // выведет 7

papka 3
function createLimitedCounter() {
    let number = 10;

    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        } else {
            console.log('Отсчет окончен');
        }
    };
}

let limitedCounter = createLimitedCounter();

limitedCounter(); // выведет 9
limitedCounter(); // выведет 8
// ...
limitedCounter(); // выведет 1
limitedCounter(); // выведет 0
limitedCounter(); // выведет 'Отсчет окончен'

task Ex244
papka 1
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

func()(); // выведет 0
func()(); // выведет 0
func()(); // выведет 0

papka 2
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

let test = func;

test()(); // выведет 0
test()(); // выведет 0
test()(); // выведет 0

task Ex245
papka 1
let counter = 0;

function test() {
    return function() {
        console.log(counter);
        counter++;
    };
}

let func = test;

let func1 = func();
let func2 = func();
func1(); // выведет 0
func2(); // выведет 1
func1(); // выведет 2
func2(); // выведет 3

papka 2
function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test()();

let func1 = func;
let func2 = func;
func1(); // выведет 0
func2(); // выведет 1
func1(); // выведет 2
func2(); // выведет 3

papka 3
function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test();

let func1 = func();
let func2 = func();
func1(); // выведет 0
func2(); // выведет 0
func1(); // выведет 1
func2(); // выведет 1

task Ex246
papka 1
!function() {
    console.log('!');
}();
papka 2
+function() {
    console.log('!');
}();

task Ex247
papka 1
let result = function() {
    return '!';
}();

console.log(result);

papka 2
let result = function() {
    return '!';
};

console.log(result);

papka 3
let result = function() {
    return '!';
};

console.log(result());

task Ex248
papka 1
let result = function() { return 1; }() + function() { return 2; }();
console.log(result);


task Ex250
papka 1
(function(num1, num2) {
    console.log(num1 + num2);
})(1, 2);

task Ex251
papka 1
(function() {
    return function() {
        console.log('!');
    };
})()()();
papka 2
(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    };
})(1)(2);
papka 3
(function(num1) {
    return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3);
        };
    };
})(1)(2)(3);
task Ex252
papka 1
// Код 1
let result1 = 1
+function() {
    return 2;
}();

console.log(result1); // выведет 3

// Код 2
let result2 = 1;
+function() {
    return 2;
}();

console.log(result2); // выведет 1

task Ex253
papka 1
// Код 1
let str1 = 'str';

(function() {
    console.log(1);
})();

// Код 2
let str2 = 'str'

;(function() {
    console.log(1);
})();

task Ex254
papka 1
// Реализация счетчика
let counter1 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter1(); //выведет 1
counter1(); //выведет 2
counter1(); //выведет 3
// ...

// Для второго счетчика необходимо создать отдельный экземпляр
let counter2 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter2(); //выведет 1
counter2(); //выведет 2
counter2(); //выведет 3
// ...

papka 2
// Модификация счетчика, чтобы считал до 5, а потом начинал сначала
let limitedCounter = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num = (num % 5) + 1;
    }
})();

limitedCounter(); //выведет 1
limitedCounter(); //выведет 2
limitedCounter(); //выведет 3
limitedCounter(); //выведет 4
limitedCounter(); //выведет 5
limitedCounter(); //выведет 1
// ...

task Ex255
papka 1
let i = 1;

function func() {
    console.log(i);
    i++;

    if (i <= 10) {
        func(); // здесь функция вызывает сама себя
    }
}

func();

task Ex256
papka 1
// Код без рекурсии, с использованием метода shift
function func(arr) {
    console.log(arr.shift()); // выведет 1
    console.log(arr); // выведет [2, 3] - массив уменьшился

    console.log(arr.shift()); // выведет 2
    console.log(arr); // выведет [3] - массив уменьшился

    console.log(arr.shift()); // выведет 3
    console.log(arr); // выведет [] - массив пуст
}

func([1, 2, 3]);

// Код с использованием рекурсии
function funcRecursive(arr) {
    console.log(arr.shift(), arr);

    if (arr.length !== 0) {
        funcRecursive(arr);
    }
}

funcRecursive([1, 2, 3]);

// Задача
let arr = [1, 2, 3, 4, 5];

function printArrayElements(arr) {
    console.log(arr.shift());

    if (arr.length !== 0) {
        printArrayElements(arr);
    }
}

printArrayElements(arr);

task Ex257
papka 1
// Функция для нахождения суммы элементов массива с использованием рекурсии
function getSum(arr) {
    let sum = arr.shift();

    if (arr.length !== 0) {
        sum += getSum(arr);
    }

    return sum;
}

console.log(getSum([1, 2, 3]));

// Задача
let arr = [1, 2, 3, 4, 5];

function getSumOfSquares(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const square = arr.shift() ** 2;

    return square + getSumOfSquares(arr);
}

console.log(getSumOfSquares(arr));

task Ex258
papka 1
// Функция для вывода примитивных элементов многомерного массива
function printPrimitives(arr) {
    for (let elem of arr) {
        if (typeof elem === 'object') {
            // Элемент - массив или объект
            printPrimitives(elem);
        } else {
            // Элемент - примитив
            console.log(elem);
        }
    }
}

// Пример использования для многомерного массива
printPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// Задача 1
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
printPrimitives(Object.values(obj));

// Задача 2
function flattenArray(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr), []);
}

let nestedArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let flatArray = flattenArray(nestedArray);
console.log(flatArray);

task Ex259
papka 1
// Функция для нахождения суммы примитивных элементов многомерного массива
function sumOfPrimitives(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (typeof elem === 'object') {
            sum += sumOfPrimitives(elem);
        } else {
            sum += elem;
        }
    }
    return sum;
}

// Пример использования для многомерного массива
console.log(sumOfPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// Задача 1
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(sumOfPrimitives(Object.values(obj)));

// Задача 2
function concatenateStrings(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc + concatenateStrings(curr) : acc + curr, '');
}

let nestedStringsArray = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
let concatenatedString = concatenateStrings(nestedStringsArray);
console.log(concatenatedString);

task Ex260
papka 1
// Функция для добавления знака '!' к элементам массива
function addExclamation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = addExclamation(arr[i]);
        } else {
            arr[i] = arr[i] + '!';
        }
    }
    return arr;
}

// Пример использования для многомерного массива
console.log(addExclamation([1, [2, 7, 8], [3, 4, [5, 6]]]));

// Задача
function squareNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = squareNumbers(arr[i]);
        } else if (typeof arr[i] === 'number') {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}

let multidimensionalArray = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareNumbers(multidimensionalArray));

task Ex261
papka 1
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

let numbers = [4, 9, 16, 25];
let squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);


papka 2
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let strings = ['apple', 'orange', 'banana'];
let stringsWithExclamation = strings.map(str => str + '!');
console.log(stringsWithExclamation);


papka 3
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let strings = ['hello', 'world', 'javascript'];
let reversedStrings = strings.map(str => str.split('').reverse().join(''));
console.log(reversedStrings);


papka 4
// Дан следующий массив:

let arr = ['123', '456', '789'];

// Используя метод map преобразуйте этот массив в следующий:

let transformedArray = arr.map(str => str.split('').map(Number));
console.log(transformedArray);

papka 5
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let numbers = [2, 4, 6, 8, 10];
let multipliedByIndex = numbers.map((num, index) => num * index);
console.log(multipliedByIndex);

papka 6
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение квадрата этого элемента.

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

papka 7
// Дан многомерный массив произвольного уровня вложенности. Используя метод map преобразуйте все элементы этого массива в одномерный массив.

let multidimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flattenedArray = multidimensionalArray.map(arr => arr.flat());
console.log(flattenedArray);

papka 8
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

let numbers = [4, 9, 16, 25];
let squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);

papka 9
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let strings = ['apple', 'orange', 'banana'];
let stringsWithExclamation = strings.map(str => str + '!');
console.log(stringsWithExclamation);

papka 10
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let strings = ['hello', 'world', 'javascript'];
let reversedStrings = strings.map(str => str.split('').reverse().join(''));
console.log(reversedStrings);

papka 11
// Дан следующий массив:

let arr = ['123', '456', '789'];

// Используя метод map преобразуйте этот массив в следующий:

let transformedArray = arr.map(str => str.split('').map(Number));
console.log(transformedArray);

papka 12
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let numbers = [2, 4, 6, 8, 10];
let multipliedByIndex = numbers.map((num, index) => num * index);
console.log(multipliedByIndex);

task Ex262
papka 1
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

numbers.forEach(function(num) {
    sumOfSquares += num * num;
});

console.log(sumOfSquares);

task Ex263
papka 1
// Дан массив с числами. Оставьте в нем только положительные числа.

let numbers = [-1, 2, -3, 4, -5];
let positiveNumbers = numbers.filter(function(num) {
    return num > 0;
});

console.log(positiveNumbers);

papka 2
// Дан массив с числами. Оставьте в нем только отрицательные числа.

let numbers = [-1, 2, -3, 4, -5];
let negativeNumbers = numbers.filter(function(num) {
    return num < 0;
});

console.log(negativeNumbers);

papka 3
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let numbers = [2, 5, 12, -3, 8, 0, 15];
let filteredNumbers = numbers.filter(function(num) {
    return num > 0 && num < 10;
});

console.log(filteredNumbers);

papka 4
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let strings = ['apple', 'banana', 'orange', 'kiwi'];
let longStrings = strings.filter(function(str) {
    return str.length > 5;
});

console.log(longStrings);

papka 5
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter(function(num, index) {
    return num * index < 30;
});

console.log(filteredNumbers);

papka 6
// Дан массив, в нем могут быть обычные элементы и подмассивы. Оставьте в нем только обычные элементы.

let mixedArray = [1, 2, [3, 4], 5, [6, 7]];
let flatArray = mixedArray.filter(function(elem) {
    return !Array.isArray(elem);
});

console.log(flatArray);

task Ex264
papka 1
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log(allPositive);

papka 2
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.every(function(num, index) {
    return num * index < 30;
});

console.log(result);

task Ex265
papka 1
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let numbers = [-2, 0, 5, -8, 10];
let hasPositive = numbers.some(function(num) {
    return num > 0;
});

console.log(hasPositive);

papka 2
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.some(function(num, index) {
    return num * index > 30;
});

console.log(result);

task Ex266
papka 1
// find: Дан массив объектов. Найдите объект с определенным значением свойства.

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

let user = users.find(function(person) {
    return person.id === 2;
});

console.log(user);

papka 2
// findIndex: Дан массив чисел. Найдите индекс элемента с определенным значением.

let numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex(function(num) {
    return num === 3;
});

console.log(index);

papka 3
// findLast: Дан массив объектов. Найдите последний объект с определенным значением свойства.

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 2, name: 'Alice' }
];

let lastUser = users.findLast(function(person) {
    return person.id === 2;
});

console.log(lastUser);

papka 4
// findLastIndex: Дан массив чисел. Найдите индекс последнего элемента с определенным значением.

let numbers = [1, 2, 3, 4, 2, 5];

let lastIndex = numbers.findLastIndex(function(num) {
    return num === 2;
});

console.log(lastIndex);

task Ex267
papka 1
// Использование оператора spread для передачи массива в функцию

let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

let sum = func(...arr);
console.log(sum);

task Ex2688
// Использование spread в функции
papka 1
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
    return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));

task Ex269
papka 1
// Экстремальные значения массива через spread

let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);

console.log(min);

task Ex270
// Оператор spread и слияние массивов

papka 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr);
// Выведет ['a', 1, 2, 3, 'b', 'c', 4, 5, 6]

papka 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);
// Выведет ['a', 1, 2, 3, 1, 2, 3, 'b', 'c']

papka 3
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let arr = ['a', 'b', 'c', ...arr2];
console.log(arr);
// Выведет ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]

papka 4
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];

let arr = [0, ...arr3];
console.log(arr);
// Выведет [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

papka 5
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);
// Выведет [1, 2, 3]

task Ex2711
// Оператор spread для строк в JavaScript

papka 1
let arr = [...'12345'];
console.log(arr);
// Выведет массив ['1', '2', '3', '4', '5']

papka 2
let arr = ['a', ...'12345'];
console.log(arr);
// Выведет массив ['a', '1', '2', '3', '4', '5']

papka 3
let arr = [...'12345', ...'56789'];
console.log(arr);
// Выведет массив ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']

papka 4
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];
console.log(arr2);
// Выведет массив ['a', 'b', 'c', '1', '2', '3', '4', '5']

task Ex272
papka 1
// Функция, находящая сумму чисел с помощью операторов rest и spread в JavaScript

// Пример 1
function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

let result = func(1, 2, 3);
console.log(result); // выведет 6

// Пример 2
function average(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}

console.log(average(1, 2, 3));      // выведет 2
console.log(average(1, 2, 3, 4));   // выведет 2.5
console.log(average(1, 2, 3, 4, 5)); // выведет 3

task Ex273
papka 1
// Пример 2:
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr2;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);

task Ex274
papka 1
  function func2() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
  }
  
  let [name, surname, department, position, salary] = func2();
  
task Ex275
papka 1
// Пример 2:
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [ , , department, position] = arr2;

task Ex276
papka 1
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name2, surname2, ...info2] = arr2;

console.log(name2);    // выведет 'John'
console.log(surname2); // выведет 'Smit'
console.log(info2);    // выведет ['development', 'programmer', 2000]

task Ex277
papka 1
// Пример 3:
let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;

console.log(name);       // выведет 'John'
console.log(surname);    // выведет 'Smit'
console.log(department); // выведет 'development'
console.log(position);   // выведет 'trainee'

task Ex278
papka 1
// Модифицированный код
let arrModified = [undefined, undefined, 31]; // Пример массива без значения для месяца и года

function getCurrentMonth() {
    return (new Date()).getMonth() + 1; // Текущий месяц в JavaScript представлен числами от 0 до 11, поэтому прибавляем 1
}

let [yearModified = (new Date()).getFullYear(), monthModified = getCurrentMonth(), dayModified] = arrModified;

console.log(yearModified); // выведет текущий год, так как для года значение отсутствует
console.log(monthModified); // выведет текущий месяц, так как для месяца значение отсутствует
console.log(dayModified); // выведет 31, так как это значение было указано в массиве

task Ex279
papka 1
// Деструктуризация объектов в JavaScript

// Пример с деструктуризацией объекта
let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year, month, day } = obj;

console.log(year);   // выведет 2025
console.log(month);  // выведет 12
console.log(day);    // выведет 31

// Пример с предварительным объявлением переменных
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let color, width, height;

({ color, width, height } = options);

console.log(color);  // выведет 'red'
console.log(width);  // выведет 400
console.log(height); // выведет 500

task Ex280
papka 1
// Имена переменных при деструктуризации объектов в JavaScript

// Пример с измененными именами переменных
let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year: y, month: m, day: d } = obj;

console.log(y); // выведет 2025
console.log(m); // выведет 12
console.log(d); // выведет 31

// Пример с измененными именами переменных и предварительным объявлением переменных
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let c, w, h;

({ color: c, width: w, height: h } = options);

console.log(c);  // выведет 'red'
console.log(w);  // выведет 400
console.log(h);  // выведет 500

task Ex281
papka 1
// Значения по умолчанию при деструктуризации объектов в JavaScript

// Пример с установкой значения по умолчанию для переменной year
let obj = {
    month: 12,
    day: 31,
};

let { year = 2025, month, day } = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

// Пример с установкой значения по умолчанию для переменной color
let options = {
    width: 400,
    height: 500,
};

let { color = 'black', width, height } = options;

console.log(color); // выведет 'black'
console.log(width); // выведет 400
console.log(height); // выведет 500

task Ex282
papka 1
// Переменные и значения по умолчанию в JavaScript

// Пример с изменением названий переменных и установкой значения по умолчанию для переменной y
let obj = {
    month: 12,
    day: 31,
};

let { year: y = 2025, month, day } = obj;

console.log(y);    // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31

// Пример с изменением названий переменных и установкой значения по умолчанию для переменной c
let options = {
    width: 400,
    height: 500,
};

let { color: c = 'black', width: w, height: h } = options;

console.log(c); // выведет 'black'
console.log(w); // выведет 400
console.log(h); // выведет 500

task Ex283
papka 1
function func([name, surname, department, position, salary]) {
    // Деструктуризация параметра employee
    console.log(name);       // выведет 'John'
    console.log(surname);    // выведет 'Smit'
    console.log(department); // выведет 'development'
    console.log(position);   // выведет 'programmer'
    console.log(salary);     // выведет 2000
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

papka 2
function func([name, surname, info]) {
    // Деструктуризация параметра employee
    console.log(name);    // выведет 'John'
    console.log(surname); // выведет 'Smit'
    console.log(info);    // выведет 'development'
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

papka 3
function func([name, surname, department], position = 'джуниор') {
    // Деструктуризация параметра employee и значение по умолчанию для position
    console.log(name);       // выведет 'John'
    console.log(surname);    // выведет 'Smit'
    console.log(department); // выведет 'development'
    console.log(position);   // выведет 'джуниор'
}

func(['John', 'Smit', 'development']);

papka 4
function func(department, [name, surname], [year, month, day]) {
    // Деструктуризация параметров employee и hired
    console.log(name);    // выведет 'John'
    console.log(surname); // выведет 'Smit'
    console.log(year);    // выведет 2018
    console.log(month);   // выведет 12
    console.log(day);     // выведет 31
}

func('development', ['John', 'Smit'], [2018, 12, 31]);

task Ex284
papka 1
function func({ color, width, height }) {
    // Деструктуризация параметра options
    console.log(color);  // выведет 'red'
    console.log(width);  // выведет 400
    console.log(height); // выведет 500
}

func({ color: 'red', width: 400, height: 500 });
papka 2
function func(options) {
    // Без деструктуризации
    let color;
    if (options.color !== undefined) {
        color = options.color;
    } else {
        color = 'black';
    }
    let width  = options.width;
    let height = options.height;
}

func({ color: 'red', width: 400, height: 500 });

task Ex285
papka 1
// Выведите на экран текущий день.
let date = new Date();
console.log(date.getDate());

// Выведите на экран текущий месяц.
console.log(date.getMonth() + 1); // Добавляем 1, так как месяцы начинаются с 0

// Выведите на экран текущий год.
console.log(date.getFullYear());

task Ex286
papka 1
let date = new Date();

console.log(
  addZero(date.getHours()) + ':' +
  addZero(date.getMinutes()) + ':' +
  addZero(date.getSeconds()) + ' ' +
  addZero(date.getDate()) + '.' +
  addZero(date.getMonth() + 1) + '.' + // Добавляем 1, так как месяцы начинаются с 0
  date.getFullYear()
);
task Ex287
papka 1
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res); // получим строку '31.12.2025'

task Ex288
papka 1
// Создаем объект с датой за определенный момент времени (5 ноября 2025 года, 12:59:59)
let specificDate = new Date(2025, 10, 5, 12, 59, 59);

// Выводим день недели для указанной даты
let dayOfWeek = specificDate.getDay();
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(`День недели для указанной даты: ${daysOfWeek[dayOfWeek]}`);

// Создаем объект с датой для вашего дня рождения
let birthdayDate = new Date(2005, 7 - 1, 11); 
let birthdayDayOfWeek = birthdayDate.getDay();

// Выводим день недели для дня рождения
console.log(`День недели для вашего дня рождения: ${daysOfWeek[birthdayDayOfWeek]}`);

task Ex289
papka 1
// Получаем текущий момент времени в формате timestamp
let currentDate = new Date();
console.log(`Текущий timestamp: ${currentDate.getTime()}`);

// Получаем timestamp для 1 января 2025 года
let specificDate = new Date(2025, 0, 1); // Месяцы в JavaScript начинаются с 0 (январь - 0)
console.log(`Timestamp для 1 января 2025 года: ${specificDate.getTime()}`);

task Ex290
papka 1
// Заданная дата 1 марта 1988 года
let startDate = new Date(1988, 2, 1); // Месяцы в JavaScript начинаются с 0 (март - 2)
// Заданная дата 10 января 2000 года
let endDate = new Date(2000, 0, 10); // Месяцы в JavaScript начинаются с 0 (январь - 0)

// Разница между датами в миллисекундах
let dateDiff = endDate.getTime() - startDate.getTime();

// Вывод разницы в днях
console.log(`Разница в днях: ${dateDiff / (1000 * 60 * 60 * 24)}`);

// Вывод разницы в месяцах
console.log(`Разница в месяцах: ${dateDiff / (1000 * 60 * 60 * 24 * 30)}`);

// Разница между вашим днем рождения и текущим моментом времени
let birthday = new Date(2005, 7 - 1, 11); // Замените ГОД_РОЖДЕНИЯ, МЕСЯЦ_РОЖДЕНИЯ и ДЕНЬ_РОЖДЕНИЯ на свои значения
let currentDate = new Date();

// Разница между днями рождения и текущим моментом времени в месяцах
let birthdayDiff = currentDate.getTime() - birthday.getTime();
console.log(`Разница в месяцах с момента вашего рождения: ${birthdayDiff / (1000 * 60 * 60 * 24 * 30)}`);


task Ex291
papka 1
// Заданные даты
let startDate = new Date(2000, 8, 1); // 1 сентября 2000 года
let endDate = new Date(2010, 1, 15);  // 15 февраля 2010 года

// Разница между датами в миллисекундах
let dateDiffMilliseconds = endDate - startDate;
console.log(`Разница в миллисекундах: ${dateDiffMilliseconds}`);

// Разница в днях
let dateDiffDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(`Разница в днях: ${dateDiffDays}`);

// Разница в месяцах
let dateDiffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
console.log(`Разница в месяцах: ${dateDiffMonths}`);

// Разница в годах
let dateDiffYears = endDate.getFullYear() - startDate.getFullYear();
console.log(`Разница в годах: ${dateDiffYears}`);

task Ex292
papka 1
// Заданные моменты времени
let date1 = new Date(2018, 1, 35);
console.log(`Дата для момента времени 1: ${date1}`);

let date2 = new Date(2018, 15, 1);
console.log(`Дата для момента времени 2: ${date2}`);

let date3 = new Date(2018, 3, 31);
console.log(`Дата для момента времени 3: ${date3}`);

let date4 = new Date(2018, 1, 31);
console.log(`Дата для момента времени 4: ${date4}`);

let date5 = new Date(2018, 12, 33);
console.log(`Дата для момента времени 5: ${date5}`);

let date6 = new Date(2018, 33, 33);
console.log(`Дата для момента времени 6: ${date6}`);

let date7 = new Date(2018, 5, 0);
console.log(`Дата для момента времени 7: ${date7}`);

let date8 = new Date(2018, 0, 0);
console.log(`Дата для момента времени 8: ${date8}`);

let date9 = new Date(2018, -12, -33);
console.log(`Дата для момента времени 9: ${date9}`);

let date10 = new Date(2018, 0, 1, 23, 0, 60);
console.log(`Дата для момента времени 10: ${date10}`);

let date11 = new Date(2018, 0, 1, 23, 60, 0);
console.log(`Дата для момента времени 11: ${date11}`);

let date12 = new Date(2018, 0, 1, 100, 100, 100);
console.log(`Дата для момента времени 12: ${date12}`);

task Ex293
papka 1
// Функция для определения последнего дня месяца
function getLastDayOfMonth(year, month) {
    // Используем нулевой день следующего месяца
    let lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  }
  
  // Пример использования функции для марта 2020 года
  let daysInMarch2020 = getLastDayOfMonth(2020, 2);
  console.log(`Количество дней в марте 2020 года: ${daysInMarch2020}`);
  
  // Определение дня недели для последнего дня пятого месяца 2025 года
  let lastDayOfMay2025 = getLastDayOfMonth(2025, 4);
  let dayOfWeek = new Date(2025, 4, lastDayOfMay2025).getDay();
  let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
  console.log(`День недели для последнего дня мая 2025 года: ${daysOfWeek[dayOfWeek]}`);
  
task Ex294
papka 1
// Функция для определения, является ли год високосным
function isLeap(year) {
    let leapYear = new Date(year, 1, 29);
    return leapYear.getDate() === 29;
  }
  
  // Пример использования функции для определения високосного года
  let yearToCheck = 2020;
  if (isLeap(yearToCheck)) {
    console.log(`${yearToCheck} год - високосный`);
  } else {
    console.log(`${yearToCheck} год - обычный`);
  }
  
task Ex295
papka 1
// Функция для проверки корректности даты
function checkDate(year, month, day) {
    let date = new Date(year, month, day);
  
    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  }
  
  // Пример использования функции для 31 января и 32 января
  console.log(checkDate(2025, 0, 31)); // выведет true
  console.log(checkDate(2025, 0, 32)); // выведет false
  
task Ex296
papka 1
// Получение дня недели для 31 декабря текущего года
let now = new Date(); // Получаем текущий момент времени
let lastDayOfYear = new Date(now.getFullYear(), 11, 31); // Создаем объект с датой 31 декабря текущего года

let dayOfWeek = lastDayOfYear.getDay(); // Определяем день недели
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(`День недели для 31 декабря текущего года: ${daysOfWeek[dayOfWeek]}`);

task Ex297
papka 1
// Получение дня недели для первого числа предыдущего месяца
let now = new Date();

// Учтем возможные проблемы с январем (месяц с номером 0)
let month = now.getMonth() === 0 ? 11 : now.getMonth() - 1;

let date = new Date(now.getFullYear(), month, 1);
console.log(date.getDay());

// Определение дня недели для такого же дня месяца месяц назад
let lastMonthSameDay = new Date(now.getFullYear(), now.getMonth(), 1);
lastMonthSameDay.setMonth(lastMonthSameDay.getMonth() - 1);
console.log(`День недели месяц назад для такого же дня месяца: ${lastMonthSameDay.getDay()}`);

task Ex298
papka 1
// Получение дня недели для 31 декабря следующего года
let now = new Date();
let nextYearLastDay = new Date(now.getFullYear() + 1, 11, 31);
let dayOfWeekNextYear = nextYearLastDay.getDay();
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(`День недели для 31 декабря следующего года: ${daysOfWeek[dayOfWeekNextYear]}`);

// Определение дня недели через год для такой же даты, как сегодня
let nextYearSameDay = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
let dayOfWeekNextYearSameDay = nextYearSameDay.getDay();
console.log(`День недели через год для такой же даты: ${daysOfWeek[dayOfWeekNextYearSameDay]}`);

// Определение дня недели год назад для такой же даты, как сегодня
let lastYearSameDay = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let dayOfWeekLastYearSameDay = lastYearSameDay.getDay();
console.log(`День недели год назад для такой же даты: ${daysOfWeek[dayOfWeekLastYearSameDay]}`);

task Ex299
papka 1
// Получение дня недели для первого числа предыдущего месяца
let now = new Date();

// Учтем возможные проблемы с январем (месяц с номером 0)
let month = now.getMonth() === 0 ? 11 : now.getMonth() - 1;

let date = new Date(now.getFullYear(), month, 1);
console.log(`День недели для первого числа предыдущего месяца: ${date.getDay()}`);

// Определение дня недели месяц назад для такого же дня месяца
let lastMonthSameDay = new Date(now.getFullYear(), now.getMonth(), 1);
lastMonthSameDay.setMonth(lastMonthSameDay.getMonth() - 1);
console.log(`День недели месяц назад для такого же дня месяца: ${lastMonthSameDay.getDay()}`);

task Ex300
papka 1
// Определение разности в миллисекундах между текущим моментом и заданным моментом
let date1 = new Date();
let date2 = new Date(2015, 4, 25, 12, 59, 59);

console.log(`Разность в миллисекундах: ${date1 - date2}`);

// Определение разности в днях между 1 января и 10 сентября текущего года
let currentYear = new Date().getFullYear();
let january1 = new Date(currentYear, 0, 1);
let september10 = new Date(currentYear, 8, 10);

let daysDifference1 = Math.floor((september10 - january1) / (1000 * 60 * 60 * 24));
console.log(`Разность в днях между 1 января и 10 сентября текущего года: ${daysDifference1} дней`);

// Определение разности в днях между 20 числом текущего месяца и 10 числом следующего
let currentMonth = new Date().getMonth();
let day20CurrentMonth = new Date(currentYear, currentMonth, 20);
let day10NextMonth = new Date(currentYear, currentMonth + 1, 10);

let daysDifference2 = Math.floor((day10NextMonth - day20CurrentMonth) / (1000 * 60 * 60 * 24));
console.log(`Разность в днях между 20 числом текущего месяца и 10 числом следующего: ${daysDifference2} дней`);
task Ex301
papka 1
// Определение полудня вчерашнего дня
let now = new Date();
let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);

// Разница в часах между вчерашним полднем и текущим моментом времени
let hoursDifference = (now - yesterdayNoon) / (1000 * 60 * 60);

console.log(`Количество часов между вчерашним полднем и текущим моментом времени: ${hoursDifference} часов`);

task Ex302
papka 1
// Определение начала текущего дня
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Разница в часах между началом текущего дня и текущим моментом времени
let hoursDifference = (now - startOfDay) / (1000 * 60 * 60);

console.log(`Количество часов между началом текущего дня и текущим моментом времени: ${hoursDifference} часов`);

task Ex303
papka 1
// Определение конца текущего дня
let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

// Разница в часах между текущим моментом времени и концом текущего дня
let hoursRemaining = (endOfDay - now) / (1000 * 60 * 60);

console.log(`Осталось ${hoursRemaining} часов до конца текущего дня`);

task Ex304
papka 1
for (let year = 2000; year <= new Date().getFullYear(); year++) {
    let date = new Date(year, 0, 1);

    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(year + '-01-01');
    }
}

task Ex305
papka 1
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondsPassed = Math.floor((now - startOfDay) / 1000);
console.log(secondsPassed);

papka 2
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - 1;
let secondsLeft = Math.floor((endOfDay - now) / 1000);
console.log(secondsLeft);

papka 3
let newYear = new Date(now.getFullYear() + 1, 0, 1);
let daysLeftToNewYear = Math.floor((newYear - now) / (1000 * 60 * 60 * 24));
console.log(daysLeftToNewYear);

papka 4
let friday13Count = 0;
for (let month = 0; month <= 11; month++) {
    let date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() === 5) {
        friday13Count++;
    }
}
console.log(friday13Count);

papka 5
let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log(threeMonthsAgo.getFullYear());

papka 6
let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log(lastDayOfMonth.getDay());

papka 7
let isLeapCurrentYear = (now.getFullYear() % 4 === 0 && now.getFullYear() % 100 !== 0) || (now.getFullYear() % 400 === 0);
console.log(isLeapCurrentYear);

papka 8
let previousLeapYear = now.getFullYear();
while (!((previousLeapYear % 4 === 0 && previousLeapYear % 100 !== 0) || (previousLeapYear % 400 === 0))) {
    previousLeapYear--;
}
console.log(previousLeapYear);

papka 9
let nextLeapYear = now.getFullYear();
do {
    nextLeapYear++;
} while (!((nextLeapYear % 4 === 0 && nextLeapYear % 100 !== 0) || (nextLeapYear % 400 === 0)));
console.log(nextLeapYear);

task Ex306
papka 1
let date1 = '2020-11-31';
let date2 = '2020-12-01';

if (date1 > date2) {
    console.log('Дата 1 больше даты 2');
} else if (date1 < date2) {
    console.log('Дата 2 больше даты 1');
} else {
    console.log('Даты равны');
}

task Ex307
papka 1
let date1 = '09-21';
let date2 = '09-23';

if (date1 > date2) {
    console.log('Дата 1 больше даты 2');
} else if (date1 < date2) {
    console.log('Дата 2 больше даты 1');
} else {
    console.log('Даты равны');
}

task Ex308
papka 1
let date = '08-20';

if (date >= '01-01' && date <= '03-08') {
    console.log('1 промежуток');
}

if (date >= '03-09' && date <= '06-17') {
    console.log('2 промежуток');
}

if (date >= '06-18' && date <= '12-31') {
    console.log('3 промежуток');
}

// Знаки Зодиака (пример)
if ((date >= '03-21' && date <= '04-19') || (date >= '09-23' && date <= '10-22')) {
    console.log('Овен или Весы');
}
// Продолжайте аналогично для других знаков Зодиака

task Ex309
papka 1
let currentDate = new Date(); // объект с текущим моментом времени
let noonDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0, 0); // объект с полднем текущего дня

console.log(currentDate > noonDate ? 'Полдень уже прошел' : 'Полдень еще не наступил');

papka 2
let currentDate2 = new Date(); // объект с текущим моментом времени
let halfMonthDate = new Date(currentDate2.getFullYear(), currentDate2.getMonth(), 15); // объект с 15 числом текущего месяца

console.log(currentDate2 > halfMonthDate ? 'Прошла уже половина месяца' : 'Половина месяца еще не наступила');

task Ex310
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<!-- Ваши HTML теги и содержимое страницы -->
		
		<script>
			// Ваш JavaScript код
		</script>
	</body>
</html>

task Ex311
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<div id="elem">text</div>
		
		<script>
			// Ваш JavaScript код
		</script>
	</body>
</html>

task Ex312
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<input id="button" type="submit">
		
		<p id="elem1">1</p>
		<p id="elem2">2</p>
		<p id="elem3">3</p>

		<script>
			let button = document.querySelector('#button');
			console.log(button);

			let elem1 = document.querySelector('#elem1');
			let elem2 = document.querySelector('#elem2');
			let elem3 = document.querySelector('#elem3');

			console.log(elem1.textContent);
			console.log(elem2.textContent);
			console.log(elem3.textContent);
		</script>
	</body>
</html>

task Ex313
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<div id="parent">
			<input value="1">
			<input value="2">
		</div>

		<div id="block">
			<p>1</p>
			<p>2</p>
		</div>

		<div class="block">
			<p>1</p>
			<p>2</p>
		</div>

		<p class="www">text</p>
		<p class="www">text</p>

		<script>
			// Задание 1
			let elem1 = document.querySelector('#block p');
			console.log(elem1);

			// Задание 2
			let elem2 = document.querySelector('.block p');
			console.log(elem2);

			// Задание 3
			let elem3 = document.querySelector('.www');
			console.log(elem3);
		</script>
	</body>
</html>

task Ex314
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<input id="button1" type="submit">
		<input id="button2" type="submit">
		<input id="button3" type="submit">

		<script>
			let button1 = document.querySelector('#button1');
			let button2 = document.querySelector('#button2');
			let button3 = document.querySelector('#button3');

			button1.addEventListener('click', function() {
				console.log(1);
			});

			button2.addEventListener('click', function() {
				console.log(2);
			});

			button3.addEventListener('click', function() {
				console.log(3);
			});
		</script>
	</body>
</html>

task Ex315
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<input id="button1" type="submit" value="button1">
		<input id="button2" type="submit" value="button2">

		<script>
			function func1() {
				console.log(1);
			}

			function func2() {
				console.log(2);
			}

			let button1 = document.querySelector('#button1');
			let button2 = document.querySelector('#button2');

			button1.addEventListener('click', func1);
			button2.addEventListener('click', func2);
		</script>
	</body>
</html>

task Ex316
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<p id="elem1">text</p>
		<p id="elem2">text</p>
		<p id="elem3">text</p>
		<p id="elem4">text</p>
		<p id="elem5">text</p>

		<script>
			function func() {
				console.log('message');
			}

			let elem1 = document.querySelector('#elem1');
			let elem2 = document.querySelector('#elem2');
			let elem3 = document.querySelector('#elem3');
			let elem4 = document.querySelector('#elem4');
			let elem5 = document.querySelector('#elem5');

			elem1.addEventListener('click', func);
			elem2.addEventListener('click', func);
			elem3.addEventListener('click', func);
			elem4.addEventListener('click', func);
			elem5.addEventListener('click', func);
		</script>
	</body>
</html>

task Ex317
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<p id="elem">text</p>

		<script>
			function func1() {
				console.log('1');
			}

			function func2() {
				console.log('2');
			}

			function func3() {
				console.log('3');
			}

			let elem = document.querySelector('#elem');

			elem.addEventListener('click', func1);
			elem.addEventListener('click', func2);
			elem.addEventListener('click', func3);
		</script>
	</body>
</html>

task Ex318
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<button id="myButton">Click me</button>

		<script>
			let button = document.querySelector('#myButton');

			button.addEventListener('dblclick', function() {
				console.log('Double click!');
			});

			button.addEventListener('mouseover', function() {
				console.log('Mouse over!');
			});

			button.addEventListener('mouseout', function() {
				console.log('Mouse out!');
			});

			button.addEventListener('mouseover', function() {
				console.log('Mouse over!');
			});

			button.addEventListener('mouseout', function() {
				console.log('Mouse out!');
			});
		</script>
	</body>
</html>

task Ex319
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<p id="paragraph">Initial Text</p>
		<button id="readButton">Read Text</button>
		<button id="changeButton">Change Text</button>
		<button id="sumButton">Sum Numbers</button>
		<button id="sumDivButton">Sum in Div</button>
		<button id="incrementButton">Increment Number</button>
		<button id="addExclamationButton">Add Exclamation Mark</button>

		<script>
			let paragraph = document.querySelector('#paragraph');
			let readButton = document.querySelector('#readButton');
			let changeButton = document.querySelector('#changeButton');
			let sumButton = document.querySelector('#sumButton');
			let sumDivButton = document.querySelector('#sumDivButton');
			let incrementButton = document.querySelector('#incrementButton');
			let addExclamationButton = document.querySelector('#addExclamationButton');

			readButton.addEventListener('click', function() {
				console.log(paragraph.textContent);
			});

			changeButton.addEventListener('click', function() {
				paragraph.textContent = 'New Text';
			});

			sumButton.addEventListener('click', function() {
				let numbers = document.querySelectorAll('p[data-number]');
				let sum = 0;

				numbers.forEach(function(number) {
					sum += parseInt(number.textContent);
				});

				console.log('Sum:', sum);
			});

			sumDivButton.addEventListener('click', function() {
				let numbers = document.querySelectorAll('p[data-number]');
				let div = document.querySelector('#sumDiv');
				let sum = 0;

				numbers.forEach(function(number) {
					sum += parseInt(number.textContent);
				});

				div.textContent = 'Sum: ' + sum;
			});

			incrementButton.addEventListener('click', function() {
				let number = document.querySelector('#incrementNumber');
				number.textContent = parseInt(number.textContent) + 1;
			});

			addExclamationButton.addEventListener('click', function() {
				paragraph.textContent += '!';
			});
		</script>
	</body>
</html>

task Ex320
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<p id="paragraph"><b>Initial Text</b></p>
		<button id="readButton">Read HTML</button>
		<button id="changeButton">Change to Bold</button>

		<script>
			let paragraph = document.querySelector('#paragraph');
			let readButton = document.querySelector('#readButton');
			let changeButton = document.querySelector('#changeButton');

			readButton.addEventListener('click', function() {
				console.log(paragraph.innerHTML);
			});

			changeButton.addEventListener('click', function() {
				paragraph.innerHTML = '<b>New Text</b>';
			});
		</script>
	</body>
</html>

task Ex321
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<input id="elem" type="email">
		<button id="showTypeButton">Show Type</button>
		<button id="changeTypeButton">Change Type</button>

		<script>
			let elem = document.querySelector('#elem');
			let showTypeButton = document.querySelector('#showTypeButton');
			let changeTypeButton = document.querySelector('#changeTypeButton');

			showTypeButton.addEventListener('click', function() {
				alert(elem.type);
			});

			changeTypeButton.addEventListener('click', function() {
				elem.type = 'submit';
			});
		</script>
	</body>
</html>

task Ex322
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<!-- Task 1 -->
		<input id="input1" value="Initial Text">
		<button id="changeTextButton1">Change Text</button>

		<!-- task Ex2 -->
		<input id="input2" value="Input Text">
		<p id="output2"></p>
		<button id="copyTextButton">Copy Text</button>

		<!-- task Ex3 -->
		<input id="numberInput1" type="number" placeholder="Enter a number">
		<input id="squareResult" type="text" readonly>
		<button id="calculateSquareButton">Calculate Square</button>

		<!-- Task 4 -->
		<input id="swapInput1" value="First Input">
		<input id="swapInput2" value="Second Input">
		<button id="swapInputsButton">Swap Inputs</button>

		<!-- Task 5 -->
		<input id="numberInput2" type="number" placeholder="Enter a number">
		<input id="numberInput3" type="number" placeholder="Enter a number">
		<input id="numberInput4" type="number" placeholder="Enter a number">
		<input id="numberInput5" type="number" placeholder="Enter a number">
		<input id="numberInput6" type="number" placeholder="Enter a number">
		<p id="averageResult"></p>
		<button id="calculateAverageButton">Calculate Average</button>

		<script>
			// Task 1
			let elem1 = document.querySelector('#input1');
			let changeTextButton1 = document.querySelector('#changeTextButton1');

			changeTextButton1.addEventListener('click', function() {
				elem1.value = 'New Text';
			});

			// task Ex2
			let input2 = document.querySelector('#input2');
			let output2 = document.querySelector('#output2');
			let copyTextButton = document.querySelector('#copyTextButton');

			copyTextButton.addEventListener('click', function() {
				output2.textContent = input2.value;
			});

			// task Ex3
			let numberInput1 = document.querySelector('#numberInput1');
			let squareResult = document.querySelector('#squareResult');
			let calculateSquareButton = document.querySelector('#calculateSquareButton');

			calculateSquareButton.addEventListener('click', function() {
				const number = parseFloat(numberInput1.value);
				squareResult.value = isNaN(number) ? '' : Math.pow(number, 2);
			});

			// Task 4
			let swapInput1 = document.querySelector('#swapInput1');
			let swapInput2 = document.querySelector('#swapInput2');
			let swapInputsButton = document.querySelector('#swapInputsButton');

			swapInputsButton.addEventListener('click', function() {
				const temp = swapInput1.value;
				swapInput1.value = swapInput2.value;
				swapInput2.value = temp;
			});

			// Task 5
			let numberInput2 = document.querySelector('#numberInput2');
			let numberInput3 = document.querySelector('#numberInput3');
			let numberInput4 = document.querySelector('#numberInput4');
			let numberInput5 = document.querySelector('#numberInput5');
			let numberInput6 = document.querySelector('#numberInput6');
			let averageResult = document.querySelector('#averageResult');
			let calculateAverageButton = document.querySelector('#calculateAverageButton');

			calculateAverageButton.addEventListener('click', function() {
				const num1 = parseFloat(numberInput2.value) || 0;
				const num2 = parseFloat(numberInput3.value) || 0;
				const num3 = parseFloat(numberInput4.value) || 0;
				const num4 = parseFloat(numberInput5.value) || 0;
				const num5 = parseFloat(numberInput6.value) || 0;

				const average = (num1 + num2 + num3 + num4 + num5) / 5;
				averageResult.textContent = isNaN(average) ? '' : `Average: ${average}`;
			});
		</script>
	</body>
</html>

task Ex323
papka 1
<!DOCTYPE html>
<html>
	<head>
		
	</head>
	<body>
		<!-- Task 1 -->
		<input id="elem1" value="text">
		
		<!-- task Ex2 -->
		<input id="elem2" type="number">

		<!-- task Ex3 -->
		<input id="elem3" value="Initial Text">

		<script>
			// Task 1
			let elem1 = document.querySelector('#elem1');
			elem1.addEventListener('focus', function() {
				console.log(elem1.value);
			});

			// Task 2
			let elem2 = document.querySelector('#elem2');
			elem2.addEventListener('blur', function() {
				const value = parseFloat(elem2.value);
				console.log(isNaN(value) ? '' : value ** 2);
			});

			// task Ex3
			let elem3 = document.querySelector('#elem3');
			elem3.addEventListener('focus', function() {
				elem3.value = '';
			});
		</script>
	</body>
</html>

task Ex324
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<div id="elem1" class="content no-gap"></div>
	<button onclick="readClass('elem1')">Read Class</button>

	<!-- Task 2 -->
	<div id="elem2"></div>
	<button onclick="addClass('elem2', 'new-class')">Add Class</button>

	<!-- task Ex3 -->
	<div id="elem3" class="aaa bbb ccc"></div>
	<button onclick="getClassArray('elem3')">Get Class Array</button>

	<script>
		// Task 1
		function readClass(elementId) {
			let elem = document.getElementById(elementId);
			console.log(elem.className);
		}

		// Task 2
		function addClass(elementId, newClass) {
			let elem = document.getElementById(elementId);
			elem.className = newClass;
		}

		// task Ex3
		function getClassArray(elementId) {
			let elem = document.getElementById(elementId);
			let classArray = elem.className.split(' ');
			console.log(classArray);
		}
	</script>
</body>

</html>

task Ex325
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<img id="image" src="avatar.png">
	<script>
		console.log(document.querySelector('#image').src);
	</script>
</body>

</html>

task Ex326
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<img id="image" src="avatar.png" width="300" height="500">
	<script>
		// Original code
		console.log(document.querySelector('#image').src);
		console.log(document.querySelector('#image').width);
		console.log(document.querySelector('#image').height);

		// Improved code using a variable
		let image = document.querySelector('#image');
		console.log(image.src);
		console.log(image.width);
		console.log(image.height);
	</script>
</body>

</html>

task Ex327
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<input id="elem" value="text">
	<script>
		let elem = document.querySelector('#elem');

		elem.addEventListener('focus', function () {
			this.value = 1;
		});

		elem.addEventListener('blur', function () {
			this.value = 2;
		});
	</script>

	<!-- Task 2 -->
	<button id="btn">1</button>
	<script>
		let btn = document.querySelector('#btn');

		btn.addEventListener('click', function () {
			this.textContent = parseInt(this.textContent) + 1;
		});
	</script>
</body>

</html>

task Ex328
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<input id="button1" type="submit" value="text1">
	<input id="button2" type="submit" value="text2">
	<input id="button3" type="submit" value="text3">

	<script>
		let button1 = document.querySelector('#button1');
		let button2 = document.querySelector('#button2');
		let button3 = document.querySelector('#button3');

		function func() {
			console.log(this.value + '!');
		}

		button1.addEventListener('click', func);
		button2.addEventListener('click', func);
		button3.addEventListener('click', func);
	</script>

	<!-- Task 2 -->
	<input id="input1" type="text" value="2">
	<input id="input2" type="text" value="5">
	<input id="input3" type="text" value="8">

	<script>
		let input1 = document.querySelector('#input1');
		let input2 = document.querySelector('#input2');
		let input3 = document.querySelector('#input3');

		function squareOnBlur() {
			this.value = Math.pow(parseInt(this.value), 2);
		}

		input1.addEventListener('blur', squareOnBlur);
		input2.addEventListener('blur', squareOnBlur);
		input3.addEventListener('blur', squareOnBlur);
	</script>
</body>

</html>

task Ex329
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<p class="www">text1</p>
	<p class="www">text2</p>
	<p class="www">text3</p>
	<button onclick="changeText()">Change Text</button>

	<script>
		function changeText() {
			let elems = document.querySelectorAll('.www');
			for (let elem of elems) {
				elem.textContent = 'text';
			}
		}
	</script>

	<!-- Task 2 -->
	<p class="paragraph">Paragraph 1</p>
	<p class="paragraph">Paragraph 2</p>
	<p class="paragraph">Paragraph 3</p>
	<button onclick="addNumbers()">Add Numbers</button>

	<script>
		function addNumbers() {
			let elems = document.querySelectorAll('.paragraph');
			elems.forEach((elem, index) => {
				elem.textContent += ' ' + (index + 1);
			});
		}
	</script>

	<!-- task Ex3 -->
	<input type="number" id="input1" value="2">
	<input type="number" id="input2" value="5">
	<input type="number" id="input3" value="8">
	<p id="result">Result: </p>
	<button onclick="sumNumbers()">Sum Numbers</button>

	<script>
		function sumNumbers() {
			let inputs = document.querySelectorAll('input[type="number"]');
			let resultParagraph = document.getElementById('result');
			let sum = 0;
			inputs.forEach(input => {
				sum += parseInt(input.value);
			});
			resultParagraph.textContent = 'Result: ' + sum;
		}
	</script>
</body>

</html>

task Ex330
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>

	<script>
		function func() {
			console.log(this.textContent);
		}

		let paragraphs = document.querySelectorAll('p');

		for (let paragraph of paragraphs) {
			paragraph.addEventListener('click', func);
		}
	</script>

	<!-- Task 2 -->
	<input type="number" id="input1" value="2">
	<input type="number" id="input2" value="5">
	<input type="number" id="input3" value="8">

	<script>
		function increaseNumber() {
			this.value = Number(this.value) + 1;
		}

		let inputs = document.querySelectorAll('input[type="number"]');

		for (let input of inputs) {
			input.addEventListener('blur', increaseNumber);
		}
	</script>

	<!-- task Ex3 -->
	<p class="number-paragraph">2</p>
	<p class="number-paragraph">5</p>
	<p class="number-paragraph">8</p>

	<script>
		function squareNumber() {
			this.textContent = Math.pow(Number(this.textContent), 2);
		}

		let numberParagraphs = document.querySelectorAll('.number-paragraph');

		for (let paragraph of numberParagraphs) {
			paragraph.addEventListener('click', squareNumber);
		}
	</script>
</body>

</html>

task Ex331
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>

	<script>
		let divs = document.querySelectorAll('div');

		for (let div of divs) {
			div.addEventListener('click', function () {
				this.textContent++;
			});
		}
	</script>
</body>

</html>

task Ex332
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task 1 -->
	<a id="link" href="https://example.com">Click me!</a>
	<button id="button1" type="button">Add Text</button>

	<!-- Task 2 -->
	<button id="button2" type="button">Increment</button>

	<script>
		// Task 1
		let link = document.querySelector('#link');
		let button1 = document.querySelector('#button1');

		function addText() {
			link.textContent += ` (${link.getAttribute('href')})`;
			button1.removeEventListener('click', addText);
		}

		button1.addEventListener('click', addText);

		// Task 2
		let button2 = document.querySelector('#button2');
		let count = 1;

		function incrementValue() {
			button2.textContent = ++count;

			if (count === 10) {
				button2.removeEventListener('click', incrementValue);
			}
		}

		button2.addEventListener('click', incrementValue);
	</script>
</body>

</html>

task Ex333
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task -->
	<p id="paragraph1">text1</p>
	<p id="paragraph2">text2</p>
	<p id="paragraph3">text3</p>

	<script>
		let paragraphs = document.querySelectorAll('p');

		function addExclamation() {
			console.log(this.textContent);
			this.textContent += '!';
			this.removeEventListener('click', addExclamation);
		}

		for (let paragraph of paragraphs) {
			paragraph.addEventListener('click', addExclamation);
		}
	</script>
</body>

</html>

task Ex334
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task -->
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>

	<script>
		let listItems = document.querySelectorAll('li');

		for (let listItem of listItems) {
			listItem.addEventListener('click', function () {
				let currentValue = parseInt(this.textContent);
				if (currentValue < 10) {
					console.log(currentValue);
					this.textContent = currentValue + 1;
					this.removeEventListener('click', arguments.callee);
				}
			});
		}
	</script>
</body>

</html>

task Ex335
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
	<!-- Task -->
	<ul>
		<li>2000</li>
		<li>2004</li>
		<li>2021</li>
		<li>2022</li>
		<li>2025</li>
		<li>2031</li>
	</ul>

	<script>
		// Get years
		let years = document.querySelectorAll('li');
		console.log(years);

		// Display each year
		for (let year of years) {
			console.log(year.textContent);
		}

		// Display years with the sum of digits equal to 6
		let sum = 0;
		for (let year of years) {
			let digitsSum = Array.from(year.textContent).reduce((acc, digit) => acc + parseInt(digit), 0);
			if (digitsSum === 6) {
				console.log(year.textContent);
				sum += parseInt(year.textContent);
			}
		}

		console.log('Sum of selected years:', sum);
	</script>
</body>

</html>

task Ex336
papka 1
<!DOCTYPE html>
<html>

<head>

</head>

<body>
    <!-- Task 1 -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <script>
        let elems = document.querySelectorAll('p');
        for (let elem of elems) {
            elem.textContent += '!';
        }
    </script>

    <!-- Task 2 -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <script>
        let elems = document.querySelectorAll('p');
        for (let elem of elems) {
            elem.addEventListener('click', function () {
                this.textContent = Number(this.textContent) + 1;
            });
        }
    </script>

    <!-- task Ex3 -->
    <p>text</p>
    <button>click</button>
    <script>
        let button = document.querySelector('button');
        let elem = document.querySelector('p');
        button.addEventListener('click', function () {
            elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
        });
    </script>

    <!-- Task 4 -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <button>click</button>
    <script>
        let button = document.querySelector('button');
        let elems = document.querySelectorAll('p');
        button.addEventListener('click', function () {
            let sum = 0;
            for (let elem of elems) {
                sum += Number(elem.textContent);
            }
            console.log(sum);
        });
    </script>

    <!-- Task 5 -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <script>
        let elems = document.querySelectorAll('p');
        for (let elem of elems) {
            elem.addEventListener('click', () => {
                elem.textContent += '!';
            });
        }
    </script>

    <!-- Task 6 -->
    <p>text1</p>
    <p>text2</p>
    <p>text3</p>
    <button>click</button>
    <script>
        let button = document.querySelector('button');
        let elems = document.querySelectorAll('p');
        button.addEventListener('click', function () {
            for (let elem of elems) {
                elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
            }
        });
    </script>

    <!-- Task 7 -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <button>click</button>
    <script>
        let button = document.querySelector('button');
        let elems = document.querySelectorAll('p');
        let sum = 0;
        for (let elem of elems) {
            sum = elem.textContent + 1;
            button.addEventListener('click', function () {
                console.log(sum);
            });
        }
    </script>

    <!-- Task 8 -->
    <input>
    <input>
    <input>
    <button>click</button>
    <script>
        let button = document.querySelector('button');
        let elems = document.querySelectorAll('input');
        let sum = 0;
        for (let elem of elems) {
            sum += elem.value;
        }
        button.addEventListener('click', function () {
            console.log(sum);
        });
    </script>

    <!-- Task 9 -->
    <input id="inp1">
    <input id="inp2">
    <input id="inp3">
    <button id="btn">click</button>
    <script>
        let btn = document.querySelector('#btn');
        let inp1 = document.querySelector('#inp1');
        let inp2 = document.querySelector('#inp2');
        let inp3 = document.querySelector('#inp3');
        btn.addEventListener('click', function () {
            inp3.textContent = inp1.textContent + inp2.textContent;
        });
    </script>

    <!-- Task 10 -->
    <input id="inp1">
    <input id="inp2">
    <p id="res"></p>
    <button id="btn">click</button>
    <script>
        let btn = document.querySelector('#btn');
        let res = document.querySelector('#res');
        let inp1 = document.querySelector('#inp1');
        let inp2 = document.querySelector('#inp2');
        btn.addEventListener('click', function () {
            res.value = inp1.value + inp2.value;
        });
    </script>

    <!-- Task 11 -->
    <input data-text="text1">
    <input data-text="text2">
    <input data-text="text3">
    <button id="btn">click</button>
    <script>
        let inputs = document.querySelectorAll('input')
        let button = document.querySelector('#button')
        button.addEventListener('click', function () {
            for (let input of inputs) {
                if (input.value === input.dataset.text) {
                    input.classList.add('right')
                } else {
                    input.classList.add('wrong')
                }
            }
        });
    </script>

    <!-- Task 12 -->
    <input>
    <input>
    <input>
    <button id="btn">click</button>
    <script>
        let inputs = document.querySelectorAll('input')
        let button = document.querySelector('#button')

        let texts = [
            'text1',
            'text2',
            'text3',
        ];

        button.addEventListener('click', function () {
            for (let input of inputs) {
                for (let text of texts) {
                    if (input.value === text) {
                        input.classList.add('right')
                    } else {
                        input.classList.add('wrong')
                    }
                }
            }
        });
    </script>

    <!-- Task 13 -->
    <input>
    <input>
    <input>
    <button id="btn">click</button>
    <script>
        let inputs = document.querySelectorAll('inputs');
        let btn = document.querySelector('#btm');
        let sum = 0;

        btn.addEventListener('click', function () {
            for (let input of inputs) {
                sum += Number(input);
            }

            console.log(sum);
        });
    </script>

    <!-- Task 14 -->
    <input id="inp1">
    <input id="inp2">
    <input id="inp3">
    <button id="btn">click</button>
    <script>
        let btn = document.querySelector('#btn');
        let inp1 = document.querySelector('#inp1');
        let inp2 = document.querySelector('#inp2');
        let inp3 = document.querySelector('#inp3');

        let sum = inp1.value + inp2.value;

        btn

task Ex337
papka 1

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Exercises</title>
</head>
<body>
    <!-- Task 1 -->
    <input id="input1" type="text">
    <p id="paragraph1"></p>
    <script>
        const input1 = document.getElementById('input1');
        const paragraph1 = document.getElementById('paragraph1');

        input1.addEventListener('blur', function () {
            paragraph1.textContent += input1.value;
        });
    </script>

    <!-- Task 2 -->
    <input id="input2_1" type="text">
    <input id="input2_2" type="text">
    <input id="input2_3" type="text">
    <button id="button2">Calculate Sum</button>
    <p id="paragraph2"></p>
    <script>
        const input2_1 = document.getElementById('input2_1');
        const input2_2 = document.getElementById('input2_2');
        const input2_3 = document.getElementById('input2_3');
        const button2 = document.getElementById('button2');
        const paragraph2 = document.getElementById('paragraph2');

        button2.addEventListener('click', function () {
            const sum = parseInt(input2_1.value) + parseInt(input2_2.value) + parseInt(input2_3.value);
            paragraph2.textContent = `Sum: ${sum}`;
        });
    </script>

    <!-- task Ex3 -->
    <input id="input3" type="text">
    <p id="paragraph3"></p>
    <script>
        const input3 = document.getElementById('input3');
        const paragraph3 = document.getElementById('paragraph3');

        input3.addEventListener('blur', function () {
            const number = input3.value;
            let sum = 0;
            for (let digit of number) {
                sum += parseInt(digit);
            }
            paragraph3.textContent = `Sum of digits: ${sum}`;
        });
    </script>

    <!-- Task 4 -->
    <input id="input4" type="text">
    <p id="paragraph4"></p>
    <script>
        const input4 = document.getElementById('input4');
        const paragraph4 = document.getElementById('paragraph4');

        input4.addEventListener('blur', function () {
            const numbers = input4.value.split(',').map(Number);
            const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
            paragraph4.textContent = `Average: ${average}`;
        });
    </script>

    <!-- Task 5 -->
    <input id="input5" type="text">
    <input id="input5_1" type="text">
    <input id="input5_2" type="text">
    <input id="input5_3" type="text">
    <script>
        const input5 = document.getElementById('input5');
        const input5_1 = document.getElementById('input5_1');
        const input5_2 = document.getElementById('input5_2');
        const input5_3 = document.getElementById('input5_3');

        input5.addEventListener('blur', function () {
            const fullName = input5.value.split(' ');
            input5_1.value = fullName[0];
            input5_2.value = fullName[1];
            input5_3.value = fullName[2];
        });
    </script>

    <!-- Task 6 -->
    <input id="input6" type="text">
    <script>
        const input6 = document.getElementById('input6');

        input6.addEventListener('blur', function () {
            const words = input6.value.split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
            }
            input6.value = words.join(' ');
        });
    </script>

    <!-- Task 7 -->
    <input id="input7" type="text">
    <p id="paragraph7"></p>
    <script>
        const input7 = document.getElementById('input7');
        const paragraph7 = document.getElementById('paragraph7');

        input7.addEventListener('blur', function () {
            const words = input7.value.split(' ');
            const wordCount = words.filter(word => word.length > 0).length;
            paragraph7.textContent = `Word Count: ${wordCount}`;`
        });
    </script>

    <!-- Task 8 -->
    <input id="input8" type="text">
    <script>
        const input8 = document.getElementById('input8');

        input8.addEventListener('blur', function () {
            const dateArray = input8.value.split('.');
            const formattedDate = ${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
            input8.value = formattedDate;
        });
    </script>

    <!-- Task 9 -->
    <input id="input9">


task Ex338
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Examples</title>
</head>
<body>
    <!-- Task 1 -->
    <input id="elem1" value="text">
    <script>
        const elem1 = document.getElementById('elem1');
        const valueAttribute1 = elem1.getAttribute('value');
        console.log(valueAttribute1);
    </script>

    <!-- Task 2 -->
    <input id="elem2" class="www zzz">
    <script>
        const elem2 = document.getElementById('elem2');
        const classAttribute2 = elem2.getAttribute('class');
        console.log(classAttribute2);
    </script>
</body>
</html>

task Ex339
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Examples</title>
</head>
<body>
    <!-- Task 1 -->
    <input id="elem1">
    <script>
        const elem1 = document.getElementById('elem1');
        elem1.setAttribute('value', 'text');
    </script>

    <!-- Task 2 -->
    <input id="elem2">
    <script>
        const elem2 = document.getElementById('elem2');
        elem2.setAttribute('class', 'valid');
    </script>
</body>
</html>

task Ex340
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Examples</title>
</head>
<body>
    <!-- Task 1 -->
    <input id="elem1" value="text">
    <script>
        const elem1 = document.getElementById('elem1');
        elem1.removeAttribute('value');
    </script>
</body>
</html>

task Ex341
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Check Examples</title>
</head>
<body>
    <!-- Task 1 -->
    <input id="elem1" value="text">
    <script>
        const elem1 = document.getElementById('elem1');
        const hasValueAttribute = elem1.hasAttribute('value');
        console.log(hasValueAttribute); // true
    </script>
</body>
</html>

task Ex342
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Attribute Examples</title>
</head>
<body>
    <!-- Task 1 -->
    <div id="elem1" data-text="str">text</div>
    <script>
        const elem1 = document.getElementById('elem1');

        elem1.addEventListener('click', function() {
            this.textContent += this.dataset.text;
        });
    </script>

    <!-- Task 2 -->
    <div data-num="1">text</div>
    <div data-num="2">text</div>
    <div data-num="3">text</div>
    <div data-num="4">text</div>
    <div data-num="5">text</div>
    <script>
        const divs = document.querySelectorAll('[data-num]');

        divs.forEach((div) => {
            div.addEventListener('click', function() {
                this.textContent += this.dataset.num;
            });
        });
    </script>

    <!-- task Ex3 -->
    <button id="clickBtn">Click me</button>
    <button id="showClicks">Show clicks</button>
    <script>
        const clickBtn = document.getElementById('clickBtn');
        const showClicks = document.getElementById('showClicks');

        clickBtn.addEventListener('click', function() {
            const clickCount = this.dataset.clicks ? parseInt(this.dataset.clicks) + 1 : 1;
            this.dataset.clicks = clickCount;
        });

        showClicks.addEventListener('click', function() {
            alert(`Clicks: ${clickBtn.dataset.clicks || 0}`);
        });
    </script>

    <!-- Task 4 -->
    <input id="elem2" data-length="5">
    <script>
        const elem2 = document.getElementById('elem2');

        elem2.addEventListener('blur', function() {
            const requiredLength = parseInt(this.dataset.length);
            const actualLength = this.value.length;

            if (requiredLength !== actualLength) {
                alert(`Input length should be ${requiredLength} characters.`);
            }
        });
    </script>

    <!-- Task 5 -->
    <input id="elem3" data-min="5" data-max="10">
    <script>
        const elem3 = document.getElementById('elem3');

        elem3.addEventListener('blur', function() {
            const minLength = parseInt(this.dataset.min);
            const maxLength = parseInt(this.dataset.max);
            const actualLength = this.value.length;

            if (actualLength < minLength || actualLength > maxLength) {
                alert(`Input length should be between ${minLength} and ${maxLength} characters.`);
            }
        });
    </script>
</body>
</html>

task Ex343
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute Names with Hyphens</title>
</head>
<body>
    <!-- Task 1 -->
    <div id="elem" data-product-price="1000" data-product-amount="5">товар яблоки</div>
    <script>
        const elem = document.getElementById('elem');

        elem.addEventListener('click', function() {
            const price = parseInt(this.dataset.productPrice);
            const amount = parseInt(this.dataset.productAmount);
            const total = price * amount;

            this.textContent += `, стоимость: ${total}`;
        });
    </script>
</body>
</html>

task Ex344
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessing Attributes with Methods</title>
</head>
<body>
    <!-- Task 1 -->
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <script>
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach((paragraph, index) => {
            paragraph.setAttribute('data-num', index + 1);
        });
    </script>
</body>
</html>

task Ex345
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessing Attributes with Methods</title>
</head>
<body>
    <!-- Task 1 -->
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <script>
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach((paragraph, index) => {
            paragraph.setAttribute('data-num', index + 1);
        });
    </script>
</body>
</html>

task Ex346
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulating CSS Classes</title>
</head>
<body>
    <!-- Task 1 -->
    <p id="elem" class="www ggg zzz"></p>
    <script>
        const elem = document.getElementById('elem');
        const classCount = elem.classList.length;
        console.log('Number of classes:', classCount);
    </script>

    <!-- Task 2 -->
    <p id="elem2" class="www ggg zzz"></p>
    <script>
        const elem2 = document.getElementById('elem2');
        const classes = elem2.classList;

        for (const className of classes) {
            console.log('Class:', className);
        }
    </script>
</body>
</html>

task Ex347
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding CSS Classes</title>
</head>
<body>
    <!-- Task 1 -->
    <p id="elem" class="www ggg zzz"></p>
    <script>
        const elem = document.getElementById('elem');
        elem.classList.add('xxx');
    </script>
</body>
</html>

task Ex348
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Removing CSS Classes</title>
</head>
<body>
    <!-- Task 1 -->
    <p id="elem" class="www ggg zzz"></p>
    <script>
        const elem = document.getElementById('elem');
        elem.classList.remove('www', 'zzz');
    </script>
</body>
</html>

task Ex349
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checking CSS Classes</title>
</head>
<body>
    <!-- Task 1 -->
    <p id="elem" class="www ggg zzz"></p>
    <script>
        const elem = document.getElementById('elem');
        const containsClass = elem.classList.contains('ggg');
        console.log(containsClass); // Output: true
    </script>
</body>
</html>

task Ex350
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggling CSS Classes</title>
</head>
<body>
    <!-- Task 1 -->
    <p id="elem" class="ggg zzz"></p>
    <script>
        const elem = document.getElementById('elem');
        elem.classList.toggle('www');
        // Now, if the 'www' class was not present, it will be added. If it was present, it will be removed.
    </script>
</body>
</html>


task Ex351
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styling Elements via the style Attribute</title>
</head>
<body>
    <!-- Task 1 -->
    <div id="myDiv" style="border: 1px solid black;"></div>
    <button onclick="addStyles()">Add Styles</button>

    <script>
        function addStyles() {
            const myDiv = document.getElementById('myDiv');
            myDiv.style.width = '100px';
            myDiv.style.height = '100px';
        }
    </script>
</body>
</html>


task Ex352
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styling Properties with Hyphen in JavaScript</title>
</head>
<body>
    <!-- Task 1 -->
    <div id="myDiv" style="border: 1px solid black;"></div>
    <button onclick="addStyles()">Add Styles</button>

    <script>
        function addStyles() {
            const myDiv = document.getElementById('myDiv');
            myDiv.style.fontSize = '20px';
            myDiv.style.borderTop = '2px solid red';
            myDiv.style.backgroundColor = 'lightblue';
        }
    </script>
</body>
</html>

task Ex353
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Floating Elements in JavaScript</title>
    <style>
        li {
            display: inline-block;
            margin-right: 10px;
            border: 1px solid black;
            padding: 5px;
        }
    </style>
</head>
<body>
    <!-- Task 1 -->
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
    <button onclick="floatLeft()">Float Left</button>

    <script>
        function floatLeft() {
            const listItems = document.querySelectorAll('li');
            listItems.forEach(item => {
                item.style.cssFloat = 'left';
            });
        }
    </script>
</body>
</html>

task Ex354
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styling Elements with CSS Classes in JavaScript</title>
    <style>
        .colored {
            color: green;
        }

        .crossed {
            text-decoration: line-through;
        }

        .bold {
            font-weight: bold;
        }

        .red {
            color: red;
        }
    </style>
</head>
<body>
    <!-- Task 1 -->
    <p id="paragraph">Click me to apply styles!</p>
    <button onclick="applyStyle('colored')">Make Green</button>
    <button onclick="applyStyle('crossed')">Cross Out</button>
    <button onclick="applyStyle('bold')">Make Bold</button>
    <button onclick="applyStyle('red')">Make Red</button>

    <script>
        function applyStyle(styleClass) {
            const paragraph = document.getElementById('paragraph');
            paragraph.classList.add(styleClass);
        }
    </script>
</body>
</html>

task Ex355
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Styles with CSS Classes in JavaScript</title>
    <style>
        .colored {
            color: green;
        }

        .crossed {
            text-decoration: line-through;
        }

        .bold {
            font-weight: bold;
        }

        .red {
            color: red;
        }
    </style>
</head>
<body>
    <!-- Task 1 -->
    <p id="paragraph">Click me to apply styles!</p>
    <button onclick="toggleStyle('colored')">Make Green (Toggle)</button>
    <button onclick="toggleStyle('crossed')">Cross Out (Toggle)</button>
    <button onclick="toggleStyle('bold')">Make Bold (Toggle)</button>
    <button onclick="toggleStyle('red')">Make Red (Toggle)</button>

    <script>
        function toggleStyle(styleClass) {
            const paragraph = document.getElementById('paragraph');
            paragraph.classList.toggle(styleClass);
        }
    </script>
</body>
</html>

task Ex356
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Element Visibility in JavaScript</title>
    <style>
        #elem {
            display: none;
            width: 200px;
            height: 200px;
            border: 1px solid green;
        }

        #elem.active {
            display: block;
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <button id="button">Click Me</button>
    <div id="elem"></div>

    <script>
        let button = document.querySelector('#button');
        let elem = document.querySelector('#elem');

        button.addEventListener('click', function() {
            elem.classList.toggle('active');
        });
    </script>
</body>
</html>

task Ex357
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Element's Children in JavaScript</title>
    <style>
        /* Styling for better visualization */
        #elem li {
            margin-bottom: 5px;
            color: black; /* Default color */
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        // Task 1
        let firstChild = document.querySelector('#elem').firstElementChild;
        firstChild.style.color = 'red';

        // Task 2
        let lastChild = document.querySelector('#elem').lastElementChild;
        lastChild.style.color = 'red';

        // task Ex3
        let allChildren = document.querySelector('#elem').children;
        for (let child of allChildren) {
            child.innerHTML += '!';
        }
    </script>
</body>
</html>



task Ex358
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Element's Parent in JavaScript</title>
    <style>
        /* Styling for better visualization */
        div {
            border: 2px solid black; /* Default border */
            padding: 10px;
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <div>
        <ul>
            <li>text</li>
            <li>text</li>
            <li id="elem">text</li>
            <li>text</li>
            <li>text</li>
        </ul>
    </div>

    <script>
        // Task
        let elem = document.getElementById('elem');
        let parent = elem.parentElement;
        parent.style.border = '2px solid red';
    </script>
</body>
</html>

task Ex359
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding All Parents of an Element in JavaScript</title>
    <style>
        /* Styling for better visualization */
        div {
            border: 2px solid black; /* Default border */
            padding: 10px;
        }

        .www {
            background-color: lightgray; /* Highlight for class www */
        }
    </style>
</head>
<body>
    <!-- Task 1 Result -->
    <header>
        <div>
            <p>
                <span id="elem">Element</span>
            </p>
        </div>
    </header>

    <script>
        // Task 1
        let elem = document.getElementById('elem');
        let closestDiv = elem.closest('div');
        closestDiv.style.border = '2px solid red';
    </script>

    <!-- Task 2 Result -->
    <header>
        <div class="www">
            <p class="www">
                <span id="elem">Element</span>
            </p>
        </div>
    </header>

    <script>
        // Task 2
        let elem2 = document.getElementById('elem');
        let closestWWW = elem2.closest('.www');
        closestWWW.style.backgroundColor = 'lightgreen';
    </script>
</body>
</html>

task Ex360
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Neighbors of an Element in JavaScript</title>
    <style>
        /* Styling for better visualization */
        li {
            margin-bottom: 5px;
            border: 1px solid black; /* Default border */
            padding: 5px;
        }
    </style>
</head>
<body>
    <!-- Task 1 Result -->
    <ul>
        <li>text</li>
        <li>text</li>
        <li id="elem">text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        // Task 1
        let elem = document.getElementById('elem');
        let prevSibling = elem.previousElementSibling;
        if (prevSibling) {
            prevSibling.textContent += '!';
        }
    </script>

    <!-- Task 2 Result -->
    <ul>
        <li>text</li>
        <li>text</li>
        <li id="elem">text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        // Task 2
        let elem2 = document.getElementById('elem');
        let nextSibling = elem2.nextElementSibling;
        if (nextSibling) {
            nextSibling.textContent += '!';
        }
    </script>

    <!-- task Ex3 Result -->
    <ul>
        <li>text</li>
        <li>text</li>
        <li id="elem">text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        // task Ex3
        let elem3 = document.getElementById('elem');
        let nextSibling2 = elem3.nextElementSibling;
        if (nextSibling2) {
            let nextNextSibling = nextSibling2.nextElementSibling;
            if (nextNextSibling) {
                nextNextSibling.textContent += '!';
            }
        }
    </script>

    <!-- Task 4 Result -->
    <ul>
        <li>text1</li>
        <li>text2</li>
        <li id="elem">text3</li>
        <li>text4</li>
        <li>text5</li>
    </ul>

    <script>
        // Task 4
        let elem4 = document.getElementById('elem');
        let prevSibling2 = elem4.previousElementSibling;
        let nextSibling3 = elem4.nextElementSibling;

        if (prevSibling2 && nextSibling3) {
            [prevSibling2.textContent, nextSibling3.textContent] = [nextSibling3.textContent, prevSibling2.textContent];
        }
    </script>
</body>
</html>


task Ex361
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Element by ID in JavaScript</title>
</head>
<body>
    <!-- Task Result -->
    <div id="elem"></div>

    <script>
        // Task
        let elem = document.getElementById('elem');
        if (elem) {
            elem.textContent = 'This is the content set using getElementById.';
        }
    </script>
</body>
</html>

task Ex362
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Elements by Tag Name in JavaScript</title>
    <style>
        /* Additional styling for demonstration purposes */
        li {
            color: black;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <ul>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        // Task
        let liElements = document.getElementsByTagName('li');

        for (let li of liElements) {
            li.style.color = 'red';
        }
    </script>
</body>
</html>

task Ex363
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Elements by Class Name in JavaScript</title>
    <style>
        /* Additional styling for demonstration purposes */
        .www {
            color: black;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <p class="www">elem 1</p>
    <p class="www">elem 2</p>
    <p class="www">elem 3</p>

    <script>
        // Task
        let elements = document.getElementsByClassName('www');

        for (let element of elements) {
            element.style.color = 'red';
        }
    </script>
</body>
</html>

task Ex364
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finding Elements Inside Another Element in JavaScript</title>
    <style>
        /* Additional styling for demonstration purposes */
        .www, .ggg {
            color: black;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <!-- Task Result -->
    <div id="parent">
        <p class="www">text</p>
        <p class="www">text</p>
        <p class="www">text</p>
        <p class="ggg">text</p>
        <p class="ggg">text</p>
        <p class="ggg">text</p>
    </div>

    <script>
        // Task
        let parent = document.querySelector('#parent');

        // Find elements with class "www" inside the parent
        let elems1 = parent.querySelectorAll('.www');

        // Find elements with class "ggg" inside the parent
        let elems2 = parent.querySelectorAll('.ggg');

        // For demonstration purposes: apply some styling to the found elements
        elems1.forEach(element => {
            element.style.color = 'red';
        });

        elems2.forEach(element => {
            element.style.color = 'blue';
        });
    </script>
</body>
</html>

task Ex365
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Difference Between DOM Node Properties</title>
</head>
<body>
    <!-- Task Result -->
    <script>
        // Task 1
        let elem1 = document.querySelector('#elem1');
        console.log(elem1.lastChild);            // текст
        console.log(elem1.lastElementChild);     // тег span

        // Task 2
        let elem2 = document.querySelector('#elem2');
        console.log(elem2.nextSibling);          // текст
        console.log(elem2.nextElementSibling);   // тег span

        // task Ex3
        let elem3 = document.querySelector('#elem3');
        console.log(elem3.previousSibling);      // текст
        console.log(elem3.previousElementSibling);// тег span
    </script>

    <!-- Elements for demonstration -->
    <div id="elem1"><!--сomm-->	text<span>	tag</span></div>
    <div id="elem2">text<span>	tag</span></div>
    <div id="elem3"><!--сomm-->	text<span>	tag</span></div>
</body>
</html>

task Ex366
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traversal of Nodes in JavaScript</title>
</head>
<body>
    <!-- Task Result -->
    <script>
        // Task 1
        let elem = document.querySelector('#elem');

        for (let node of elem.childNodes) {
            console.log(node);
        }
    </script>

    <!-- Element for demonstration -->
    <div id="elem">txt<b>	tag</b><!--com-->	txt<b>tag</b>	<!--com--></div>
</body>
</html>

task Ex367
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Names in JavaScript</title>
</head>
<body>
    <!-- Task Result -->
    <script>
        // Task 1
        let elem = document.querySelector('#elem');

        for (let node of elem.childNodes) {
            console.log(node.nodeName);
        }
    </script>

    <!-- Element for demonstration -->
    <div id="elem">txt<b>	tag</b><!--com-->	txt<b>tag</b>	<!--com--></div>
</body>
</html>

task Ex368
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Types in JavaScript</title>
</head>
<body>
    <!-- Task Result -->
    <script>
        // Task 1
        let elem = document.querySelector('#elem');

        for (let node of elem.childNodes) {
            if (node.nodeType === 1 || node.nodeType === 3) {
                console.log(node.nodeType);
            }
        }
    </script>

    <!-- Element for demonstration -->
    <div id="elem">txt<b>	tag</b><!--com-->	txt<b>tag</b>	<!--com--></div>
</body>
</html>

task Ex369
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Text in JavaScript</title>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let elem1 = document.querySelector('#elem');
        for (let node of elem1.childNodes) {
            console.log(node.textContent);
        }

        // Task 2
        let elem2 = document.querySelector('#elem');
        for (let node of elem2.childNodes) {
            if (node.nodeType === 3 || node.nodeType === 8) {
                console.log(node.textContent);
            }
        }

        // task Ex3
        let elem3 = document.querySelector('#elem');
        for (let node of elem3.childNodes) {
            if (node.nodeType === 3 || node.nodeType === 1) {
                console.log(node.textContent);
            }
        }

        // Task 4
        let elem4 = document.querySelector('#elem');
        for (let node of elem4.childNodes) {
            node.textContent += ' (' + node.nodeName + ')';
        }
    </script>

    <!-- Element for demonstration -->
    <div id="elem">txt<b>	tag</b><!--com-->	txt<b>tag</b>	<!--com--></div>
</body>
</html>

task Ex370
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Working with Textarea in JavaScript</title>
</head>
<body>
    <!-- Task Result -->
    <script>
        // Task 1
        let textarea = document.querySelector('#textarea');
        let paragraph = document.querySelector('#paragraph');

        textarea.addEventListener('blur', function() {
            paragraph.textContent = this.value;
        });
    </script>

    <!-- Elements for demonstration -->
    <textarea id="textarea"></textarea>
    <p id="paragraph"></p>
</body>
</html>


task Ex371
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disabled Attribute in JavaScript</title>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let input1 = document.querySelector('#input1');
        let button1 = document.querySelector('#button1');

        button1.addEventListener('click', function() {
            input1.disabled = true;
        });

        // Task 2
        let input2 = document.querySelector('#input2');
        let button2Disable = document.querySelector('#button2Disable');
        let button2Enable = document.querySelector('#button2Enable');

        button2Disable.addEventListener('click', function() {
            input2.disabled = true;
        });

        button2Enable.addEventListener('click', function() {
            input2.disabled = false;
        });

        // task Ex3
        let input3 = document.querySelector('#input3');
        let button3 = document.querySelector('#button3');

        button3.addEventListener('click', function() {
            console.log("Is the input disabled?", input3.disabled);
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <input id="input1" type="text">
    <button id="button1">Disable Input 1</button>

    <!-- Task 2 -->
    <input id="input2" type="text">
    <button id="button2Disable">Disable Input 2</button>
    <button id="button2Enable">Enable Input 2</button>

    <!-- task Ex3 -->
    <input id="input3" type="text">
    <button id="button3">Check If Disabled</button>
</body>
</html>

task Ex372
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Working with Checkboxes in JavaScript</title>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let checkbox1 = document.querySelector('#checkbox1');
        let button1SetChecked = document.querySelector('#button1SetChecked');
        let button1SetUnchecked = document.querySelector('#button1SetUnchecked');

        button1SetChecked.addEventListener('click', function() {
            checkbox1.checked = true;
        });

        button1SetUnchecked.addEventListener('click', function() {
            checkbox1.checked = false;
        });

        // Task 2
        let checkbox2 = document.querySelector('#checkbox2');
        let button2 = document.querySelector('#button2');
        let resultParagraph = document.querySelector('#resultParagraph');

        button2.addEventListener('click', function() {
            resultParagraph.textContent = checkbox2.checked ? 'привет' : 'пока';
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <input type="checkbox" id="checkbox1">
    <button id="button1SetChecked">Set Checked</button>
    <button id="button1SetUnchecked">Set Unchecked</button>

    <!-- Task 2 -->
    <input type="checkbox" id="checkbox2">
    <button id="button2">Show Greeting</button>
    <p id="resultParagraph"></p>
</body>
</html>

task Ex373
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Attributes Without Values</title>
</head>
<body>
    <!-- Task 1 Results -->
    <script>
        // Task 1
        let elem1 = document.querySelector('#elem1');
        let button1 = document.querySelector('#button1');

        button1.addEventListener('click', function() {
            elem1.disabled = !elem1.disabled;
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <input id="elem1" disabled>
    <button id="button1" type="submit">Toggle Disabled</button>

    <!-- Task 2 Results -->
    <script>
        // Task 2
        let checkbox2 = document.querySelector('#checkbox2');
        let button2 = document.querySelector('#button2');

        button2.addEventListener('click', function() {
            checkbox2.checked = !checkbox2.checked;
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 2 -->
    <input type="checkbox" id="checkbox2">
    <button id="button2">Toggle Checkbox</button>
</body>
</html>

task Ex374
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Working with Radio Buttons in JavaScript</title>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task
        let radios = document.querySelectorAll('input[type="radio"]');
        let resultParagraph = document.querySelector('#result');
        let button = document.querySelector('#button');

        button.addEventListener('click', function() {
            for (let radio of radios) {
                if (radio.checked) {
                    resultParagraph.textContent = radio.value;
                }
            }
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task -->
    <input type="radio" name="elem" value="1" checked>
    <input type="radio" name="elem" value="2">
    <input type="radio" name="elem" value="3">
    <button id="button">Get Selected Value</button>
    <p id="result"></p>
</body>
</html>

task Ex375
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>change Event in JavaScript</title>
    <style>
        /* Task 4 Styles */
        #inputTask4 {
            border: 2px solid black;
        }

        #inputTask4.valid {
            border-color: green;
        }

        #inputTask4.invalid {
            border-color: red;
        }
    </style>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let elem1 = document.querySelector('#elem1');
        let output1 = document.querySelector('#output1');

        elem1.addEventListener('change', function() {
            output1.textContent = this.value;
        });

        // Task 2
        let checkbox = document.querySelector('#checkbox');
        let output2 = document.querySelector('#output2');

        checkbox.addEventListener('change', function() {
            output2.textContent = this.checked ? 'Checked' : 'Unchecked';
        });

        // task Ex3
        let explanation = document.querySelector('#explanation');

        explanation.textContent = 'The main difference between the blur and change events is that the blur event occurs when an element loses focus, ' +
            'while the change event occurs when the value of an input element is changed and the element loses focus. The change event is specifically ' +
            'related to changes in the input value.';

        // Task 4
        let inputTask4 = document.querySelector('#inputTask4');

        inputTask4.addEventListener('change', function() {
            if (this.value.length < 5) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <label for="elem1">Input for Task 1:</label>
    <input id="elem1" value="text">
    <p id="output1"></p>

    <!-- Task 2 -->
    <label for="checkbox">Checkbox for Task 2:</label>
    <input type="checkbox" id="checkbox">
    <p id="output2"></p>

    <!-- task Ex3 -->
    <p id="explanation"></p>

    <!-- Task 4 -->
    <label for="inputTask4">Input for Task 4:</label>
    <input id="inputTask4" type="text">
</body>
</html>

task Ex376
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input Event in JavaScript</title>
    <style>
        /* Task 2 Styles */
        #inputTask2 {
            border: 2px solid black;
        }

        #outputTask2 {
            color: green;
        }

        #outputTask2.exceeded {
            color: red;
        }
    </style>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let inputTask1 = document.querySelector('#inputTask1');

        inputTask1.addEventListener('input', function() {
            if (this.value.length === 5) {
                console.log('Text length has reached 5 characters.');
            }
        });

        // Task 2
        let inputTask2 = document.querySelector('#inputTask2');
        let outputTask2 = document.querySelector('#outputTask2');

        inputTask2.addEventListener('input', function() {
            let remainingCharacters = 5 - this.value.length;

            if (remainingCharacters >= 0) {
                outputTask2.textContent = `You can enter ${remainingCharacters} more characters.`;
                outputTask2.classList.remove('exceeded');
            } else {
                outputTask2.textContent = `Exceeded by ${Math.abs(remainingCharacters)} characters.`;
                outputTask2.classList.add('exceeded');
            }
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <label for="inputTask1">Input for Task 1:</label>
    <input id="inputTask1" type="text">

    <!-- Task 2 -->
    <label for="inputTask2">Input for Task 2 (Max 5 characters):</label>
    <input id="inputTask2" type="text">
    <p id="outputTask2"></p>
</body>
</html>

task Ex377
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>focus and blur Methods in JavaScript</title>
</head>
<body>
    <!-- Task Results -->
    <script>
        // Task 1
        let input1 = document.querySelector('#input1');
        let input2 = document.querySelector('#input2');

        input1.addEventListener('input', function () {
            if (this.value.length === 2) {
                input2.focus();
            }
        });

        input2.addEventListener('input', function () {
            if (this.value.length === 2) {
                this.blur();
            }
        });
    </script>

    <!-- Elements for demonstration -->
    <!-- Task 1 -->
    <label for="input1">Input 1:</label>
    <input id="input1" type="text">

    <label for="input2">Input 2:</label>
    <input id="input2" type="text">
</body>
</html>

task Ex378
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Errors in JavaScript</title>
</head>
<body>
    <!-- Task 1 -->
    <script>
        let textarea = document.querySelector('textarea');
        let div = document.querySelector('div');

        textarea.addEventListener('blur', function () {
            div.textContent = textarea.value; // Fix: Changed from textarea.textContent to textarea.value
        });
    </script>

    <!-- Task 2 -->
    <script>
        let checkbox = document.querySelector('[type="checkbox"]');
        let button = document.querySelector('button');
        let div = document.querySelector('div');

        button.addEventListener('click', function () {
            if (checkbox.checked) {
                div.textContent = '111'; // Fix: Changed from div.value to div.textContent
            } else {
                div.textContent = '222'; // Fix: Changed from div.value to div.textContent
            }
        });
    </script>

    <!-- task Ex3 -->
    <script>
        let checkbox = document.querySelector('[type="checkbox"]');
        let button = document.querySelector('button');

        button.addEventListener('click', function () {
            if (checkbox.checked) {
                console.log('+++');
            } else {
                console.log('---');
            }
        });
    </script>
</body>
</html>

task Ex379
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Working with Dropdowns in JavaScript</title>
</head>
<body>
    <!-- Task 1 -->
    <select id="select">
        <option>one</option>
        <option selected>two</option>
        <option>three</option>
    </select>
    <button id="btnTask1">Show Selected Text</button>
    <p id="outputTask1"></p>

    <!-- Task 2 -->
    <select id="yearSelect">
        <!-- Assuming the range is from 2020 to 2030 -->
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
        <option>2028</option>
        <option>2029</option>
        <option>2030</option>
    </select>
    <button id="btnTask2">Check Leap Year</button>
    <p id="outputTask2"></p>

    <script>
        // Task 1
        let selectTask1 = document.querySelector('#select');
        let btnTask1 = document.querySelector('#btnTask1');
        let outputTask1 = document.querySelector('#outputTask1');

        btnTask1.addEventListener('click', function () {
            outputTask1.textContent = selectTask1.value;
        });

        // Task 2
        let yearSelect = document.querySelector('#yearSelect');
        let btnTask2 = document.querySelector('#btnTask2');
        let outputTask2 = document.querySelector('#outputTask2');

        btnTask2.addEventListener('click', function () {
            let selectedYear = parseInt(yearSelect.value);
            let isLeapYear = (selectedYear % 4 === 0 && selectedYear % 100 !== 0) || (selectedYear % 400 === 0);

            outputTask2.textContent = isLeapYear ? 'Leap Year' : 'Not a Leap Year';
        });
    </script>
</body>
</html>

task Ex380
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attribute value in Dropdowns</title>
</head>
<body>
    <!-- Task 1 -->
    <select id="daySelect">
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
    </select>
    <p id="outputDay"></p>

    <script>
        // Task 1
        let daySelect = document.querySelector('#daySelect');
        let outputDay = document.querySelector('#outputDay');

        daySelect.addEventListener('change', function () {
            let selectedDay = parseInt(daySelect.value);
            let isWeekend = selectedDay === 6 || selectedDay === 7;

            outputDay.textContent = isWeekend ? 'Weekend' : 'Workday';
        });
    </script>
</body>
</html>


task Ex381
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Changing Selected Option</title>
</head>
<body>
    <!-- Task 1 -->
    <select id="monthSelect">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>
    <button id="setDefaultMonth">Set Default Month</button>

    <script>
        // Task 1
        let monthSelect = document.querySelector('#monthSelect');
        let setDefaultMonthButton = document.querySelector('#setDefaultMonth');

        // Set default month based on the current month (January is 0, so add 1)
        monthSelect.value = (new Date()).getMonth() + 1;

        setDefaultMonthButton.addEventListener('click', function () {
            // Set default month to January
            monthSelect.value = '1';
        });
    </script>
</body>
</html>


task Ex382
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selected Index</title>
</head>
<body>
    <!-- Task 1 -->
    <input type="number" id="inputNumber">
    <select id="dayOfWeek">
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
    </select>

    <!-- Task 2 -->
    <select id="currentDay">
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
    </select>

    <script>
        // Task 1
        let inputNumber = document.querySelector('#inputNumber');
        let dayOfWeekSelect = document.querySelector('#dayOfWeek');

        inputNumber.addEventListener('blur', function () {
            let selectedIndex = parseInt(inputNumber.value, 10) - 1; // Adjust for 0-based index
            dayOfWeekSelect.selectedIndex = selectedIndex;
        });

        // Task 2
        let currentDaySelect = document.querySelector('#currentDay');
        let currentDay = (new Date()).getDay(); // Get current day (0-based)
        currentDaySelect.selectedIndex = currentDay;
    </script>
</body>
</html>

task Ex383
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select Options</title>
</head>
<body>
    <select id="select">
        <option value="one">один</option>
        <option value="two">два</option>
        <option value="three">три</option>
    </select>

    <script>
        let optionsAll = document.querySelectorAll('#select option');
        console.log(optionsAll);

        let select = document.querySelector('#select');
        let optionsInSelect = select.querySelectorAll('option');
        console.log(optionsInSelect);
    </script>
</body>
</html>

task Ex384
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select Options Array</title>
</head>
<body>
    <select id="select">
        <option value="one">один</option>
        <option value="two">два</option>
        <option value="three">три</option>
    </select>

    <script>
        let select = document.querySelector('#select');

        for (let option of select.options) {
            option.textContent += ' ' + option.value;
        }
    </script>
</body>
</html>

task Ex385
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Working with Select Options</title>
</head>
<body>
    <select id="select">
        <option value="one">один</option>
        <option value="two" selected>два</option>
        <option value="three">три</option>
    </select>

    <script>
        let select = document.querySelector('#select');

        for (let option of select.options) {
            if (option.selected) {
                option.textContent += '!';
            } else {
                option.textContent += '?';
            }
        }
    </script>
</body>
</html>

task Ex386
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selecting an Option in JavaScript</title>
</head>
<body>
    <select id="select">
        <option value="one">один</option>
        <option value="two">два</option>
        <option value="three">три</option>
    </select>

    <button id="selectLastOption">Выбрать последний пункт</button>

    <script>
        let select = document.querySelector('#select');
        let button = document.querySelector('#selectLastOption');

        button.addEventListener('click', function () {
            let lastOption = select[select.options.length - 1];
            lastOption.selected = true;
        });
    </script>
</body>
</html>

task Ex387
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting Selected Option in JavaScript</title>
</head>
<body>
    <select id="select">
        <option value="one">один</option>
        <option value="two">два</option>
        <option value="three">три</option>
    </select>

    <button id="getSelectedOption">Получить выбранный пункт</button>
    <button id="addExclamation">Добавить восклицательный знак</button>

    <script>
        let select = document.querySelector('#select');
        let getSelectedOptionButton = document.querySelector('#getSelectedOption');
        let addExclamationButton = document.querySelector('#addExclamation');

        getSelectedOptionButton.addEventListener('click', function () {
            let selectedOption = select[select.selectedIndex];
            alert(selectedOption.text);
        });

        addExclamationButton.addEventListener('click', function () {
            let selectedOption = select[select.selectedIndex];
            selectedOption.text += '!';
        });
    </script>
</body>
</html>

task Ex388
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Event Basics</title>
</head>
<body>
    <button id="elem">text</button>

    <script>
        let elem = document.querySelector('#elem');

        elem.addEventListener('click', function (event) {
            console.log(event);
        });
    </script>
</body>
</html>

task Ex389
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Coordinates</title>
</head>
<body>
    <div id="coords">X: 0, Y: 0</div>

    <script>
        document.addEventListener('mousemove', function (event) {
            let coordsDiv = document.getElementById('coords');
            coordsDiv.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
        });
    </script>
</body>
</html>

task Ex390
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Type</title>
    <style>
        .green {
            color: green;
        }

        .red {
            color: red;
        }
    </style>
</head>
<body>
    <button id="elem">text</button>

    <script>
        let elem = document.querySelector('#elem');

        elem.addEventListener('click', func);
        elem.addEventListener('dblclick', func);

        function func(event) {
            if (event.type === 'click') {
                elem.classList.add('green');
                elem.classList.remove('red');
            } else if (event.type === 'dblclick') {
                elem.classList.remove('green');
                elem.classList.add('red');
            }
        }
    </script>
</body>
</html>


task Ex391
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Element</title>
    <style>
        ul {
            padding: 30px;
            border: 1px solid red;
        }

        li {
            list-style-type: none;
            margin-bottom: 20px;
            border: 1px dashed black;
        }
    </style>
</head>
<body>
    <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        let ul = document.querySelector('#elem');

        ul.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.textContent += '!';
            } else if (event.target.tagName === 'UL') {
                console.log('Click on UL');
            }
        });
    </script>
</body>
</html>

task Ex392
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Element</title>
    <style>
        ul {
            padding: 30px;
            border: 1px solid red;
        }

        li {
            list-style-type: none;
            margin-bottom: 20px;
            border: 1px dashed black;
        }
    </style>
</head>
<body>
    <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>

    <script>
        let ul = document.querySelector('#elem');

        ul.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.textContent += '!';
            } else if (event.target.tagName === 'UL') {
                console.log('Click on UL');
            }
        });
    </script>
</body>
</html>

task Ex393
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Press Event</title>
</head>
<body>
    <input id="input" type="text">
    <p id="output"></p>

    <script>
        let input = document.querySelector('#input');
        let output = document.querySelector('#output');

        input.addEventListener('keypress', function (event) {
            output.textContent = `Key: ${event.key}, Code: ${event.code}`;
        });

        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter') {
                output.textContent = `Enter key pressed. Input value: ${input.value}`;
                input.value = '';
            }
        });
    </script>
</body>
</html>

task Ex394
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier Keys Event</title>
    <style>
        ul {
            padding: 30px;
            border: 1px solid red;
        }

        li {
            list-style-type: none;
            margin-bottom: 20px;
            border: 1px dashed black;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="btn">Click me (Ctrl/Alt/Shift)</button>

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>

    <script>
        let btn = document.querySelector('#btn');
        let list = document.querySelector('#list');

        btn.addEventListener('click', function (event) {
            if (event.ctrlKey) {
                console.log('Ctrl key pressed');
            }

            if (event.altKey) {
                console.log('Alt key pressed');
                list.style.backgroundColor = 'red';
            }

            if (event.shiftKey) {
                console.log('Shift key pressed');
            }
        });

        list.addEventListener('click', function (event) {
            let li = event.target;
            
            if (event.ctrlKey) {
                li.textContent += '1';
            }

            if (event.shiftKey) {
                li.textContent += '2';
            }
        });
    </script>
</body>
</html>

task Ex395
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prevent Default Example</title>
</head>
<body>
    <a href="/" id="link">Link 1</a>
    <a href="/page" id="link2">Link 2</a>

    <script>
        let link = document.querySelector('#link');
        let link2 = document.querySelector('#link2');

        link.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Clicked on Link 1. Href:', this.getAttribute('href'));
        });

        link2.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Clicked on Link 2. Href:', this.getAttribute('href'));
        });
    </script>
</body>
</html>
papka 2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sum of Numbers</title>
</head>
<body>
    <input type="number" id="input1" placeholder="Enter number 1">
    <input type="number" id="input2" placeholder="Enter number 2">
    <p id="result"></p>
    <a href="#" id="calculate">Calculate Sum</a>

    <script>
        let input1 = document.querySelector('#input1');
        let input2 = document.querySelector('#input2');
        let resultParagraph = document.querySelector('#result');
        let calculateLink = document.querySelector('#calculate');

        calculateLink.addEventListener('click', function (event) {
            event.preventDefault();

            let num1 = parseFloat(input1.value) || 0;
            let num2 = parseFloat(input2.value) || 0;
            let sum = num1 + num2;

            resultParagraph.textContent = 'Sum: ' + sum;
        });
    </script>
</body>
</html>

task Ex396
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubbling Example</title>
    <style>
        #elem1 {
            background-color: green;
            padding: 20px;
            margin: 10px;
        }

        #elem2 {
            background-color: lightblue;
            padding: 20px;
            margin: 10px;
        }

        #elem3 {
            background-color: red;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div id="elem1">
        <div id="elem2">
            <div id="elem3"></div>
        </div>
    </div>

    <script>
        let elem1 = document.querySelector('#elem1');
        let elem2 = document.querySelector('#elem2');
        let elem3 = document.querySelector('#elem3');

        elem1.addEventListener('click', function () {
            alert('Green');
        });

        elem2.addEventListener('click', function () {
            alert('Lightblue');
        });

        elem3.addEventListener('click', function () {
            alert('Red');
        });
    </script>
</body>
</html>

task Ex397
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubbling Example</title>
    <style>
        #elem1 {
            background-color: green;
            padding: 20px;
            margin: 10px;
        }

        #elem2 {
            background-color: lightblue;
            padding: 20px;
            margin: 10px;
        }

        #elem3 {
            background-color: red;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div id="elem1">
        <div id="elem2">
            <div id="elem3"></div>
        </div>
    </div>

    <script>
        let elem1 = document.querySelector('#elem1');
        let elem2 = document.querySelector('#elem2');
        let elem3 = document.querySelector('#elem3');

        elem1.addEventListener('click', function () {
            alert('Green');
        });

        elem2.addEventListener('click', function () {
            alert('Lightblue');
        });

        elem3.addEventListener('click', function () {
            alert('Red');
        });
    </script>
</body>
</html>

task Ex398
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubbling Example</title>
    <style>
        #elem1 {
            background-color: green;
            padding: 20px;
            margin: 10px;
        }

        #elem2 {
            background-color: lightblue;
            padding: 20px;
            margin: 10px;
        }

        #elem3 {
            background-color: red;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div id="elem1">
        <div id="elem2">
            <div id="elem3"></div>
        </div>
    </div>

    <script>
        let elem1 = document.querySelector('#elem1');
        let elem2 = document.querySelector('#elem2');
        let elem3 = document.querySelector('#elem3');

        elem1.addEventListener('click', function () {
            alert('Green');
        });

        elem2.addEventListener('click', function () {
            alert('Lightblue');
        });

        elem3.addEventListener('click', function () {
            alert('Red');
        });
    </script>
</body>
</html>

task Ex399
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Target Example</title>
    <style>
        div, ul, li {
            padding: 20px;
        }

        div {
            border: 1px solid red;
        }

        ul {
            border: 1px solid orange;
        }

        li {
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <script>
        let div = document.querySelector('div');

        div.addEventListener('click', function (event) {
            if (event.target.tagName === 'DIV') {
                console.log('Click on div');
            }

            if (event.target.tagName === 'UL') {
                console.log('Click on ul');
            }

            if (event.target.tagName === 'LI') {
                console.log('Click on li');
                event.target.textContent += '!';
            }
        });
    </script>
</body>
</html>

task 400
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stop Event Bubbling Example</title>
    <style>
        #parent {
            padding: 20px;
            border: 1px solid black;
        }

        #block:not(.active) {
            display: none;
            margin-top: 10px;
            padding: 10px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div id="parent">
        <button id="button">Click me</button>
        <div id="block">
            Text
        </div>
    </div>

    <script>
        let parent = document.getElementById('parent');
        let button = document.getElementById('button');
        let block = document.getElementById('block');

        button.addEventListener('click', function (event) {
            // Отменяем всплытие события
            event.stopPropagation();
            block.classList.add('active');
        });

        parent.addEventListener('click', function () {
            block.classList.remove('active');
        });
    </script>
</body>
</html>

task Ex401
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
    <style>
        ul {
            list-style: none;
            padding: 0;
        }

        li {
            padding: 10px;
            border: 1px solid #ccc;
            margin: 5px;
            cursor: pointer;
        }

        li:hover {
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        let list = document.getElementById('list');

        list.addEventListener('click', function (event) {
            event.target.textContent = event.target.textContent + '!';
        });
    </script>
</body>
</html>

task Ex402
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Event Delegation</title>
    <style>
        ul {
            list-style: none;
            padding: 0;
        }

        li {
            padding: 10px;
            border: 1px solid #ccc;
            margin: 5px;
            cursor: pointer;
        }

        li:hover {
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <ul id="list">
        <li>Item 1 <i>italic</i> item</li>
        <li>Item 2 <i>italic</i> item</li>
        <li>Item 3 <i>italic</i> item</li>
    </ul>

    <script>
        let list = document.getElementById('list');

        list.addEventListener('click', function (event) {
            let li = event.target.closest('li');

            if (li) {
                li.textContent = li.textContent + '!';
            }
        });
    </script>
</body>
</html>

task Ex403
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Context in JavaScript</title>
</head>
<body>
    <input id="elem1" value="text1">
    <input id="elem2" value="text2">

    <script>
        function func() {
            console.log(this.value);
        }

        let elem1 = document.querySelector('#elem1');
        elem1.addEventListener('blur', func);

        let elem2 = document.querySelector('#elem2');
        elem2.addEventListener('blur', func);
    </script>
</body>
</html>

task Ex404
papka 1
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent); 

function parent() {
    console.log(this.value);  // выведет 'text'
    
    function child() {
        console.log(this.value);  // выведет undefined
    }
    child();
}


task Ex405
papka 1
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent); 

function parent() {
    console.log(this.value);  // выведет 'text'
    
    function child() {
        console.log(this.value);  // выведет 'text'
    }
    
    child.call(this);  // используем call для явной передачи контекста
}

task Ex406
papka 1
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func); 

function func() {
    alert(square.call(this));  // используем call для явной передачи контекста

    function square() {
        return this.value * this.value;
    }
}

task Ex407
papka 1
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    child(this);

    function child(param) {
        console.log(param.value);
    }
}

task Ex408
papka 1
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this.value);

    let child = () => {
        console.log(this.value);
    }
    child();
}

task Ex409
papka 1
function func() {
    console.log(this.value);
}

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

func.call(elem1);
func.call(elem2);
func.call(elem3);

task Ex410
papka 1
let elem = document.querySelector('#elem');

function func(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func.call(elem, 'John', 'Smit');


task Ex411
papka 1
let elem = document.querySelector('#elem');

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['John', 'Smit']);

task Ex412
papka 1
let elem = document.getElementById('elem');

function func(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

func = func.bind(elem);

func('John', 'Smit');  // выведет 'привет, John Smit'
func('Eric', 'Luis');  // выведет 'привет, Eric Luis'

task Ex413
papka 1
setInterval(function() {
    console.log('!');
}, 3000);

task Ex414
papka 1
let count = 100;

setInterval(() => console.log(--count), 1000);

task Ex415
papka 1
let count = 10;

let timerId = setInterval(() => {
  console.log(count);
  if (count === 0) {
    clearInterval(timerId);
  }
  count--;
}, 1000);

task Ex416
papka 1
<button id="start">Start</button>
let startButton = document.getElementById('start');

startButton.addEventListener('click', function() {
  let count = 100;

  let timerId = setInterval(() => {
    console.log(count);

    if (count === 0) {
      clearInterval(timerId);
    }
    count--;
  }, 1000);
});

task Ex417
papka 1
<button id="start">Start</button>
let startButton = document.getElementById('start');

function startTimer() {
  let count = 100;

  let timerId = setInterval(() => {
    console.log(count);

    if (count === 0) {
      clearInterval(timerId);
      startButton.addEventListener('click', startTimer);
    }
    count--;
  }, 1000);

  startButton.removeEventListener('click', startTimer);
}

startButton.addEventListener('click', startTimer);

task Ex418
papka 1
<!-- Задача 1 -->
<button id="start1">start</button>
<button id="stop1">stop</button>

<!-- Задача 2 -->
<button id="start2">start</button>
<button id="stop2">stop</button>

<!-- Задача 3 -->
<button id="start3">start</button>
<button id="stop3">stop</button>

<!-- Задача 4 -->
<button id="start4">start</button>
<button id="stop4">stop</button>

<!-- Задача 5 -->
<button id="start5">start</button>
<button id="stop5">stop</button>

<!-- Задача 6 -->
<button id="start6">start</button>
<button id="stop6">stop</button>

// Задача 1
let startButton1 = document.getElementById('start1');
let stopButton1 = document.getElementById('stop1');
let timerId1;

startButton1.addEventListener('click', function () {
  let count1 = 100;
  timerId1 = setInterval(function () {
    console.log(count1);
    if (count1 === 0) {
      clearInterval(timerId1);
      startButton1.addEventListener('click', startTimer1);
    }
    count1--;
  }, 1000);

  startButton1.removeEventListener('click', startTimer1);
});

stopButton1.addEventListener('click', function () {
  clearInterval(timerId1);
});

// Задача 2
let startButton2 = document.getElementById('start2');
let stopButton2 = document.getElementById('stop2');
let timerId2;

startButton2.addEventListener('click', function () {
  timerId2 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton2.addEventListener('click', function () {
  clearInterval(timerId2);
});

// Задача 3
let startButton3 = document.getElementById('start3');
let stopButton3 = document.getElementById('stop3');

startButton3.addEventListener('click', function () {
  let timerId3 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton3.addEventListener('click', function () {
  clearInterval(timerId3);
});

// Задача 4
let startButton4 = document.getElementById('start4');
let stopButton4 = document.getElementById('stop4');
let timerId4;

startButton4.addEventListener('click', function () {
  timerId4 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton4.addEventListener('click', function () {
  clearInterval(timerId4);
});

// Задача 5
let startButton5 = document.getElementById('start5');
let stopButton5 = document.getElementById('stop5');
let timerId5;

startButton5.addEventListener('click', function () {
  timerId5 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton5.addEventListener('click', function () {
  clearInterval(timerId5);
});

// Задача 6
let startButton6 = document.getElementById('start6');
let stopButton6 = document.getElementById('stop6');
let timerId6;

startButton6.addEventListener('click', function () {
  timerId6 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton6.addEventListener('click', function () {
  clearInterval(timerId6);
});

task Ex419
papka 1
// Задача 1
let elem1 = document.querySelector('#elem');

setInterval(function() {
  elem1.value = Number(elem1.value) + 1;
}, 1000);

// Задача 2
let elem2 = document.querySelector('#elem');

setInterval(function() {
  elem2.value = Number(elem2.value) - 1;
}, 1000);

// Задача 3
let elem3 = document.querySelector('#elem');

let timerId = setInterval(function() {
  elem3.value = Number(elem3.value) - 1;
  if (elem3.value === '0') {
    clearInterval(timerId);
  }
}, 1000);

task Ex420
papka 1
// Задача 1
let elem1 = document.querySelector('#elem');

elem1.addEventListener('click', function() {
  let self = this;

  setInterval(function() {
    self.value = Number(self.value) + 1;
  }, 1000);
});

// Задача 2
let elem2 = document.querySelector('#elem');

elem2.addEventListener('click', function() {
  let self = this;

  setInterval(function() {
    self.value = Number(self.value) + 1;
  }, 1000);
});

task Ex421
papka 1
// Задача 1
let button1 = document.getElementById('button1');
let paragraph1 = document.getElementById('paragraph1');

button1.addEventListener('click', function() {
  setInterval(function() {
    paragraph1.textContent = Number(paragraph1.textContent) + 1;
  }, 1000);
});

// Задача 2
let button2 = document.getElementById('button2');
let paragraph2 = document.getElementById('paragraph2');

button2.addEventListener('click', function() {
  let timerId = setInterval(function() {
    paragraph2.textContent = Number(paragraph2.textContent) - 1;
    if (Number(paragraph2.textContent) === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 3
let input3 = document.getElementById('input3');

setInterval(function() {
  input3.value = Math.pow(Number(input3.value), 2);
}, 1000);

// Задача 4
let input4 = document.getElementById('input4');
let countdownParagraph = document.getElementById('countdownParagraph');

input4.addEventListener('blur', function() {
  let timerId = setInterval(function() {
    countdownParagraph.textContent = Number(input4.value);
    input4.value = Number(input4.value) - 1;
    if (Number(input4.value) < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 5
let input5 = document.getElementById('input5');
let button5 = document.getElementById('button5');
let countdownParagraph5 = document.getElementById('countdownParagraph5');

button5.addEventListener('click', function() {
  countdownParagraph5.textContent = input5.value;
  let timerId = setInterval(function() {
    countdownParagraph5.textContent = Number(countdownParagraph5.textContent) - 1;
    if (Number(countdownParagraph5.textContent) < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 6
let paragraph6 = document.getElementById('paragraph6');
let startButton6 = document.getElementById('startButton6');
let stopButton6 = document.getElementById('stopButton6');
let timerId6;

startButton6.addEventListener('click', function() {
  let i = 1;
  timerId6 = setInterval(function() {
    paragraph6.textContent = i;
    i++;
  }, 1000);
});

stopButton6.addEventListener('click', function() {
  clearInterval(timerId6);
});

// Задача 7
let paragraph7 = document.getElementById('paragraph7');

setInterval(function() {
  let currentColor = paragraph7.style.color;
  paragraph7.style.color = currentColor === 'red' ? 'green' : 'red';
}, 1000);

// Задача 8
let clock = document.getElementById('clock');

setInterval(function() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

task Ex422
papka 1
let paragraph = document.querySelector('p');

setTimeout(function() {
  paragraph.textContent = 'Сообщение через 10 секунд!';
}, 10000);

task Ex423
papka 1
let i = 0;

function timer() {
  setTimeout(function() {
    console.log(i++);
    timer();
  }, 1000);
}

timer();

task Ex424
papka 1
// Задание 1
let ol = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
ol.appendChild(li);

// Задание 2
let ol2 = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let li2 = document.createElement('li');
  li2.textContent = 'item';
  ol2.appendChild(li2);
});

task Ex425
papka 1
// Задание 1
let ol = document.querySelector('ol');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let li = document.createElement('li');
  ol.appendChild(li);

  li.addEventListener('click', function() {
    this.textContent += '!';
  });
});

task Ex426
papka 1
// Задание 1
let ul = document.querySelector('ul');

for (let i = 1; i <= 10; i++) {
  let li = document.createElement('li');
  li.textContent = i.toString();
  ul.appendChild(li);
}

task Ex427
papka 1
// Задание 1
let div = document.querySelector('div');
let paragraph = document.querySelector('p');

for (let i = 1; i <= 5; i++) {
  let input = document.createElement('input');
  
  // Навешиваем обработчик потери фокуса:
  input.addEventListener('blur', function() {
    paragraph.textContent = this.value;
  });

  div.appendChild(input);
}

task Ex428
papka 1
// Задание 1
let lis = document.querySelectorAll('li');

for (let li of lis) {
  li.addEventListener('click', function() {
    li.remove();
  });
}
papka 2
// Задание 2
let parent = document.getElementById('parent');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  let lastChild = parent.lastElementChild;
  if (lastChild) {
    lastChild.remove();
  }
});

task Ex429
papka 1
let elem = document.getElementById('elem');

// Вставка в начало
let startElement = document.createElement('li');
startElement.textContent = 'start';
elem.prepend(startElement);

// Вставка в конец
let finishElement = document.createElement('li');
finishElement.textContent = 'finish';
elem.append(finishElement);

task Ex430
papka 1
// Задача 1
let parent = document.getElementById('parent');
let elem = document.getElementById('elem');

// Создаем новый элемент
let newElement = document.createElement('li');
newElement.textContent = 'new';

// Вставляем перед элементом #elem
parent.insertBefore(newElement, elem);

// Задача 2
newElement.addEventListener('click', function() {
  // Добавляем '!' в конец текста
  this.textContent += '!';
});

task Ex431
papka 1
// Задача 1
let elem = document.getElementById('elem');
let newParagraph = document.createElement('p');
newParagraph.textContent = '!!!';
elem.insertAdjacentElement('beforebegin', newParagraph);

// Задача 2
let newParagraph2 = document.createElement('p');
newParagraph2.textContent = '!!!';
elem.insertAdjacentElement('afterend', newParagraph2);

// Задача 3
let newParagraph3 = document.createElement('p');
newParagraph3.textContent = '!!!';
elem.insertAdjacentElement('afterbegin', newParagraph3);

// Задача 4
let newParagraph4 = document.createElement('p');
newParagraph4.textContent = '!!!';
elem.insertAdjacentElement('beforeend', newParagraph4);

task Ex432
papka 1
let elem = document.getElementById('elem');
let htmlString = '<div class="www"><p>text</p><p>text</p><input></div>';
elem.insertAdjacentHTML('beforebegin', htmlString);

task Ex433
papka 1
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function() {
  let clone = input.cloneNode(true);
  document.body.appendChild(clone);
});

task Ex434
papka 1
// Задание 1
let elem = document.querySelector('#elem');
console.log(elem.matches('.www'));

// Задание 2
let elementToCheck = /* ваш элемент */;
console.log(elementToCheck.matches('p'));

// Задание 3
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
console.log(elem1.contains(elem2));

task Ex435
papka 1
let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let p = document.createElement('p');
  p.textContent = elem;

  p.addEventListener('click', function() {
    // Прибавляем единицу к содержимому абзаца
    let currentNumber = parseInt(this.textContent, 10);
    this.textContent = currentNumber + 1;
  });

  parent.appendChild(p);
}

task Ex436
papka 1
// №1
let ul = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;
  ul.appendChild(li);
}

// №2
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert(event.target.textContent);
  }
});

// №3
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.textContent += '!';
  }
});

// №4
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI' && !event.target.hasAttribute('clicked')) {
    event.target.textContent += '!';
    event.target.setAttribute('clicked', 'true');
  }
});

task Ex437
papka 1
// №1
let table1 = document.querySelector('#table');

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table1.appendChild(tr);
}

// №2
let table2 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table2.appendChild(tr);
}

// №3
let table3 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = 'x';
    tr.appendChild(td);
  }
  
  table3.appendChild(tr);
}

// №4
let widthInput = document.getElementById('widthInput');
let heightInput = document.getElementById('heightInput');
let table4 = document.querySelector('#table');

for (let i = 0; i < heightInput.value; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < widthInput.value; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table4.appendChild(tr);
}

task Ex438
papka 1
// №1
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
let table1 = document.querySelector('#table');

for (let subArr of arr1) {
  let tr = document.createElement('tr');
  
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem;
    tr.appendChild(td);
  }
  
  table1.appendChild(tr);
}

// №2
let arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
let table2 = document.querySelector('#table');

for (let subArr of arr2) {
  let tr = document.createElement('tr');
  
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem * elem;
    tr.appendChild(td);
  }
  
  table2.appendChild(tr);
}

task Ex439
papka 1
// №1
let table1 = document.querySelector('#table');
let counter1 = 1;

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = counter1++;
    tr.appendChild(td);
  }
  
  table1.appendChild(tr);
}

// №2
let table2 = document.querySelector('#table');
let counter2 = 2;

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = counter2;
    counter2 += 2;
    tr.appendChild(td);
  }
  
  table2.appendChild(tr);
}

task Ex440
papka 1
// №1
let employeesTable = document.getElementById('table');
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

for (let employee of employees) {
  let tr = document.createElement('tr');
  
  let tdName = document.createElement('td');
  tdName.textContent = employee.name;
  tr.appendChild(tdName);
  
  let tdAge = document.createElement('td');
  tdAge.textContent = employee.age;
  tr.appendChild(tdAge);
  
  let tdSalary = document.createElement('td');
  tdSalary.textContent = employee.salary;
  tr.appendChild(tdSalary);
  
  employeesTable.appendChild(tr);
}

// №2
employeesTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD' && event.target.textContent == parseInt(event.target.textContent)) {
    event.target.textContent = parseInt(event.target.textContent) + 1;
  }
});

// №3
employeesTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD' && !isNaN(parseFloat(event.target.textContent))) {
    let currentValue = parseFloat(event.target.textContent);
    let newValue = currentValue * 1.1;
    event.target.textContent = newValue.toFixed(2);
  }
});


task Ex441
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table, td {
      border: 1px solid black;
      border-collapse: collapse;
    }

    td {
      width: 50px;
      height: 50px;
      text-align: center;
    }
  </style>
  <title>Table Manipulation</title>
</head>
<body>

<table id="table">
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>4</td>
  </tr>
</table>

<button onclick="multiplyNumbers()">Multiply Numbers</button>

<script>
  function multiplyNumbers() {
    let tds = document.querySelectorAll('#table td');

    for (let td of tds) {
      let number = parseInt(td.textContent);
      td.textContent = number * 2;
    }
  }
</script>

</body>
</html>

task Ex442
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Self-Deleting Elements</title>
</head>
<body>

<ul id="parent">
</ul>

<input type="submit" id="button" value="Add New Element">

<script>
  let parent = document.querySelector('#parent');
  let button = document.querySelector('#button');

  button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'New Element';

    li.addEventListener('click', function () {
      this.remove();
    });

    parent.appendChild(li);
  });
</script>

</body>
</html>

task Ex443
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Removal</title>
</head>
<body>

<div id="parent">
  <p id="elem">This is a paragraph.</p>
  <a href="" id="remove">Remove</a>
</div>

<script>
  let elem = document.querySelector('#elem');
  let remove = document.querySelector('#remove');

  remove.addEventListener('click', function (event) {
    elem.remove();
    event.preventDefault();
  });
</script>

</body>
</html>

task Ex444
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Removal</title>
</head>
<body>

<!-- Task 1 -->
<div id="parent">
  <p>text1</p>
  <p>text2</p>
  <p>text3</p>
</div>

<script>
  let elems = document.querySelectorAll('#parent p');

  for (let elem of elems) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = 'remove';
    elem.appendChild(remove);

    remove.addEventListener('click', function (event) {
      elem.remove();
      event.preventDefault();
    });
  }
</script>

<!-- Task 2 -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  let listItems = document.querySelectorAll('ul li');

  for (let listItem of listItems) {
    let removeLink = document.createElement('a');
    removeLink.href = '';
    removeLink.textContent = 'remove';
    listItem.appendChild(removeLink);

    removeLink.addEventListener('click', function (event) {
      listItem.remove();
      event.preventDefault();
    });
  }
</script>

<!-- task Ex3 -->
<table border="1" id="myTable">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
    <td>Row 2, Cell 3</td>
  </tr>
  <tr>
    <td>Row 3, Cell 1</td>
    <td>Row 3, Cell 2</td>
    <td>Row 3, Cell 3</td>
  </tr>
</table>

<script>
  let tableRows = document.querySelectorAll('#myTable tr');

  for (let row of tableRows) {
    let removeLink = document.createElement('a');
    removeLink.href = '';
    removeLink.textContent = 'remove';
    row.appendChild(removeLink);

    removeLink.addEventListener('click', function (event) {
      row.remove();
      event.preventDefault();
    });
  }
</script>

</body>
</html>

task Ex445
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Element on Blur</title>
</head>
<body>

<!-- Task 1 -->
<div id="parent1">
  <p id="elem1">text</p>
  <input id="input1">
</div>

<script>
  let elem1 = document.querySelector('#elem1');
  let input1 = document.querySelector('#input1');

  input1.addEventListener('input', function() {
    elem1.textContent = this.value;
  });

  input1.value = elem1.textContent;
</script>

<!-- Task 2 -->
<div id="parent2">
  <p id="elem2">text</p>
</div>

<script>
  let elem2 = document.querySelector('#elem2');

  elem2.addEventListener('click', function() {
    let input2 = document.createElement('input');
    input2.value = elem2.textContent;

    input2.addEventListener('input', function() {
      elem2.textContent = this.value;
    });

    input2.addEventListener('blur', function() {
      elem2.textContent = this.value;
      this.remove();
    });

    elem2.parentElement.appendChild(input2);
    input2.focus();
  });
</script>

</body>
</html>

task Ex446
papka 1
let elem = document.querySelector('#elem');

function replaceWithInput() {
    let input = document.createElement('input');
    input.value = elem.textContent;
    
    elem.textContent = '';
    elem.appendChild(input);

    function finishEditing() {
        elem.textContent = input.value;
        elem.addEventListener('click', replaceWithInput);
        input.removeEventListener('blur', finishEditing);
    }

    input.addEventListener('blur', finishEditing);
    elem.removeEventListener('click', replaceWithInput);
}

elem.addEventListener('click', replaceWithInput);

task Ex447
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit List Items</title>
  <style>
    input {
      width: 80%;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    let listItems = document.querySelectorAll('li');

    for (let listItem of listItems) {
      listItem.addEventListener('click', function editListItem() {
        let input = document.createElement('input');
        input.value = listItem.textContent;

        listItem.textContent = '';
        listItem.appendChild(input);

        input.addEventListener('blur', function() {
          listItem.textContent = this.value;
          listItem.addEventListener('click', editListItem);
        });

        listItem.removeEventListener('click', editListItem);
      });
    }
  </script>
</body>
</html>

papka 2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Table Cells</title>
  <style>
    input {
      width: 80%;
    }
    table {
      border-collapse: collapse;
    }
    td, th {
      border: 1px solid black;
      padding: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Cell 1,1</td>
      <td>Cell 1,2</td>
    </tr>
    <tr>
      <td>Cell 2,1</td>
      <td>Cell 2,2</td>
    </tr>
  </table>

  <script>
    let cells = document.querySelectorAll('td, th');

    for (let cell of cells) {
      cell.addEventListener('click', function editTableCell() {
        let input = document.createElement('input');
        input.value = cell.textContent;

        cell.textContent = '';
        cell.appendChild(input);

        input.addEventListener('blur', function() {
          cell.textContent = this.value;
          cell.addEventListener('click', editTableCell);
        });

        cell.removeEventListener('click', editTableCell);
      });
    }
  </script>
</body>
</html>

task Ex448
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit and Delete Paragraphs</title>
  <style>
    input {
      width: 80%;
    }
    .remove {
      color: red;
      cursor: pointer;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div id="parent">
    <p><span>text1</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
    <p><span>text2</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
    <p><span>text3</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
  </div>

  <script>
    function removeParagraph(link) {
      link.parentNode.parentNode.remove();
    }

    let spans = document.querySelectorAll('#parent span');

    for (let span of spans) {
      span.addEventListener('click', function editParagraph() {
        let input = document.createElement('input');
        input.value = span.textContent;

        span.textContent = '';
        span.appendChild(input);

        input.addEventListener('blur', function() {
          span.textContent = this.value;
          span.addEventListener('click', editParagraph);
        });

        span.removeEventListener('click', editParagraph);
      });
    }
  </script>
</body>
</html>
papka 2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit and Delete Paragraphs</title>
  <style>
    input {
      width: 80%;
    }
    .remove {
      color: red;
      cursor: pointer;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div id="parent">
    <p><span>text1</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
    <p><span>text2</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
    <p><span>text3</span><a href="#" class="remove" onclick="removeParagraph(this)">remove</a></p>
  </div>

  <script>
    function removeParagraph(link) {
      link.parentNode.parentNode.remove();
    }

    let paragraphs = document.querySelectorAll('#parent p');

    for (let paragraph of paragraphs) {
      let span = document.createElement('span');
      span.textContent = paragraph.textContent;
      paragraph.textContent = '';

      paragraph.appendChild(span);

      span.addEventListener('click', function editParagraph() {
        let input = document.createElement('input');
        input.value = span.textContent;

        span.textContent = '';
        span.appendChild(input);

        input.addEventListener('blur', function() {
          span.textContent = this.value;
          span.addEventListener('click', editParagraph);
        });

        span.removeEventListener('click', editParagraph);
      });
    }
  </script>
</body>
</html>

task Ex449
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styling Paragraphs</title>
  <style>
    .underline {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div id="parent">
    <p><span>text1</span><a href="#" onclick="addUnderline(this)">link</a></p>
    <p><span>text2</span><a href="#" onclick="addUnderline(this)">link</a></p>
    <p><span>text3</span><a href="#" onclick="addUnderline(this)">link</a></p>
  </div>

  <script>
    function addUnderline(link) {
      let paragraph = link.parentNode;
      let textSpan = paragraph.querySelector('span');

      textSpan.classList.toggle('underline');
    }
  </script>
</body>
</html>

papka 2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styling and Removing Links</title>
  <style>
    .underline {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div id="parent">
    <p><span>text1</span><a href="#" onclick="removeLink(this)">link</a></p>
    <p><span>text2</span><a href="#" onclick="removeLink(this)">link</a></p>
    <p><span>text3</span><a href="#" onclick="removeLink(this)">link</a></p>
  </div>

  <script>
    function removeLink(link) {
      let paragraph = link.parentNode;
      let textSpan = paragraph.querySelector('span');

      paragraph.removeChild(link);
      textSpan.classList.add('underline');
    }
  </script>
</body>
</html>

papka 3
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Green Background Table</title>
  <style>
    table {
      border-collapse: collapse;
    }
    td, th {
      border: 1px solid black;
      padding: 8px;
    }
    .green-bg {
      background-color: green;
    }
  </style>
</head>
<body>
  <table id="myTable">
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Row 1, Col 1</td>
      <td>Row 1, Col 2</td>
      <td><a href="#" onclick="toggleGreenBackground(this)">Toggle BG</a></td>
    </tr>
    <tr>
      <td>Row 2, Col 1</td>
      <td>Row 2, Col 2</td>
      <td><a href="#" onclick="toggleGreenBackground(this)">Toggle BG</a></td>
    </tr>
  </table>

  <script>
    function toggleGreenBackground(link) {
      let row = link.parentNode.parentNode;
      row.classList.toggle('green-bg');
    }
  </script>
</body>
</html>

papka 4
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Green Background</title>
  <style>
    table {
      border-collapse: collapse;
    }
    td, th {
      border: 1px solid black;
      padding: 8px;
    }
    .green-bg {
      background-color: green;
    }
  </style>
</head>
<body>
  <table id="myTable">
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Row 1, Col 1</td>
      <td>Row 1, Col 2</td>
      <td><a href="#" onclick="toggleGreenBackground(this)">Toggle BG</a></td>
    </tr>
    <tr>
      <td>Row 2, Col 1</td>
      <td>Row 2, Col 2</td>
      <td><a href="#" onclick="toggleGreenBackground(this)">Toggle BG</a></td>
    </tr>
  </table>

  <script>
    function toggleGreenBackground(link) {
      let row = link.parentNode.parentNode;
      row.classList.toggle('green-bg');
    }
  </script>
</body>
</html>

task Ex450
papka 1
<p id="elem">text</p>
<input type="submit" id="toggle" value="toggle">

<script>
  let elem = document.querySelector('#elem');
  let toggle = document.querySelector('#toggle');

  toggle.addEventListener('click', function() {
    if (elem.classList.contains('hidden')) {
      elem.classList.remove('hidden'); // показываем элемент
    } else {
      elem.classList.add('hidden'); // скрываем элемент
    }
  });
</script>

task Ex451
papka 1
<p id="elem1">1</p><button data-elem="elem1">toggle</button>
<p id="elem2">2</p><button data-elem="elem2">toggle</button>
<p id="elem3">3</p><button data-elem="elem3">toggle</button>

<script>
  let buttons = document.querySelectorAll('button');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      let elem = document.querySelector('#' + this.dataset.elem);
      elem.classList.toggle('hidden');
    });
  }
</script>

papka 2
<p>1</p><button>toggle</button>
<p>2</p><button>toggle</button>
<p>3</p><button>toggle</button>

<script>
  let buttons = document.querySelectorAll('button');
  let elems   = document.querySelectorAll('p');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      elems[i].classList.toggle('hidden');
    });
  }
</script>

papka 3
<p>1</p><button>toggle</button>
<p>2</p><button>toggle</button>
<p>3</p><button>toggle</button>

<script>
  let buttons = document.querySelectorAll('button');
  let elems   = document.querySelectorAll('p');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      elems[i].classList.toggle('hidden');
    });
  }
</script>

task Ex452
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activate List Items</title>
  <style>
    .active {
      background: red;
    }
  </style>
</head>
<body>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    let listItems = document.querySelectorAll('#myList li');

    for (let listItem of listItems) {
      listItem.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
  </script>
</body>
</html>

papka 2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activate and Deactivate List Items</title>
  <style>
    .active {
      background: red;
    }
  </style>
</head>
<body>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    let listItems = document.querySelectorAll('#myList li');

    for (let listItem of listItems) {
      listItem.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
  </script>
</body>
</html>

task Ex453
papka 1
В первом примере:

Создается массив цветов ['color1', 'color2'].
Устанавливается переменная color в начальное значение 'color1'.
Для каждой ячейки таблицы устанавливается слушатель события click.
При клике на ячейку, проверяется текущий цвет (color). Если это 'color1', то цвет изменяется на 'color2', и наоборот.
Добавляется соответствующий класс цвета к ячейке.
Во втором примере:

Создается массив цветов ['color1', 'color2', 'color3'].
Устанавливается переменная i в начальное значение 0.
Для каждой ячейки таблицы устанавливается слушатель события click.
При клике на ячейку, добавляется класс цвета из массива colors с текущим индексом i.
Индекс i увеличивается на 1, и если достигнут конец массива, снова устанавливается в 0.
Таким образом, при каждом клике цвет ячейки будет чередоваться в соответствии с порядком в массиве colors.

task Ex454
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #list {
      list-style-type: none;
    }
  </style>
  <title>List</title>
</head>
<body>
  <ul id="list"></ul>

  <script>
    let array = ['Item 1', 'Item 2', 'Item 3'];
    let list = document.getElementById('list');

    for (let item of array) {
      let listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    }
  </script>
</body>
</html>
papka 2
<!-- Use the same HTML structure as in №1 -->
<!-- Add this script below the existing one -->

<script>
  list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      let input = document.createElement('input');
      input.value = event.target.textContent;
      event.target.textContent = '';
      event.target.appendChild(input);

      input.addEventListener('blur', function () {
        event.target.textContent = this.value;
      });

      input.focus();
    }
  });
</script>

papka 3
<!-- Use the same HTML structure as in №2 -->
<!-- Add this script below the existing one -->

<script>
  let input = document.createElement('input');
  let addButton = document.createElement('button');
  addButton.textContent = 'Add Item';

  document.body.appendChild(input);
  document.body.appendChild(addButton);

  addButton.addEventListener('click', function () {
    if (input.value.trim() !== '') {
      let listItem = document.createElement('li');
      listItem.textContent = input.value;
      list.appendChild(listItem);

      input.value = '';
    }
  });
</script>

papka 4
<!-- Use the same HTML structure as in №3 -->
<!-- Add this script below the existing one -->

<script>
  list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      let removeLink = document.createElement('a');
      removeLink.href = '#';
      removeLink.textContent = 'Remove';

      event.target.appendChild(removeLink);

      removeLink.addEventListener('click', function (e) {
        e.preventDefault();
        list.removeChild(event.target.parentElement);
      });
    }
  });
</script>

papka 5
<!-- Use the same HTML structure as in №4 -->
<!-- Add this script below the existing one -->

<script>
  list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      let strikeLink = document.createElement('a');
      strikeLink.href = '#';
      strikeLink.textContent = 'Strike';

      event.target.appendChild(strikeLink);

      strikeLink.addEventListener('click', function (e) {
        e.preventDefault();
        event.target.classList.toggle('strikethrough');
      });
    }
  });
</script>

papka 6
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #table {
      border-collapse: collapse;
    }

    #table td {
      border: 1px solid black;
      padding: 8px;
    }
  </style>
  <title>Employees Table</title>
</head>
<body>
  <table id="table"></table>

  <script>
    let employees = [
      { name: 'employee1', age: 30, salary: 400 },
      { name: 'employee2', age: 31, salary: 500 },
      { name: 'employee3', age: 32, salary: 600 },
    ];

    let table = document.getElementById('table');

    for (let employee of employees) {
      let row = table.insertRow();
      let nameCell = row.insertCell(0);
      let ageCell = row.insertCell(1);
      let salaryCell = row.insertCell(2);

      nameCell.textContent = employee.name;
      ageCell.textContent = employee.age;
      salaryCell.textContent = employee.salary;
    }
  </script>
</body>
</html>

papka 7
<!-- Use the same HTML structure as in №6 -->
<!-- Add this script below the existing one -->

<script>
  let tds = document.querySelectorAll('#table td');

  for (let td of tds) {
    td.addEventListener('click', function () {
      let input = document.createElement('input');
      input.value = this.textContent;
      this.textContent = '';
      this.appendChild(input);

      input.addEventListener('blur', function () {
        td.textContent = this.value;
      });

      input.focus();
    });
  }
</script>

papka 8
<!-- Use the same HTML structure as in №7 -->
<!-- Add this script below the existing one -->

<script>
  for (let employee of employees) {
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = 'Delete';

    let row = table.insertRow();
    let nameCell = row.insertCell(0);
    let ageCell = row.insertCell(1);
    let salaryCell = row.insertCell(2);
    let actionCell = row.insertCell(3);

    nameCell.textContent = employee.name;
    ageCell.textContent = employee.age;
    salaryCell.textContent = employee.salary;
    actionCell.appendChild(deleteLink);

    deleteLink.addEventListener('click', function (e) {
      e.preventDefault();
      table.deleteRow(row.rowIndex);
    });
  }
</script>

papka 9
<!-- Use the same HTML structure as in №8 -->
<!-- Add this script below the existing one -->

<script>
  let nameInput = document.createElement('input');
  let ageInput = document.createElement('input');
  let salaryInput = document.createElement('input');
  let addButton = document.createElement('button');
  addButton.textContent = 'Add Employee';

  document.body.appendChild(nameInput);
  document.body.appendChild(ageInput);
  document.body.appendChild(salaryInput);
  document.body.appendChild(addButton);

  addButton.addEventListener('click', function () {
    let newRow = table.insertRow();
    let nameCell = newRow.insertCell(0);
    let ageCell = newRow.insertCell(1);
    let salaryCell = newRow.insertCell(2);
    let actionCell = newRow.insertCell(3);

    nameCell.textContent = nameInput.value;
    ageCell.textContent = ageInput.value;
    salaryCell.textContent = salaryInput.value;

    let

task Ex455
papka 1
function setText(selector, text) {
    let elem = document.querySelector(selector);
    if (elem) {
      elem.textContent = text;
    }
  }
  
  setText('#elem1', 'text1');
  setText('#elem2', 'text2');
  
papka 2
function setAttr(selector, attributeName, attributeValue) {
    let elem = document.querySelector(selector);
    if (elem) {
      elem.setAttribute(attributeName, attributeValue);
    }
  }
  
  // Example usage:
  setAttr('#exampleElement', 'data-custom', 'new value');
  
task Ex456
papka 1
function appendText(selector, text) {
    let elems = document.querySelectorAll(selector);
    
    for (let elem of elems) {
      elem.textContent += text;
    }
  }
  
  // Пример использования:
  // Предположим, у нас есть следующие элементы
  // <p class="elem">text1</p>
  // <p class="elem">text2</p>
  // <p class="elem">text3</p>
  
  // Добавим к тексту каждого элемента ".elem" дополнительный текст:
  appendText('.elem', ' additional text');
  
task Ex457
papka 1
// HTML-разметка
<p class="elem">1</p>
<p class="elem">2</p>
<p class="elem">3</p>
<p class="elem">4</p>
<p class="elem">5</p>

// JavaScript-код
forEach('.elem', function(elem) {
  elem.textContent += '!';
});
<p class="elem">1!</p>
<p class="elem">2!</p>
<p class="elem">3!</p>
<p class="elem">4!</p>
<p class="elem">5!</p>

task Ex458
papka 1
// HTML-разметка
<p class="elem">1</p>
<p class="elem">2</p>
<p class="elem">3</p>
<p class="elem">4</p>
<p class="elem">5</p>

// JavaScript-код
forEach('.elem', function(elem, index) {
  elem.textContent = index + 1 + elem.textContent;
});
<p class="elem">1.1</p>
<p class="elem">2.2</p>
<p class="elem">3.3</p>
<p class="elem">4.4</p>
<p class="elem">5.5</p>

task Ex459
papka 1
// Задача №2
function appendText(elem, text) {
    elem.textContent += text;
  }
  
  // HTML-разметка
  <p id="elem1"></p>
  <p id="elem2"></p>
  
  // Получаем ссылки на элементы
  let elem1 = document.getElementById('elem1');
  let elem2 = document.getElementById('elem2');
  
  // Добавляем '!' в конец текста каждого абзаца
  appendText(elem1, '!');
  appendText(elem2, '!');
  
  // Задача №3
  function setValue(input, text) {
    input.value = text;
  }
  
  // HTML-разметка
  <input type="text" id="inputElem" />
  
  // Получаем ссылку на инпут
  let inputElem = document.getElementById('inputElem');
  
  // Устанавливаем текст в value инпута
  setValue(inputElem, 'Новый текст');
  
task Ex460
papka 1
// Задача №2
function appendText(elems, text) {
    for (let elem of elems) {
      elem.textContent += text;
    }
  }
  
  // HTML-разметка
  <p class="elem"></p>
  <p class="elem"></p>
  <p class="elem"></p>
  <p class="elem"></p>
  <p class="elem"></p>
  
  // Получаем ссылки на элементы
  let elems = document.querySelectorAll('.elem');
  
  // Добавляем '!' в конец текста каждого абзаца
  appendText(elems, '!');
  
  // Задача №3
  function appendElem(ul, text) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }
  
  // HTML-разметка
  <ul id="myList"></ul>
  
  // Получаем ссылку на ul
  let myList = document.getElementById('myList');
  
  // Добавляем новую li с текстом в конец ul
  appendElem(myList, 'Новый элемент');
  
  // Задача №4
  function appendArrayToUl(ul, array) {
    for (let item of array) {
      appendElem(ul, item);
    }
  }
  
  // HTML-разметка
  <ul id="myList"></ul>
  
  // Получаем ссылку на ul
  let myList = document.getElementById('myList');
  
  // Записываем каждый элемент массива в отдельную li в ul
  let myArray = ['Item 1', 'Item 2', 'Item 3'];
  appendArrayToUl(myList, myArray);
task Ex461
papka 1
function createTable(rows, cols, parent) {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
        }
    }

    parent.appendChild(table);
}

// Пример использования
let div = document.querySelector('#elem');
createTable(3, 4, div);

task Ex462
papka 1  
function createTable(rows, cols) {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
        }
    }

    return table;
}

// Пример использования
let div = document.querySelector('#elem');
div.appendChild(createTable(3, 4));

task Ex463
papka 1
function createTableByArr(arr) {
    let table = document.createElement('table');

    for (let row of arr) {
        let tr = table.insertRow();

        for (let cellData of row) {
            let td = tr.insertCell();
            td.textContent = cellData;
        }
    }

    return table;
}

// Пример использования
let div = document.querySelector('#elem');
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let table = createTableByArr(arr);
div.appendChild(table);

task Ex464
papka 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Module Example</title>
</head>
<body>

<input type="number" id="input1" placeholder="Enter number 1">
<input type="number" id="input2" placeholder="Enter number 2">
<input type="number" id="input3" placeholder="Enter number 3">
<button id="calculateBtn">Calculate Sum</button>

<script>
  ;(function(selector1, selector2, selector3, btnSelector) {
    let input1 = document.querySelector(selector1);
    let input2 = document.querySelector(selector2);
    let input3 = document.querySelector(selector3);
    let calculateBtn = document.querySelector(btnSelector);

    function calculateSum(num1, num2, num3) {
      return num1 + num2 + num3;
    }

    calculateBtn.addEventListener('click', function() {
      const num1 = parseInt(input1.value) || 0;
      const num2 = parseInt(input2.value) || 0;
      const num3 = parseInt(input3.value) || 0;

      const sum = calculateSum(num1, num2, num3);
      console.log('Sum:', sum);
    });
  })('#input1', '#input2', '#input3', '#calculateBtn');
</script>

</body>
</html>

task Ex465
papka 1
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}

	// Экспорт переменной и функций
	window.exportedStr = str1;
	window.exportedFunc1 = func1;
	window.exportedFunc2 = func2;
})();

console.log(exportedStr); // выведет 'переменная модуля'

exportedFunc1(); // выведет 'функция модуля'
exportedFunc2(); // выведет 'функция модуля'

task Ex466
papka 1
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
	function func4() {
		alert('функция модуля');
	}
	function func5() {
		alert('функция модуля');
	}

	// Экспорт объекта с переменными и функциями
	window.exportedObject = {
		variables: {
			str1: str1,
			str2: str2
		},
		functions: {
			func1: func1,
			func2: func2,
			func3: func3,
			func4: func4,
			func5: func5
		}
	};
})();

task Ex467
papka 1
;(function() {
	function avg1(arr) {
		return sum(arr, 1) / arr.length;
	}

	function avg2(arr) {
		return sum(arr, 2) / arr.length;
	}

	function avg3(arr) {
		return sum(arr, 3) / arr.length;
	}

	// вспомогательная функция
	function sum(arr, pow) {
		let res = 0;
		
		for (let elem of arr) {
			res += elem ** pow;
		}
		
		return res;
	}

	window.myLibrary = { avg1, avg2, avg3 };
})();
<html>
	<head>
		<script src="myLibrary.js"></script>
		<script>
			alert(myLibrary.avg1([1, 2, 3]) + myLibrary.avg2([2, 4, 6]) + myLibrary.avg3([1, 3, 5]));
		</script>
	</head>
</html>
;(function() {
	function map(collection, iteratee) {
		const result = [];
		for (let item of collection) {
			result.push(iteratee(item));
		}
		return result;
	}

	window.myUnderscore = { map };
})();