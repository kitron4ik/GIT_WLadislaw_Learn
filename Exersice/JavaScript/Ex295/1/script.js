// Функция для проверки корректности даты
function checkDate(year, month, day) {
    let date = new Date(year, month, day);
  
    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  }
  
  // Пример использования функции для 31 января и 32 января
  console.log(checkDate(2025, 0, 31)); // выведет true
  console.log(checkDate(2025, 0, 32)); // выведет false
  
