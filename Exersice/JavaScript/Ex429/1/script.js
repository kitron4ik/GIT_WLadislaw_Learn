let elem = document.getElementById('elem');

// Вставка в начало
let startElement = document.createElement('li');
startElement.textContent = 'start';
elem.prepend(startElement);

// Вставка в конец
let finishElement = document.createElement('li');
finishElement.textContent = 'finish';
elem.append(finishElement);

