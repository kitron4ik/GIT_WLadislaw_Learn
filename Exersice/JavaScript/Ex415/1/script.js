let count = 10;

let timerId = setInterval(() => {
  console.log(count);
  if (count === 0) {
    clearInterval(timerId);
  }
  count--;
}, 1000);

