function func(options) {
    // Без деструктуризации
    let color;
    if (options.color !== undefined) {
        color = options.color;
    } else {
        color = 'black';
    }
    let width  = options.width;
    let height = options.height;
}

func({ color: 'red', width: 400, height: 500 });

