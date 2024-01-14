// Задание 1
let ol = document.querySelector('ol');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let li = document.createElement('li');
  ol.appendChild(li);

  li.addEventListener('click', function() {
    this.textContent += '!';
  });
});

