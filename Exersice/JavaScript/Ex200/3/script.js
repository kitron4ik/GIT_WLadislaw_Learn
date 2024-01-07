// Выведет 1 и 2, так как переменная num меняется и доступна внутри функции func.
function func() {
    console.log(num);
}

let num;

num = 1;
func();

num = 2;
func();
