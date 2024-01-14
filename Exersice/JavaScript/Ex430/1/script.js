// Задача 1
let parent = document.getElementById('parent');
let elem = document.getElementById('elem');

// Создаем новый элемент
let newElement = document.createElement('li');
newElement.textContent = 'new';

// Вставляем перед элементом #elem
parent.insertBefore(newElement, elem);

// Задача 2
newElement.addEventListener('click', function() {
  // Добавляем '!' в конец текста
  this.textContent += '!';
});

