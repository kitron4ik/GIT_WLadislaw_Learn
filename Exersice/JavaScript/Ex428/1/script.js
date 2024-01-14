// Задание 1
let lis = document.querySelectorAll('li');

for (let li of lis) {
  li.addEventListener('click', function() {
    li.remove();
  });
}
