// Определение функции func
function func() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}

// Вызов функции func с несколькими уровнями вложенности
console.log(func()()()()()()); // выведет '!'

