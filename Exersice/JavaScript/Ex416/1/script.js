<button id="start">Start</button>
let startButton = document.getElementById('start');

startButton.addEventListener('click', function() {
  let count = 100;

  let timerId = setInterval(() => {
    console.log(count);

    if (count === 0) {
      clearInterval(timerId);
    }
    count--;
  }, 1000);
});

