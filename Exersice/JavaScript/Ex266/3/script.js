// findLast: Дан массив объектов. Найдите последний объект с определенным значением свойства.

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 2, name: 'Alice' }
];

let lastUser = users.findLast(function(person) {
    return person.id === 2;
});

console.log(lastUser);

