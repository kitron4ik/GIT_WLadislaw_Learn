// №1
let ul = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;
  ul.appendChild(li);
}

// №2
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert(event.target.textContent);
  }
});

// №3
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.textContent += '!';
  }
});

// №4
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI' && !event.target.hasAttribute('clicked')) {
    event.target.textContent += '!';
    event.target.setAttribute('clicked', 'true');
  }
});

