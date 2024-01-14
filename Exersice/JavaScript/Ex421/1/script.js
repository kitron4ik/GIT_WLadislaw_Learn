// Задача 1
let button1 = document.getElementById('button1');
let paragraph1 = document.getElementById('paragraph1');

button1.addEventListener('click', function() {
  setInterval(function() {
    paragraph1.textContent = Number(paragraph1.textContent) + 1;
  }, 1000);
});

// Задача 2
let button2 = document.getElementById('button2');
let paragraph2 = document.getElementById('paragraph2');

button2.addEventListener('click', function() {
  let timerId = setInterval(function() {
    paragraph2.textContent = Number(paragraph2.textContent) - 1;
    if (Number(paragraph2.textContent) === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 3
let input3 = document.getElementById('input3');

setInterval(function() {
  input3.value = Math.pow(Number(input3.value), 2);
}, 1000);

// Задача 4
let input4 = document.getElementById('input4');
let countdownParagraph = document.getElementById('countdownParagraph');

input4.addEventListener('blur', function() {
  let timerId = setInterval(function() {
    countdownParagraph.textContent = Number(input4.value);
    input4.value = Number(input4.value) - 1;
    if (Number(input4.value) < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 5
let input5 = document.getElementById('input5');
let button5 = document.getElementById('button5');
let countdownParagraph5 = document.getElementById('countdownParagraph5');

button5.addEventListener('click', function() {
  countdownParagraph5.textContent = input5.value;
  let timerId = setInterval(function() {
    countdownParagraph5.textContent = Number(countdownParagraph5.textContent) - 1;
    if (Number(countdownParagraph5.textContent) < 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

// Задача 6
let paragraph6 = document.getElementById('paragraph6');
let startButton6 = document.getElementById('startButton6');
let stopButton6 = document.getElementById('stopButton6');
let timerId6;

startButton6.addEventListener('click', function() {
  let i = 1;
  timerId6 = setInterval(function() {
    paragraph6.textContent = i;
    i++;
  }, 1000);
});

stopButton6.addEventListener('click', function() {
  clearInterval(timerId6);
});

// Задача 7
let paragraph7 = document.getElementById('paragraph7');

setInterval(function() {
  let currentColor = paragraph7.style.color;
  paragraph7.style.color = currentColor === 'red' ? 'green' : 'red';
}, 1000);

// Задача 8
let clock = document.getElementById('clock');

setInterval(function() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

