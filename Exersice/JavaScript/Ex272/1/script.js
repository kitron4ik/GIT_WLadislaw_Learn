// Функция, находящая сумму чисел с помощью операторов rest и spread в JavaScript

// Пример 1
function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

let result = func(1, 2, 3);
console.log(result); // выведет 6

// Пример 2
function average(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum / nums.length;
}

console.log(average(1, 2, 3));      // выведет 2
console.log(average(1, 2, 3, 4));   // выведет 2.5
console.log(average(1, 2, 3, 4, 5)); // выведет 3

