// Задача 1
let elem = document.getElementById('elem');
let newParagraph = document.createElement('p');
newParagraph.textContent = '!!!';
elem.insertAdjacentElement('beforebegin', newParagraph);

// Задача 2
let newParagraph2 = document.createElement('p');
newParagraph2.textContent = '!!!';
elem.insertAdjacentElement('afterend', newParagraph2);

// Задача 3
let newParagraph3 = document.createElement('p');
newParagraph3.textContent = '!!!';
elem.insertAdjacentElement('afterbegin', newParagraph3);

// Задача 4
let newParagraph4 = document.createElement('p');
newParagraph4.textContent = '!!!';
elem.insertAdjacentElement('beforeend', newParagraph4);

