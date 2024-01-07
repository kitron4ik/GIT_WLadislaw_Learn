// find: Дан массив объектов. Найдите объект с определенным значением свойства.

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

let user = users.find(function(person) {
    return person.id === 2;
});

console.log(user);

