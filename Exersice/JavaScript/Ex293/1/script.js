// Функция для определения последнего дня месяца
function getLastDayOfMonth(year, month) {
    // Используем нулевой день следующего месяца
    let lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  }
  
  // Пример использования функции для марта 2020 года
  let daysInMarch2020 = getLastDayOfMonth(2020, 2);
  console.log(`Количество дней в марте 2020 года: ${daysInMarch2020}`);
  
  // Определение дня недели для последнего дня пятого месяца 2025 года
  let lastDayOfMay2025 = getLastDayOfMonth(2025, 4);
  let dayOfWeek = new Date(2025, 4, lastDayOfMay2025).getDay();
  let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
  console.log(`День недели для последнего дня мая 2025 года: ${daysOfWeek[dayOfWeek]}`);
  
