// Function Declaration доступна выше своего объявления
funcDeclaration(); // выведет '!'
function funcDeclaration() {
    console.log('!');
}

// Function Expression не доступна выше своего объявления
try {
    funcExpression(); // ошибка, такой функции еще нет
} catch (error) {
    console.error(error.message);
}
let funcExpression = function() {
    console.log('!');
};

