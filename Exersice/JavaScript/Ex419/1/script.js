// Задача 1
let elem1 = document.querySelector('#elem');

setInterval(function() {
  elem1.value = Number(elem1.value) + 1;
}, 1000);

// Задача 2
let elem2 = document.querySelector('#elem');

setInterval(function() {
  elem2.value = Number(elem2.value) - 1;
}, 1000);

// Задача 3
let elem3 = document.querySelector('#elem');

let timerId = setInterval(function() {
  elem3.value = Number(elem3.value) - 1;
  if (elem3.value === '0') {
    clearInterval(timerId);
  }
}, 1000);

