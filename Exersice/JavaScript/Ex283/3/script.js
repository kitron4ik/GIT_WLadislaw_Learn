function func([name, surname, department], position = 'джуниор') {
    // Деструктуризация параметра employee и значение по умолчанию для position
    console.log(name);       // выведет 'John'
    console.log(surname);    // выведет 'Smit'
    console.log(department); // выведет 'development'
    console.log(position);   // выведет 'джуниор'
}

func(['John', 'Smit', 'development']);

