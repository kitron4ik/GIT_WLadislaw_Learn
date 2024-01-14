// Задание 1
let ul = document.querySelector('ul');

for (let i = 1; i <= 10; i++) {
  let li = document.createElement('li');
  li.textContent = i.toString();
  ul.appendChild(li);
}

