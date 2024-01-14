// №1
let table1 = document.querySelector('#table');

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table1.appendChild(tr);
}

// №2
let table2 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table2.appendChild(tr);
}

// №3
let table3 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = 'x';
    tr.appendChild(td);
  }
  
  table3.appendChild(tr);
}

// №4
let widthInput = document.getElementById('widthInput');
let heightInput = document.getElementById('heightInput');
let table4 = document.querySelector('#table');

for (let i = 0; i < heightInput.value; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < widthInput.value; j++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
  
  table4.appendChild(tr);
}

