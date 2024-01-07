task Ex201
papka 1
function func() {
    let num = 5;
    return num;
}

console.log(num);

papka 2
function func() {
    let num = 5;
    return num;
}

console.log(func());

task Ex202
papka 1
let num = 1;

function func() {
    num = 2;
}
func();

console.log(num);

papka 2
let num = 1;

function func() {
    let num = 2;
}
func();

console.log(num);

task Ex203
papka 1
let num = 1;

function func() {
    num = 2;
}
func();

console.log(num);

papka 2
let num = 1;

function func() {
    num = 2;
}

console.log(num);

papka 3
let num = 1;

function func() {
    let num = 2;
}
func();

console.log(num);

papka 4
let num = 1;

function func() {
    let num = 2;
}

console.log(num);
func();

papka 5
let num = 1;

function func() {
    num = 2;
}

console.log(num);
func();

papka 6
let num = 1;

function func() {
    num++;
}

func();
func();
func();
console.log(num);

papka 7
function func() {
    num = 2;
}

let num = 1;
console.log(num);
func();

papka 8
function func() {
    num = 2;
}

let num = 1;
func();
console.log(num);

task Ex204
papka 1
function func(localNum) {
    console.log(localNum);
}

func(1);

papka 2
function func(localNum) {
    console.log(localNum);
}

let num = 1;
func(num);

papka 3
function func(localNum) {
    console.log(localNum);
}

let num = 1;
func(num);
num = 2;

papka 4
let num = 1;

function func(localNum) {
    console.log(localNum);
}

num = 2;
func(num);

papka 5
function func(localNum) {
    localNum = 2;
}

let num = 1;
func(num);
console.log(num);

papka 6
function func(localNum) {
    num = 2;
}

let num = 1;
func(num);
console.log(num);

papka 7
function func(localNum) {
    let num = 2;
}

let num = 1;
func(num);
console.log(num);

task Ex205
papka 1
function func(num) {
    num = 2;
}

let num = 1;
func(num);
console.log(num);

papka 2
function func() {
    num = 2;
}

let num = 1;
func();
console.log(num);

papka 3
function func() {
    let num = 2;
}

let num = 1;
func();
console.log(num);

task Ex206
papka 1
function func(obj) {
    obj.a = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj);
console.log(obj);

papka 2

function func(arg) {
    arg = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj);

papka 3
function func(obj) {
    obj = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj);

papka 4
function func(arr) {
    arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

papka 5
function func(arr) {
    arr.slice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

papka 6
function func(arr) {
    let newArr = arr;
    newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);

task Ex207
papka 1
function func() {
    return '!';
}

console.log(func());
console.log(func); 

task Ex208
papka 1
function func() {
    return 'Hello, world!';
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

task Ex209
papka 1
function func1() {
    return 3;
}
let func2 = func1;
console.log(func1() + func2());

task Ex210
papka 1
let func1 = function() {
    return 1;
};
let func2 = function() {
    return 2;
};
console.log(func1() + func2());

task Ex211
papka 1
function func() {
    return '!';
}

func = 'string';

task Ex212
papka 1

function funcDeclaration() {
    console.log('!');
}
funcDeclaration(); 


let funcExpression = function() {
    console.log('!');
};
funcExpression(); 

task Ex213
papka 1

funcDeclaration(); 
function funcDeclaration() {
    console.log('!');
}


try {
    funcExpression(); 
} catch (error) {
    console.error(error.message);
}
let funcExpression = function() {
    console.log('!');
};

task Ex214
papka 1
let func1 = function() {
    console.log('!');
};
let func2 = function() {
    console.log('!');
};
function func3() {
    console.log('!');
}

task Ex215
papka 1



function func() {
    console.log('!');
}


let func = function() {
    console.log('!');
};


+function() {
    console.log('!');
};


!function func() {
    console.log('!');
};


-function func() {
    console.log('!');
};


1 + function func() {
    console.log('!');
};


(function func() {
    console.log('!');
});


console.log(
    function() {
        console.log('!');
    }
);

task Ex216
papka 1

+function func() {
    console.log('!');
}


func(); 


let test = function func() {
    console.log('!');
};


test(); 

task Ex217
papka 1

let test = function func() {
    console.log(func); 
};

test(); 


let test = function func() {
    console.log('!'); 
    func(); 
};

test(); 


test = 'something';
func(); 


let namedFunc = function anotherFunc() {
    console.log(anotherFunc); 
};

namedFunc(); 

task Ex218
papka 1



let test = function func() {
    console.log('!');
};



function func() {
    console.log('!');
}



console.log(
    function func() {
        console.log('!');
    }
);


+function func() {
    console.log('!');
}


function func() {
    console.log('!');
}


task Ex219
papka 1



function func() {
    console.log('!');
}


-1;
function func() {
    console.log('!');
}


-1
function func() {
    console.log('!');
}


1
function func() {
    console.log('!');
}


-1-
function func() {
    console.log('!');
}

task Ex220
papka 1
function func() {
    console.log('!');
} + 1;


function func() {
    console.log('!');
} + 1;


+function func() {
    console.log('!');
} + 1;


+function func() {
    console.log('!');
} + 1;


+1
function func() {
    console.log('!');
} + 1;


function func() {
    console.log('!');
} + console.log('!');

task Ex221


papka 1
let arr = [
    function() { return 1; },
    function() { return 2; },
    function() { return 3; },
];

papka 2
console.log(arr[2]() + " (using array)"); 

papka 3
let sum = arr[0]() + arr[1]() + arr[2]();
console.log(sum + " (sum of results)"); 

papka 4
for (let func of arr) {
    console.log(func()); 
}

task Ex222


papka 1
let obj = {
    func1: function() { return 1; },
    func2: function() { return 2; },
    func3: function() { return 3; },
};

let sum = obj.func1() + obj.func2() + obj.func3();
console.log(sum + " (sum of results)"); 

papka 2
for (let key in obj) {
    console.log(obj[key]()); 
}

task Ex223


papka 1
let mathOperations = {
    sum: function(numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    },
    sumOfSquares: function(numbers) {
        return numbers.reduce((acc, num) => acc + num * num, 0);
    },
    sumOfCubes: function(numbers) {
        return numbers.reduce((acc, num) => acc + num * num * num, 0);
    },
};


let numbersArray = [1, 2, 3, 4, 5];

console.log(mathOperations.sum(numbersArray)); 
console.log(mathOperations.sumOfSquares(numbersArray)); 
console.log(mathOperations.sumOfCubes(numbersArray)); 

task Ex224
papka 1
function test(func) {
    
    console.log(func(3));
}


test(function(num) {
    return num * num * num;
});


test(func);

function func(num) {
    return num * num * num;
}


test(func);

var func = function(num) {
    return num * num * num;
};


test(function(num1, num2) {
    alert(num1 + num2);
});

task Ex225
papka 1
function test(num, func1, func2) {
    
    return func1(num) + func2(num);
}


console.log(test(2,
    function(num) {
        return num * num; 
    },
    function(num) {
        return num * num * num; 
    }
));


console.log(test(3,
    function(num) {
        return num * num; 
    },
    function(num) {
        return num * num * num; 
    }
));

task Ex226
papka 1

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}


let result = test([1, 2, 3], function(num) {
    return num * num;
});

console.log(result); 


let resultCubes = test([2, 3, 4], function(num) {
    return num * num * num;
});

console.log(resultCubes); 

task Ex227
papka 1

function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    function cube(num) {
        return num * num * num;
    }

    return square(num1) + cube(num2);
}


console.log(func(2, 3)); 

task Ex228
papka 1

function test() {
    let num = 1;

    function func() {
        console.log(num);
    }

    func();
}

test();



papka 2

function test() {
    let num = 1;

    function func() {
        console.log(num);
    }
}

test();


papka 3

function test() {
    let num = 1;

    function func() {
        console.log(num);
    }

    func();
}


papka 4

function test() {
    let num;

    function func() {
        console.log(num);
    }

    num = 1
    func();

    num = 2
    func();
}

test();



task Ex229
papka 1

function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    func();
}

test(1, 2);


papka 2

function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    num1 = 2;
    func();
}

test(1, 2);


task Ex230
papka 1

function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num);
}

test(1);

papka 2

function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num + 1);
}

test(1);

papka 3

function test(num) {
    function func(localNum) {
        console.log(num);
    }

    func(num + 1);
}

test(1);

papka 4

function test(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    console.log(num);
}

test(1);

papka 5

function test(num) {
    function func(localNum) {
        localNum = 2;
    }

    func(num);
    console.log(localNum);
}

test(1);

papka 6

function test(num) {
    function func(localNum) {
        num = 2;
    }

    func(num);
    console.log(num);
}

test(1);

task Ex231
papka 1

function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
}

test(1);



papka 2

function test(num) {
    function func(num) {
        num = 2;
    }

    func(num);
    console.log(num);
}

test(1);



papka 3

function test(num) {
    function func(num) {
        console.log(num);
    }

    num = 2;
    func(num);
}

test(1);

papka 4

function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
    num = 2;
}

test(1);



task Ex232
papka 1

function func1() {
    return function() {
        return 1;
    };
}


function func2() {
    return function() {
        return 2;
    };
}


let sumResult = func1()() + func2()();


console.log(sumResult); 

task Ex233
papka 1

function func() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}


console.log(func()()()()()()); 

task Ex234
papka 1

function func1(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}


console.log(func1(2)(3)(4)); 


function func2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return [num1, num2, num3, num4];
            };
        };
    };
}


console.log(func2(2)(3)(4)(5)()); 
task Ex235
papka 1

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); 
    }

    return result;
}


let numbers = [1, 2, 3, 4, 5];
let result1 = each(numbers, function(num) {
    return num * 2;
});
console.log(result1);


let strings = ["abc", "def", "ghi"];
let result2 = each(strings, function(str) {
    return str.split("").reverse().join("");
});
console.log(result2);


let words = ["apple", "banana", "cherry"];
let result3 = each(words, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(result3);

task Ex236

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem)); 
    }

    return result;
}


function square(num) {
    return num * num;
}

let result1 = each([1, 2, 3, 4, 5], square);
console.log(result1);


function cube(num) {
    return num ** 3;
}

let result2 = each([1, 2, 3, 4, 5], cube);
console.log(result2);

task Ex237
papka 1

let func1 = function (num1, num2) {
    let result = num1 * num2;
    return result;
}

let func2 = function (num) {
    return num * num;
}

let func3 = function () {
    console.log('!!!');
}


let arrowFunc1 = (num1, num2) => {
    let result = num1 * num2;
    return result;
}

let arrowFunc2 = num => num * num;

let arrowFunc3 = () => console.log('!!!');

task Ex238
papka 1

let result = filter([1, 2, 3, 4, 5], function (elem) {
    return elem % 2 == 0;
});

let result2 = every([1, 2, 3, 4, 5], function (elem) {
    return elem > 0;
});

let result3 = every([1, 2, 3, 4, 5], function (elem, index) {
    return elem * index > 10;
});

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result4 = each(arr, function (elem, index) {
    return elem * index > 10;
});


let resultArrow = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

let result2Arrow = every([1, 2, 3, 4, 5], elem => elem > 0);

let result3Arrow = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

let result4Arrow = each(arr, (elem, index) => elem * index > 10);

task Ex239
papka 1

let num = 1;

function func() {
    console.log(num);
}

func(); 


let num = 1; 

function func() {
    console.log(num);
}

num = 2;
func(); 


let num = 1; 

function func() {
    console.log(num);
}

func(); 
num = 2;
func(); 

task Ex240
papka 1

let num1 = 1;
let num2 = 2;

function func() {
    
    
}


let num1 = 1; 
let num2 = 2; 


num1 = 123; 

function func() {
    
}

task Ex241
papka 1

function test1() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        
        return num1 + num2;
    }
}

let func1 = test1();
console.log(func1()); 


function test2() {
    let num1 = 1;
    let num2 = 2;

    return function() {
        
        return num1 + num2;
    }
}

console.log(test2()()); 


function test3() {
    let num1 = 1;

    return function() {
        
        return num1 + num2; 
    }
}

let num2 = 2;
let func3 = test3();
console.log(func3()); 


function test4() {
    let num = 1;

    return function() {
        
        return num;
    }
}

let num4 = 2;
let func4 = test4();
console.log(func4()); 

task Ex242
papka 1

function outerFunction() {
    let outerVar = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

let closureExample1 = outerFunction();
closureExample1(); 


function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let increment = counter();
increment(); 
increment(); 


function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
console.log(double(5)); 

let triple = createMultiplier(3);
console.log(triple(5)); 

task Ex243
papka 1
function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = createCounter();

counter(); 
counter(); 
counter(); 

papka 2
function createDecreasingCounter() {
    let number = 10;

    return function() {
        number--;
        console.log(number);
    };
}

let decreasingCounter = createDecreasingCounter();

decreasingCounter(); 
decreasingCounter(); 
decreasingCounter(); 

papka 3
function createLimitedCounter() {
    let number = 10;

    return function() {
        if (number > 0) {
            number--;
            console.log(number);
        } else {
            console.log('Отсчет окончен');
        }
    };
}

let limitedCounter = createLimitedCounter();

limitedCounter(); 
limitedCounter(); 

limitedCounter(); 
limitedCounter(); 
limitedCounter(); 

task Ex244
papka 1
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

func()(); 
func()(); 
func()(); 

papka 2
function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

let test = func;

test()(); 
test()(); 
test()(); 

task Ex245
papka 1
let counter = 0;

function test() {
    return function() {
        console.log(counter);
        counter++;
    };
}

let func = test;

let func1 = func();
let func2 = func();
func1(); 
func2(); 
func1(); 
func2(); 

papka 2
function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test()();

let func1 = func;
let func2 = func;
func1(); 
func2(); 
func1(); 
func2(); 

papka 3
function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test();

let func1 = func();
let func2 = func();
func1(); 
func2(); 
func1(); 
func2(); 

task Ex246
papka 1
!function() {
    console.log('!');
}();
papka 2
+function() {
    console.log('!');
}();

task Ex247
papka 1
let result = function() {
    return '!';
}();

console.log(result);

papka 2
let result = function() {
    return '!';
};

console.log(result);

papka 3
let result = function() {
    return '!';
};

console.log(result());

task Ex248
papka 1
let result = function() { return 1; }() + function() { return 2; }();
console.log(result);


task Ex250
papka 1
(function(num1, num2) {
    console.log(num1 + num2);
})(1, 2);

task Ex251
papka 1
(function() {
    return function() {
        console.log('!');
    };
})()()();
papka 2
(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    };
})(1)(2);
papka 3
(function(num1) {
    return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3);
        };
    };
})(1)(2)(3);
task Ex252
papka 1

let result1 = 1
+function() {
    return 2;
}();

console.log(result1); 


let result2 = 1;
+function() {
    return 2;
}();

console.log(result2); 

task Ex253
papka 1

let str1 = 'str';

(function() {
    console.log(1);
})();


let str2 = 'str'

;(function() {
    console.log(1);
})();

task Ex254
papka 1

let counter1 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter1(); 
counter1(); 
counter1(); 



let counter2 = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num++;
    }
})();

counter2(); 
counter2(); 
counter2(); 


papka 2

let limitedCounter = (function() {
    let num = 1;
    
    return function() {
        console.log(num);
        num = (num % 5) + 1;
    }
})();

limitedCounter(); 
limitedCounter(); 
limitedCounter(); 
limitedCounter(); 
limitedCounter(); 
limitedCounter(); 


task Ex255
papka 1
let i = 1;

function func() {
    console.log(i);
    i++;

    if (i <= 10) {
        func(); 
    }
}

func();

task Ex256
papka 1

function func(arr) {
    console.log(arr.shift()); 
    console.log(arr); 

    console.log(arr.shift()); 
    console.log(arr); 

    console.log(arr.shift()); 
    console.log(arr); 
}

func([1, 2, 3]);


function funcRecursive(arr) {
    console.log(arr.shift(), arr);

    if (arr.length !== 0) {
        funcRecursive(arr);
    }
}

funcRecursive([1, 2, 3]);


let arr = [1, 2, 3, 4, 5];

function printArrayElements(arr) {
    console.log(arr.shift());

    if (arr.length !== 0) {
        printArrayElements(arr);
    }
}

printArrayElements(arr);

task Ex257
papka 1

function getSum(arr) {
    let sum = arr.shift();

    if (arr.length !== 0) {
        sum += getSum(arr);
    }

    return sum;
}

console.log(getSum([1, 2, 3]));


let arr = [1, 2, 3, 4, 5];

function getSumOfSquares(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const square = arr.shift() ** 2;

    return square + getSumOfSquares(arr);
}

console.log(getSumOfSquares(arr));

task Ex258
papka 1

function printPrimitives(arr) {
    for (let elem of arr) {
        if (typeof elem === 'object') {
            
            printPrimitives(elem);
        } else {
            
            console.log(elem);
        }
    }
}


printPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
printPrimitives(Object.values(obj));


function flattenArray(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr), []);
}

let nestedArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let flatArray = flattenArray(nestedArray);
console.log(flatArray);

task Ex259
papka 1

function sumOfPrimitives(arr) {
    let sum = 0;
    for (let elem of arr) {
        if (typeof elem === 'object') {
            sum += sumOfPrimitives(elem);
        } else {
            sum += elem;
        }
    }
    return sum;
}


console.log(sumOfPrimitives([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(sumOfPrimitives(Object.values(obj)));


function concatenateStrings(arr) {
    return arr.reduce((acc, curr) => Array.isArray(curr) ? acc + concatenateStrings(curr) : acc + curr, '');
}

let nestedStringsArray = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
let concatenatedString = concatenateStrings(nestedStringsArray);
console.log(concatenatedString);

task Ex260
papka 1

function addExclamation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = addExclamation(arr[i]);
        } else {
            arr[i] = arr[i] + '!';
        }
    }
    return arr;
}


console.log(addExclamation([1, [2, 7, 8], [3, 4, [5, 6]]]));


function squareNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            arr[i] = squareNumbers(arr[i]);
        } else if (typeof arr[i] === 'number') {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}

let multidimensionalArray = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareNumbers(multidimensionalArray));

task Ex261
papka 1


let numbers = [4, 9, 16, 25];
let squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);


papka 2


let strings = ['apple', 'orange', 'banana'];
let stringsWithExclamation = strings.map(str => str + '!');
console.log(stringsWithExclamation);


papka 3


let strings = ['hello', 'world', 'javascript'];
let reversedStrings = strings.map(str => str.split('').reverse().join(''));
console.log(reversedStrings);


papka 4


let arr = ['123', '456', '789'];



let transformedArray = arr.map(str => str.split('').map(Number));
console.log(transformedArray);

papka 5


let numbers = [2, 4, 6, 8, 10];
let multipliedByIndex = numbers.map((num, index) => num * index);
console.log(multipliedByIndex);

papka 6


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

papka 7


let multidimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flattenedArray = multidimensionalArray.map(arr => arr.flat());
console.log(flattenedArray);

papka 8


let numbers = [4, 9, 16, 25];
let squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);

papka 9


let strings = ['apple', 'orange', 'banana'];
let stringsWithExclamation = strings.map(str => str + '!');
console.log(stringsWithExclamation);

papka 10


let strings = ['hello', 'world', 'javascript'];
let reversedStrings = strings.map(str => str.split('').reverse().join(''));
console.log(reversedStrings);

papka 11


let arr = ['123', '456', '789'];



let transformedArray = arr.map(str => str.split('').map(Number));
console.log(transformedArray);

papka 12


let numbers = [2, 4, 6, 8, 10];
let multipliedByIndex = numbers.map((num, index) => num * index);
console.log(multipliedByIndex);

task Ex262
papka 1


let numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

numbers.forEach(function(num) {
    sumOfSquares += num * num;
});

console.log(sumOfSquares);

task Ex263
papka 1


let numbers = [-1, 2, -3, 4, -5];
let positiveNumbers = numbers.filter(function(num) {
    return num > 0;
});

console.log(positiveNumbers);

papka 2


let numbers = [-1, 2, -3, 4, -5];
let negativeNumbers = numbers.filter(function(num) {
    return num < 0;
});

console.log(negativeNumbers);

papka 3


let numbers = [2, 5, 12, -3, 8, 0, 15];
let filteredNumbers = numbers.filter(function(num) {
    return num > 0 && num < 10;
});

console.log(filteredNumbers);

papka 4


let strings = ['apple', 'banana', 'orange', 'kiwi'];
let longStrings = strings.filter(function(str) {
    return str.length > 5;
});

console.log(longStrings);

papka 5


let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter(function(num, index) {
    return num * index < 30;
});

console.log(filteredNumbers);

papka 6


let mixedArray = [1, 2, [3, 4], 5, [6, 7]];
let flatArray = mixedArray.filter(function(elem) {
    return !Array.isArray(elem);
});

console.log(flatArray);

task Ex264
papka 1


let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log(allPositive);

papka 2


let numbers = [1, 2, 3, 4, 5];
let result = numbers.every(function(num, index) {
    return num * index < 30;
});

console.log(result);

task Ex265
papka 1


let numbers = [-2, 0, 5, -8, 10];
let hasPositive = numbers.some(function(num) {
    return num > 0;
});

console.log(hasPositive);

papka 2


let numbers = [1, 2, 3, 4, 5];
let result = numbers.some(function(num, index) {
    return num * index > 30;
});

console.log(result);

task Ex266
papka 1


let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

let user = users.find(function(person) {
    return person.id === 2;
});

console.log(user);

papka 2


let numbers = [1, 2, 3, 4, 5];

let index = numbers.findIndex(function(num) {
    return num === 3;
});

console.log(index);

papka 3


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

papka 4


let numbers = [1, 2, 3, 4, 2, 5];

let lastIndex = numbers.findLastIndex(function(num) {
    return num === 2;
});

console.log(lastIndex);

task Ex267
papka 1


let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

let sum = func(...arr);
console.log(sum);

task Ex2688

papka 1
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
    return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));

task Ex269
papka 1


let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);

console.log(min);

task Ex270


papka 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr);


papka 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);


papka 3
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

let arr = ['a', 'b', 'c', ...arr2];
console.log(arr);


papka 4
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];

let arr = [0, ...arr3];
console.log(arr);


papka 5
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);


task Ex2711


papka 1
let arr = [...'12345'];
console.log(arr);


papka 2
let arr = ['a', ...'12345'];
console.log(arr);


papka 3
let arr = [...'12345', ...'56789'];
console.log(arr);


papka 4
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];
console.log(arr2);


task Ex272
papka 1



function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

let result = func(1, 2, 3);
console.log(result); 


function average(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}

console.log(average(1, 2, 3));      
console.log(average(1, 2, 3, 4));   
console.log(average(1, 2, 3, 4, 5)); 

task Ex273
papka 1

let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr2;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);

task Ex274
papka 1
  function func2() {
    return ['John', 'Smit', 'development', 'programmer', 2000];
  }
  
  let [name, surname, department, position, salary] = func2();
  
task Ex275
papka 1

let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [ , , department, position] = arr2;

task Ex276
papka 1
let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name2, surname2, ...info2] = arr2;

console.log(name2);    
console.log(surname2); 
console.log(info2);    

task Ex277
papka 1

let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;

console.log(name);       
console.log(surname);    
console.log(department); 
console.log(position);   

task Ex278
papka 1

let arrModified = [undefined, undefined, 31]; 

function getCurrentMonth() {
    return (new Date()).getMonth() + 1; 
}

let [yearModified = (new Date()).getFullYear(), monthModified = getCurrentMonth(), dayModified] = arrModified;

console.log(yearModified); 
console.log(monthModified); 
console.log(dayModified); 

task Ex279
papka 1



let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year, month, day } = obj;

console.log(year);   
console.log(month);  
console.log(day);    


let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let color, width, height;

({ color, width, height } = options);

console.log(color);  
console.log(width);  
console.log(height); 

task Ex280
papka 1



let obj = {
    year: 2025,
    month: 12,
    day: 31,
};

let { year: y, month: m, day: d } = obj;

console.log(y); 
console.log(m); 
console.log(d); 


let options = {
    color: 'red',
    width: 400,
    height: 500,
};

let c, w, h;

({ color: c, width: w, height: h } = options);

console.log(c);  
console.log(w);  
console.log(h);  

task Ex281
papka 1



let obj = {
    month: 12,
    day: 31,
};

let { year = 2025, month, day } = obj;

console.log(year);  
console.log(month); 
console.log(day);   


let options = {
    width: 400,
    height: 500,
};

let { color = 'black', width, height } = options;

console.log(color); 
console.log(width); 
console.log(height); 

task Ex282
papka 1



let obj = {
    month: 12,
    day: 31,
};

let { year: y = 2025, month, day } = obj;

console.log(y);    
console.log(month); 
console.log(day);   


let options = {
    width: 400,
    height: 500,
};

let { color: c = 'black', width: w, height: h } = options;

console.log(c); 
console.log(w); 
console.log(h); 

task Ex283
papka 1
function func([name, surname, department, position, salary]) {
    
    console.log(name);       
    console.log(surname);    
    console.log(department); 
    console.log(position);   
    console.log(salary);     
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

papka 2
function func([name, surname, info]) {
    
    console.log(name);    
    console.log(surname); 
    console.log(info);    
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

papka 3
function func([name, surname, department], position = 'джуниор') {
    
    console.log(name);       
    console.log(surname);    
    console.log(department); 
    console.log(position);   
}

func(['John', 'Smit', 'development']);

papka 4
function func(department, [name, surname], [year, month, day]) {
    
    console.log(name);    
    console.log(surname); 
    console.log(year);    
    console.log(month);   
    console.log(day);     
}

func('development', ['John', 'Smit'], [2018, 12, 31]);

task Ex284
papka 1
function func({ color, width, height }) {
    
    console.log(color);  
    console.log(width);  
    console.log(height); 
}

func({ color: 'red', width: 400, height: 500 });
papka 2
function func(options) {
    
    let color;
    if (options.color !== undefined) {
        color = options.color;
    } else {
        color = 'black';
    }
    let width  = options.width;
    let height = options.height;
}

func({ color: 'red', width: 400, height: 500 });

task Ex285
papka 1

let date = new Date();
console.log(date.getDate());


console.log(date.getMonth() + 1); 


console.log(date.getFullYear());

task Ex286
papka 1
let date = new Date();

console.log(
  addZero(date.getHours()) + ':' +
  addZero(date.getMinutes()) + ':' +
  addZero(date.getSeconds()) + ' ' +
  addZero(date.getDate()) + '.' +
  addZero(date.getMonth() + 1) + '.' + 
  date.getFullYear()
);
task Ex287
papka 1

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res); 