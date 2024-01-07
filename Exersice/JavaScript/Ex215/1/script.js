// Все функции, которые не вызываются или не участвуют в выражении, считаются Function Declaration.

// Function Declaration
function func() {
    console.log('!');
}

// Function Expression
let func = function() {
    console.log('!');
};

// Function Expression
+function() {
    console.log('!');
};

// Function Expression
!function func() {
    console.log('!');
};

// Function Expression
-function func() {
    console.log('!');
};

// Function Expression
1 + function func() {
    console.log('!');
};

// Function Expression
(function func() {
    console.log('!');
});

// Function Expression
console.log(
    function() {
        console.log('!');
    }
);

