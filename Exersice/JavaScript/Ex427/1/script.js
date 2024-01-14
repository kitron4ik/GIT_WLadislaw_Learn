// Задание 1
let div = document.querySelector('div');
let paragraph = document.querySelector('p');

for (let i = 1; i <= 5; i++) {
  let input = document.createElement('input');
  
  // Навешиваем обработчик потери фокуса:
  input.addEventListener('blur', function() {
    paragraph.textContent = this.value;
  });

  div.appendChild(input);
}

