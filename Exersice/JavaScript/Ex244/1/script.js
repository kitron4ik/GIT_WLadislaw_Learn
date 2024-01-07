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

