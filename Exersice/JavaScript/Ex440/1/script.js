// №1
let employeesTable = document.getElementById('table');
let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

for (let employee of employees) {
  let tr = document.createElement('tr');
  
  let tdName = document.createElement('td');
  tdName.textContent = employee.name;
  tr.appendChild(tdName);
  
  let tdAge = document.createElement('td');
  tdAge.textContent = employee.age;
  tr.appendChild(tdAge);
  
  let tdSalary = document.createElement('td');
  tdSalary.textContent = employee.salary;
  tr.appendChild(tdSalary);
  
  employeesTable.appendChild(tr);
}

// №2
employeesTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD' && event.target.textContent == parseInt(event.target.textContent)) {
    event.target.textContent = parseInt(event.target.textContent) + 1;
  }
});

// №3
employeesTable.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD' && !isNaN(parseFloat(event.target.textContent))) {
    let currentValue = parseFloat(event.target.textContent);
    let newValue = currentValue * 1.1;
    event.target.textContent = newValue.toFixed(2);
  }
});


