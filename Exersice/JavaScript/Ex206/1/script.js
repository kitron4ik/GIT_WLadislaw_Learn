function func(obj) {
    obj.a = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj);
console.log(obj);


// выведет ['!', 2, 3]