// Задание 2
let parent = document.getElementById('parent');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  let lastChild = parent.lastElementChild;
  if (lastChild) {
    lastChild.remove();
  }
});

