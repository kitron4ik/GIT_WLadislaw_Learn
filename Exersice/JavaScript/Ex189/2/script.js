function func(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}


func(2, 3); // выведет 5
func(3);    // выведет 3
func();     // выведет 0

