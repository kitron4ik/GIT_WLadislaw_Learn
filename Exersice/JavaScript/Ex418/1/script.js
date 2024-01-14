

// Задача 1
let startButton1 = document.getElementById('start1');
let stopButton1 = document.getElementById('stop1');
let timerId1;

startButton1.addEventListener('click', function () {
  let count1 = 100;
  timerId1 = setInterval(function () {
    console.log(count1);
    if (count1 === 0) {
      clearInterval(timerId1);
      startButton1.addEventListener('click', startTimer1);
    }
    count1--;
  }, 1000);

  startButton1.removeEventListener('click', startTimer1);
});

stopButton1.addEventListener('click', function () {
  clearInterval(timerId1);
});

// Задача 2
let startButton2 = document.getElementById('start2');
let stopButton2 = document.getElementById('stop2');
let timerId2;

startButton2.addEventListener('click', function () {
  timerId2 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton2.addEventListener('click', function () {
  clearInterval(timerId2);
});

// Задача 3
let startButton3 = document.getElementById('start3');
let stopButton3 = document.getElementById('stop3');

startButton3.addEventListener('click', function () {
  let timerId3 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton3.addEventListener('click', function () {
  clearInterval(timerId3);
});

// Задача 4
let startButton4 = document.getElementById('start4');
let stopButton4 = document.getElementById('stop4');
let timerId4;

startButton4.addEventListener('click', function () {
  timerId4 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton4.addEventListener('click', function () {
  clearInterval(timerId4);
});

// Задача 5
let startButton5 = document.getElementById('start5');
let stopButton5 = document.getElementById('stop5');
let timerId5;

startButton5.addEventListener('click', function () {
  timerId5 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton5.addEventListener('click', function () {
  clearInterval(timerId5);
});

// Задача 6
let startButton6 = document.getElementById('start6');
let stopButton6 = document.getElementById('stop6');
let timerId6;

startButton6.addEventListener('click', function () {
  timerId6 = setInterval(function () {
    let date = new Date();
    console.log(date.getMinutes() + ' ' + date.getSeconds());
  }, 1000);
});

stopButton6.addEventListener('click', function () {
  clearInterval(timerId6);
});

