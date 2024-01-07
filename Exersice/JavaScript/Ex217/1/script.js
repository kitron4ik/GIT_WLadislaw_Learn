// Именованное функциональное выражение
let test = function func() {
    console.log(func); // функция выведет свой же исходный код
};

test(); // вызываем функцию

// Вызов функции внутри нее самой
test = function func() {
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

