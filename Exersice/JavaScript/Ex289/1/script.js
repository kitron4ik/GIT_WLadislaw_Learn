// Получаем текущий момент времени в формате timestamp
let currentDate = new Date();
console.log(`Текущий timestamp: ${currentDate.getTime()}`);

// Получаем timestamp для 1 января 2025 года
let specificDate = new Date(2025, 0, 1); // Месяцы в JavaScript начинаются с 0 (январь - 0)
console.log(`Timestamp для 1 января 2025 года: ${specificDate.getTime()}`);

