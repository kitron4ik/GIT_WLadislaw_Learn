let date = new Date();

console.log(
  addZero(date.getHours()) + ':' +
  addZero(date.getMinutes()) + ':' +
  addZero(date.getSeconds()) + ' ' +
  addZero(date.getDate()) + '.' +
  addZero(date.getMonth() + 1) + '.' + // Добавляем 1, так как месяцы начинаются с 0
  date.getFullYear()
);
