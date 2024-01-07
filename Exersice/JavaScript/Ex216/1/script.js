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

