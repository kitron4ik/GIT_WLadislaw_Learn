// Функция для определения, является ли год високосным
function isLeap(year) {
    let leapYear = new Date(year, 1, 29);
    return leapYear.getDate() === 29;
  }
  
  // Пример использования функции для определения високосного года
  let yearToCheck = 2020;
  if (isLeap(yearToCheck)) {
    console.log(`${yearToCheck} год - високосный`);
  } else {
    console.log(`${yearToCheck} год - обычный`);
  }
  
