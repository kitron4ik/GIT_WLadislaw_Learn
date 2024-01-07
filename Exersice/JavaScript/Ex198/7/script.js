// Ошибка: функция add возвращает undefined для чисел больше 9.
// Исправление: Добавим return num.toString(); в конце функции.

function add(num) {
    if (num <= 9) {
        return '0' + num;
    }

    return num.toString();
}

