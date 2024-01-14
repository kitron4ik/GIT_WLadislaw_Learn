let i = 0;

function timer() {
  setTimeout(function() {
    console.log(i++);
    timer();
  }, 1000);
}

timer();

