// Выведет 2, так как переменная num была изменена до вызова функции func.
let num = 1;

function func() {
    console.log(num);
}

num = 2;
func();
