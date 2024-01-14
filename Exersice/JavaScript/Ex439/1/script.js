// №1
let table1 = document.querySelector('#table');
let counter1 = 1;

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = counter1++;
    tr.appendChild(td);
  }
  
  table1.appendChild(tr);
}

// №2
let table2 = document.querySelector('#table');
let counter2 = 2;

for (let i = 0; i < 5; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = counter2;
    counter2 += 2;
    tr.appendChild(td);
  }
  
  table2.appendChild(tr);
}

