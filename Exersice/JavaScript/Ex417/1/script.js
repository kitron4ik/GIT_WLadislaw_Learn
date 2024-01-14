<button id="start">Start</button>
let startButton = document.getElementById('start');

function startTimer() {
  let count = 100;

  let timerId = setInterval(() => {
    console.log(count);

    if (count === 0) {
      clearInterval(timerId);
      startButton.addEventListener('click', startTimer);
    }
    count--;
  }, 1000);

  startButton.removeEventListener('click', startTimer);
}

startButton.addEventListener('click', startTimer);

