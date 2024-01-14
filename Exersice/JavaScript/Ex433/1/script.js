let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function() {
  let clone = input.cloneNode(true);
  document.body.appendChild(clone);
});

