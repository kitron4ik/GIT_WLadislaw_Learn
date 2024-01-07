// Определение типа функции в JavaScript

// Function Expression, невозможно вызвать до определения
let test = function func() {
    console.log('!');
};
// test(); // вызовет ошибку, так как Function Expression

// Function Declaration, можно вызвать до определения
function func() {
    console.log('!');
}
// func(); // вызовет '!', так как Function Declaration

// Function Expression, невозможно вызвать по имени
console.log(
    function func() {
        console.log('!');
    }
);

// Function Expression, невозможно вызвать по имени
+function func() {
    console.log('!');
}

// Function Declaration, можно вызвать до определения
function func() {
    console.log('!');
}
// func(); // вызовет '!', так как Function Declaration

