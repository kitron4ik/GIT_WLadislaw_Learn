function func({ color, width, height }) {
    // Деструктуризация параметра options
    console.log(color);  // выведет 'red'
    console.log(width);  // выведет 400
    console.log(height); // выведет 500
}

func({ color: 'red', width: 400, height: 500 });
