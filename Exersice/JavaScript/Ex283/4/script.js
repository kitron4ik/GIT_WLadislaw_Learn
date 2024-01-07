function func(department, [name, surname], [year, month, day]) {
    // Деструктуризация параметров employee и hired
    console.log(name);    // выведет 'John'
    console.log(surname); // выведет 'Smit'
    console.log(year);    // выведет 2018
    console.log(month);   // выведет 12
    console.log(day);     // выведет 31
}

func('development', ['John', 'Smit'], [2018, 12, 31]);

