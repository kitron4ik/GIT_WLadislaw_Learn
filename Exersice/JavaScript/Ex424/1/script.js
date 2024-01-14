// Задание 1
let ol = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
ol.appendChild(li);

// Задание 2
let ol2 = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function() {
  let li2 = document.createElement('li');
  li2.textContent = 'item';
  ol2.appendChild(li2);
});

