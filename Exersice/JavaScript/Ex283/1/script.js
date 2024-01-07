function func([name, surname, department, position, salary]) {
    // Деструктуризация параметра employee
    console.log(name);       // выведет 'John'
    console.log(surname);    // выведет 'Smit'
    console.log(department); // выведет 'development'
    console.log(position);   // выведет 'programmer'
    console.log(salary);     // выведет 2000
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

