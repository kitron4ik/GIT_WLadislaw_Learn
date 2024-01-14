// Задача 1
let elem1 = document.querySelector('#elem');

elem1.addEventListener('click', function() {
  let self = this;

  setInterval(function() {
    self.value = Number(self.value) + 1;
  }, 1000);
});

// Задача 2
let elem2 = document.querySelector('#elem');

elem2.addEventListener('click', function() {
  let self = this;

  setInterval(function() {
    self.value = Number(self.value) + 1;
  }, 1000);
});

