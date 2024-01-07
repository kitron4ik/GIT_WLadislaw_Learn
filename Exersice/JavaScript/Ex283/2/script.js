function func([name, surname, info]) {
    // Деструктуризация параметра employee
    console.log(name);    // выведет 'John'
    console.log(surname); // выведет 'Smit'
    console.log(info);    // выведет 'development'
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

